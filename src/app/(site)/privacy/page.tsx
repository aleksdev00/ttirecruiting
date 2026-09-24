import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How TTI Recruiting collects, uses, and protects your personal information when you use Quick Apply or the full application.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Notice | TTI Recruiting",
    description:
      "How TTI Recruiting collects, uses, and protects your personal information when you use Quick Apply or the full application.",
    url: `${SITE_URL}/privacy`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="border-b border-ink/15">
      <V3PageHeader
        kicker="Privacy"
        title={
          <>
            Your info,{" "}
            <span className="text-signal-deep">handled once.</span>
          </>
        }
        lede="We only collect the short profile it takes to consider you for a potential driving opportunity, and we only use it for that."
      />

      <div className="mx-auto w-full max-w-[60rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="space-y-10 text-base leading-relaxed text-ink-muted">
          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              What we collect<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                The homepage Quick Apply form collects a short lead profile:
                your first and last name, phone number, whether you have SAP
                (and its status when applicable), your employment preference
                (company or lease), and your pay type preference (W2 or
                1099).
              </p>
              <p>
                Your consent -- requested as an explicit checkbox in the
                Quick Apply form -- is recorded with your lead and permits TTI
                Recruiting to contact you about potential driving
                opportunities.
              </p>
              <p>
                We do not collect your social security number, license number,
                or any background information through Quick Apply. Your lead
                is sent to TTI Recruiting's email process; it is not stored in
                a database on this website or saved in your browser.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              How we use it<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Your lead is used to review your profile against current
                opportunities and to contact you about a possible match --
                only with your consent, requested within the Quick Apply
                form.
              </p>
              <p>
                Consent is opt-in and is never pre-checked. You can withdraw
                it at any time by contacting the hiring desk by email.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              How long we keep it
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Lead records are kept only as long as needed to review your
                profile against open opportunities. If you are not matched,
                your details are not used for any other purpose without a new
                consent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              Access and control
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                At any time you may request a copy of the personal information
                we hold about you, ask that it be corrected, or ask that it be
                deleted. Contact the hiring desk by email to make a request.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              The full application
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                The full application is a separate system hosted at
                apply.ttirecruiting.us. You are only asked to complete it
                after you have spoken with recruiting and a suitable
                opportunity has been identified. Details you enter there are
                governed by that application system's process.
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
                <a
                  href="mailto:info@ttirecruiting.us"
                  className="text-ink underline underline-offset-4 transition-colors hover:text-signal-deep"
                >
                  info@ttirecruiting.us
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}