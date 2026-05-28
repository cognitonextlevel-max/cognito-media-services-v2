import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://demarkussday.com"),
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
    url: "https://demarkussday.com",
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
    canonical: "https://demarkussday.com",
  },
  verification: {
    google: "dw-e0m-BEGH_g1MNRlQlWoHQq8pYr6BZJ0H_pFPx3_w",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

// Structured data for local business SEO — ProfessionalService + Services + FAQ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DeMarkuss Day",
  description: "Dallas-Fort Worth's premier on-site tech modernization partner. We implement AI systems, local SEO, and custom websites directly at your business. Same-day availability.",
  url: "https://demarkussday.com",
  telephone: "+1-469-970-6943",
  email: "demarkussday@gmail.com",
  image: "https://demarkussday.com/founder.jpg",
  logo: "https://demarkussday.com/logo.png",
  founder: {
    "@type": "Person",
    name: "DeMarkuss Day",
    jobTitle: "AI Implementation Specialist & Founder",
    url: "https://demarkussday.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12200 Ford Rd",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75234",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9255,
    longitude: -96.8917,
  },
  areaServed: [
    { "@type": "City", name: "Dallas", sameAs: "https://en.wikipedia.org/wiki/Dallas" },
    { "@type": "City", name: "Fort Worth", sameAs: "https://en.wikipedia.org/wiki/Fort_Worth,_Texas" },
    { "@type": "City", name: "Plano" },
    { "@type": "City", name: "Frisco" },
    { "@type": "City", name: "Arlington" },
    { "@type": "City", name: "Irving" },
    { "@type": "City", name: "McKinney" },
    { "@type": "City", name: "Garland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & Tech Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site AI Training",
          description: "We come to your business and train your team on AI workflows, voice agents, and automation tools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Voice Receptionist Installation",
          description: "Custom AI-powered voice agents that handle calls 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description: "High-converting websites built with Next.js, optimized for local SEO in Dallas-Fort Worth.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO Domination",
          description: "Google Business Profile optimization, local keywords, and map pack strategy for DFW businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Workflow Automation",
          description: "Custom automated workflows that save 10+ hours per week using AI and modern tools.",
        },
      },
    ],
  },
  openingHours: "Mo-Su 09:00-17:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "17",
    bestRating: "5",
  },
  sameAs: [
    "https://x.com/demarkuss1",
    "https://www.linkedin.com/in/demarkuss-day-a1202b20/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
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
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wi2mdfle66");
            `
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K7N73K6V');
            `
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7N73K6V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
