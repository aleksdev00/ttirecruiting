import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobBySlug, jobRepository, JOBS } from "@/lib/jobs";
import { SITE_URL } from "@/lib/site";
import { V3JobDetail } from "@/components/site/v3-job-detail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return {
      title: "Lane not found",
      robots: { index: false },
    };
  }
  return {
    title: job.title,
    description: job.summary,
    alternates: { canonical: `/jobs/${job.slug}` },
    openGraph: {
      title: `${job.title} | TTI Recruiting`,
      description: job.summary,
      url: `${SITE_URL}/jobs/${job.slug}`,
      type: "article",
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await jobRepository.getJobBySlug(slug);
  if (!job) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary,
    validThrough: job.postingMeta.validThrough,
    employmentType: job.postingMeta.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "TTI Recruiting Inc. (placeholder)",
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kansas City",
        addressRegion: "MO",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        unitText: "WEEK",
        value: job.pay.weekly,
      },
    },
  };

  return (
    <>
      <V3JobDetail job={job} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}