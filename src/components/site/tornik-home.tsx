import Image from "next/image";
import Link from "next/link";

import { BRAND, JOBS, QUIZ_PATHS } from "@/lib/jobs";
import { FULL_APPLICATION_URL } from "@/lib/site";
import { DrivingTypesStack } from "@/components/site/driving-types-stack";
import "./driving-types-motion.css";

const HERO_IMG =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=80";

const openJobs = JOBS.length;

export default function TornikHome() {
  return (
    <div className="flex flex-col bg-ink text-bone">
      {/* ================== HERO ================== */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-bone">
        <div className="tt-hero-stage absolute inset-0" aria-hidden="true">
          <Image
            src={HERO_IMG}
            alt=""
            fill
            sizes="100vw"
            className="tt-parallax object-cover object-center"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/50" aria-hidden />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-end px-4 pb-16 pt-40 sm:px-6 lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p
              className="tt-hero-phase flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard"
              style={{ animationRange: "0vh 50vh" }}
            >
              <span className="inline-block h-1.5 w-1.5 -skew-x-12 bg-hazard" aria-hidden />
              {BRAND.name} / CDL Driver Placement
            </p>
            <h1 className="mt-6 font-sans text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.85] tracking-tight">
              <span className="rv-mask" style={{ animationRange: "0vh 70vh" }}>
                <span style={{ animationDelay: "80ms" }}>Find your</span>
              </span>
              <span className="rv-mask" style={{ animationRange: "0vh 95vh" }}>
                <span style={{ animationDelay: "160ms" }}>
                  next <span className="text-hazard">lane.</span>
                </span>
              </span>
            </h1>
            <p
              className="tt-hero-phase mt-8 max-w-xl font-sans text-lg leading-relaxed text-bone/80 sm:text-xl"
              style={{ animationRange: "0vh 75vh" }}
            >
              {BRAND.shortName} Recruiting helps CDL drivers find the right driving opportunity -
              OTR, regional, local, and dedicated work across the Midwest, with {openJobs} open
              positions on the board right now.
            </p>
<div
              className="tt-hero-phase mt-10 flex flex-wrap items-center gap-4"
              style={{ animationRange: "0vh 90vh" }}
            >
              <Link
                href="/jobs"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-hazard px-10 font-sans text-sm font-black uppercase tracking-[0.18em] text-ink transition-colors hover:bg-hazard-strong"
              >
                Find your lane
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href={FULL_APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 border border-bone/35 px-10 font-sans text-sm font-black uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Apply now
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-bone/20 pt-5 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-bone/55">
            <span>Region: {BRAND.region}</span>
            <span className="hidden sm:inline">Equipment: Flatbed / Reefer / Dry Van</span>
            <span>Open positions: {openJobs}</span>
          </div>
        </div>
      </section>

      {/* ================== POSITIONING ================== */}
      <section className="dt-band border-y border-bone/15 bg-bone text-ink">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:py-28 lg:px-10">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
              <span className="inline-block h-1.5 w-1.5 -skew-x-12 bg-hazard" aria-hidden />
              Why drivers come to us
            </p>
            <p className="dt-copy mt-8 font-sans text-3xl font-black uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              We do the legwork so you can spend your time behind the wheel, not behind a computer.
            </p>
            <p className="dt-copy mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
              No forced miles, no mystery dispatches. You see the freight, home time, and pay on
              every load before you commit to the run.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-8">
            <div className="flex items-baseline gap-4 pb-5">
              <p className="dt-num font-sans text-6xl font-black tabular-nums">
                <span>{openJobs}</span>
              </p>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink/50">
                Open positions
                <br />
                on the board
              </p>
            </div>
            <div className="dt-line h-px w-full bg-ink/15" aria-hidden />
            <div className="flex items-baseline gap-4 pb-5">
              <p className="dt-num font-sans text-6xl font-black tabular-nums">
                <span>04</span>
              </p>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink/50">
                Driving
                <br />
                lanes
              </p>
            </div>
            <div className="dt-line h-px w-full bg-ink/15" aria-hidden />
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
              {BRAND.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ================== THE FOUR LANES ================== */}
      <DrivingTypesStack />

      {/* ================== WHY TTI ================== */}
      <section className="dt-row-why border-y border-bone/15 bg-ink py-20 text-bone lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px] lg:items-end lg:px-10">
          <div>
            <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
              <span className="inline-block h-1.5 w-1.5 -skew-x-12 bg-hazard" aria-hidden />
              Why {BRAND.shortName}
            </p>
            <p className="mt-8 font-sans text-3xl font-black uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              We match CDL drivers with the lane that fits <span className="text-hazard">their life</span>.
            </p>
            <div className="dt-rail-why mt-8 h-px w-full bg-bone/20" aria-hidden>
              <div className="h-px w-full bg-hazard" />
            </div>
          </div>
          <div>
            <p className="font-sans text-sm leading-relaxed text-bone/70">
              Flatbed. Regional. Local. Dedicated. One recruiting desk working the Midwest market for
              you, end to end.
            </p>
<Link
              href="/about"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-hazard/60 px-7 font-sans text-sm font-black uppercase tracking-[0.18em] text-hazard transition-colors hover:bg-hazard hover:text-ink"
            >
              Read our story
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================== CLOSING - QUIZ ================== */}
      <section className="border-t border-bone/15 bg-ink">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:px-10">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-hazard">
              Not sure which lane fits?
            </p>
            <p className="mt-6 font-sans text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
              Take the two-minute fit quiz.
            </p>
          </div>
          <Link
            href={QUIZ_PATHS.start}
            className="group inline-flex h-16 items-center justify-center gap-3 bg-hazard px-12 font-sans text-sm font-black uppercase tracking-[0.18em] text-ink transition-colors hover:bg-hazard-strong"
          >
            Find Your Fit
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}