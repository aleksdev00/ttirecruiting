import type { Metadata } from "next";
import { V3Quiz } from "@/components/site/v3-quiz";

export const metadata: Metadata = {
  title: "Find Your Fit",
  description:
    "Answer a few questions and we will match you to the driving lane that fits your schedule, equipment, and experience.",
  alternates: { canonical: "/find-your-fit" },
};

export default function FindYourFitPage() {
  return <V3Quiz />;
}