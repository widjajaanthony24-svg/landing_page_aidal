import Image from "next/image";
import { Link000, Link001 } from "@/components/ui/skiper-ui/skiper40";

const footerLinks = [
  { href: "#how", label: "How it works" },
  { href: "#jurisdictions", label: "Jurisdictions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "https://aidal-dashboard.vercel.app", label: "Dashboard", external: true },
  { href: "https://www.linkedin.com/in/anthony-widjaja-b5810b406/", label: "LinkedIn", external: true },
  { href: "/security.html", label: "Security" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-12 md:px-16">
      <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div className="flex flex-col gap-3">
          <div className="flex h-[52px] w-[140px] items-center overflow-hidden">
            <Image
              src="/Copy_of_AIDAL.png"
              alt="AIDAL."
              width={155}
              height={155}
              className="relative -top-[52px] -left-[5px] w-[155px] max-w-none shrink-0 mix-blend-multiply invert"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Indonesia · contact:{" "}
            <a href="mailto:anthony@tryaidal.com" className="underline">
              anthony@tryaidal.com
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:justify-end md:gap-6">
          {footerLinks.map((l) =>
            l.external ? (
              <Link001 key={l.label} href={l.href} className="text-sm text-foreground hover:text-accent">
                {l.label}
              </Link001>
            ) : (
              <Link000 key={l.label} href={l.href} className="text-sm text-foreground hover:text-accent">
                {l.label}
              </Link000>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-start md:justify-between">
        <p className="max-w-xl text-[11px] leading-relaxed text-muted-foreground">
          AIDAL provides technical audit infrastructure for AI decision logging. Not a law firm. Not legal
          advice. AIDAL audit records are cryptographically verifiable but do not constitute legal compliance
          certification. Consult a licensed compliance lawyer for your jurisdiction.{" "}
          <a href="/privacy.html" className="underline">
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/security.html" className="underline">
            Security
          </a>
        </p>
        <p className="whitespace-nowrap text-xs text-muted-foreground">© 2026 AIDAL</p>
      </div>
    </footer>
  );
}
