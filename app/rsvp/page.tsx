import type { Metadata } from "next";
import PageShell from "../../components/wedding/PageShell";
import RSVPSection from "../../components/wedding/RSVPSection";

export const metadata: Metadata = {
  title: "RSVP — Limuel & Layla",
};

export default function RSVPPage() {
  return (
    <PageShell>
      <RSVPSection />
    </PageShell>
  );
}
