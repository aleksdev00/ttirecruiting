import type { Metadata } from "next";
import { V3SiteNav } from "@/components/site/v3-site-nav";
import { V3Footer } from "@/components/site/v3-footer";
import "@/components/site/v3-editorial.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="v3-root flex min-h-screen flex-col bg-paper text-ink">
      <V3SiteNav />
      <main className="flex-1">{children}</main>
      <V3Footer />
    </div>
  );
}