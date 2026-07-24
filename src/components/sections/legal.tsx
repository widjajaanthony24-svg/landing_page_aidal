import { legalCards } from "@/lib/content";

export function LegalSection() {
  return (
    <section className="bg-secondary px-6 py-28 md:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/35 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Regulatory research
          </div>
          <h2 className="mb-6 text-2xl font-bold md:text-4xl">
            Built from the
            <br />
            <em className="text-muted-foreground not-italic">actual regulation text.</em>
          </h2>
          <p className="mb-4 text-muted-foreground">
            Every jurisdiction module was built by reading the regulation documents directly — OJK&apos;s 2025 AI
            governance guidance, MAS FEAT Principles, EU AI Act Articles 9–17, VARA 2024, FCA SYSC 3/SM&amp;CR,
            CFPB Circulars &amp; ECOA Reg B, and APRA CPS 234/230 — across all seven jurisdictions we support.
          </p>
          <p className="text-muted-foreground">
            Are you a compliance lawyer with MAS FEAT or OJK expertise?{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&to=anthony@tryaidal.com&subject=Legal%20Advisor%20%E2%80%94%20AIDAL"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              We&apos;d like to speak with you →
            </a>
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          {legalCards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-background p-5 transition-colors hover:bg-secondary/40 ${
                i !== legalCards.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <h4 className="text-[0.9375rem] font-semibold">{card.title}</h4>
                <span className="meta-text shrink-0 rounded bg-secondary px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase">
                  {card.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
