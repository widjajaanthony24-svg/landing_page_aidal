import { Building2, ShieldCheck, Users } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Fintech and lending",
    body: "Credit decisions, loan approvals, risk scoring. Every decision logged, every rejection explainable. Mapped to OJK, MAS FEAT, and EU AI Act requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    body: "Claims approval, underwriting, fraud flagging. Full audit trail that satisfies regulators and silences complaints.",
  },
  {
    icon: Users,
    title: "HR and hiring",
    body: "AI screening decisions. The EU AI Act classifies these as high-risk. AIDAL makes every hiring decision contestable.",
  },
];

export function ClientsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        Who uses AIDAL
      </div>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        Built for anyone
        <br />
        <em className="text-muted-foreground not-italic">using AI to make decisions.</em>
      </h2>
      <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border md:grid-cols-3">
        {clients.map((c, i) => (
          <div
            key={c.title}
            className={`bg-background p-9 transition-colors hover:bg-secondary/40 ${
              i !== clients.length - 1 ? "border-b border-border md:border-r md:border-b-0" : ""
            }`}
          >
            <div className="mb-6 flex size-9 items-center justify-center rounded-lg border border-border">
              <c.icon className="size-4" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-[1.0625rem] font-semibold">{c.title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
