import type { Metadata } from "next";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the TTI Recruiting website and application flow.",
  alternates: { canonical: "/terms" },
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
        lede="Clear rules for using this site and applying to lanes."
      />

      <div className="mx-auto w-full max-w-[60rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="space-y-10 text-base leading-relaxed text-ink/75">
          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Use of this site<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                This website is provided for informational purposes and for
                submitting driver applications. By using it you agree to these
                terms and to provide only truthful information in any
                application you submit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Placeholder figures
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Pay rates, sign-on bonuses, home-time schedules, miles, and
                orientation details shown on this site are illustrative
                placeholders. They are not offers or guarantees of employment
                terms. Final terms are always determined by the hiring carrier
                before any offer is made.
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
                We make no guarantee that a lane will remain listed or that
                any application will result in placement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Demo build
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                This is a demonstration website. It is not a live hiring
                system, and applications submitted here are not forwarded to
                any employer. Data entered into the application flow is stored
                only in your own browser.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}