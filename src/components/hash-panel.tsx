"use client";

import { useEffect, useState } from "react";

const HASHES = [
  "a7f3c9b2e4d81f06c3a9",
  "3e8b2a91c7f04d22b185",
  "f2c7a3e9b1d58031e742",
  "8d4f1c6a2e93b74503f1",
  "c9b3e7f2a14d0863d529",
  "1a8d4f7c3e2b9650a847",
  "b5e2c8f1a7d34092fc60",
  "4d7a3c9e2f810b56a193",
];

export function HashPanel() {
  const [idx, setIdx] = useState(2);
  const [rows, setRows] = useState(HASHES.slice(0, 3));

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => {
        const next = i + 1;
        setRows([HASHES[i % HASHES.length], HASHES[(i + 1) % HASHES.length], HASHES[next % HASHES.length]]);
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-md border border-[#1E2A3A] bg-[#111827]/97 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] tracking-[1.5px] text-[#4A5668] uppercase">Audit chain</span>
        <span className="flex items-center gap-1.5 text-[10px] tracking-[1.5px] text-[#00D37F] uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-[#00D37F]" />
          Live
        </span>
      </div>
      <div className="flex flex-col gap-1">
        {rows.map((h, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 font-mono text-[10px] ${
              i === rows.length - 1 ? "text-[#00D37F]" : "text-[#2E3A4E]"
            }`}
          >
            <span className="size-[3px] shrink-0 rounded-full bg-current" />
            <span>{h}...</span>
          </div>
        ))}
      </div>
    </div>
  );
}
