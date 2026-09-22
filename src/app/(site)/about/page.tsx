import type { Metadata } from "next";
import { BRAND } from "@/lib/jobs";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "TTI Recruiting is a CDL driver placement operation out of Kansas City, MO -- flatbed, regional, and reliable lanes.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    index: "01",
    title: "Regional first",
    body: "We favor shorter lanes and predictable home time over pure miles. Most of our open positions keep drivers within a set footprint and home on a schedule they can plan around.",
  },
  {
    index: "02",
    title: "Flatbed heritage",
    body: "Our core freight is flatbed -- tarps, straps, chains, and loads that need a careful hand. If you already run flatbed, you know the difference it makes.",
  },
  {
    index: "03",
    title: "Recruiting, not benching",
    body: "We place drivers into positions. The goal is a lane that fits your life, not just a seat filled for the week.",
  },
];

export default function AboutPage() {
  return (
    <div className="border-b border-ink/15">
      <V3PageHeader
        kicker="About the yard"
        title={
          <>
            Built on home{" "}
            <span className="text-signal-deep">time.</span>
          </>
        }
        lede="Driver placement out of the Kansas City, MO area. We match CDL drivers to lanes that fit how they want to live and work."
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="border border-ink/20 bg-paper-deep p-6">
              <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                The placard
              </p>
              <dl className="mt-4 space-y-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80">
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Name</dt>
                  <dd>{BRAND.name}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Hub</dt>
                  <dd>
                    {BRAND.address.city}, {BRAND.address.state}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Region</dt>
                  <dd>{BRAND.region}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">DOT</dt>
                  <dd>{BRAND.dot}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-faint">MC</dt>
                  <dd>{BRAND.mc}</dd>
                </div>
              </dl>
              <p className="mt-4 border-t border-ink/15 pt-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                DOT / MC figures are placeholders. Confirmed numbers required
                before launch.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              What we do
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75">
              <p>
                TTI Recruiting connects CDL drivers with hiring carriers out of
                the Kansas City, MO terminal. We keep a handful of open lanes --
                flatbed, reefer, dry van, tanker, and box truck -- and we match
                each driver to the position that fits their home-time needs and
                experience.
              </p>
              <p>
                We are honest about the limits of a third-party placement desk:
                we do not operate the trucks. Every lane listed here is a real
                position shape we recruit for, and hiring terms (pay, home time,
                miles, bonuses) shown anywhere on this site are placeholders
                pending confirmation with the hiring carrier.
              </p>
            </div>

            <h2 className="mt-12 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              How we pick a lane
              <span className="text-signal-deep">.</span>
            </h2>
            <ul className="mt-6 space-y-6">
              {PRINCIPLES.map((p) => (
                <li key={p.index} className="flex gap-6">
                  <span className="font-ledger text-[11px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                    {p.index} /
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase leading-none tracking-tight">
                      {p.title}
                      <span aria-hidden className="text-signal-deep">
                        .
                      </span>
                    </h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}