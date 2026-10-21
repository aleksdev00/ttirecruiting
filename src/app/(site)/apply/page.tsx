import Link from "next/link";
import { ContentPage } from "@/components/site/content-page";
import { FULL_APPLICATION_URL } from "@/lib/site";

export default function ApplyPage() {
  return <ContentPage eyebrow="Choose your route" title="Start with the right application path." intro="The next step depends on how the opportunity is structured. TTI Recruiting is the recruiter/intermediary; the hiring carrier makes the final decision.">
    <div className="grid gap-5 md:grid-cols-2">
      <section className="rounded-2xl bg-[var(--ink)] p-7 text-white"><p className="font-[var(--vd-ledger)] text-xs uppercase tracking-[0.16em] text-[var(--signal)]">W-2</p><h2 className="mt-4 text-3xl font-bold">Existing driver application</h2><p className="mt-4 leading-7 text-white/70">Continue to the existing driver application when your confirmed opportunity uses the W-2 path. This click starts the handoff; it is not a completed application.</p><a href={FULL_APPLICATION_URL} className="mt-7 inline-flex rounded-full bg-[var(--signal)] px-5 py-3 font-semibold text-[var(--ink)]">Continue to W-2 application</a></section>
      <section className="rounded-2xl border border-[var(--ink)]/15 bg-white/60 p-7"><p className="font-[var(--vd-ledger)] text-xs uppercase tracking-[0.16em] text-[var(--signal-deep)]">1099</p><h2 className="mt-4 text-3xl font-bold">Recruiter-assisted intake</h2><p className="mt-4 leading-7 text-[var(--ink-muted)]">A recruiter guides this path and explains the required information. Do not upload CDL or medical documents through this public form.</p><Link href="/contact?type=1099" className="mt-7 inline-flex rounded-full bg-[var(--signal-deep)] px-5 py-3 font-semibold text-white">Talk through 1099 work</Link></section>
    </div>
  </ContentPage>;
}

