import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import TornikHome from "@/components/site/tornik-home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <SiteNav />
      <main>
        <TornikHome />
      </main>
      <SiteFooter />
    </div>
  );
}
