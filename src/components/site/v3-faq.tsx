"use client";

import Link from "next/link";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { FAQ_ITEMS } from "@/lib/faq";

export function V3FAQ() {
  return (
    <section
      id="faq"
      className="v3-sheet scroll-mt-16 border-b border-ink/15 bg-paper-deep text-ink"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <p className="v3-word font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="v3-word mt-5 font-display text-[clamp(2.4rem,5.2vw,4.75rem)] uppercase leading-[0.88] tracking-tight"
          >
            Straight answers before you apply<span className="text-signal-deep">.</span>
          </h2>
          <p className="v3-fact mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
            A few things drivers usually want to know before starting the conversation.
          </p>
        </div>

        <div className="lg:col-span-7">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="v3-fact border-t border-ink/15"
          >
            {FAQ_ITEMS.map((item, i) => (
              <AccordionPrimitive.Item
                key={item.question}
                value={item.question}
                className="border-b border-ink/15"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className="group flex w-full items-baseline gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-deep sm:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className="font-ledger text-[11px] font-semibold tracking-[0.2em] text-ink-faint"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-xl uppercase leading-[1.05] tracking-tight transition-colors group-hover:text-signal-deep sm:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="translate-y-0 self-center font-ledger text-xl font-semibold leading-none text-signal-deep transition-transform duration-300 ease-out group-data-[state=open]:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  forceMount
                  className="group overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up motion-reduce:animate-none"
                >
                  <div className="pl-10 pb-6 pr-1 sm:pb-7 group-data-[state=closed]:hidden">
                    <p className="max-w-[64ch] text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>

          <div className="mt-8 flex flex-col gap-6 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:border-t sm:border-ink/15">
            <p className="font-ledger text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-faint">
              Still have a question? Start the conversation.
            </p>
            <Link
              href="#quick-apply"
              className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-signal-deep px-9 font-ledger text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink hover:text-paper sm:w-auto"
            >
              Quick Apply
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}