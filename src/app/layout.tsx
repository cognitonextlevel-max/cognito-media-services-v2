import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.demarkussday.com"),
  title: "DeMarkuss Day | On-Site AI Implementation & Tech Partner in Dallas, TX",
  description: "Dallas-Fort Worth's premier on-site tech and AI implementation agency. We modernize traditional businesses with custom websites, voice AI receptionists, custom AI workflows, and dominating local SEO. Same-day availability.",
  keywords: [
    "AI implementation Dallas",
    "on site tech partner DFW",
    "local SEO Dallas Fort Worth",
    "website design Dallas TX",
    "business modernization agency",
    "automation consulting Dallas",
    "AI receptionist installation",
    "DeMarkuss Day",
    "traditional business technology",
    "Dallas digital marketing",
    "AI voice agent integration DFW",
    "business AI training Dallas",
    "on-site AI training for businesses",
    "DFW business automation",
    "AI workflow implementation Texas",
  ],
  authors: [{ name: "DeMarkuss Day" }],
  creator: "DeMarkuss Day",
  publisher: "DeMarkuss Day",
  openGraph: {
    title: "DeMarkuss Day | The Unfair Tech Advantage for DFW Businesses",
    description: "We physically come to your Dallas-Fort Worth business to install websites, voice AI, and automated workflows. Same-day availability. The ultimate tech modernization partner.",
    url: "https://www.demarkussday.com",
    siteName: "DeMarkuss Day",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeMarkuss Day | The Unfair Tech Advantage",
    description: "On-site AI implementation and web development for traditional businesses in Dallas-Fort Worth. Same-day availability.",
    creator: "@demarkuss1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.demarkussday.com",
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

// Unified Google Knowledge Graph Schema (JSON-LD) for DeMarkuss Day, Cognito Media Services, Books & Apps
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.demarkussday.com/#person",
      "name": "DeMarkuss Day",
      "givenName": "DeMarkuss",
      "familyName": "Day",
      "url": "https://www.demarkussday.com",
      "image": "https://www.demarkussday.com/founder.jpg",
      "telephone": "+1-469-970-6943",
      "email": "demarkuss@demarkussday.com",
      "jobTitle": "AI Systems Architect, Founder & Author",
      "description": "Dallas-Fort Worth tech entrepreneur, licensed low-voltage contractor, author, and AI systems architect. Founder of Cognito Media Services and DeMarkuss Day AI Systems.",
      "sameAs": [
        "https://x.com/demarkuss1",
        "https://www.linkedin.com/in/demarkuss-day-a1202b20/",
        "https://www.instagram.com/demarkuss_day",
        "https://www.tiktok.com/@demarkuss_day",
        "https://demarkussday.substack.com",
        "https://github.com/cognitonextlevel-max",
        "https://www.facebook.com/cognitomediaservices",
        "https://www.youtube.com/@CognitoMediaServices",
        "https://apps.apple.com/us/app/cognito-media-services/id6451157247",
        "https://shoutoutdfw.com/meet-demarkuss-day-smart-home-specialist-founder-cognito-media-services/",
        "https://shoutoutdfw.com/meet-demarkuss-day-founder-and-ceo-of-cognito-media-services/",
        "https://cognitomediaservice.com"
      ],
      "founder": [
        { "@id": "https://www.demarkussday.com/#organization" },
        { "@id": "https://cognitomediaservice.com/#business" }
      ],
      "knowsAbout": [
        "Artificial Intelligence Implementation",
        "AI Voice Agents",
        "Business Process Automation",
        "Local Search Engine Optimization (SEO)",
        "Smart Home Automation",
        "Commercial Audio Video Engineering",
        "Next.js Full-Stack Web Development",
        "Structured Low-Voltage Cabling"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.demarkussday.com/#organization",
      "name": "DeMarkuss Day | AI Systems & Tech Modernization",
      "url": "https://www.demarkussday.com",
      "telephone": "+1-469-970-6943",
      "email": "demarkuss@demarkussday.com",
      "image": "https://www.demarkussday.com/founder.jpg",
      "description": "Dallas-Fort Worth's premier on-site tech modernization partner. We implement AI systems, voice receptionists, custom Next.js platforms, and local SEO strategies directly at your business.",
      "founder": { "@id": "https://www.demarkussday.com/#person" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12200 Ford Rd",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75234",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.9255,
        "longitude": -96.8917
      },
      "areaServed": [
        { "@type": "City", "name": "Dallas", "sameAs": "https://en.wikipedia.org/wiki/Dallas" },
        { "@type": "City", "name": "Fort Worth", "sameAs": "https://en.wikipedia.org/wiki/Fort_Worth,_Texas" },
        { "@type": "City", "name": "Plano" },
        { "@type": "City", "name": "Frisco" },
        { "@type": "City", "name": "Arlington" },
        { "@type": "City", "name": "Irving" },
        { "@type": "City", "name": "McKinney" },
        { "@type": "City", "name": "Garland" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI & Tech Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Site AI Training",
              "description": "We come to your business and train your team on AI workflows, voice agents, and automation tools."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Voice Receptionist Installation",
              "description": "Custom AI-powered voice agents that handle calls 24/7."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website Development",
              "description": "High-converting websites built with Next.js, optimized for local SEO in Dallas-Fort Worth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Domination",
              "description": "Google Business Profile optimization, local keywords, and map pack strategy for DFW businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Workflow Automation",
              "description": "Custom automated workflows that save 10+ hours per week using AI and modern tools."
            }
          }
        ]
      },
      "openingHours": "Mo-Su 09:00-17:00",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "17",
        "bestRating": "5"
      },
      "sameAs": [
        "https://x.com/demarkuss1",
        "https://www.linkedin.com/in/demarkuss-day-a1202b20/",
        "https://demarkussday.substack.com",
        "https://github.com/cognitonextlevel-max",
        "https://cognitomediaservice.com"
      ]
    },
    {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": "https://cognitomediaservice.com/#business",
      "name": "Cognito Media Services",
      "legalName": "Cognito Media Services LLC",
      "url": "https://cognitomediaservice.com",
      "foundingDate": "2012",
      "founder": { "@id": "https://www.demarkussday.com/#person" },
      "telephone": "+1-469-970-6943",
      "email": "demarkuss@cognitomediaservice.com",
      "description": "Dallas-Fort Worth licensed low-voltage contractor specializing in flush TV wall mounting, Dolby Atmos home theaters, smart home automation, security cameras, and commercial AV.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12100 Ford Rd, Ste 220",
        "addressLocality": "Farmers Branch",
        "addressRegion": "TX",
        "postalCode": "75234",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://maps.google.com/?cid=16640237412327876977",
        "https://maps.apple.com/?address=12100%20Ford%20Rd,%20Farmers%20Branch,%20TX%2075234",
        "https://www.bing.com/maps?q=Cognito+Media+Services+Farmers+Branch+TX",
        "https://www.facebook.com/cognitomediaservices",
        "https://www.instagram.com/cognitomediaservices",
        "https://www.instagram.com/demarkuss_day",
        "https://x.com/demarkuss1",
        "https://www.youtube.com/@CognitoMediaServices",
        "https://www.tiktok.com/@cognitomediaservices",
        "https://www.tiktok.com/@demarkuss_day",
        "https://demarkussday.substack.com",
        "https://apps.apple.com/us/app/cognito-media-services/id6451157247",
        "https://www.yelp.com/biz/cognito-media-services-farmers-branch-3",
        "https://nextdoor.com/pages/cognito-media-services-dallas-tx-1/",
        "https://www.yellowpages.com/dallas-tx/mip/cognito-media-services-564552979",
        "https://www.bbb.org/us/tx/farmers-branch/profile/audio-visual-equipment/cognito-media-services-0875-91192348",
        "https://www.angi.com/companylist/us/tx/dallas/cognito-media-services-reviews.htm",
        "https://www.thumbtack.com/tx/dallas/tv-mounting/cognito-media-services",
        "https://www.groupon.com/deals/cognito-media-services-1",
        "https://www.linkedin.com/company/cognito-media-services",
        "https://www.linkedin.com/in/demarkuss-day-a1202b20/",
        "https://github.com/cognitonextlevel-max",
        "https://shoutoutdfw.com/meet-demarkuss-day-smart-home-specialist-founder-cognito-media-services/",
        "https://shoutoutdfw.com/meet-demarkuss-day-founder-and-ceo-of-cognito-media-services/",
        "https://cognitomediaservice.com"
      ]
    },
    {
      "@type": "Book",
      "@id": "https://www.demarkussday.com/#book-tv-mounting",
      "name": "How to Make 6 Figures with a TV Installation Company",
      "author": { "@id": "https://www.demarkussday.com/#person" },
      "inLanguage": "en-US",
      "genre": "Business & Money / Trade Entrepreneurship",
      "description": "A comprehensive blueprint detailing how technicians can price, market, and scale a six-figure television mounting and smart integration business."
    },
    {
      "@type": "Book",
      "@id": "https://www.demarkussday.com/#book-luma",
      "name": "LUMA: Learn, Understand, Master, Achieve",
      "author": [
        { "@id": "https://www.demarkussday.com/#person" },
        { "@type": "Person", "name": "Montrel Powell" }
      ],
      "inLanguage": "en-US",
      "genre": "Self-Help / Personal Growth & Productivity",
      "description": "An interactive framework designed to transform mindsets and drive tangible achievement through the four pillars: Learn, Understand, Master, and Achieve."
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://cognitomediaservice.com/#app-ios",
      "name": "Cognito Media Services Client App (iOS)",
      "operatingSystem": "iOS",
      "applicationCategory": "BusinessApplication",
      "installUrl": "https://apps.apple.com/us/app/cognito-media-services/id6451157247",
      "author": { "@id": "https://www.demarkussday.com/#person" },
      "description": "Client mobile application for booking smart home services, tracking installation milestones in real time, and managing hardware."
    }
  ]
};

// FAQ Schema for rich snippets in search results
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does DeMarkuss Day do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DeMarkuss Day is a Dallas-Fort Worth based on-site AI implementation agency. We physically come to your business to install AI voice receptionists, automated workflows, custom websites, and SEO systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come to my business in person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We are an on-site, in-person tech partner. We come directly to your Dallas-Fort Worth business to install, configure, and train your team on all AI tools and systems.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer same-day availability for most services. Book a free 30-minute strategic audit and we can usually begin implementation the same week.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tools do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in business operations AI, autonomous AI voice systems, Next.js for web development, and custom automation workflows. We train your team on every system we install.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Services start with a free 30-minute strategic audit. Pricing depends on the scope of your project — from single-service installations to full business transformation packages. Call 469-970-6943 for a custom quote.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900,1,2,3,4,5,7&f[]=satoshi@300,400,500,700&f[]=jet-brains-mono@400,500&display=swap"
          rel="stylesheet"
        />
        {/* Signature font for personal brand */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
        {/* Structured Data — Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Structured Data — FAQ (Rich Snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
