import { AnimatedNumber } from "@/components/animated-number";
import { DemoWidget } from "@/components/demo-widget";
import { HashPanel } from "@/components/hash-panel";
import { RetroComputer } from "@/components/retro-computer";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-20">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.04em] text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-accent" />
            AI compliance infrastructure
          </div>
          <h1 className="mb-6 text-4xl leading-[1.05] font-bold md:text-[64px]">
            Can you explain an AI decision <span className="font-accent text-accent">six months later</span>?
          </h1>
          <p className="mb-10 max-w-[440px] text-[1.0625rem] leading-relaxed text-muted-foreground">
            AIDAL automatically creates tamper-evident evidence, human-readable explanations, and
            compliance-ready reports for every AI decision.
          </p>
          <div className="mb-12 flex w-fit flex-wrap items-center gap-1 rounded-full border border-border bg-secondary/40 p-1.5">
            <a
              href="#get-key"
              className="rounded-full bg-primary px-6 py-3 text-[0.9375rem] font-semibold text-primary-foreground transition-opacity hover:opacity-85"
            >
              Log your first AI decision
            </a>
            <a
              href="https://youtu.be/i9gs1EUyb80?si=hKREBJz2GFf8yTkM"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-2 rounded-full px-5 py-3 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Watch 2-minute demo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="flex w-fit divide-x divide-border overflow-hidden rounded-lg border border-border">
            <div className="px-7 py-4.5">
              <span className="mb-1 block font-mono text-4xl font-bold tracking-tight">
                &lt;<AnimatedNumber value={1} suffix="s" />
              </span>
              <span className="meta-text text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Seal time
              </span>
            </div>
            <div className="px-7 py-4.5">
              <span className="mb-1 block font-mono text-4xl font-bold tracking-tight">
                <AnimatedNumber value={7} />
              </span>
              <span className="meta-text text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                Jurisdictions
              </span>
            </div>
            <div className="px-7 py-4.5">
              <span className="mb-1 block font-mono text-4xl font-bold tracking-tight">
                <AnimatedNumber value={30} suffix="m" />
              </span>
              <span className="meta-text text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                To integrate
              </span>
            </div>
          </div>
        </div>
        <div className="relative hidden min-h-[calc(100vh-104px)] items-center justify-center overflow-hidden border-l border-border bg-background md:flex">
          <RetroComputer>
            <DemoWidget />
            <HashPanel />
          </RetroComputer>
        </div>
      </div>
    </div>
  );
}

const storySteps = [
  { num: "01", text: ["AI makes", "a decision."] },
  { num: "02", text: ["Someone asks", "“Why?”"] },
  { num: "03", text: ["Nobody", "knows."] },
  { num: "04", text: ["AIDAL already", "has the answer."], answer: true },
];

export function StoryFlowSection() {
  return (
    <div className="border-b border-border bg-background px-6 py-14 md:px-16">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-7">
        {storySteps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-7">
            {i > 0 && (
              <span className={`text-xl ${storySteps[i].answer ? "text-accent" : "text-border"}`}>→</span>
            )}
            <div className="flex min-w-[140px] flex-col items-center text-center">
              <span
                className={`mb-2.5 font-mono text-[11px] tracking-[0.08em] ${
                  s.answer ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {s.num}
              </span>
              <p className={`text-lg leading-tight font-bold ${s.answer ? "text-accent" : "text-foreground"}`}>
                {s.text[0]}
                <br />
                {s.text[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
