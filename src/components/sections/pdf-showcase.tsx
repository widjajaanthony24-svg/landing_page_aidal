const callouts = [
  {
    title: "Cryptographic certificate",
    body: "SHA-256 hash chain with tamper-evident seal. Mathematically verifiable by any third party, independently of AIDAL's servers.",
  },
  {
    title: "Per-decision explanations",
    body: "Every AI decision explained in plain language. Required by EU AI Act Art 13, MAS FEAT, and OJK's 2025 AI governance guidance.",
  },
  {
    title: "Jurisdiction compliance mapping",
    body: "Automatically checked against your regulator's exact requirements — not a generic template.",
  },
];

export function PdfShowcaseSection() {
  return (
    <section className="border-t border-border bg-secondary py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-24 md:px-16">
        <div>
          <div className="meta-text mb-4 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
            Compliance report
          </div>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            The document your regulator
            <br />
            <em className="text-muted-foreground not-italic">actually wants.</em>
          </h2>
          <p className="mb-8 text-[1.0625rem] leading-relaxed text-muted-foreground">
            One click from your dashboard. A professional PDF with cryptographic proof, AI explanations, and a
            compliance certificate — ready to hand to MAS, OJK, or an EU auditor.
          </p>
          <div className="flex flex-col gap-6">
            {callouts.map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <span className="mt-0.5 w-[18px] shrink-0 text-sm font-bold text-accent">✓</span>
                <div>
                  <strong className="mb-0.5 block text-[0.9375rem] font-semibold">{c.title}</strong>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/sample-report.pdf"
            download="AIDAL_Sample_Compliance_Report.pdf"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Download sample report →
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-lg">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              aidal-production.up.railway.app/report/pdf
            </span>
          </div>
          <div className="p-6">
            <div className="mb-3.5 flex items-center justify-between border-b border-border pb-3.5 text-xs text-foreground/70">
              <strong className="text-[15px] font-bold text-foreground">AIDAL. Compliance Audit Report</strong>
              <span className="text-[11px] text-muted-foreground">May 2026</span>
            </div>
            <div className="mb-5 text-[15px] font-semibold">Acme Fintech Pte Ltd</div>
            <div className="mb-2.5 text-[9px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Executive summary
            </div>
            {[
              ["Reporting period", "Q1 2026"],
              ["Decisions logged", "4,821"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-secondary py-1.5 text-[12.5px] text-foreground/70">
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
            <div className="flex justify-between border-b border-secondary py-1.5 text-[12.5px] text-foreground/70">
              <span>Rules-passed rate</span>
              <span className="font-semibold text-accent">98.7%</span>
            </div>
            <div className="flex justify-between py-1.5 text-[12.5px] text-foreground/70">
              <span>Jurisdiction</span>
              <span>SG — MAS FEAT</span>
            </div>
            <div className="mt-5 flex items-center justify-between rounded bg-primary px-4 py-3 text-[11px] font-semibold tracking-wide text-primary-foreground">
              <span>✓ Chain integrity verified</span>
              <span className="font-mono text-[10px] font-normal text-primary-foreground/55">
                CERT-2026-A7F3C9B2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
