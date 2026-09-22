/*
 * APPLY SCHEMA -- single source of truth for the application form's
 * validation rules. Used by the client form (react-hook-form + zod) and
 * reusable by any future server-side check. UI-free by design.
 *
 * ASCII only (repo policy).
 */

import { z } from "zod";

export const cdlClassValues = ["A", "B", "C", "Non-CDL"] as const;

export const applySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email address").max(254),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-().\s]{7,20}$/, "Enter a valid phone number (optional)")
    .optional()
    .or(z.literal("")),
  cdlClass: z.enum(cdlClassValues, { message: "Select a CDL class" }),
  experienceYears: z
    .number({ message: "Years of experience required" })
    .min(0, "Years of experience required")
    .max(60, "Enter a realistic number"),
  location: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  consentContact: z.boolean().refine((v) => v === true, {
    message: "We need your consent to contact you about this application.",
  }),
  consentPrivacy: z.boolean().refine((v) => v === true, {
    message: "You must agree to the privacy notice to apply.",
  }),
});

export type ApplyFormValues = z.infer<typeof applySchema>;

export const EMPTY_APPLY: ApplyFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  cdlClass: "A",
  experienceYears: 0,
  location: "",
  message: "",
  consentContact: false,
  consentPrivacy: false,
};