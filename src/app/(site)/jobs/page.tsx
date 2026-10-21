import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { ContentPage } from "@/components/site/content-page";

export default function JobsPage() {
  return (
    <ContentPage eyebrow="Opportunities" title="Find work that fits your route." intro="Filter by the things that shape your week. Only reviewed opportunities can appear here; unverified source rows stay private until approved.">
      <section className="rounded-[12px] border border-[var(--ink)]/15 bg-white/60 p-4 sm:p-6" aria-label="Opportunity filters">
        <div className="flex items-center gap-2 font-[var(--font-mono)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--signal-deep)]"><SlidersHorizontal size={15} aria-hidden /> Filter the desk</div>
        <form className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold">Driver type<select name="driverType" className="h-11 rounded-[8px] border border-[var(--ink)]/20 bg-[var(--route-paper)] px-3 font-normal"><option value="">Any route</option><option>OTR</option><option>Regional</option><option>Local</option><option>Dedicated</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Employment<select name="employment" className="h-11 rounded-[8px] border border-[var(--ink)]/20 bg-[var(--route-paper)] px-3 font-normal"><option value="">Any path</option><option>W-2</option><option>1099</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Home time<select name="homeTime" className="h-11 rounded-[8px] border border-[var(--ink)]/20 bg-[var(--route-paper)] px-3 font-normal"><option value="">Any schedule</option><option>Daily</option><option>Weekly</option><option>Biweekly</option></select></label>
          <button type="submit" className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[var(--signal-deep)] px-4 font-semibold text-white hover:bg-[var(--hazard-strong)]">Apply filters <ArrowUpRight size={16} aria-hidden /></button>
        </form>
      </section>
      <section className="rounded-[12px] border border-[var(--ink)]/15 bg-white/60 p-6 sm:p-8" aria-labelledby="catalog-status">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--signal-deep)]">Catalog status</p><span className="rounded-full border border-[var(--ink)]/15 px-3 py-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--ink-muted)]">Unavailable</span></div>
        <h2 id="catalog-status" className="mt-5 text-2xl font-bold">The public catalog is being refreshed.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">There are no reviewed opportunities available to show from this environment. We are not turning source-sheet rows into public jobs without review.</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex rounded-full bg-[var(--signal-deep)] px-5 py-3 font-semibold text-white">Talk with a recruiter</Link><Link href="/how-it-works" className="inline-flex rounded-full border border-[var(--ink)]/20 px-5 py-3 font-semibold">How the process works</Link></div>
      </section>
    </ContentPage>
  );
}
