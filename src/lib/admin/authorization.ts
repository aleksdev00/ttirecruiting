import "server-only";

export type AdminAuthorization =
  | { ok: true; subjectId: string }
  | { ok: false; reason: "AUTH_NOT_CONFIGURED" | "NOT_APPROVED" };

/**
 * Server-only, fail-closed allowlist primitive.
 *
 * This is intentionally not an auth provider adapter. The provider must first
 * verify a session and immutable subject ID, then pass that subject ID here.
 * Emails, roles, domains, and client-provided flags are not accepted.
 */
export function authorizeAdminSubject(subjectId: string | null | undefined): AdminAuthorization {
  const configured = process.env.TTI_ADMIN_SUBJECT_IDS
    ?.split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!configured?.length) {
    return { ok: false, reason: "AUTH_NOT_CONFIGURED" };
  }

  if (!subjectId || !configured.includes(subjectId)) {
    return { ok: false, reason: "NOT_APPROVED" };
  }

  return { ok: true, subjectId };
}

