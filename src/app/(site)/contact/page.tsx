import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with TTI Recruiting about your CDL recruiting path.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | TTI Recruiting",
    description:
      "Start a conversation with TTI Recruiting about your CDL recruiting path.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="border-b border-ink/15">
      <V3PageHeader
        kicker="Contact"
        title={
          <>
            Talk to{" "}
            <span className="text-signal-deep">dispatch.</span>
          </>
        }
        lede="Questions about your recruiting path or CDL experience? Start with a short Quick Apply profile."
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">Start with Quick Apply<span className="text-signal-deep">.</span></h2>
            <p className="mt-6 max-w-xl border-y border-ink/20 py-6 text-lg leading-relaxed text-ink-muted">
              Share a short profile so recruiting can review your preferences
              and contact you when a verified opportunity is a potential fit.
            </p>
            <Link href="/#quick-apply" className="mt-6 inline-flex h-12 items-center justify-center bg-signal-deep px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink">
              Quick apply <span aria-hidden className="ml-3">&rarr;</span>
            </Link>
          </div>

          <div className="border border-ink/20 bg-paper-deep p-6 sm:p-8">
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">Recruiting desk</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              TTI Recruiting is a recruiting company, not the employing
              carrier. The full application is shared only after a recruiter
              conversation and a potential match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
