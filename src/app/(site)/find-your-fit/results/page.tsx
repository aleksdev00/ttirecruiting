import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { V3Quiz } from "@/components/site/v3-quiz";
import type { QuizAnswers } from "@/lib/matching";
import { DRIVING_TYPES, EQUIPMENT_OPTIONS } from "@/lib/jobs";

export function generateMetadata(): Metadata {
  return {
    title: "Your matches | Find Your Fit",
    description:
      "See how your driving preferences rank against open lanes out of the Kansas City, MO terminal.",
    alternates: { canonical: "/find-your-fit/results" },
    robots: { index: false },
  };
}

const HOME_TIME = ["Daily", "Weekly", "Bi-weekly", "Monthly"] as const;
const CDL = ["A", "B", "C", "Non-CDL"] as const;

type DrivingType = QuizAnswers["drivingType"];
type HomeTime = QuizAnswers["homeTime"];
type Equipment = QuizAnswers["equipment"];
type CdlClass = QuizAnswers["cdlClass"];

const DRIVING_SET = new Set<string>(DRIVING_TYPES.map((d) => d.slug));
const HOME_TIME_SET = new Set<string>(HOME_TIME);
const EQUIPMENT_SET = new Set<string>(EQUIPMENT_OPTIONS);
const CDL_SET = new Set<string>(CDL);

function parseAnswers(
  sp: Record<string, string | string[] | undefined>
): Record<string, string> {
  const out: Record<string, string> = {};
  const fields: (keyof QuizAnswers)[] = [
    "drivingType",
    "homeTime",
    "equipment",
    "cdlClass",
  ];
  for (const key of fields) {
    const v = sp[key];
    if (typeof v === "string") out[key] = v;
  }
  const exp = sp.experienceYears;
  if (typeof exp === "string" && /^\d+$/.test(exp)) {
    out.experienceYears = exp;
  }
  return out;
}

export default async function FindYourFitResultsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const answers: Partial<QuizAnswers> = {};

  const raw = parseAnswers(sp);
  if (raw.drivingType && DRIVING_SET.has(raw.drivingType)) {
    answers.drivingType = raw.drivingType as DrivingType;
  }
  if (raw.homeTime && HOME_TIME_SET.has(raw.homeTime)) {
    answers.homeTime = raw.homeTime as HomeTime;
  }
  if (raw.equipment && EQUIPMENT_SET.has(raw.equipment)) {
    answers.equipment = raw.equipment as Equipment;
  }
  if (raw.cdlClass && CDL_SET.has(raw.cdlClass)) {
    answers.cdlClass = raw.cdlClass as CdlClass;
  }
  if (raw.experienceYears) {
    answers.experienceYears = Number(raw.experienceYears);
  }

  // Without any reference state, don't show an empty results page --
  // send visitors back into the quiz.
  if (!raw.drivingType && !raw.homeTime && !raw.equipment && !raw.cdlClass) {
    redirect("/find-your-fit");
  }

  return <V3Quiz initialAnswers={answers} startAtResults />;
}