import { Fingerprint, Globe2, Clock, FileText, CheckCircle2, Search } from "lucide-react";

const builtFor = ["EU AI Act", "MAS FEAT", "OJK AI Governance (2025)", "VARA UAE", "FCA UK", "CFPB US", "APRA AU"];

const trustItems = [
  { icon: Fingerprint, label: "SHA-256 tamper-proof chain" },
  { icon: Globe2, label: "7 jurisdiction modules live" },
  { icon: Clock, label: "30-minute integration" },
  { icon: FileText, label: "AI explanation per decision" },
  { icon: CheckCircle2, label: "Free during beta" },
  { icon: Search, label: "Regulation text mapped article by article" },
];

export function CredibilityBar() {
  return (
    <div className="border-y border-border bg-secondary px-6 py-2.5 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6">
        <span className="meta-text text-[11px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
          Built for
        </span>
        <div className="flex flex-wrap items-center gap-4">
          {builtFor.map((item, i) => (
            <span key={item} className="flex items-center gap-4 text-xs font-medium text-foreground/80">
              {i > 0 && <span className="text-border">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="flex items-center gap-8 overflow-x-auto border-b border-border bg-background px-6 py-4 md:px-16">
      {trustItems.map((item, i) => (
        <div key={item.label} className="flex items-center gap-6 whitespace-nowrap">
          {i > 0 && <span className="h-3.5 w-px bg-border" />}
          <div className="flex items-center gap-2">
            <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
              <item.icon className="size-2.5 text-accent" strokeWidth={2} />
            </div>
            <span className="text-xs text-foreground/70">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
