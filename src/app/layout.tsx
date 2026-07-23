import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tryaidal.com"),
  title: "AIDAL. — AI Decision Accountability Layer",
  description:
    "Tamper-proof audit trail for every AI decision. One API call. Cryptographically sealed, regulator-ready, publicly verifiable. Built for EU AI Act, MAS FEAT, OJK, VARA requirements. Free to start.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Condensed:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIDAL",
              url: "https://tryaidal.com",
              logo: "https://tryaidal.com/logo.png",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
