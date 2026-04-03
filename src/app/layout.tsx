import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognito Media & Business Solutions | #1 Business Automation Agency in Dallas, TX",
  description: "Dallas-Fort Worth's premier business automation agency. We build AI-powered systems, dominate local SEO, create high-converting websites, and deploy autonomous sales agents. 500+ businesses automated. Book your free strategic audit.",
  keywords: [
    "business automation Dallas",
    "local SEO Dallas Fort Worth",
    "AI business systems Texas",
    "custom app development Dallas",
    "sales automation agency DFW",
    "website design Dallas TX",
    "operational systems engineering",
    "Cognito Media and Business Solutions",
    "small business automation",
    "Dallas digital marketing agency",
    "AI sales agents",
    "business process automation",
  ],
  authors: [{ name: "Cognito Media & Business Solutions" }],
  creator: "Cognito Media & Business Solutions",
  publisher: "Cognito Media & Business Solutions",
  openGraph: {
    title: "Cognito Media & Business Solutions | The Unfair Systems Advantage",
    description: "We engineer automated business systems that capture leads, rank your brand, and close sales 24/7. Dallas-Fort Worth. 500+ businesses. Zero manual chaos.",
    url: "https://www.cognitoappsareus.com",
    siteName: "Cognito Media & Business Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognito Media & Business Solutions — The Unfair Systems Advantage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognito Media & Business Solutions | The Unfair Systems Advantage",
    description: "AI-powered business automation. Local SEO. High-converting websites. Autonomous sales agents. Dallas-Fort Worth.",
    images: ["/og-image.png"],
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
    canonical: "https://www.cognitoappsareus.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

// Structured data for local business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cognito Media & Business Solutions",
  description: "Dallas-Fort Worth's premier business automation agency. AI-powered systems, local SEO, websites, and autonomous sales agents.",
  url: "https://www.cognitoappsareus.com",
  telephone: "+1-469-970-6943",
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
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 32.7767, longitude: -96.7970 },
    geoRadius: "50000",
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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900,1,2,3,4,5,7&f[]=satoshi@300,400,500,700&f[]=jet-brains-mono@400,500&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
