import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { getServiceAreaPage, serviceAreaPages, servicePages, siteUrl } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return serviceAreaPages.map((page) => ({ city: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getServiceAreaPage(city);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/service-areas/${page.slug}`;

  return {
    title: `${page.title} | DeMarkuss Day`,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${page.title} | DeMarkuss Day`,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { city } = await params;
  const page = getServiceAreaPage(city);

  if (!page) {
    notFound();
  }

  const url = `${siteUrl}/service-areas/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `DeMarkuss Day - ${page.city}`,
    description: page.description,
    url,
    telephone: "+1-469-970-6943",
    areaServed: {
      "@type": "City",
      name: page.city,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `AI and automation services in ${page.city}`,
      itemListElement: servicePages.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}/services/${service.slug}`,
        },
      })),
    },
  };

  return (
    <main className="relative min-h-screen bg-black text-zinc-200 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grain" />
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <section className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-24 pt-28 sm:pt-36 pb-20">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="section-label hover:text-cyan-300 transition-colors">
            DeMarkuss Day
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-caption font-mono uppercase tracking-[0.45em] text-cyan-400/60 mb-6">
              Service Area / {page.city}
            </p>
            <h1 className="text-heading font-cabinet uppercase tracking-tighter text-white">
              {page.title}
            </h1>
            <p className="mt-8 text-body-lg text-zinc-400 max-w-3xl">
              {page.description} Built for {page.businessTypes} that need practical systems instead of disconnected tools.
            </p>
          </div>

          <section className="mt-16 border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
            <h2 className="text-subheading font-cabinet uppercase text-white mb-8">
              Services Available in {page.city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group border border-zinc-800 bg-black/40 p-5 hover:border-cyan-400/60 transition-colors"
                >
                  <span className="text-micro font-mono uppercase tracking-[0.35em] text-cyan-400/50">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-cabinet uppercase text-white mt-4 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-4">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link
              href="/audit"
              className="inline-flex justify-center px-6 py-4 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.25em] hover:bg-white transition-colors"
            >
              Book Free Audit
            </Link>
            <Link
              href="tel:+14699706943"
              className="inline-flex justify-center px-6 py-4 border border-white/10 text-zinc-200 text-caption font-mono font-black uppercase tracking-[0.25em] hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
            >
              Call 469.970.6943
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
