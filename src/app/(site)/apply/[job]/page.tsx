import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobBySlug, JOBS } from "@/lib/jobs";
import { ApplyForm } from "@/components/site/v3-apply-form";

type Props = {
  params: Promise<{ job: string }>;
};

export function generateStaticParams() {
  return JOBS.map((job) => ({ job: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { job: slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return { title: "Application not available", robots: { index: false } };
  }
  return {
    title: `Apply | ${job.title}`,
    description: `Apply for the ${job.title} position with TTI Recruiting.`,
    alternates: { canonical: `/apply/${job.slug}` },
    robots: { index: false },
  };
}

export default async function ApplyPage({ params }: Props) {
  const { job: jobSlug } = await params;
  const job = getJobBySlug(jobSlug);
  if (!job) {
    notFound();
  }

  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
              Application / {job.drivingType}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.5rem)] uppercase leading-[0.86] tracking-tight">
              Apply now<span className="text-signal-deep">.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              For {job.title}. Two minutes. Tell us who you are and we will
              call back on consent.
            </p>

            <div className="mt-8 border border-ink/20 bg-paper-deep p-5">
              <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                On this lane
              </p>
              <dl className="mt-3 grid gap-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80 sm:grid-cols-2">
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Home time</dt>
                  <dd>{job.homeTime.label}</dd>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Equipment</dt>
                  <dd>{job.equipment}</dd>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Experience</dt>
                  <dd>{job.experience}+ yrs</dd>
                </div>
                <div className="flex justify-between border-b border-ink/10 pb-2">
                  <dt className="text-ink-faint">Location</dt>
                  <dd>{job.locationLabel}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-10">
              <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-ink/20 bg-ink p-6 text-paper sm:p-8">
              <p className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal">
                Good to know
              </p>
              <ul className="mt-5 space-y-4">
                {job.benefits.map((b) => (
                  <li key={b} className="flex items-baseline gap-3 text-sm text-paper/80">
                    <span aria-hidden className="text-signal">
                      &rarr;
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 max-w-md font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Pay, miles, and orientation figures are placeholders pending
              verified hiring terms. See the privacy notice before you submit.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}