import type { Metadata } from "next";
import { AdminState } from "@/components/admin/admin-state";

export const metadata: Metadata = { title: "Admin login", robots: { index: false, follow: false } };

export default function AdminLoginPage() {
  return <AdminState eyebrow="Private workspace" title="Sign in to the company desk." copy="Production login will use the configured identity provider. No public registration, shared password, or third-admin invite is available." action="Return to website" href="/" />;
}
