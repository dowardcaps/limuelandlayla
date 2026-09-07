import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import AttireSection from "../../components/wedding/AttireSection";

export const metadata: Metadata = {
  title: "Attire — Limuel & Layla",
};

export default function AttirePage() {
  return (
    <PageShell>
      <AttireSection />
    </PageShell>
  );
}
