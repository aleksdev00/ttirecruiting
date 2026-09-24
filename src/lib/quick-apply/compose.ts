import { QUICK_APPLY_DESTINATION_EMAIL } from "./config";
import type { QuickApplyLead } from "./schema";

export interface ComposedQuickApplyEmail {
  to: string;
  subject: string;
  text: string;
}

export function composeQuickApplyEmail(
  lead: QuickApplyLead,
): ComposedQuickApplyEmail {
  const lines = [
    "Quick Apply Lead -- TTI Recruiting",
    "",
    `First Name: ${lead.firstName}`,
    `Last Name: ${lead.lastName}`,
    `SAP: ${lead.sap}`,
    ...(lead.sapStatus ? [`SAP Status: ${lead.sapStatus}`] : []),
    `Employment preference: ${lead.employmentPreference}`,
    `Pay type: ${lead.payType}`,
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