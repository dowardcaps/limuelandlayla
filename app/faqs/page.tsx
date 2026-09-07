import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import FAQSection from "../../components/wedding/FAQSection";

export const metadata: Metadata = {
  title: "FAQs — Limuel & Layla",
};

export default function FAQsPage() {
  return (
    <PageShell>
      <FAQSection />
    </PageShell>
  );
}
