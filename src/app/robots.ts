import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "Applebot",
          "Applebot-Extended",
          "Meta-ExternalAgent",
          "Amazonbot",
          "cohere-ai",
          "DuckAssistBot",
          "bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.demarkussday.com/sitemap.xml",
  };
}
