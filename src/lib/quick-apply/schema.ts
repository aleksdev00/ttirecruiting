import { z } from "zod";

export const SAP_OPTIONS = ["No", "Yes"] as const;
export const SAP_STATUS_OPTIONS = ["Open", "Resolved"] as const;
export const EMPLOYMENT_PREFERENCE_OPTIONS = ["Company", "Lease"] as const;
export const PAY_TYPE_OPTIONS = ["W2", "1099"] as const;

const fieldSpecs = {
  firstName: z.string().trim().min(1, "First name is required.").max(120),
  lastName: z.string().trim().min(1, "Last name is required.").max(120),
  sap: z.enum(SAP_OPTIONS, { message: "Choose No or Yes." }),
  sapStatus: z.enum(SAP_STATUS_OPTIONS).optional(),
  employmentPreference: z.enum(EMPLOYMENT_PREFERENCE_OPTIONS, {
    message: "Choose Company or Lease.",
  }),
  payType: z.enum(PAY_TYPE_OPTIONS, { message: "Choose W2 or 1099." }),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is required.")
    .max(30)
    .regex(/^(?=.*\d)[\d\s()+\-.]+$/, "Enter a valid phone number."),
};

function sapStatusRequired(
  data: { sap: "No" | "Yes"; sapStatus?: string },
  ctx: z.RefinementCtx,
) {
  if (data.sap === "Yes" && !data.sapStatus) {
    ctx.addIssue({
      code: "custom",
      path: ["sapStatus"],
      message: "SAP status is required when SAP = Yes.",
    });
  }
}

function sapStatusContradiction(
  data: { sap: "No" | "Yes"; sapStatus?: string },
  ctx: z.RefinementCtx,
) {
  if (data.sap === "No" && data.sapStatus) {
    ctx.addIssue({
      code: "custom",
      path: ["sapStatus"],
      message: "SAP status must be empty when SAP = No.",
    });
  }
}

/*
 * Schema used by the client form. Consent is a single boolean: the checkbox
 * covers contact consent, Terms acceptance, and Privacy Policy
 * acknowledgment. The wire schema below expands it into three flags.
 */
export const QuickApplyClientSchema = z
  .object({
    ...fieldSpecs,
    contactConsent: z
      .boolean()
      .refine((v) => v === true, "Contact consent is required."),
  })
  .superRefine(sapStatusRequired)
  .superRefine(sapStatusContradiction);

export type QuickApplyClientValues = z.infer<typeof QuickApplyClientSchema>;

/*
 * Wire schema used by the API route. All three consent flags must be true;
 * the checkbox alone gates submission and maps to all three.
 */
export const QuickApplyLeadInputSchema = z
  .object({
    ...fieldSpecs,
    contactConsent: z.literal(true, {
      message: "Contact consent is required.",
    }),
    termsAccepted: z.literal(true, {
      message: "Acceptance of the Terms of Service is required.",
    }),
    privacyAccepted: z.literal(true, {
      message: "Acceptance of the Privacy Policy is required.",
    }),
  })
  .superRefine(sapStatusRequired)
  .superRefine(sapStatusContradiction);

export type QuickApplyLeadInput = z.infer<typeof QuickApplyLeadInputSchema>;

export const QuickApplyLeadSchema = QuickApplyLeadInputSchema.extend({
  submittedAt: z.string().datetime(),
});

export type QuickApplyLead = z.infer<typeof QuickApplyLeadSchema>;

export const QUICK_APPLY_FORM_TYPE = "quick_apply" as const;

export const SAP_STATUS_CANONICAL = ["open", "resolved"] as const;

export const PROCESSING_STATUS = [
  "received",
  "delivery_not_configured",
] as const;

export const QuickApplyCanonicalSchema = z
  .object({
    submissionId: z.string().regex(
      /^QA-\d{8}-[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{4}$/,
    ),
    formType: z.literal(QUICK_APPLY_FORM_TYPE),
    submittedAt: z.string().datetime(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    normalizedPhone: z.string(),
    hasSAP: z.boolean(),
    sapStatus: z.enum(SAP_STATUS_CANONICAL).nullable(),
    employmentPreference: z.enum(EMPLOYMENT_PREFERENCE_OPTIONS),
    payTypePreference: z.enum(PAY_TYPE_OPTIONS),
    contactConsent: z.literal(true),
    termsAccepted: z.literal(true),
    privacyAccepted: z.literal(true),
    sourceUrl: z.string().nullable(),
    referralCode: z.string().nullable(),
    recruiter: z.string().nullable(),
    processingStatus: z.enum(PROCESSING_STATUS),
  })
  .superRefine((data, ctx) => {
    if (!data.hasSAP && data.sapStatus !== null) {
      ctx.addIssue({
        code: "custom",
        path: ["sapStatus"],
        message: "SAP status must be null when SAP is not held.",
      });
    }
    if (data.hasSAP && data.sapStatus === null) {
      ctx.addIssue({
        code: "custom",
        path: ["sapStatus"],
        message: "SAP status is required when SAP is held.",
      });
    }
  });

export type QuickApplyCanonicalLead = z.infer<typeof QuickApplyCanonicalSchema>;