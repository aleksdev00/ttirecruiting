/*
 * MATCHING -- pure scoring engine for the Find Your Fit quiz.
 * -----------------------------------------
 * Takes quiz answers and scores every role in JOBS. No UI, no I/O.
 * Kept in its own module so it can be unit-tested and reused without
 * touching either the data layer or the components.
 *
 * ASCII only (repo policy).
 */

import type { JobPosting } from "@/lib/jobs";

export type QuizAnswers = {
  drivingType?: "OTR" | "Regional" | "Local" | "Dedicated";
  homeTime?: "Weekly" | "Bi-weekly" | "Semi-monthly" | "Monthly" | "Intermittent" | "Daily";
  equipment?: "Flatbed" | "Reefer" | "Dry Van" | "Tanker" | "Box Truck";
  cdlClass?: "A" | "B" | "C" | "Non-CDL";
  experienceYears: number;
};

export type MatchReason =
  | "driving-type"
  | "home-time"
  | "equipment"
  | "cdl-class"
  | "experience";

export type JobMatch = {
  job: JobPosting;
  score: number;
  maxScore: number;
  reasons: MatchReason[];
};

const CDL_RANK: Record<string, number> = { "A": 3, "B": 2, "C": 1, "Non-CDL": 0 };

export function scoreJob(job: JobPosting, answers: QuizAnswers): JobMatch {
  const reasons: MatchReason[] = [];
  let score = 0;
  const maxScore = 100;

  if (answers.drivingType) {
    if (job.drivingType === answers.drivingType) {
      score += 30;
      reasons.push("driving-type");
    } else if (
      (answers.drivingType === "Local" && job.drivingType === "Dedicated") ||
      (answers.drivingType === "Dedicated" && job.drivingType === "Local")
    ) {
      score += 12;
      reasons.push("driving-type");
    }
  }

  if (answers.homeTime) {
    const pool = answers.homeTime === "Daily" ? "Daily" : answers.homeTime;
    if (job.homeTime.type === pool) {
      score += 25;
      reasons.push("home-time");
    } else if (pool === "Weekly" && job.homeTime.type === "Bi-weekly") {
      score += 8;
      reasons.push("home-time");
    }
  }

  if (answers.equipment) {
    if (job.equipment === answers.equipment) {
      score += 20;
      reasons.push("equipment");
    }
  }

  const myRank = answers.cdlClass ? CDL_RANK[answers.cdlClass] ?? -1 : -1;
  const jobRank = CDL_RANK[job.cdlClass] ?? -1;
  if (myRank >= 0 && jobRank >= 0) {
    if (myRank >= jobRank) {
      score += 15;
      reasons.push("cdl-class");
    } else {
      score -= 15;
    }
  }

  if (answers.experienceYears >= 0) {
    if (answers.experienceYears >= job.experience) {
      score += 10;
      reasons.push("experience");
    } else if (answers.experienceYears >= job.experience - 1) {
      score += 5;
      reasons.push("experience");
    }
  }

  return { job, score: Math.max(0, score), maxScore, reasons };
}

export function matchJobs(answers: QuizAnswers, jobs: JobPosting[]): JobMatch[] {
  return jobs
    .filter((job) => {
      const jobRank = CDL_RANK[job.cdlClass] ?? -1;
      const myRank = answers.cdlClass ? CDL_RANK[answers.cdlClass] ?? -1 : -1;
      if (myRank >= 0 && jobRank > myRank) {
        return false;
      }
      return true;
    })
    .map((job) => scoreJob(job, answers))
    .sort((a, b) => b.score - a.score);
}

export function matchStrongness(match: JobMatch): "strong" | "medium" | "weak" {
  if (match.score >= 80) return "strong";
  if (match.score >= 50) return "medium";
  return "weak";
}

export const REASON_LABELS: Record<MatchReason, string> = {
  "driving-type": "Matches your preferred driving type",
  "home-time": "Home time lines up with your schedule",
  "equipment": "Trailer type you selected",
  "cdl-class": "Your CDL class qualifies",
  "experience": "Experience requirement is a fit",
};