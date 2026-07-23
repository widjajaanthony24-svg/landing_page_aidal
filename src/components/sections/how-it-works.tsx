const steps = [
  {
    n: 1,
    title: "Get your API key instantly",
    body: (
      <>
        Sign up with your company name and email. Your unique{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[13px]">aidal_live_xxxx</code> key
        is generated in seconds.
      </>
    ),
  },
  {
    n: 2,
    title: "Send decisions after your model runs",
    body: "After your AI makes a decision, send it to AIDAL via one API call. Any language, any model, any cloud provider.",
  },
  {
    n: 3,
    title: "We lock it and check compliance",
    body: "AIDAL cryptographically hashes the decision, chains it, generates a plain-English explanation, and checks it against your regulator's requirements.",
  },
  {
    n: 4,
    title: "Audit anytime. Download the PDF.",
    body: "Open your dashboard. Download a regulator-ready compliance PDF in one click. Hand it to MAS, OJK, or the EU auditor. Done.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-32 md:px-16">
      <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        <span className="block h-px w-5 bg-border" />
        How it works
      </div>
      <h2 className="mb-12 text-3xl font-bold md:text-4xl">
        One line of code.
        <br />
        <em className="text-muted-foreground not-italic">Full compliance.</em>
      </h2>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`flex gap-5 pb-9 ${i !== steps.length - 1 ? "mb-9 border-b border-border" : ""}`}
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="mb-1 text-[1.0625rem] font-semibold">{s.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sticky top-30">
          <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-[#1E2A3A] bg-[#1A2030] px-7 py-2.5">
            <span className="font-mono text-[10px] tracking-wide text-[#6B7A8D]">Python · One API call</span>
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-[#1E2A3A]" />
              <span className="size-2 rounded-full bg-[#1E2A3A]" />
              <span className="size-2 rounded-full bg-[#1E2A3A]" />
            </div>
          </div>
          <pre className="overflow-x-auto rounded-b-lg border border-[#1E2A3A] bg-[#0D1117] p-7 font-mono text-[11.5px] leading-loose text-[#6B7A8D]">
{`# After your model runs
`}<span className="text-[#F1F5F9]">requests.post</span>(
  <span className="text-[#FCA5A5]">&quot;https://aidal-production.up.railway.app/decision&quot;</span>,
  headers={"{"}<span className="text-[#7DD3FC]">&quot;Authorization&quot;</span>: <span className="text-[#FCA5A5]">&quot;Bearer aidal_live_xxxx&quot;</span>{"}"},
  json={"{"}
    <span className="text-[#7DD3FC]">&quot;decision_type&quot;</span>: <span className="text-[#86EFAC]">&quot;loan_approval&quot;</span>,
    <span className="text-[#7DD3FC]">&quot;model_used&quot;</span>: <span className="text-[#86EFAC]">&quot;xgboost-v2&quot;</span>,
    <span className="text-[#7DD3FC]">&quot;input_features&quot;</span>: <span className="text-[#86EFAC]">applicant_data</span>,
    <span className="text-[#7DD3FC]">&quot;output&quot;</span>: <span className="text-[#86EFAC]">model_result</span>,
    <span className="text-[#7DD3FC]">&quot;jurisdiction&quot;</span>: <span className="text-[#86EFAC]">&quot;SG&quot;</span>
  {"}"})
{"\n"}
{`# Response in <1 second
`}{"{"}
  <span className="text-[#7DD3FC]">&quot;audit_id&quot;</span>: <span className="text-[#FCA5A5]">&quot;aud_a7f3c9b2...&quot;</span>,
  <span className="text-[#7DD3FC]">&quot;hash&quot;</span>: <span className="text-[#FCA5A5]">&quot;sha256:3e8b2a91...&quot;</span>,
  <span className="text-[#7DD3FC]">&quot;explanation&quot;</span>: <span className="text-[#FCA5A5]">&quot;Loan approved...&quot;</span>,
  <span className="text-[#7DD3FC]">&quot;rules_check&quot;</span>: {"{"}<span className="text-[#7DD3FC]">&quot;status&quot;</span>: <span className="text-[#86EFAC]">&quot;PASSED&quot;</span>{"}"}
{"}"}
          </pre>
        </div>
      </div>
    </section>
  );
}
