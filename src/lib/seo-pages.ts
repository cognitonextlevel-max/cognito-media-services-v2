export const siteUrl = "https://demarkussday.com";

export const servicePages = [
  {
    slug: "ai-implementation-dallas",
    title: "AI Implementation Dallas, TX",
    metaTitle: "AI Implementation Dallas, TX | On-Site AI Setup | DeMarkuss Day",
    description:
      "On-site AI implementation in Dallas for businesses that need voice agents, workflows, staff training, and practical automation installed in the real operation.",
    h1: "AI Implementation in Dallas That Gets Installed On-Site",
    intro:
      "Most businesses do not need another software demo. They need AI systems configured around their calls, emails, proposals, calendars, follow-up, and staff workflow. DeMarkuss Day installs those systems in person across Dallas-Fort Worth.",
    outcomes: [
      "Custom AI workflows for admin, sales, service, and operations",
      "Hands-on training so your team knows how to use the system",
      "Voice, web, CRM, and automation tools connected into one workflow",
      "Local support from a Dallas-based implementation partner",
    ],
    category: "AI implementation",
    cityFocus: "Dallas-Fort Worth",
  },
  {
    slug: "ai-voice-receptionist-dallas",
    title: "AI Voice Receptionist Dallas",
    metaTitle: "AI Voice Receptionist Dallas | 24/7 AI Phone Agent Setup",
    description:
      "AI voice receptionist setup for Dallas businesses that need faster response, better call capture, and fewer missed leads after hours.",
    h1: "AI Voice Receptionists for Dallas Businesses",
    intro:
      "Missed calls turn into missed revenue. I set up AI phone agents that answer, qualify, route, and capture lead details so your business can respond even when staff is busy or closed.",
    outcomes: [
      "AI phone agents trained on your services, hours, and intake process",
      "Lead capture and call summaries routed to your team",
      "After-hours answering for service businesses and local operators",
      "On-site setup, testing, and staff handoff",
    ],
    category: "AI voice agents",
    cityFocus: "Dallas-Fort Worth",
  },
  {
    slug: "business-automation-dallas",
    title: "Business Automation Dallas",
    metaTitle: "Business Automation Dallas | Workflow Automation Consultant",
    description:
      "Workflow automation for Dallas businesses that want fewer manual tasks, faster follow-up, cleaner operations, and connected tools.",
    h1: "Business Automation for Dallas Operators",
    intro:
      "If your team is copying data between tools, manually following up with leads, or rebuilding the same documents every week, the business is leaking time. I map the workflow and install automations that remove repeat work.",
    outcomes: [
      "Automated lead follow-up, intake, reminders, and task routing",
      "Connected calendars, forms, CRM records, invoices, and inboxes",
      "Standard operating workflows your team can actually maintain",
      "Monthly optimization when the business changes",
    ],
    category: "business automation",
    cityFocus: "Dallas-Fort Worth",
  },
  {
    slug: "local-seo-dallas",
    title: "Local SEO Dallas",
    metaTitle: "Local SEO Dallas | Google Maps and Local Search Systems",
    description:
      "Local SEO systems for Dallas businesses that need better Google visibility, stronger service pages, and a cleaner conversion path.",
    h1: "Local SEO for Dallas Businesses That Need Calls",
    intro:
      "Local ranking is not just keywords. It is website structure, service pages, Google Business Profile signals, reviews, internal links, and fast conversion paths. I build the system so local demand has a clear path to contact you.",
    outcomes: [
      "Service and location page architecture for Dallas-Fort Worth",
      "Google Business Profile and local visibility strategy",
      "Conversion-focused content for real service searches",
      "Technical crawl cleanup, sitemap structure, and schema",
    ],
    category: "local SEO",
    cityFocus: "Dallas-Fort Worth",
  },
  {
    slug: "website-design-dallas",
    title: "Website Design Dallas",
    metaTitle: "Website Design Dallas | Conversion Website Builder",
    description:
      "Conversion-focused website design in Dallas for businesses that need a faster, clearer site connected to lead capture and automation.",
    h1: "Website Design in Dallas Built for Leads",
    intro:
      "A business website should make the offer clear, earn trust quickly, and capture leads without confusion. I build fast, structured websites with the SEO, forms, tracking, and automation needed to turn visitors into conversations.",
    outcomes: [
      "Fast Next.js websites with clean technical SEO",
      "Clear service pages, calls to action, and lead capture",
      "Local schema, metadata, sitemap, and canonical setup",
      "Automation-ready forms and follow-up flows",
    ],
    category: "website design",
    cityFocus: "Dallas-Fort Worth",
  },
] as const;

export const serviceAreaPages = [
  {
    slug: "dallas",
    city: "Dallas",
    title: "AI Implementation and Automation in Dallas",
    description:
      "On-site AI implementation, voice agents, workflow automation, websites, and local SEO systems for Dallas businesses.",
    businessTypes: "service companies, real estate teams, clinics, offices, contractors, and local operators",
  },
  {
    slug: "fort-worth",
    city: "Fort Worth",
    title: "AI Implementation and Automation in Fort Worth",
    description:
      "Practical AI setup, business automation, and local SEO support for Fort Worth businesses that need better systems.",
    businessTypes: "service businesses, home service teams, professional offices, venues, and field operators",
  },
  {
    slug: "plano",
    city: "Plano",
    title: "AI Implementation and Automation in Plano",
    description:
      "AI workflows, voice receptionist setup, automation, and conversion-focused websites for growing Plano businesses.",
    businessTypes: "professional service firms, healthcare offices, real estate teams, and local service companies",
  },
  {
    slug: "frisco",
    city: "Frisco",
    title: "AI Implementation and Automation in Frisco",
    description:
      "On-site AI and automation systems for Frisco companies that need faster follow-up, better lead capture, and cleaner operations.",
    businessTypes: "growth-focused local businesses, clinics, real estate groups, and service operators",
  },
  {
    slug: "arlington",
    city: "Arlington",
    title: "AI Implementation and Automation in Arlington",
    description:
      "Business automation, AI phone agents, local SEO, and website systems for Arlington businesses across the DFW market.",
    businessTypes: "service companies, hospitality operators, retail teams, and professional offices",
  },
  {
    slug: "irving",
    city: "Irving",
    title: "AI Implementation and Automation in Irving",
    description:
      "AI implementation and workflow automation for Irving businesses that want faster response times and fewer manual tasks.",
    businessTypes: "offices, contractors, property teams, logistics operators, and local service businesses",
  },
  {
    slug: "mckinney",
    city: "McKinney",
    title: "AI Implementation and Automation in McKinney",
    description:
      "On-site AI systems, automation, local SEO, and lead capture improvements for McKinney businesses.",
    businessTypes: "home service businesses, clinics, real estate teams, and professional operators",
  },
  {
    slug: "garland",
    city: "Garland",
    title: "AI Implementation and Automation in Garland",
    description:
      "AI setup, workflow automation, and website systems for Garland businesses that need more consistent lead handling.",
    businessTypes: "service operators, local contractors, offices, and customer-facing businesses",
  },
] as const;

export type ServiceSlug = (typeof servicePages)[number]["slug"];
export type ServiceAreaSlug = (typeof serviceAreaPages)[number]["slug"];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getServiceAreaPage(slug: string) {
  return serviceAreaPages.find((page) => page.slug === slug);
}
