"use client";

import * as React from "react";
import Link from "next/link";
import { JOBS, DRIVING_TYPES, EQUIPMENT_OPTIONS } from "@/lib/jobs";
import {
  matchJobs,
  matchStrongness,
  REASON_LABELS,
  type QuizAnswers,
} from "@/lib/matching";

const HOME_TIME_OPTIONS = [
  { value: "Daily" as const, label: "Daily", blurb: "Home most nights" },
  { value: "Weekly" as const, label: "Weekly", blurb: "Home every weekend" },
  { value: "Bi-weekly" as const, label: "Bi-weekly", blurb: "Home every other weekend" },
  { value: "Monthly" as const, label: "Monthly", blurb: "Home about once a month" },
];

const CDL_OPTIONS = ["A", "B", "C", "Non-CDL"] as const;

type Step =
  | { name: "driving"; index: number }
  | { name: "home-time"; index: number }
  | { name: "equipment"; index: number }
  | { name: "cdl"; index: number }
  | { name: "results"; index: number };

const STEP_TITLES: Record<Step["name"], string> = {
  driving: "Choose your lane",
  "home-time": "How much home time?",
  equipment: "What will you pull?",
  cdl: "Your CDL & experience",
  results: "Your matches",
};

export function V3Quiz({
  initialAnswers,
  startAtResults = false,
}: {
  initialAnswers?: Partial<QuizAnswers>;
  startAtResults?: boolean;
} = {}) {
  const [step, setStep] = React.useState<number>(startAtResults ? 4 : 0);
  const [answers, setAnswers] = React.useState<QuizAnswers>({
    experienceYears: 0,
    ...initialAnswers,
  });

  const steps: Step[] = [
    { name: "driving", index: 0 },
    { name: "home-time", index: 1 },
    { name: "equipment", index: 2 },
    { name: "cdl", index: 3 },
    { name: "results", index: 4 },
  ];
  const current = steps[Math.min(step, steps.length - 1)];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const set = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) =>
    setAnswers((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          Find your fit / {current.index + 1} of {steps.length}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,5rem)] uppercase leading-[0.86] tracking-tight">
          {STEP_TITLES[current.name]}
          <span className="text-signal-deep">.</span>
        </h1>

        <div className="mt-8 h-px w-full max-w-md bg-ink/15">
          <div
            className="h-px bg-signal-deep transition-all duration-300"
            style={{ width: `${(current.index / (steps.length - 1)) * 100}%` }}
          />
        </div>

        <div className="mt-10">
          {current.name === "driving" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {DRIVING_TYPES.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => {
                    set("drivingType", t.slug);
                    next();
                  }}
                  className="group border border-ink/25 bg-paper p-6 text-left transition-colors hover:border-ink hover:bg-paper-deep"
                >
                  <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                    Lane type
                  </span>
                  <span className="mt-3 block font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                    {t.label}
                    <span aria-hidden className="text-signal-deep">
                      .
                    </span>
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-ink/70">
                    {t.blurb}
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          {current.name === "home-time" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {HOME_TIME_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    set("homeTime", o.value);
                    next();
                  }}
                  className="group border border-ink/25 bg-paper p-6 text-left transition-colors hover:border-ink hover:bg-paper-deep"
                >
                  <span className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                    {o.label}
                    <span aria-hidden className="text-signal-deep">
                      .
                    </span>
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-ink/70">
                    {o.blurb}
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          {current.name === "equipment" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {EQUIPMENT_OPTIONS.map((eq) => (
                <button
                  key={eq}
                  type="button"
                  onClick={() => {
                    set("equipment", eq);
                    next();
                  }}
                  className="group border border-ink/25 bg-paper p-6 text-left transition-colors hover:border-ink hover:bg-paper-deep"
                >
                  <span className="font-display text-2xl uppercase leading-none tracking-tight">
                    {eq}
                    <span aria-hidden className="text-signal-deep">
                      .
                    </span>
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          {current.name === "cdl" ? (
            <div className="max-w-md">
              <fieldset className="space-y-3">
                <legend className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70">
                  Your CDL class
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {CDL_OPTIONS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => set("cdlClass", c)}
                      className={
                        answers.cdlClass === c
                          ? "border border-ink bg-ink px-4 py-3 font-display text-xl uppercase tracking-tight text-paper"
                          : "border border-ink/25 bg-paper px-4 py-3 font-display text-xl uppercase tracking-tight text-ink transition-colors hover:border-ink"
                      }
                      aria-pressed={answers.cdlClass === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8">
                <label
                  htmlFor="quiz-experience"
                  className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/70"
                >
                  Years of driving experience
                </label>
                <input
                  id="quiz-experience"
                  type="number"
                  min={0}
                  max={60}
                  value={answers.experienceYears}
                  onChange={(e) =>
                    set("experienceYears", Number(e.target.value) || 0)
                  }
                  className="mt-2 block h-12 w-32 border border-ink/30 bg-paper px-3 font-display text-2xl tracking-tight focus:border-signal-deep focus:outline-none"
                />
              </div>
            </div>
          ) : null}

          {current.name === "results" ? (
            <QuizResults answers={answers} />
          ) : null}
        </div>

        <div className="mt-10 flex items-center gap-4">
          {current.name !== "results" ? (
            <>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex h-12 items-center justify-center border border-ink/40 px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Back
                </button>
              ) : null}
              {current.name === "cdl" ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-12 items-center justify-center bg-signal px-8 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
                >
                  Show my matches
                </button>
              ) : null}
            </>
          ) : (
            <Link
              href="/find-your-fit"
              className="inline-flex h-12 items-center justify-center border border-ink/40 px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Restart quiz
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizResults({ answers }: { answers: QuizAnswers }) {
  const matches = React.useMemo(() => matchJobs(answers, JOBS), [answers]);
  const top = matches.slice(0, 3);

  return (
    <div>
      <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
        Ranked against our open lanes out of the Kansas City, MO terminal.
        Score reflects how closely a lane lines up with what you told us.
      </p>

      <div className="mt-8 grid gap-6">
        {top.map((m, i) => {
          const strength = matchStrongness(m);
          const pct = Math.round((m.score / m.maxScore) * 100);
          return (
            <article
              key={m.job.slug}
              className="border border-ink/20 bg-paper-deep p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
                  Match {i + 1}
                </span>
                <span
                  className={
                    strength === "strong"
                      ? "font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3a5c44]"
                      : strength === "medium"
                        ? "font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint"
                        : "font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint"
                  }
                >
                  {strength.toUpperCase()} FIT
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                  {m.job.title}
                  <span aria-hidden className="text-signal-deep">
                    .
                  </span>
                </h2>
                <span className="font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  {m.job.drivingType} / {m.job.equipment} /{" "}
                  {m.job.homeTime.label}
                </span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
                {m.job.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {m.reasons.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-2 font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full bg-signal-deep"
                    />
                    {REASON_LABELS[r]}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
                <span className="font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  {pct}% aligned
                </span>
                <Link
                  href={`/apply/${m.job.slug}`}
                  className="group inline-flex h-11 items-center justify-center gap-3 bg-signal px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep"
                >
                  Apply
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {matches.length === 0 ? (
        <div className="border border-ink/20 bg-paper-deep p-8">
          <p className="font-display text-2xl uppercase tracking-tight">
            No open lanes fit those choices
            <span className="text-signal-deep">.</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
            Try a different combination, or contact recruiting and we will let
            you know when a lane opens up.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex h-11 items-center justify-center border border-ink/40 px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Contact recruiting
          </Link>
        </div>
      ) : null}

      <p className="mt-6 max-w-2xl font-ledger text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
        Pay, home time, and miles are placeholders pending verified hiring
        terms. Matching is a guide, not a guarantee.
      </p>
    </div>
  );
}