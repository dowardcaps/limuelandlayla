import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import EntourageSection from "../../components/wedding/EntourageSection";


export const metadata: Metadata = {
  title: "Entourage — Limuel & Layla",
};

export default function EntouragePage() {
  return (
    <PageShell currentLabel="Entourage">
      <EntourageSection />
    </PageShell>
  );
}