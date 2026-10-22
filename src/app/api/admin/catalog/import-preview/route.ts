import { NextResponse } from "next/server";
import { authorizeAdminSubject } from "@/lib/admin/authorization";

export async function GET() {
  // The auth provider adapter must resolve a verified immutable subject before
  // this endpoint can expose even a dry-run preview. Never trust query params,
  // client roles, or email addresses as the authorization input.
  const access = authorizeAdminSubject(null);

  if (!access.ok) {
    return NextResponse.json(
      { ok: false, error: access.reason === "AUTH_NOT_CONFIGURED" ? "AUTH_NOT_CONFIGURED" : "UNAUTHORIZED" },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { ok: false, error: "SESSION_ADAPTER_REQUIRED" },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST() {
  return GET();
}
