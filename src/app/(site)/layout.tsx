import type { Metadata } from "next";
import "@/components/site/marketing.css";
import { MarketingChrome } from "@/components/site/marketing-chrome";

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
      <main className="flex-1">{children}</main>
      <MarketingChrome />
    </div>
  );
}
