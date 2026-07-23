export function DeadlineCtaSection() {
  return (
    <section className="border-t border-[#1E2A3A] bg-[#0D1117] text-[#F8F9FA]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-32 md:grid-cols-2 md:gap-24 md:px-16">
        <div>
          <div className="mb-4 font-mono text-6xl leading-none font-bold tracking-tighter md:text-8xl">
            Dec
            <br />
            2027.
          </div>
          <div className="text-[11px] font-medium tracking-[0.1em] text-[#4A5668] uppercase">
            EU AI Act — high-risk AI deadline
          </div>
        </div>
        <div>
          <p className="mb-10 text-sm leading-loose text-[#4A5668]">
            The EU&apos;s Digital Omnibus pushed the high-risk deadline for credit, insurance, and employment
            AI systems from Aug 2026 to Dec 2, 2027 — but audit-trail buildout, model documentation, and
            procurement take 12–18 months, so 2027 is closer than it looks. Non-compliance: fines up to €15M
            or 3% of global annual turnover. Meanwhile Indonesia&apos;s OJK, Singapore&apos;s MAS FEAT, and
            UAE&apos;s VARA already require this today.
          </p>
          <a
            href="#get-key"
            className="inline-block rounded-md bg-[#f0ebe0] px-7 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#e8dfd0]"
          >
            Get your API key now
          </a>
        </div>
      </div>
    </section>
  );
}
