import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { SITE_URL } from "@/lib/site";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "About",
description:
      "TTI Recruiting helps CDL drivers connect with recruiting opportunities that fit how they want to work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | TTI Recruiting",
    description:
      "TTI Recruiting helps CDL drivers connect with recruiting opportunities that fit how they want to work.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const PRINCIPLES = [
  {
    index: "01",
    title: "Regional first",
    body: "We listen for the route and home-time pattern that fits the driver's life before discussing a potential match.",
  },
  {
    index: "02",
    title: "Flatbed heritage",
    body: "Our core freight is flatbed -- tarps, straps, chains, and loads that need a careful hand. If you already run flatbed, you know the difference it makes.",
  },
  {
    index: "03",
    title: "Recruiting, not dispatching",
    body: "We are a recruiting company, not the employing carrier. The goal is a potential match that fits your life and experience.",
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
        lede="We help CDL drivers discuss recruiting opportunities that fit how they want to live and work."
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="border border-ink/20 bg-paper-deep p-6">
              <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                The placard
              </p>
              <dl className="mt-4 space-y-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Name</dt>
                  <dd>{BRAND.name}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Role</dt>
                  <dd>Recruiting company</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Focus</dt>
                  <dd>CDL recruiting</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              What we do
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                TTI Recruiting connects CDL drivers with hiring carriers and
                discusses potential matches based on experience, preferences,
                and the recruiting desk's current information.
              </p>
              <p>
                We are honest about the limits of a third-party recruiting
                company: TTI does not operate the trucks or employ the drivers.
                A Quick Apply submission starts a conversation; recruiting
                shares verified details when a suitable opportunity is identified.
              </p>
            </div>

            <h2 className="mt-12 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              How we assess a potential match
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
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
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
