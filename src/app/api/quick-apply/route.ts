import { deliverQuickApplyLead } from "@/lib/quick-apply/delivery";
import { QuickApplyLeadInputSchema } from "@/lib/quick-apply/schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = QuickApplyLeadInputSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Quick Apply validation failed.", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const lead = { ...parsed.data, submittedAt: new Date().toISOString() };
  const result = await deliverQuickApplyLead(lead);

  if (!result.ok) {
    return Response.json(
      { ok: false, code: result.code, message: result.message },
      { status: result.code === "NOT_CONFIGURED" ? 501 : 502 },
    );
  }

  return Response.json({ ok: true, provider: result.provider });
}