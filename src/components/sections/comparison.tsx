import { comparisonRows } from "@/lib/content";

export function ComparisonSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        Why AIDAL
      </div>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        Cheaper, faster,
        <br />
        <em className="text-muted-foreground not-italic">already built.</em>
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <div className="grid min-w-[520px] grid-cols-[1.5fr_1fr_1fr] items-center gap-0 border-b border-border bg-background px-7 py-3.5">
          <span />
          <span className="inline-block w-fit rounded bg-primary px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
            AIDAL
          </span>
          <span className="meta-text text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            Build in-house
          </span>
        </div>
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={`grid min-w-[520px] grid-cols-[1.5fr_1fr_1fr] items-center gap-0 border-b border-border px-7 py-5 last:border-b-0 ${
              i % 2 === 0 ? "bg-background" : "bg-secondary"
            }`}
          >
            <span className="text-sm font-medium">{row.label}</span>
            <span className="flex items-center gap-1.5 text-sm font-medium before:text-[11px] before:font-extrabold before:text-accent before:content-['●']">
              {row.aidal}
            </span>
            <span className="text-sm text-muted-foreground">
              {row.alt}
              <small className="mt-0.5 block text-[11px] text-muted-foreground/70">{row.altSub}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
