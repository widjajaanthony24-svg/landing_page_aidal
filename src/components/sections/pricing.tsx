import { pricingTiers } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        Pricing
      </div>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        Start free.
        <br />
        <em className="text-muted-foreground not-italic">Scale when you&apos;re ready.</em>
      </h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {pricingTiers.map((tier) => (
          <div
            key={tier.label}
            className={cn(
              "relative bg-background p-8 transition-colors hover:bg-secondary/60",
              tier.featured && "z-10 m-[-1px] rounded-lg border-2 border-primary",
            )}
          >
            <span className="mb-6 block text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
              {tier.label}
            </span>
            <span className="mb-1 block font-mono text-4xl font-semibold">{tier.price}</span>
            <span className="mb-2 block text-xs text-muted-foreground">{tier.unit}</span>
            <span className="mb-6 block text-[11px] font-medium text-accent">{tier.integration}</span>
            <ul className="mb-6 space-y-0">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 border-b border-border py-1.5 text-sm text-foreground/80 last:border-b-0"
                >
                  <span className="size-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={tier.href ?? "#get-key"}
              className={cn(
                "block rounded-md py-2.5 text-center text-sm font-semibold transition-colors",
                tier.featured
                  ? "bg-primary text-primary-foreground hover:opacity-85"
                  : "border border-border hover:bg-secondary",
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground">
        All plans include SHA-256 tamper-proof chain and public audit trail. No credit card required for Free
        tier. Running at million-decision scale? Free, Starter, and Professional cap at 1k–500k/month —{" "}
        <a
          href="mailto:anthony@tryaidal.com?subject=AIDAL%20Enterprise%20Volume"
          className="text-foreground underline"
        >
          talk to us about Enterprise
        </a>{" "}
        for unlimited volume.
      </p>
    </section>
  );
}
