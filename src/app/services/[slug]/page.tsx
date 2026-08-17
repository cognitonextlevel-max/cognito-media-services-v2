import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { getServicePage, servicePages, siteUrl } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/services/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  const url = `${siteUrl}/services/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    serviceType: page.category,
    areaServed: {
      "@type": "AdministrativeArea",
      name: page.cityFocus,
    },
    provider: {
      "@type": "ProfessionalService",
      name: "DeMarkuss Day",
      url: siteUrl,
      telephone: "+1-469-970-6943",
    },
    url,
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
              {page.cityFocus} / {page.category}
            </p>
            <h1 className="text-heading font-cabinet uppercase tracking-tighter text-white">
              {page.h1}
            </h1>
            <p className="mt-8 text-body-lg text-zinc-400 max-w-3xl">
              {page.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-8 mt-16">
            <section className="border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
              <h2 className="text-subheading font-cabinet uppercase text-white mb-8">
                What Gets Built
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {page.outcomes.map((outcome) => (
                  <div key={outcome} className="border border-zinc-800 bg-black/40 p-5">
                    <div className="w-8 h-1 bg-cyan-400 mb-5" />
                    <p className="text-body text-zinc-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="border border-cyan-400/20 bg-cyan-950/10 p-6 sm:p-8 h-fit">
              <span className="section-label block mb-5">Next Step</span>
              <h2 className="text-subheading font-cabinet uppercase text-white">
                Start With a Free Strategic Audit
              </h2>
              <p className="text-body text-zinc-400 mt-5">
                I review your current website, lead flow, operations, and AI readiness, then map the first system to install.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-8">
                <Link
                  href="/audit"
                  className="inline-flex justify-center px-6 py-4 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.25em] hover:bg-white transition-colors"
                >
                  Book Audit
                </Link>
                <Link
                  href="tel:+14699706943"
                  className="inline-flex justify-center px-6 py-4 border border-white/10 text-zinc-200 text-caption font-mono font-black uppercase tracking-[0.25em] hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
                >
                  Call 469.970.6943
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
