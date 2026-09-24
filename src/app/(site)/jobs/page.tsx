import type { Metadata } from "next";
import Link from "next/link";
import type { DrivingType, EquipmentType } from "@/lib/jobs";
import { jobRepository } from "@/lib/jobs";
import { SITE_URL } from "@/lib/site";
import { V3PageHeader } from "@/components/site/v3-page-header";
import { JobsFilter } from "@/components/site/v3-jobs-filter";
import { V3JobCard } from "@/components/site/v3-job-card";

export const metadata: Metadata = {
  title: "Open Lanes",
  description:
    "Browse open CDL driving jobs from TTI Recruiting. Regional, OTR, local, and dedicated lanes out of the Kansas City, MO terminal.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Open Lanes | TTI Recruiting",
    description:
      "Browse open CDL driving jobs from TTI Recruiting. Regional, OTR, local, and dedicated lanes out of the Kansas City, MO terminal.",
    url: `${SITE_URL}/jobs`,
    type: "website",
  },
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const asString = (v: string | string[] | undefined) =>
    typeof v === "string" ? v : undefined;
  const requestedType = asString(sp.type) as DrivingType | undefined;
  const requestedEq = asString(sp.eq) as EquipmentType | undefined;
  const requestedQ = asString(sp.q);

  const jobs = await jobRepository.searchJobs({
    drivingType: requestedType,
    equipment: requestedEq,
    query: requestedQ,
  });

  return (
    <div className="border-b border-ink/15">
      <V3PageHeader
        kicker="01 / Hiring desk"
        title={
          <>
            Open lanes<span className="text-signal-deep">.</span>
          </>
        }
        lede="Positions on the board out of the Kansas City terminal. Filter by lane, equipment, or keyword. Every posting lists the freight, home time, and rates before you call."
      />

      <JobsFilter />

      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 sm:px-6 lg:px-10">
        <p className="max-w-3xl border-l-2 border-signal-deep pl-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Available opportunities and terms are subject to confirmation with
          the carrier. Board data is a reference and was last reviewed
          September 22, 2026.
        </p>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {jobs.length === 0
          ? "No open lanes match the current filters."
          : `${jobs.length} open lane${jobs.length === 1 ? "" : "s"} shown.`}
      </p>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pb-28">
        <h2 className="sr-only">Open positions</h2>
        {jobs.length === 0 ? (
          <div className="border border-ink/20 bg-paper-deep p-10 text-center">
            <p className="font-display text-3xl uppercase leading-none tracking-tight">
              No lanes match.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              Nothing on the board with those filters right now. Apply once
              anyway -- we review every profile against current carrier
              opportunities and call you when there is a fit.
            </p>
            <Link
              href="/#quick-apply"
              className="group mt-7 inline-flex h-12 items-center justify-center gap-3 bg-signal-deep px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink"
            >
              Quick apply
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        ) : (
          <ul className="grid gap-5 md:grid-cols-2">
            {jobs.map((job) => (
              <li key={job.slug}>
                <V3JobCard job={job} />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-14 border border-ink/20 bg-ink p-8 text-paper sm:flex sm:items-center sm:justify-between sm:gap-10">
          <div>
            <p className="font-display text-3xl uppercase leading-none tracking-tight">
              Don&apos;t see your lane<span className="text-signal">.</span>
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70">
              Apply once and tell us what you&apos;re looking for. We review
              your profile against current carrier opportunities and call you
              directly when there is a match.
            </p>
          </div>
          <Link
            href="/#quick-apply"
            className="group mt-7 inline-flex h-14 shrink-0 items-center justify-center gap-3 bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep sm:mt-0"
          >
            Quick apply
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}