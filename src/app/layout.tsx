import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognito Media and Business Solutions | Automated Business Systems in Dallas, TX",
  description: "Dallas-based operational systems engineering. We build automated frameworks, dominate local SEO in DFW, and eliminate manual chaos for your business.",
  keywords: ["Business Automation Dallas", "Local SEO DFW", "Operational Systems", "Cognito Media and Business Solutions", "Business Automation Agency Texas", "Dallas SEO Strategy"],
  authors: [{ name: "Cognito Media and Business Solutions" }],
  openGraph: {
    title: "Cognito Media and Business Solutions | Automated Business Systems in Dallas, TX",
    description: "Engineering high-performance operational systems for small businesses. The benchmark for consistency, precision, and growth in Dallas/Fort Worth.",
    url: "https://cognito-os.com",
    siteName: "Cognito Media and Business Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognito Media and Business Solutions | The Unfair Systems Advantage",
    description: "Dominate your local market and automate your business operations.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900,1,2,3,4,5,7&f[]=satoshi@300,400,500,700&f[]=jet-brains-mono@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
