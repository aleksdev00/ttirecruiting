import type { Metadata } from "next";
import { AdminState } from "@/components/admin/admin-state";

export const metadata: Metadata = { title: "Unauthorized", robots: { index: false, follow: false } };

export default function AdminUnauthorizedPage() {
  return <AdminState eyebrow="Access denied" title="This workspace is not available to this account." copy="The admin boundary accepts only the two approved immutable identities. Contact the TTI owner if your access should be reviewed." action="Return to website" href="/" />;
}
