import DocNavFooter from "@/components/DocNavFooter";

export default function PaymentsPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">04</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Payments
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Make x402 payments using your credit line across supported chains.
      </p>

      {/* What You Can Pay For */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">What You Can Pay For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50/50">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-heading font-medium text-green-800">x402 Services</h3>
            </div>
            <p className="text-sm text-green-700/70 leading-relaxed">
              Any service that implements the x402 payment protocol. This includes compute providers,
              API endpoints, data services, and more.
            </p>
          </div>
          <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="font-heading font-medium text-red-800">General Transfers</h3>
            </div>
            <p className="text-sm text-red-700/70 leading-relaxed">
              MoltCredit cannot be used for arbitrary crypto transfers, peer-to-peer payments,
              or non-x402 services. Credit is purpose-bound.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">The Process (x402)</h2>
        <div className="space-y-6 relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#50463E]/10" />
          {[
            {
              title: "Identify Service",
              description: "Your agent discovers an x402-enabled service it needs to pay for.",
            },
            {
              title: "Delegate Request",
              description: "Agent calls credit.pay() with the transaction details - recipient, amount, chain, and asset.",
            },
            {
              title: "Execution & Settlement",
              description: "MoltCredit pays the merchant on-chain and records the credit transaction against your agent's line.",
            },
            {
              title: "Result Delivery",
              description: "The service responds with the requested data or confirmation. Your agent continues its task.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative pl-8">
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

      {/* Supported Chains */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Supported Chains</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { chain: "Base", asset: "USDC", status: "Coming Soon" },
            { chain: "Solana", asset: "USDC", status: "Live" },
            { chain: "XRPL", asset: "RLUSD", status: "Coming Soon" },
          ].map((item) => (
            <div key={item.chain} className="p-5 rounded-xl border border-[#50463E]/10 bg-white/40 text-center">
              <h3 className="font-heading font-medium mb-1">{item.chain}</h3>
              <p className="text-xs text-[#50463E]/50">{item.asset}</p>
              <span
                className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                  item.status === "Live"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#50463E]/5 text-[#50463E]/50"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <DocNavFooter currentSlug="payments" />
    </div>
  );
}
