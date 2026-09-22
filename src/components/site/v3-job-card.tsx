import Link from "next/link";
import type { JobPosting, DrivingType } from "@/lib/jobs";

const LANE_META: Record<DrivingType, { index: string; name: string }> = {
  OTR: { index: "01", name: "The Long Haul" },
  Regional: { index: "02", name: "The Loop" },
  Local: { index: "03", name: "The Day Lap" },
  Dedicated: { index: "04", name: "The Account" },
};

export function V3JobCard({ job }: { job: JobPosting }) {
  const meta = LANE_META[job.drivingType];
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex flex-col gap-4 border border-ink/20 bg-paper p-6 transition-colors duration-200 hover:border-signal-deep sm:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.26em] text-signal-deep">
          {meta.index} / {job.drivingType}
        </span>
        <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
          {job.equipment}
        </span>
      </div>

      <p className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
        {job.title}
      </p>

      <p className="max-w-prose text-sm leading-relaxed text-ink/70">{job.summary}</p>

      <dl className="mt-auto space-y-2 border-t border-ink/15 pt-4 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-faint">Home time</dt>
          <dd>{job.homeTime.label}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-faint">Location</dt>
          <dd className="text-right">{job.locationLabel}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-faint">Pay</dt>
          <dd>
            {job.pay.payTypeNote}
            {job.pay.signOn > 0 ? ` / sign-on ${job.pay.signOn} (placeholder)` : ""}
          </dd>
        </div>
      </dl>

      <span className="mt-2 inline-flex h-11 items-center justify-center border border-ink/40 px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors group-hover:bg-signal-deep group-hover:text-paper group-hover:border-signal-deep">
        See the lane <span aria-hidden>&rarr;</span>
      </span>
    </Link>
  );
}