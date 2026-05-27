import type { Metadata } from "next";
import AuditClient from "./AuditClient";

export const metadata: Metadata = {
  title: "Free AI & SEO Strategic Business Audit | DeMarkuss Day",
  description: "Get a free 30-minute strategic audit of your business systems, local Dallas-Fort Worth SEO footprint, website conversions, and custom AI readiness. Complete the parameters to run the diagnostic engine.",
  alternates: {
    canonical: "https://www.demarkussday.com/audit",
  },
};

export default function AuditPage() {
  return <AuditClient />;
}
