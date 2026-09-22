"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applySchema,
  EMPTY_APPLY,
  cdlClassValues,
  type ApplyFormValues,
} from "@/lib/apply-schema";
import { applicationRepository } from "@/lib/applications";

type SubmitState =
  | { kind: "idle" }
  | { kind: "pending" }
  | { kind: "error"; message: string }
  | { kind: "done"; reference: string };

const inputClass =
  "h-11 w-full border border-ink/30 bg-paper px-3 font-ledger text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-signal-deep focus:outline-none min-w-0";
const labelClass =
  "font-ledger text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/70";
const msgClass = "mt-1.5 font-ledger text-[11px] text-[#a13c2d]";

export function ApplyForm({
  jobSlug,
  jobTitle,
}: {
  jobSlug: string;
  jobTitle: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: EMPTY_APPLY,
    mode: "onBlur",
  });

  const [state, setState] = React.useState<SubmitState>({ kind: "idle" });

  const onSubmit = async (values: ApplyFormValues) => {
    setState({ kind: "pending" });
    try {
      const result = await applicationRepository.submit({
        jobSlug,
        payload: values,
      });
      setState({ kind: "done", reference: result.id });
    } catch (err) {
      setState({
        kind: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong. Try again.",
      });
    }
  };

  if (state.kind === "done") {
    return (
      <div className="border border-ink/20 bg-paper-deep p-8">
        <p className="font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
          Application received
        </p>
        <p className="mt-4 font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
          We got it<span className="text-signal-deep">.</span>
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
          Reference {state.reference}. A recruiting representative will reach
          out to the email or phone you provided -- only if you consented. This
          is a demo submission recorded locally in your browser.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/jobs"
            className="inline-flex h-11 items-center justify-center border border-ink/40 px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Back to open lanes
          </Link>
          <Link
            href="/find-your-fit"
            className="inline-flex h-11 items-center justify-center bg-signal-deep px-6 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink hover:text-paper"
          >
            Find your fit
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={inputClass}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-msg" : undefined}
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p id="firstName-msg" className={msgClass} role="alert">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className={inputClass}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-msg" : undefined}
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p id="lastName-msg" className={msgClass} role="alert">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-msg" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-msg" className={msgClass} role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-ink-faint">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-msg" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-msg" className={msgClass} role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="cdlClass" className={labelClass}>
            CDL class
          </label>
          <select
            id="cdlClass"
            className={inputClass}
            aria-invalid={Boolean(errors.cdlClass)}
            {...register("cdlClass")}
          >
            {cdlClassValues.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.cdlClass ? (
            <p className={msgClass} role="alert">
              {errors.cdlClass.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="experienceYears" className={labelClass}>
            Years of experience
          </label>
          <input
            id="experienceYears"
            type="number"
            inputMode="numeric"
            min={0}
            max={60}
            className={inputClass}
            aria-invalid={Boolean(errors.experienceYears)}
            aria-describedby={
              errors.experienceYears ? "experienceYears-msg" : undefined
            }
            {...register("experienceYears", { valueAsNumber: true })}
          />
          {errors.experienceYears ? (
            <p id="experienceYears-msg" className={msgClass} role="alert">
              {errors.experienceYears.message}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className={labelClass}>
            Current city, state{" "}
            <span className="text-ink-faint">(optional)</span>
          </label>
          <input
            id="location"
            type="text"
            autoComplete="address-level2"
            className={inputClass}
            {...register("location")}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Anything we should know?{" "}
            <span className="text-ink-faint">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className={inputClass + " h-auto py-2.5"}
            {...register("message")}
          />
        </div>
      </div>

      {/* CONSENT-FIRST */}
      <fieldset className="mt-8 border border-ink/20 bg-paper-deep p-5">
        <legend className="px-1 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-signal-deep">
          Your consent
        </legend>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/70">
          We only use your details to contact you about this {jobTitle}
          position. You can opt out at any time. By applying you confirm the
          details are accurate.
        </p>

        <div className="mt-5 space-y-4">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/40 bg-paper">
              <input
                type="checkbox"
                className="peer sr-only"
                aria-describedby={
                  errors.consentContact ? "consentContact-msg" : undefined
                }
                {...register("consentContact")}
              />
              <span
                aria-hidden
                className="flex h-full w-full items-center justify-center bg-signal-deep text-paper opacity-0 peer-checked:opacity-100"
              >
                &check;
              </span>
            </span>
            <span>
              I consent to being contacted by TTI Recruiting about this
              application, including by phone or SMS at the number I provide.
            </span>
          </label>
          {errors.consentContact ? (
            <p id="consentContact-msg" className={msgClass} role="alert">
              {errors.consentContact.message}
            </p>
          ) : null}

          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/40 bg-paper">
              <input
                type="checkbox"
                className="peer sr-only"
                aria-describedby={
                  errors.consentPrivacy ? "consentPrivacy-msg" : undefined
                }
                {...register("consentPrivacy")}
              />
              <span
                aria-hidden
                className="flex h-full w-full items-center justify-center bg-signal-deep text-paper opacity-0 peer-checked:opacity-100"
              >
                &check;
              </span>
            </span>
            <span>
              I have read the{" "}
              <Link
                href="/privacy"
                className="underline decoration-signal-deep underline-offset-2 hover:text-signal-deep"
              >
                privacy notice
              </Link>{" "}
              and understand how my information is used.
            </span>
          </label>
          {errors.consentPrivacy ? (
            <p id="consentPrivacy-msg" className={msgClass} role="alert">
              {errors.consentPrivacy.message}
            </p>
          ) : null}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={state.kind === "pending"}
        className="group mt-8 inline-flex h-14 w-full items-center justify-center gap-3 bg-signal px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state.kind === "pending" ? "Submitting..." : "Submit application"}
        {state.kind === "pending" ? null : (
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        )}
      </button>

      {state.kind === "error" ? (
        <p className="mt-4" role="alert">
          <span className="inline-flex items-center gap-2 border border-[#a13c2d]/40 bg-paper-deep px-3 py-2 font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a13c2d]">
            {state.message}
          </span>
        </p>
      ) : null}
    </form>
  );
}