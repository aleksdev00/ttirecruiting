import Link from "next/link";
import { AlertTriangle, ArrowLeft, MessageCircle } from "lucide-react";
import { ContentPage } from "@/components/site/content-page";

export default function OpportunityDetailPage() {
  return (
    <ContentPage eyebrow="Opportunity detail" title="This opportunity is not available to apply for yet." intro="Direct links can outlive an opening. We re-check the published catalog before showing an active application action.">
      <section className="rounded-[12px] border border-[var(--ink)]/15 bg-white/60 p-6 sm:p-8" aria-labelledby="opportunity-status">
        <div className="flex items-center gap-2 font-[var(--font-mono)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--signal-deep)]"><AlertTriangle size={16} aria-hidden /> Unavailable or expired</div>
        <h2 id="opportunity-status" className="mt-5 text-2xl font-bold">No active offer was found at this address.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-[var(--ink-muted)]">This does not tell us whether another current option may fit. Browse the reviewed desk or ask a recruiter to talk through your route and home-time needs.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/jobs" className="inline-flex items-center gap-2 rounded-full bg-[var(--signal-deep)] px-5 py-3 font-semibold text-white"><ArrowLeft size={16} aria-hidden /> Back to opportunities</Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 px-5 py-3 font-semibold"><MessageCircle size={16} aria-hidden /> Talk with a recruiter</Link></div>
      </section>
    </ContentPage>
  );
}
