import Link from "next/link";
import type { JobPosting } from "@/lib/jobs";
import { FULL_APPLICATION_URL } from "@/lib/site";

const LANE_INDEX: Record<string, string> = {
  OTR: "01",
  Regional: "02",
  Local: "03",
  Dedicated: "04",
};

export function V3JobDetail({ job }: { job: JobPosting }) {
  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-10 sm:px-6 lg:px-10 lg:pt-14">
        <Link
          href="/jobs"
          className="-my-2 inline-flex items-center gap-2 py-2 font-ledger text-[10px] font-semibold uppercase tracking-[0.26em] text-ink-faint transition-colors hover:text-signal-deep"
        >
          <span aria-hidden>&larr;</span> All lanes
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink/20 py-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
          <span>
            {LANE_INDEX[job.drivingType]} / {job.drivingType}
          </span>
          <span>{job.equipment}</span>
          <span>{job.locationLabel}</span>
          <span className="ml-auto">CDL {job.cdlClass}</span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.8rem,6.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight">
          {job.title}
          <span className="text-signal-deep">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {job.summary}
        </p>
      </div>

      <div className="border-t border-ink/15 bg-paper-deep">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <dl className="grid gap-6 border border-ink/20 bg-paper sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-ink/15 p-6 sm:border-r sm:border-b-0">
              <dt className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Home time
              </dt>
              <dd className="mt-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                {job.homeTime.label}
              </dd>
            </div>
            <div className="border-b border-ink/15 p-6 sm:border-b-0 sm:border-r">
              <dt className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Pay
              </dt>
              <dd className="mt-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                {job.pay.weekly.toLocaleString("en-US")}
              </dd>
              <dd className="mt-1 font-ledger text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                est. weekly gross
              </dd>
            </div>
            <div className="border-b border-ink/15 p-6 sm:border-b-0 sm:border-r">
              <dt className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Annual miles
              </dt>
              <dd className="mt-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                {job.annualMiles.split(" (placeholder")[0]}
              </dd>
            </div>
            <div className="p-6">
              <dt className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
                Orientation
              </dt>
              <dd className="mt-2 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                {job.orientation.split(" (placeholder")[0]}
              </dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Pay, miles, and orientation figures are placeholders pending
            verified hiring terms. Available opportunities and terms are
            subject to confirmation with the carrier.
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="border-b border-ink/20 pb-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
            The job
          </h2>
          <h3 className="mt-6 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
            What you'll do
          </h3>
          <ul className="mt-5 space-y-3">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex items-baseline gap-3 text-base leading-relaxed text-ink-muted">
                <span className="inline-block h-2 w-2 shrink-0 bg-signal-deep" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
            What you need
          </h3>
          <ul className="mt-5 space-y-3">
            {job.requirements.map((r) => (
              <li key={r} className="flex items-baseline gap-3 text-base leading-relaxed text-ink-muted">
                <span className="inline-block h-2 w-2 shrink-0 bg-signal-deep" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-ink/20 bg-paper-deep p-6 sm:p-8">
            <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
              The rate card
            </p>
            <h2 className="mt-4 font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Why this lane
            </h2>
            <ul className="mt-6 space-y-4 border-t border-ink/15 pt-5">
              {job.benefits.map((b) => (
                <li key={b} className="flex justify-between gap-4 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="text-signal-deep">&rarr;</span>
                    {b.split(" (placeholder")[0]}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={FULL_APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
              >
                Apply now
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}