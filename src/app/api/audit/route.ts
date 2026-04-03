import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { sendWebhookLead } from '@/lib/webhook';

// Simple in-memory rate limiting.
// Note: In serverless environments (like Vercel), this may reset occasionally.
// For true persistence, consider a database like Redis (Upstash) or Postgres.
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max 3 audits allowed per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes window

export async function POST(req: Request) {
    try {
        // --- Rate Limit Execution Check ---
        const ip = req.headers.get('x-forwarded-for') || 'unknown_ip';
        const now = Date.now();

        let record = rateLimit.get(ip);
        if (!record || record.resetTime < now) {
            record = { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
        }

        if (record.count >= RATE_LIMIT_MAX) {
            console.log(`Rate limit triggered for IP: ${ip}`);
            return NextResponse.json(
                { error: 'You have generated too many audits. Please try again later or contact us directly.' },
                { status: 429 }
            );
        }

        record.count++;
        rateLimit.set(ip, record);
        // --- End Rate Limit Check ---

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
        const data = await req.json();
        const {
            leadName,
            leadEmail,
            leadPhone,
            businessName,
            websiteUrl,
            location,
            primaryServices,
            targetKeywords,
            knownCompetitors,
            notes,
        } = data;

        // Send to Zapier/Make.com silently
        await sendWebhookLead({
            leadName,
            leadEmail,
            leadPhone,
            businessName,
            websiteUrl,
            location,
            primaryServices,
            targetKeywords,
            knownCompetitors,
            notes
        });

        const basePrompt = `You are the lead architect of Cognito Media Services, an elite AI systems and growth engineer. Your job is to produce a completely unique, practical, and highly strategic SEO audit for the target business, plus competitor analysis against the closest competing pages matching their profile.

DO NOT JUST REPEAT THE INPUTS BACK. Assume the user already knows what they inputted. Provide immediate insight, unique tactical adjustments, and an aggressive growth plan.

THE BUSINESS PARAMETERS ARE:
- Target Business: ${businessName}
- Lead Name: ${leadName}
- URL: ${websiteUrl}
- Operating Region: ${location}
- Service Vectors: ${primaryServices}
- Core Keywords: ${targetKeywords}
- Known Targets / Competitors: ${knownCompetitors}
- Client Notes: ${notes}

Provide a highly structured, authoritative, and actionable audit. Format your response cleanly using Markdown headings, bullet points, and bold text for readability. Avoid fluff. Focus purely on high-impact technical friction, operational bottlenecks in their current funnel, and an immediate 3-step execution plan to out-rank their targets. Maintain an elite, precise, and analytical "systems engineer" tone.`;

        // Attempt to use gemini-2.5-pro since gemini-3.1-pro-preview isn't universally publicly active
        // But we'll fallback or just use 2.5 flash if needed. For now we use the requested model pattern or standard 2.5 pro
        const modelToUse = process.env.GEMINI_MODEL || 'gemini-2.5-pro';

        const response = await ai.models.generateContent({
            model: modelToUse,
            contents: basePrompt,
            config: {
                tools: [{ googleSearch: {} }],
            }
        });

        return NextResponse.json({ result: response.text });
    } catch (error: any) {
        console.error('Audit API Error:', error);
        return NextResponse.json(
            { error: 'An unexpected internal error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
