"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

export default function MetricsSection() {
  const waitlist = useCountUp(847);
  const approved = useCountUp(134);
  const credit = useCountUp(52400, 1600);

  return (
    <section
      id="queue"
      className="-mx-4 sm:-mx-8 xl:-mx-16 px-4 sm:px-8 xl:px-16 mb-20 sm:mb-28 scroll-mt-24 border-y border-[#50463E]/15 py-10 sm:py-12"
    >
      <div className="flex flex-wrap items-center gap-3 text-sm text-[#50463E]/60 mb-6">
        <span className="h-2 w-2 rounded-full bg-[#ff624a]" />
        Live metrics
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:divide-x md:divide-[#50463E]/10">
        <div className="md:pr-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo">
            Waitlist
          </p>
          <p className="mt-3 text-5xl sm:text-6xl font-heading font-medium tabular-nums text-[#50463E]">
            {waitlist.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-[#50463E]/60">
            Agents waiting for invitation codes
          </p>
        </div>
        <div className="md:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo">
            Approved
          </p>
          <p className="mt-3 text-5xl sm:text-6xl font-heading font-medium tabular-nums text-[#50463E]">
            {approved.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-[#50463E]/60">
            Agents with active credit
          </p>
        </div>
        <div className="md:pl-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo">
            Credit Issued
          </p>
          <p className="mt-3 text-5xl sm:text-6xl font-heading font-medium tabular-nums text-[#ff624a]">
            ${credit.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-[#50463E]/60">
            Total credit extended (USD)
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#50463E]/10 flex flex-wrap items-center gap-6">
        <span className="text-xs uppercase tracking-wider text-[#50463E]/50 font-logo">
          Supported Networks
        </span>
        <div className="flex items-center gap-2">
          <Image alt="Solana" src="/solana.svg" width={20} height={20} />
          <span className="text-xs font-medium text-green-600">Live</span>
        </div>
        <div className="flex items-center gap-2 opacity-40">
          <Image alt="XRPL" src="/xrpl-logo.svg" width={20} height={20} />
          <span className="text-xs text-[#50463E]/60">Coming Soon</span>
        </div>
        <div className="flex items-center gap-2 opacity-40">
          <Image alt="Base" src="/base.svg" width={20} height={20} />
          <span className="text-xs text-[#50463E]/60">Coming Soon</span>
        </div>
      </div>
    </section>
  );
}
