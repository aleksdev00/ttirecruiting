import type { Metadata } from "next";
import type { DrivingType, EquipmentType } from "@/lib/jobs";
import { jobRepository } from "@/lib/jobs";
import { V3PageHeader } from "@/components/site/v3-page-header";
import { JobsFilter } from "@/components/site/v3-jobs-filter";
import { V3JobCard } from "@/components/site/v3-job-card";

export const metadata: Metadata = {
  title: "Open Lanes",
  description:
    "Browse open CDL driving jobs from TTI Recruiting. Regional, OTR, local, and dedicated lanes out of the Kansas City, MO terminal.",
  alternates: { canonical: "/jobs" },
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

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pb-28">
        {jobs.length === 0 ? (
          <div className="border border-ink/20 bg-paper-deep p-10 text-center">
            <p className="font-display text-3xl uppercase leading-none tracking-tight">
              No lanes match.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
              Nothing on the board right now. Clear the filters, or check back
              once the next posting drops.
            </p>
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
      </div>
    </div>
  );
}