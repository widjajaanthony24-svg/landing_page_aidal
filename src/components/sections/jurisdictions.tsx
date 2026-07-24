import Image from "next/image";
import { Check } from "lucide-react";
import { jurisdictions } from "@/lib/content";

export function JurisdictionsSection() {
  return (
    <section id="jurisdictions" className="bg-secondary px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="meta-text mb-10 flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
          <span className="block h-px w-5 bg-border" />
          Jurisdiction modules
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Built for your
          <br />
          <em className="text-muted-foreground not-italic">specific regulator.</em>
        </h2>
        <p className="mb-10 max-w-[500px] text-sm leading-relaxed text-muted-foreground">
          Pass your jurisdiction code and AIDAL automatically checks compliance, flags missing fields, and
          tells you exactly what your regulator requires.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {jurisdictions.map((j) => (
            <div
              key={j.name}
              className="rounded-lg border border-border border-l-3 border-l-accent bg-background p-7 transition-colors hover:bg-secondary/40"
            >
              <div className="mb-3.5 flex items-center justify-between">
                <Image
                  src={`https://flagcdn.com/w40/${j.flag}.png`}
                  alt={j.country}
                  width={36}
                  height={24}
                  style={{ height: "auto" }}
                  className="rounded-sm shadow-sm"
                  unoptimized
                />
                <span className="flex items-center gap-1.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Active
                </span>
              </div>
              <h3 className="mb-2.5 text-[0.9375rem] font-semibold">{j.name}</h3>
              <ul className="mb-3.5">
                {j.items.map((item) => (
                  <li
                    key={item}
                    className="relative border-b border-border py-1 pl-5 text-[12.5px] text-muted-foreground last:border-b-0"
                  >
                    <Check className="absolute left-0 top-1 size-3 text-accent" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="meta-text inline-block rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                {j.retention}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
