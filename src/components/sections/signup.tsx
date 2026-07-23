"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export function SignupSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [copied, setCopied] = useState(false);

  async function getApiKey() {
    setError("");
    if (!name.trim()) {
      setError("Please enter your company name.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid work email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://aidal-production.up.railway.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.status === 409) {
        setError("Account already exists. Email anthony@tryaidal.com to recover your key.");
      } else if (res.status !== 201) {
        setError("Something went wrong. Email anthony@tryaidal.com.");
      } else {
        setApiKey(data.api_key);
        setName("");
        setEmail("");
        fetch("https://formspree.io/f/xgorddko", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ company: name, email, event: "api_key_created" }),
        }).catch(() => {});
      }
    } catch {
      setError("Network error. Email anthony@tryaidal.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="get-key" className="mx-auto max-w-2xl px-6 py-36 text-center md:px-16">
      <div className="meta-text mb-4 flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
        Get started free
      </div>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Provable AI decisions.
        <br />
        <em className="text-muted-foreground not-italic">Starting today.</em>
      </h2>
      <p className="mb-8 text-[1.0625rem] text-muted-foreground">
        No credit card. No manual approval. Start logging decisions immediately.
      </p>
      <div className="mx-auto max-w-[520px] rounded-lg border border-border bg-background p-10 text-left shadow-sm">
        <Input
          placeholder="Company name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2.5"
        />
        <Input
          placeholder="Work email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2.5"
        />
        <p className="mb-4 text-center text-[13px] text-muted-foreground">
          Your key is generated instantly. Start logging decisions in 30 minutes.
        </p>
        <button
          onClick={getApiKey}
          disabled={loading}
          className="mt-1 w-full rounded-md bg-primary py-3.5 text-[0.9375rem] font-semibold text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-45"
        >
          {loading ? "Creating your key..." : "Get My API Key →"}
        </button>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-muted-foreground">
          <span>🔒 SHA-256 sealed</span>
          <span className="text-border">·</span>
          <span>⚡ Instant key</span>
          <span className="text-border">·</span>
          <span>✓ No credit card</span>
        </div>
        {error && (
          <div className="mt-2.5 rounded-md border border-destructive/20 bg-destructive/5 px-3.5 py-2.5 text-[0.9375rem] text-destructive">
            {error}
          </div>
        )}
        {apiKey && (
          <div className="mt-8 text-left">
            <div className="mb-px flex items-center gap-1.5 rounded-t-md border border-[#0A6E4F]/20 bg-[#0A6E4F]/5 px-4.5 py-3.5">
              <span className="text-sm text-[#0A6E4F]">✓</span>
              <span className="text-[10px] font-semibold tracking-wide text-[#0A6E4F] uppercase">
                Your API key is live — save it now
              </span>
            </div>
            <div className="mb-1.5 rounded-b-md border border-t-0 border-border bg-secondary px-4 py-3 font-mono text-xs break-all">
              {apiKey}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(apiKey);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="mb-5 rounded-md border border-border px-4.5 py-1.5 text-xs transition-colors hover:border-primary"
            >
              {copied ? "Copied!" : "Copy key"}
            </button>
            <div className="mb-6 text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground/80">This key will not be shown again.</strong> Lost your
              key? Email anthony@tryaidal.com.
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-5">
              {[
                { n: 1, label: "Open your dashboard", text: "Log a test decision in 2 minutes — no code needed.", href: "https://aidal-dashboard.vercel.app" },
                { n: 2, label: "Read the API docs", text: "One endpoint. Copy the example. You're integrated.", href: "https://aidal-production.up.railway.app/docs" },
                { n: 3, label: "Need help?", text: "Email us. We'll personally help you log your first decision — free.", href: "mailto:anthony@tryaidal.com?subject=AIDAL%20integration%20help" },
              ].map((s) => (
                <a
                  key={s.n}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener" : undefined}
                  className="flex items-start gap-3.5 rounded-lg border border-border p-4 no-underline transition-colors hover:bg-secondary"
                >
                  <span className="min-w-5 font-mono text-xl font-bold text-border">{s.n}</span>
                  <div>
                    <div className="mb-0.5 text-[10px] font-semibold tracking-wide text-foreground uppercase">
                      {s.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{s.text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
