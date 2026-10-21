import type { Metadata } from "next";
import { authorizeAdminSubject } from "@/lib/admin/authorization";

export const metadata: Metadata = {
  title: "Admin access unavailable",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  const access = authorizeAdminSubject(null);

  return (
    <main className="min-h-screen bg-[var(--ink)] px-5 py-16 text-[var(--paper)] sm:px-10">
      <div className="mx-auto max-w-xl border border-white/20 p-7 sm:p-10">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--signal)]">Private workspace</p>
        <h1 className="mt-5 font-[var(--font-display)] text-5xl uppercase leading-[.9]">Admin access is not configured.</h1>
        <p className="mt-6 leading-7 text-white/65">The company catalog workspace stays locked until the identity provider and the two approved immutable account subjects are configured on the server.</p>
        <p className="mt-8 border-t border-white/15 pt-5 font-[var(--font-mono)] text-xs uppercase tracking-[.12em] text-white/45">{access.ok ? "Access boundary ready" : access.reason === "AUTH_NOT_CONFIGURED" ? "Access denied by configuration" : "Access denied"}</p>
      </div>
    </main>
  );
}
