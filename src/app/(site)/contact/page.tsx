import type { Metadata } from "next";
import { BRAND } from "@/lib/jobs";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the TTI Recruiting hiring desk out of Kansas City, MO by phone, email, or by sending an application.",
  alternates: { canonical: "/contact" },
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
        lede="Questions about a lane, your application status, or what your CDL qualifies for? The hiring desk is here."
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              The hiring desk
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-5 border-y border-ink/20 py-6">
              <a
                href={`tel:${BRAND.phone.replace(/[^\d]/g, "")}`}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1"
              >
                <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                  Call
                </span>
                <span className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl transition-colors group-hover:text-signal-deep">
                  {BRAND.phone}
                </span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1"
              >
                <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                  Email
                </span>
                <span className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl transition-colors group-hover:text-signal-deep">
                  {BRAND.email}
                </span>
              </a>
            </div>
            <p className="mt-4 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Phone and email are placeholders. Confirmed lines required before
              launch.
            </p>
          </div>

          <div className="border border-ink/20 bg-paper-deep p-6 sm:p-8">
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
              The yard
            </p>
            <address className="mt-4 text-lg leading-relaxed not-italic text-ink/80">
              {BRAND.address.line1}
              <br />
              {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
            </address>
            <dl className="mt-6 space-y-3 border-t border-ink/15 pt-5 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">Hours</dt>
                <dd className="text-right">{BRAND.hours}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">Platform</dt>
                <dd>24/7 application intake</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}