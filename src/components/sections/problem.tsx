import { MessageCircleQuestion, DatabaseZap, Gavel, ShieldCheck } from "lucide-react";

const cells = [
  {
    badge: "Gap 1",
    title: "No explanation",
    body: "When an AI denies a loan or flags a transaction, neither the company nor the customer can explain why — in a way that satisfies a regulator or stands up in court.",
    icon: MessageCircleQuestion,
    dark: false,
  },
  {
    badge: "Gap 2",
    title: "No audit trail",
    body: "AI decisions live in databases that can be edited. There is no tamper-proof record of what was decided, when, by which model, and with what confidence.",
    icon: DatabaseZap,
    dark: false,
  },
  {
    badge: "Gap 3",
    title: "Regulators are arriving",
    body: "The EU AI Act, Singapore MAS FEAT, Indonesia OJK, and UAE VARA all mandate explainable, auditable AI decisions. MAS FEAT, OJK, and VARA are enforced today — not someday. The EU AI Act's high-risk deadline was pushed to December 2027, but enterprise procurement and audit-trail buildout take months, so it's closer than it looks. Most companies have nothing.",
    icon: Gavel,
    dark: false,
  },
  {
    badge: "Solution",
    title: "AIDAL solves all three",
    body: "One API call logs every decision with a cryptographic proof, an AI-generated explanation, and automatic compliance checking. Regulators verify everything in seconds.",
    icon: ShieldCheck,
    dark: true,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        The problem
      </div>
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        AI makes millions of decisions.
        <br />
        <em className="text-muted-foreground not-italic">None of them are provable.</em>
      </h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {cells.map((cell) => (
          <div
            key={cell.badge}
            className={
              cell.dark
                ? "bg-primary p-10 text-primary-foreground"
                : "bg-secondary p-10 transition-colors hover:bg-secondary/70"
            }
          >
            <div className="mb-5 flex items-center justify-between">
              <span
                className={
                  cell.dark
                    ? "inline-block rounded-full bg-background px-2.5 py-0.5 text-[10px] font-semibold text-foreground"
                    : "inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground"
                }
              >
                {cell.badge}
              </span>
              <cell.icon
                className={cell.dark ? "size-4 text-primary-foreground/50" : "size-4 text-muted-foreground/60"}
                strokeWidth={1.5}
              />
            </div>
            <h3 className="mb-2 text-[1.0625rem] font-semibold">{cell.title}</h3>
            <p
              className={
                cell.dark ? "text-[0.9375rem] leading-relaxed text-primary-foreground/60" : "text-[0.9375rem] leading-relaxed text-muted-foreground"
              }
            >
              {cell.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
