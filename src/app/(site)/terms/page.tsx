import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the TTI Recruiting website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | TTI Recruiting",
    description:
      "The terms that govern your use of the TTI Recruiting website.",
    url: `${SITE_URL}/terms`,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="border-b border-ink/15">
      <V3PageHeader
        kicker="Terms"
        title={
          <>
            The fine print,{" "}
            <span className="text-signal-deep">straight.</span>
          </>
        }
        lede="Clear rules for using this site."
      />

      <div className="mx-auto w-full max-w-[60rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="space-y-10 text-base leading-relaxed text-ink-muted">
          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Use of this site<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                This website is provided for informational purposes to help
                you understand TTI Recruiting's driver-matching process and
                potential opportunities. By using it you agree to these terms and
                to provide only truthful information anywhere you engage with
                the recruiting desk.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Verified details
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                TTI does not publish unverified job openings or employment
                terms. Any pay, home-time, equipment, or other hiring details
                discussed after a potential match must be confirmed with the
                employing carrier before any decision or application.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Applications are not offers
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Submitting an application does not create an employment
                contract or an offer of work. Placement depends on meeting the
                hiring carrier's requirements, including licensing, medical
                qualification, and a satisfactory background review.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              No warranties
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                The site is provided "as is" without warranties of any kind.
                We make no guarantee that a recruiting conversation will result
                in placement or employment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Quick Apply and full applications
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                The homepage features a short Quick Apply lead form. It asks
                for your first and last name, phone number, whether you have
                SAP (and its status when applicable), your employment
                preference (company or lease), and your pay type preference
                (W2 or 1099). Submitting it requires your consent to be
                contacted by TTI Recruiting about potential driving
                opportunities and your acceptance of these terms and the
                Privacy Policy.
              </p>
              <p>
                Quick Apply is a lead only -- the brief details you provide
                are sent to TTI Recruiting's email process so the recruiting
                desk can review your profile and call you about a potentially
                suitable opportunity. It is not a job application.
              </p>
              <p>
                The full application is a separate system hosted at
                apply.ttirecruiting.us. You are only asked to complete it
                after you have spoken with recruiting and a suitable
                opportunity has been identified.
              </p>
            </div>
          </section>
        <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Contact<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                TTI Recruiting
                <br />
                Email:{" "}
                  <Link
                  href="/#quick-apply"
                  className="text-ink underline underline-offset-4 transition-colors hover:text-signal-deep"
                >
                  Quick Apply
                  </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
