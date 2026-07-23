import { faqItems } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        FAQ
      </div>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        Questions we get
        <br />
        <em className="text-muted-foreground not-italic">before people sign up.</em>
      </h2>
      <Accordion className="rounded-lg border border-border">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-[0.9375rem] leading-7 text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
