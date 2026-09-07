import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import DetailsSection from "../../components/wedding/DetailsSection";

export const metadata: Metadata = {
  title: "Details — Limuel & Layla",
};

export default function DetailsPage() {
  return (
    <PageShell>
      <DetailsSection />
    </PageShell>
  );
}
