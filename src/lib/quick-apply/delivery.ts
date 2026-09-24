/*
 * Quick Apply lead delivery adapter (server-only).
 *
 * No email provider or credentials are configured in this repository, so we
 * must NOT claim a lead was delivered. To go live, implement delivery here
 * (e.g., Resend, SendGrid, SMTP) sending composeQuickApplyEmail(lead).to the
 * destination inbox, then return { ok: true, provider } on success. The
 * client form stays unchanged -- only this function (and the future
 * persistence/integration layer) needs to be wired.
 */
import { composeQuickApplyEmail } from "./compose";
import type { QuickApplyCanonicalLead } from "./schema";

export type LeadDeliveryResult =
  | { ok: true; provider: string }
  | { ok: false; code: "NOT_CONFIGURED" | "DELIVERY_FAILED"; message: string };

export async function deliverQuickApplyLead(
  lead: QuickApplyCanonicalLead,
): Promise<LeadDeliveryResult> {
  const email = composeQuickApplyEmail(lead);
  void email;

  return {
    ok: false,
    code: "NOT_CONFIGURED",
    message:
      "Automatic email delivery is not configured on this site yet, so this lead was validated but not sent.",
  };
}