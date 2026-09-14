import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import FAQSection from "../../components/wedding/FAQSection";
import AttireSection from "../../components/wedding/AttireSection";

export const metadata: Metadata = {
  title: "Details-02 — Limuel & Layla",
};

export default function FaqsAttirePage() {
  return (
    <PageShell currentLabel="Dress code & Wedding FAQ list">
      <AttireSection />
      <FAQSection />
    </PageShell>
  );
}
