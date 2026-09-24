import { generateQuickApplySubmissionId } from "./ids";
import { normalizePhone } from "./normalize";
import {
  QUICK_APPLY_FORM_TYPE,
  QuickApplyCanonicalSchema,
} from "./schema";
import type { QuickApplyLeadInput } from "./schema";

export function buildCanonicalLead(
  input: QuickApplyLeadInput,
  now: Date = new Date(),
) {
  const hasSAP = input.sap === "Yes";
  return QuickApplyCanonicalSchema.parse({
    submissionId: generateQuickApplySubmissionId(now),
    formType: QUICK_APPLY_FORM_TYPE,
    submittedAt: now.toISOString(),
    firstName: input.firstName,
    lastName: input.lastName,
    phone: input.phone,
    normalizedPhone: normalizePhone(input.phone),
    hasSAP,
    sapStatus:
      hasSAP && input.sapStatus
        ? (input.sapStatus.toLowerCase() as "open" | "resolved")
        : null,
    employmentPreference: input.employmentPreference,
    payTypePreference: input.payType,
    contactConsent: input.contactConsent,
    termsAccepted: input.termsAccepted,
    privacyAccepted: input.privacyAccepted,
    sourceUrl: null,
    referralCode: null,
    recruiter: null,
    processingStatus: "received",
  });
}