import Image from "next/image";
import Link from "next/link";
import { DRIVING_TYPES } from "@/lib/brand";
import { FULL_APPLICATION_URL } from "@/lib/site";
import { V3FAQ } from "@/components/site/v3-faq";
import { V3QuickApply } from "@/components/site/v3-quick-apply";

const MAST_IMG =
  "https://images.unsplash.com/photo-1516319915504-015b432d407c?auto=format&fit=crop&w=1800&q=80";

export default function V3Home() {
  return (
    <div className="v3-root flex flex-col bg-paper text-ink">
      {/* ==================== MASTHEAD / COVER ==================== */}
      <section className="v3-mast relative border-b border-ink/15 bg-paper text-ink">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-10 sm:px-6 lg:px-10 lg:pt-14">
          <div className="flex items-center justify-between border-y border-ink/20 py-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
            <p>The Dispatch</p>
            <p className="hidden sm:inline">Vol. 03 / Issue 01</p>
            <p>U.S. market</p>
          </div>

          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="v3-fade v3-d1 font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
                CDL driver placement / OTR to local
              </p>

              <h1 className="mt-6 font-display text-[clamp(3rem,7.5vw,7rem)] uppercase leading-[0.85] tracking-tight">
                <span className="v3-mline v3-l1">
                  <span className="v3-mline-txt">
                    OTR<span className="text-signal-deep">.</span>
                  </span>
                </span>
                <span className="v3-mline v3-l2">
                  <span className="v3-mline-txt ml-[0.5em] sm:ml-[0.9em]">
                    Regional<span className="text-signal-deep">.</span>
                  </span>
                </span>
                <span className="v3-mline v3-l3">
                  <span className="v3-mline-txt ml-[1em] sm:ml-[1.8em]">
                    Local<span className="text-signal-deep">.</span>
                  </span>
                </span>
                <span className="v3-mline v3-l4">
                  <span className="v3-mline-txt ml-[1.5em] sm:ml-[2.7em]">
                    Dedicated<span className="text-signal-deep">.</span>
                  </span>
                </span>
              </h1>

              <p className="v3-fade v3-d2 mt-7 max-w-md text-lg leading-relaxed text-ink">
                Tell us what you're looking for. We'll review your profile and
                contact you when we find a matching opportunity.
              </p>

              <div className="v3-fade v3-d3 mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="#quick-apply"
                  className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-signal-deep px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink hover:text-paper sm:w-auto"
                >
                  Quick apply
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>

              <p className="v3-ticker mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/20 pt-5 font-ledger text-[11px] font-semibold uppercase tracking-[0.26em] text-ink-faint">
                {DRIVING_TYPES.map((t, i) => (
                  <span key={t.slug} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden className="text-signal-deep">
                        &rarr;
                      </span>
                    )}
                    {t.label}
                  </span>
                ))}
              </p>
            </div>

            <div className="relative min-h-[360px] self-stretch overflow-hidden border border-ink/20 bg-paper-deep lg:col-span-5 lg:min-h-[560px]">
              <Image
                src={MAST_IMG}
                alt="Semi truck rolling down an open highway at dusk"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
                className="v3-photo-img object-cover object-center"
              />
              <div className="absolute inset-0 bg-ink/15" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20"
                aria-hidden="true"
              />
              <p className="absolute left-3 top-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.26em] text-paper">
                Fig. 01
              </p>
              <p className="absolute bottom-3 left-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.26em] text-paper/85">
                I-70 / Night run
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="v3-rail" aria-hidden="true">
              <div className="v3-rail-fill" />
            </div>
            <div className="mt-3 flex items-center justify-between font-ledger text-[10px] font-semibold uppercase tracking-[0.26em] text-ink-faint">
              <span>Origin / Kansas City, MO</span>
              <span className="hidden sm:inline">Lanes 04</span>
              <span>Destination / your week</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK APPLY / LEAD FORM ==================== */}
      <V3QuickApply />

      {/* ==================== FRONT SHEET / THE LEDGER ==================== */}
      <section className="v3-sheet border-b border-ink/15 bg-paper-deep text-ink">
        <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-6">
            <p className="v3-word font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
              How the desk works
            </p>
            <h2 className="v3-word mt-5 font-display text-[clamp(2.4rem,5.2vw,4.75rem)] uppercase leading-[0.88] tracking-tight">
              We do the legwork<span className="text-signal-deep">.</span>
            </h2>
            <p className="v3-fact mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
              No forced miles, no mystery dispatches. You see the freight, home
              time, and pay on every load before you commit to the run.
            </p>

            <ul className="v3-fact mt-9 space-y-3 border-t border-ink/15 pt-6">
              {(
                [
                  ["Freight", "See the load before you commit"],
                  ["Home time", "Shown up front, planned around you"],
                  ["Pay", "Rates up front, not a mystery"],
                  ["Equipment", "Know the gear before the pre-trip"],
                ] as const
              ).map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-baseline justify-between gap-4 pb-3 text-sm"
                >
                  <span className="flex items-baseline gap-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.22em]">
                    <span className="inline-block h-2 w-2 bg-signal-deep" aria-hidden="true" />
                    {k}
                  </span>
                  <span className="text-ink-muted">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full border border-ink/20">
              {(
                [
                  [String(DRIVING_TYPES.length), "Driving lanes served"],
                  [String(DRIVING_TYPES.length), "Driving types served"],
                  ["03", "Equipment types / Flatbed / Reefer / Dry Van"],
                ["04", "Coverage / U.S. market"],
                ] as const
              ).map(([figure, label], i) => (
                <div
                  key={label}
                  className="v3-ledger-row grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-ink/15 px-5 py-6 last:border-b-0 sm:py-8"
                >
                  <span className="font-ledger text-[11px] font-semibold tracking-[0.2em] text-ink-faint">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col items-baseline justify-between gap-1 sm:flex-row sm:items-center">
                    <span className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
                      {figure}
                    </span>
                    <span className="max-w-[34ch] font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint sm:text-right">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW MATCHING WORKS ==================== */}
      <section className="v3-sheet border-b border-ink/15 bg-paper text-ink">
        <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <p className="v3-word font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
              How matching works
            </p>
            <h2 className="v3-word mt-5 font-display text-[clamp(2.2rem,4.6vw,4.25rem)] uppercase leading-[0.88] tracking-tight">
              Apply once.{" "}
              <span className="text-signal-deep">We do the matching.</span>
            </h2>
            <p className="v3-fact mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
              One application is enough. Tell us what you're looking for, and
              we do the calling around.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="v3-fact space-y-0 border-t border-ink/15">
              {(
                [
                  [
                    "01",
                    "Tell us what you want",
                    "Route, home time, equipment, and how you like to work. Nothing else is required to start.",
                  ],
                  [
                    "02",
                    "We review your profile",
                    "Experience, location, preferred route, home time, and employment type against current carrier opportunities.",
                  ],
                  [
                    "03",
                    "We call you on a match",
                    "Recruiting reaches out directly when a potentially suitable opportunity comes up. No match, no pressure.",
                  ],
                ] as const
              ).map(([i, k, v]) => (
                <li
                  key={i}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-ink/15 py-6 last:border-b-0 sm:py-7"
                >
                  <span className="font-ledger text-[11px] font-semibold tracking-[0.2em] text-ink-faint">
                    {i}
                  </span>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-display text-xl uppercase leading-none tracking-tight sm:text-2xl">
                      {k}
                    </span>
                    <span className="max-w-[36ch] text-sm leading-relaxed text-ink-muted">
                      {v}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#quick-apply"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-signal-deep px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink hover:text-paper"
              >
                Quick apply
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <p className="max-w-[24ch] font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                No guarantee of placement -- only a call when there is a real
                fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <V3FAQ />

      {/* ==================== FINALE PLATE / KNOW BEFORE YOU RUN ==================== */}
      <section className="v3-plate bg-ink text-paper">
        <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-7">
            <p className="v3-fade font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-paper">
              Not sure what fits?
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
              <span className="v3-mline">
                <span className="v3-mline-txt">Know before</span>
              </span>
              <span className="v3-mline">
                <span className="v3-mline-txt">
                  you run<span className="text-signal">.</span>
                </span>
              </span>
            </h2>
            <p className="v3-fade mt-7 max-w-md text-lg leading-relaxed text-paper/70">
              One recruiting desk working the market for you, end to end. Tell
              us what you're looking for and we call when there is a real fit.
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <ul className="v3-fade space-y-0 border-t border-paper/25">
              {(
                [
                  ["01", "Freight", "See the load"],
                  ["02", "Home time", "Shown up front"],
                  ["03", "Pay", "Rates up front"],
                  ["04", "Gear", "No surprises at the pre-trip"],
                ] as const
              ).map(([i, k, v]) => (
                <li
                  key={i}
                  className="flex items-baseline gap-4 border-b border-paper/25 py-4"
                >
                  <span className="font-ledger text-[11px] font-semibold tracking-[0.2em] text-paper">
                    {i}
                  </span>
                  <span className="font-ledger text-xs font-semibold uppercase tracking-[0.22em]">
                    {k}
                  </span>
                  <span className="ml-auto font-ledger text-[11px] uppercase tracking-[0.18em] text-paper/60">
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <div className="v3-fade mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#quick-apply"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-signal px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep sm:w-auto"
              >
                Quick apply
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>

            <p className="v3-fade mt-8 font-ledger text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">
              Already matched by recruiting?{" "}
              <Link
                href={FULL_APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-signal"
              >
                Complete the full application
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
