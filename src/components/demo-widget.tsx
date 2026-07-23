"use client";

import { useState } from "react";

const jurLabel: Record<string, string> = { SG: "MAS FEAT", ID: "OJK", EU: "EU AI Act", UAE: "VARA" };
const HEX = "0123456789abcdef";
function rndHex(n: number) {
  let s = "";
  for (let i = 0; i < n; i++) s += HEX[Math.floor(Math.random() * 16)];
  return s;
}

export function DemoWidget() {
  const [type, setType] = useState("loan_approval");
  const [jur, setJur] = useState("SG");
  const [sealing, setSealing] = useState(false);
  const [result, setResult] = useState<{ id: string; hash: string; comp: string } | null>(null);

  function runDemo() {
    setSealing(true);
    setResult(null);
    setTimeout(() => {
      setSealing(false);
      setResult({
        id: "aud_" + rndHex(8),
        hash: "sha256:" + rndHex(32),
        comp: "RULES CHECK PASSED — " + (jurLabel[jur] ?? jur),
      });
    }, 800);
  }

  return (
    <div className="w-full max-w-[340px] border border-white/8 bg-[#0a0c10] text-[#f0ebe0]">
      <div className="flex items-center gap-2 border-b border-white/6 bg-white/[0.015] px-3.5 py-2">
        <div className="size-1.5 shrink-0 animate-pulse rounded-full bg-[#0A6E4F]" />
        <span className="font-sans text-[9px] tracking-[4px] text-[#3A3A38] uppercase">
          Live Audit Chain Demo
        </span>
      </div>
      <div className="space-y-3.5 px-3.5 pt-3.5">
        <div>
          <label className="mb-1 block font-sans text-[9px] tracking-[2px] text-[#4A4A48] uppercase">
            Decision type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border-0 border-b border-white/12 bg-white/3 py-1.5 font-mono text-xs text-[#f0ebe0] outline-none"
          >
            <option value="loan_approval">Loan Approval</option>
            <option value="fraud_detection">Fraud Detection</option>
            <option value="credit_scoring">Credit Scoring</option>
            <option value="insurance_underwriting">Insurance Underwriting</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block font-sans text-[9px] tracking-[2px] text-[#4A4A48] uppercase">
            Jurisdiction
          </label>
          <select
            value={jur}
            onChange={(e) => setJur(e.target.value)}
            className="w-full border-0 border-b border-white/12 bg-white/3 py-1.5 font-mono text-xs text-[#f0ebe0] outline-none"
          >
            <option value="SG">SG (MAS FEAT)</option>
            <option value="ID">ID (OJK)</option>
            <option value="EU">EU (EU AI Act)</option>
            <option value="UAE">UAE (VARA)</option>
          </select>
        </div>
        <button
          onClick={runDemo}
          disabled={sealing}
          className="mt-1 mb-3.5 w-full bg-[#f0ebe0] py-3 font-sans text-[11px] font-semibold tracking-[3px] text-[#070809] uppercase transition-opacity hover:opacity-85 disabled:animate-pulse disabled:opacity-70"
        >
          {sealing ? "Sealing..." : "Seal This Decision"}
        </button>
      </div>
      {result && (
        <div className="border-t border-white/6 font-mono">
          <div className="flex items-center gap-2 border-b border-[#0A6E4F]/12 px-3.5 py-1.5">
            <div className="h-px flex-1 bg-[#0A6E4F]/25" />
            <span className="text-[9px] tracking-[3px] text-[#0A6E4F] uppercase">Sealed</span>
            <div className="h-px flex-1 bg-[#0A6E4F]/25" />
          </div>
          <div className="px-3.5 pt-1.5 pb-0.5 font-mono text-[9px] tracking-[1.5px] text-[#cc4444]/55 uppercase">
            DEMO — for illustration only
          </div>
          <div className="flex items-start gap-2.5 border-b border-white/4 px-3.5 py-1.5">
            <span className="min-w-[72px] shrink-0 pt-0.5 font-sans text-[9px] tracking-[1.5px] text-[#4A4A48] uppercase">
              Audit ID
            </span>
            <span className="text-[11px] break-all text-[#f0ebe0]">{result.id}</span>
          </div>
          <div className="flex items-start gap-2.5 border-b border-white/4 px-3.5 py-1.5">
            <span className="min-w-[72px] shrink-0 pt-0.5 font-sans text-[9px] tracking-[1.5px] text-[#4A4A48] uppercase">
              Hash
            </span>
            <span className="text-[11px] break-all text-[#f0ebe0]">
              <span className="text-[#0A6E4F]/65">SHA-256 · </span>
              {result.hash}
            </span>
          </div>
          <div className="flex items-center gap-2.5 border-b border-white/4 px-3.5 py-2">
            <span className="text-base text-[#0A6E4F]">✓</span>
            <span className="text-[9px] font-semibold tracking-[4px] text-[#0A6E4F] uppercase">
              Cryptographically Sealed
            </span>
          </div>
          <div className="mx-3.5 my-2 flex items-center gap-2 rounded border border-[#0A6E4F]/20 bg-[#0A6E4F]/8 px-3 py-1.5">
            <span className="text-[8px] text-[#0A6E4F]">●</span>
            <span className="text-[11px] text-[#0A6E4F]">{result.comp}</span>
          </div>
          <div className="border-b border-white/4 px-3.5 py-2 font-sans text-[10px] leading-relaxed text-[#4A4A48] italic">
            This decision is permanently sealed. No one — including AIDAL — can alter it.
          </div>
          <div className="px-3.5 py-2">
            <a href="#get-key" className="font-sans text-[10px] text-[#f0ebe0]/35 italic underline hover:text-[#f0ebe0]/65">
              Want a real verifiable audit ID? Sign up for a free API key →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
