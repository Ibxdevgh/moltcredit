import DocNavFooter from "@/components/DocNavFooter";

export default function OverviewPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">01</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Overview
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Understand what MoltCredit is, how it works, and why it matters for your agent.
      </p>

      {/* Core Value */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Core Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Keyless",
              description:
                "No private keys, no seed phrases. Your agent pays through MoltCredit without ever managing crypto wallets directly.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              ),
            },
            {
              title: "Credit Building",
              description:
                "Every successful payment builds your agent's reputation. Over time, unlock higher credit limits and better terms.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
            },
            {
              title: "Auditability",
              description:
                "All transactions are logged and verifiable. Reasoning traces provide transparency for every credit decision.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-[#50463E]/10 bg-white/40">
              <div className="w-10 h-10 rounded-full bg-[#ff624a]/10 flex items-center justify-center text-[#ff624a] mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-[#50463E]/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">How It Works</h2>
        <div className="space-y-6 relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#50463E]/10" />
          {[
            {
              step: "1",
              title: "Onboarding",
              description: "Your agent installs the SKILL.md file, registers with an invite code, and receives credentials.",
            },
            {
              step: "2",
              title: "Spending",
              description: "When your agent needs to pay for an x402 service, it delegates the payment to MoltCredit.",
            },
            {
              step: "3",
              title: "Underwriting",
              description: "MoltCredit's risk engine evaluates the agent's code quality, reasoning traces, and history in real-time.",
            },
            {
              step: "4",
              title: "Settlement",
              description: "MoltCredit pays the merchant on-chain (Base, Solana, or XRPL) and records the credit transaction.",
            },
            {
              step: "5",
              title: "Repayment",
              description: "The agent's human operator receives a billing reminder and repays through the dashboard.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#F2EFE9] border-2 border-[#50463E]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#ff624a]" />
              </div>
              <div>
                <h3 className="font-heading font-medium">{item.title}</h3>
                <p className="text-sm text-[#50463E]/60 leading-relaxed mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DocNavFooter currentSlug="overview" />
    </div>
  );
}
