import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";

export default function JobsPage() {
  return (
    <ContentPage eyebrow="Opportunities" title="Find work that fits your route." intro="Published opportunities will appear here after they are reviewed and approved. We are not showing unverified offers or stale source-sheet rows as current openings.">
      <section className="rounded-2xl border border-[var(--ink)]/15 bg-white/60 p-6 sm:p-8" aria-labelledby="catalog-status">
        <p className="font-[var(--vd-ledger)] text-xs uppercase tracking-[0.16em] text-[var(--signal-deep)]">Catalog status</p>
        <h2 id="catalog-status" className="mt-3 text-2xl font-bold">The public catalog is being refreshed.</h2>
        <p className="mt-3 leading-7 text-[var(--ink-muted)]">If you already know the kind of driving work you want, a recruiter can talk through the current options. This is a conversation request, not a completed application.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[var(--signal-deep)] px-5 py-3 font-semibold text-white">Talk with a recruiter</Link>
      </section>
    </ContentPage>
  );
}

