import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { V3Quiz } from "@/components/site/v3-quiz";

export const metadata: Metadata = {
  title: "Find Your Fit",
  description:
    "Answer a few questions and we will match you to the driving lane that fits your schedule, equipment, and experience.",
  alternates: { canonical: "/find-your-fit" },
  openGraph: {
    title: "Find Your Fit | TTI Recruiting",
    description:
      "Answer a few questions and we will match you to the driving lane that fits your schedule, equipment, and experience.",
    url: `${SITE_URL}/find-your-fit`,
    type: "website",
  },
};

export default function FindYourFitPage() {
  return <V3Quiz />;
}