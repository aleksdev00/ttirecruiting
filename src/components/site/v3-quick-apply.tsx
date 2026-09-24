"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  EMPLOYMENT_PREFERENCE_OPTIONS,
  PAY_TYPE_OPTIONS,
  QuickApplyClientSchema,
  SAP_OPTIONS,
  SAP_STATUS_OPTIONS,
} from "@/lib/quick-apply/schema";
import type { QuickApplyClientValues } from "@/lib/quick-apply/schema";

type FormValues = QuickApplyClientValues;

type FormState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }
  | { kind: "success" };

const TEXT_INPUT_CLASS =
  "h-12 w-full border border-paper/30 bg-ink px-4 font-ledger text-xs font-semibold uppercase tracking-[0.18em] text-paper placeholder:text-paper/40 focus:border-signal";

const PILL_BASE_CLASS =
  "min-h-12 flex-1 cursor-pointer border px-4 font-ledger text-xs font-semibold uppercase tracking-[0.18em] transition-colors";

function pillClass(selected: boolean) {
  return selected
    ? `${PILL_BASE_CLASS} border-signal bg-signal text-ink`
    : `${PILL_BASE_CLASS} border-paper/30 text-paper/70 hover:border-paper/60 hover:text-paper`;
}

function OptionPills<T extends string>({
  options,
  selected,
  name,
  onSelect,
}: {
  options: readonly T[];
  selected: T | undefined;
  name: string;
  onSelect: (value: T) => void;
}) {
  return (
    <div role="radiogroup" className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label key={opt} className={`${pillClass(selected === opt)} flex-1`}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={selected === opt}
            onChange={() => onSelect(opt)}
            className="sr-only"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export function V3QuickApply() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(QuickApplyClientSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      sap: "No",
      sapStatus: undefined,
      employmentPreference: undefined,
      payType: undefined,
      phone: "",
      contactConsent: false,
    },
  });

  const sap = useWatch({ control, name: "sap" });
  const sapStatus = useWatch({ control, name: "sapStatus" });
  const employmentPreference = useWatch({
    control,
    name: "employmentPreference",
  });
  const payType = useWatch({ control, name: "payType" });
  const [state, setState] = useState<FormState>({ kind: "idle" });

  function clearStateOnPick() {
    if (state.kind === "error") setState({ kind: "idle" });
  }

  const pickSap = (value: "No" | "Yes") => {
    setValue("sap", value, { shouldValidate: true, shouldDirty: true });
    clearStateOnPick();
  };
  const pickSapStatus = (value: "Open" | "Resolved") => {
    setValue("sapStatus", value, { shouldValidate: true, shouldDirty: true });
    clearStateOnPick();
  };
  const pickEmployment = (value: "Company" | "Lease") => {
    setValue("employmentPreference", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
    clearStateOnPick();
  };
  const pickPayType = (value: "W2" | "1099") => {
    setValue("payType", value, { shouldValidate: true, shouldDirty: true });
    clearStateOnPick();
  };

  async function onSubmit(values: FormValues) {
    const consent = Boolean(values.contactConsent);
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/quick-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          sap: values.sap,
          ...(values.sap === "Yes" ? { sapStatus: values.sapStatus } : {}),
          employmentPreference: values.employmentPreference,
          payType: values.payType,
          phone: values.phone,
          contactConsent: consent,
          termsAccepted: consent,
          privacyAccepted: consent,
        }),
      });

      const resBody = (await res.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (res.ok) {
        setState({ kind: "success" });
        reset();
      } else {
        setState({
          kind: "error",
          message:
            resBody?.message ??
            "Your submission could not be delivered. Please confirm your details and try again.",
        });
      }
    } catch {
      setState({
        kind: "error",
        message: "Network error. Your submission could not be sent. Try again.",
      });
    }
  }

  return (
    <section
      id="quick-apply"
      className="v3-plate scroll-mt-16 bg-ink text-paper"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-5">
          <p className="v3-fade font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal">
            Quick apply
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.88] tracking-tight">
            Tell us about
            <br />
            you<span className="text-signal">.</span>
          </h2>
          <p className="v3-fade mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            A short 30-second profile. Tell us how to reach you and how you
            want to work. If there&apos;s a potential fit, recruiting calls
            you.
          </p>

          <ul className="v3-fade mt-8 space-y-3 border-t border-paper/25 pt-6">
            {[
              "30 seconds -- no long application yet",
              "We match your preferences against current opportunities",
              "The full application comes only after you talk with recruiting",
            ].map((li) => (
              <li
                key={li}
                className="flex items-start gap-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/80"
              >
                <span aria-hidden className="mt-0.5 text-signal">
                  &rarr;
                </span>
                {li}
              </li>
            ))}
          </ul>

          <p className="v3-fade mt-7 font-ledger text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">
            Quick Apply is a lead, not a job offer. Consent to be contacted is
            required.
          </p>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="border border-paper/25 bg-ink p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="qa-first-name"
                  className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70"
                >
                  First name <span className="text-signal">*</span>
                </label>
                <input
                  id="qa-first-name"
                  type="text"
                  autoComplete="given-name"
                  className={`${TEXT_INPUT_CLASS} mt-2`}
                  {...register("firstName")}
                />
                {errors.firstName ? (
                  <p className="mt-1 text-xs text-signal">
                    {errors.firstName.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="qa-last-name"
                  className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70"
                >
                  Last name <span className="text-signal">*</span>
                </label>
                <input
                  id="qa-last-name"
                  type="text"
                  autoComplete="family-name"
                  className={`${TEXT_INPUT_CLASS} mt-2`}
                  {...register("lastName")}
                />
                {errors.lastName ? (
                  <p className="mt-1 text-xs text-signal">
                    {errors.lastName.message}
                  </p>
                ) : null}
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                Do you have SAP? <span className="text-signal">*</span>
              </legend>
              <div className="mt-2">
                <OptionPills
                  options={SAP_OPTIONS}
                  selected={sap}
                  name="sap"
                  onSelect={pickSap}
                />
              </div>
              {errors.sap ? (
                <p className="mt-1 text-xs text-signal">{errors.sap.message}</p>
              ) : null}
            </fieldset>

            {sap === "Yes" ? (
              <fieldset className="mt-6">
                <legend className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                  SAP status <span className="text-signal">*</span>
                </legend>
                <div className="mt-2">
                  <OptionPills
                    options={SAP_STATUS_OPTIONS}
                    selected={sapStatus}
                    name="sapStatus"
                    onSelect={pickSapStatus}
                  />
                </div>
                {errors.sapStatus ? (
                  <p className="mt-1 text-xs text-signal">
                    {errors.sapStatus.message}
                  </p>
                ) : null}
              </fieldset>
            ) : null}

            <fieldset className="mt-6">
              <legend className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                Employment preference <span className="text-signal">*</span>
              </legend>
              <div className="mt-2">
                <OptionPills
                  options={EMPLOYMENT_PREFERENCE_OPTIONS}
                  selected={employmentPreference}
                  name="employmentPreference"
                  onSelect={pickEmployment}
                />
              </div>
              {errors.employmentPreference ? (
                <p className="mt-1 text-xs text-signal">
                  {errors.employmentPreference.message}
                </p>
              ) : null}
            </fieldset>

            <fieldset className="mt-6">
              <legend className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70">
                Pay type preference <span className="text-signal">*</span>
              </legend>
              <div className="mt-2">
                <OptionPills
                  options={PAY_TYPE_OPTIONS}
                  selected={payType}
                  name="payType"
                  onSelect={pickPayType}
                />
              </div>
              {errors.payType ? (
                <p className="mt-1 text-xs text-signal">
                  {errors.payType.message}
                </p>
              ) : null}
            </fieldset>

            <div className="mt-6">
              <label
                htmlFor="qa-phone"
                className="font-ledger text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/70"
              >
                Phone number <span className="text-signal">*</span>
              </label>
              <input
                id="qa-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className={`${TEXT_INPUT_CLASS} mt-2`}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="mt-1 text-xs text-signal">
                  {errors.phone.message}
                </p>
              ) : null}
            </div>

            <div className="mt-6 border border-paper/25 p-5">
              <label className="flex items-start gap-3 text-sm leading-relaxed text-paper">
                <input
                  type="checkbox"
                  {...register("contactConsent")}
                  className="mt-1 h-4 w-4 shrink-0 accent-signal"
                />
                <span>
                  I consent to TTI Recruiting contacting me about potential
                  driving opportunities. I accept the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-signal underline underline-offset-4 hover:text-paper"
                  >
                    Terms of Service
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-signal underline underline-offset-4 hover:text-paper"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.contactConsent ? (
                <p className="mt-2 text-xs text-signal">
                  {errors.contactConsent.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={state.kind === "submitting"}
              className="group mt-7 inline-flex h-14 w-full items-center justify-center gap-3 bg-signal px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.kind === "submitting" ? "Submitting..." : "Submit quick apply"}
              {state.kind !== "submitting" ? (
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              ) : null}
            </button>

            {state.kind === "success" ? (
              <div className="mt-6 border border-paper/25 p-5">
                <p className="font-display text-xl uppercase leading-none tracking-tight">
                  Received<span className="text-signal">.</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  Your Quick Apply was sent to the recruiting desk. We review
                  your profile and call you if there&apos;s a potential
                  match.
                </p>
              </div>
            ) : null}

            {state.kind === "error" ? (
              <div className="mt-6 border border-signal/50 p-5">
                <p className="font-display text-xl uppercase leading-none tracking-tight">
                  Not sent yet<span className="text-signal">.</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/80">
                  {state.message}
                </p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}