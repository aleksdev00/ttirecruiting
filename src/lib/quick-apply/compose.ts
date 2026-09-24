import { QUICK_APPLY_DESTINATION_EMAIL } from "./config";
import type { QuickApplyCanonicalLead } from "./schema";

export interface ComposedQuickApplyEmail {
  to: string;
  subject: string;
  text: string;
}

const SAP_STATUS_LABELS: Record<"open" | "resolved", string> = {
  open: "Open",
  resolved: "Resolved",
};

export function composeQuickApplyEmail(
  lead: QuickApplyCanonicalLead,
): ComposedQuickApplyEmail {
  const lines = [
    "Quick Apply Lead -- TTI Recruiting",
    `Form type: ${lead.formType}`,
    `Submission ID: ${lead.submissionId}`,
    "",
    `First Name: ${lead.firstName}`,
    `Last Name: ${lead.lastName}`,
    `SAP: ${lead.hasSAP ? "Yes" : "No"}`,
    ...(lead.sapStatus
      ? [`SAP Status: ${SAP_STATUS_LABELS[lead.sapStatus]}`]
      : []),
    `Employment preference: ${lead.employmentPreference}`,
    `Pay type: ${lead.payTypePreference}`,
    `Phone Number: ${lead.phone}`,
    "",
    "Contact Consent: Yes",
    "Terms of Service: Accepted",
    "Privacy Policy: Accepted",
    `Submission timestamp: ${lead.submittedAt}`,
  ];

  return {
    to: QUICK_APPLY_DESTINATION_EMAIL,
    subject: `Quick Apply Lead - ${lead.firstName} ${lead.lastName}`,
    text: lines.join("\n"),
  };
}