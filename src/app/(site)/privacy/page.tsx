import type { Metadata } from "next";
import { BRAND } from "@/lib/jobs";
import { V3PageHeader } from "@/components/site/v3-page-header";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How TTI Recruiting collects, uses, and protects your personal information when you apply for a CDL driving position.",
  alternates: { canonical: "/privacy" },
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
        lede="We only collect what it takes to consider your application, and we only use it for that."
      />

      <div className="mx-auto w-full max-w-[60rem] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="space-y-10 text-base leading-relaxed text-ink/75">
          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              What we collect<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                When you submit an application, we collect the details you
                enter: your name, email, phone, CDL class, experience, current
                location, and any message you choose to send. We also record
                the position you applied for and the time of submission.
              </p>
              <p>
                We do not collect your social security number, license number,
                or any background information as part of the initial
                application.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
              How we use it<span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Information is used to evaluate your application for the
                position you selected and to contact you about that
                application -- only with your consent, which you check in the
                consent step of the application form.
              </p>
              <p>
                Consent is opt-in. You can withdraw it at any time by
                contacting the hiring desk by email.
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
                Application records are kept only as long as needed to fill the
                position. If you are not hired, your details are not used for
                any other purpose without a new consent.
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
              Demo status
              <span className="text-signal-deep">.</span>
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                This site is a demonstration build. Applications submitted here
                are stored locally in your browser only; they are not sent to
                any recruiting or hiring system. Do not enter a real social
                security number, driver's license number, or other sensitive
                identifier.
              </p>
              <p>
                {BRAND.name}. {BRAND.address.city}, {BRAND.address.state}.{" "}
                {BRAND.email}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}