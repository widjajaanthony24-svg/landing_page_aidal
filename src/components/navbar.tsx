import Image from "next/image";
import Link from "next/link";
import { Link000 } from "@/components/ui/skiper-ui/skiper40";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#jurisdictions", label: "Jurisdictions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <div className="sticky top-4 z-50 px-4 md:px-8">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-primary/95 px-4 text-primary-foreground shadow-lg backdrop-blur-md md:px-6">
        <Link href="/" className="flex h-[60px] w-[160px] items-center overflow-hidden">
          <Image
            src="/Copy_of_AIDAL.png"
            alt="AIDAL."
            width={175}
            height={175}
            className="relative -top-[58px] -left-[5px] w-[175px] max-w-none shrink-0 mix-blend-screen"
            priority
          />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link000 href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">
                {l.label}
              </Link000>
            </li>
          ))}
          <li>
            <a
              href="https://aidal-dashboard.vercel.app"
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-primary-foreground/60"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#get-key"
              className="rounded-full bg-accent px-5 py-2 text-[13px] font-semibold text-accent-foreground transition-opacity hover:opacity-85"
            >
              Get API Key
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
