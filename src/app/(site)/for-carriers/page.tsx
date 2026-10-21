import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";

export default function ForCarriersPage() {
  return <ContentPage eyebrow="For carriers" title="Discuss recruiting support." intro="This page is for carrier conversations, not driver applications. Share a business inquiry through the contact route and identify your role clearly.">
    <section className="rounded-2xl border border-[var(--ink)]/15 bg-white/60 p-7"><h2 className="text-2xl font-bold">Start a carrier conversation</h2><p className="mt-3 leading-7 text-[var(--ink-muted)]">We are keeping carrier-specific claims, partner lists, and performance numbers private until they are approved and current.</p><Link href="/contact?type=carrier" className="mt-6 inline-flex rounded-full bg-[var(--signal-deep)] px-5 py-3 font-semibold text-white">Contact TTI</Link></section>
  </ContentPage>;
}

