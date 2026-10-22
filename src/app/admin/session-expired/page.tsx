import type { Metadata } from "next";
import { AdminState } from "@/components/admin/admin-state";

export const metadata: Metadata = { title: "Session expired", robots: { index: false, follow: false } };

export default function AdminSessionExpiredPage() {
  return <AdminState eyebrow="Session expired" title="Sign in again to protect your work." copy="Your session ended before this workspace could continue. Unsaved changes must be recovered from a local draft or re-entered after authentication." action="Return to login" href="/admin/login" />;
}
