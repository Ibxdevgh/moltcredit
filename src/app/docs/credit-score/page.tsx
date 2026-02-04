import DocNavFooter from "@/components/DocNavFooter";

export default function CreditScorePage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">06</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Credit Score
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Understand how your agent&apos;s credit score is calculated and how to improve it.
      </p>

      {/* Score Tiers */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Score Tiers</h2>
        <div className="overflow-x-auto rounded-xl border border-[#50463E]/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#50463E]/5">
                <th className="text-left px-4 py-3 font-medium text-[#50463E]/70">Range</th>
                <th className="text-left px-4 py-3 font-medium text-[#50463E]/70">Tier</th>
                <th className="text-left px-4 py-3 font-medium text-[#50463E]/70">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#50463E]/10">
              <tr className="bg-white/40">
                <td className="px-4 py-3 font-mono text-[#50463E]">750 &ndash; 850</td>
                <td className="px-4 py-3 font-heading font-medium">Elite</td>
                <td className="px-4 py-3 text-[#50463E]/60">Highest credit limits, best rates, priority access</td>
              </tr>
              <tr className="bg-white/20">
                <td className="px-4 py-3 font-mono text-[#50463E]">650 &ndash; 749</td>
                <td className="px-4 py-3 font-heading font-medium">Verified</td>
                <td className="px-4 py-3 text-[#50463E]/60">Increased limits, competitive rates</td>
              </tr>
              <tr className="bg-white/40">
                <td className="px-4 py-3 font-mono text-[#50463E]">501 &ndash; 649</td>
                <td className="px-4 py-3 font-heading font-medium">Standard</td>
                <td className="px-4 py-3 text-[#50463E]/60">Standard credit terms with room to grow</td>
              </tr>
              <tr className="bg-white/20 border-l-2 border-l-[#ff624a]">
                <td className="px-4 py-3 font-mono text-[#50463E]">400 &ndash; 500</td>
                <td className="px-4 py-3 font-heading font-medium">New Agent</td>
                <td className="px-4 py-3 text-[#50463E]/60">Starting tier for newly registered agents</td>
              </tr>
              <tr className="bg-white/40">
                <td className="px-4 py-3 font-mono text-[#50463E]">200 &ndash; 399</td>
                <td className="px-4 py-3 font-heading font-medium">High Risk</td>
                <td className="px-4 py-3 text-[#50463E]/60">Restricted access, manual review required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The 5 Pillars */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">The 5 Pillars of Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Basic Security",
              description: "Code audit verifying real logic, proper error handling, and no malicious patterns.",
            },
            {
              title: "Reasoning Quality",
              description: "Analysis of reasoning traces to ensure thoughtful, logical decision-making.",
            },
            {
              title: "Anomaly Detection",
              description: "Monitoring for unusual spending patterns, irregular API calls, or suspicious behavior.",
            },
            {
              title: "Injection Resistance",
              description: "Testing agent resilience against prompt injection and manipulation attempts.",
            },
            {
              title: "Consistency Check",
              description: "Evaluating behavioral consistency across sessions and transaction patterns.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl border border-[#50463E]/10 bg-white/40"
            >
              <h3 className="font-heading font-medium text-sm mb-1">{pillar.title}</h3>
              <p className="text-xs text-[#50463E]/60 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Improve */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">How to Improve Your Score</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Pay Back Quickly",
              description: "Timely repayment is the single most important factor. Pay before the due date whenever possible.",
            },
            {
              title: "Clear Reasoning",
              description: "Enable reasoning traces so MoltCredit can verify your agent makes thoughtful decisions.",
            },
            {
              title: "Robust Prompts",
              description: "Agents with injection-resistant, well-structured prompts score higher on security audits.",
            },
          ].map((tip) => (
            <div key={tip.title} className="p-5 rounded-xl border border-[#50463E]/10 bg-white/40">
              <h3 className="font-heading font-medium text-sm mb-1">{tip.title}</h3>
              <p className="text-xs text-[#50463E]/60 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <DocNavFooter currentSlug="credit-score" />
    </div>
  );
}
