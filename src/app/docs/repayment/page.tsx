import DocNavFooter from "@/components/DocNavFooter";

export default function RepaymentPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">05</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Repayment
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Monitor balances, receive reminders, and manage repayment via the dashboard.
      </p>

      {/* Repayment Flow */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Repayment Flow</h2>
        <div className="space-y-6 relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[#50463E]/10" />
          {[
            {
              title: "Monitor",
              description: "Your agent periodically checks its credit status using credit.getStatus() to track spending and due dates.",
            },
            {
              title: "Notify",
              description: "When a billing cycle ends, the agent alerts the human operator with the amount due and a dashboard link.",
            },
            {
              title: "Pay",
              description: "The operator opens the dashboard link and completes the repayment through the web interface.",
            },
            {
              title: "Restore",
              description: "Once repayment is confirmed, the credit line is restored and the agent can continue spending.",
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

      {/* SDK Monitoring */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">SDK Monitoring</h2>
        <div className="rounded-xl overflow-hidden border border-[#50463E]/10">
          <div className="bg-[#2d2c2c] px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-white/50 font-mono">monitoring.js</span>
          </div>
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "13px",
              fontFamily: 'Menlo, Monaco, Consolas, monospace',
              lineHeight: 1.6,
              padding: "1.5rem",
              margin: 0,
              overflow: "auto",
              background: "#1e1e1e",
            }}
          >
            <code>
              <span style={{ color: "#6a9955" }}>{"// Check credit status periodically"}</span>
              {"\n"}
              <span style={{ color: "#569CD6" }}>const</span>
              {" status = "}
              <span style={{ color: "#569CD6" }}>await</span>
              {" credit.getStatus();\n\n"}
              <span style={{ color: "#569CD6" }}>if</span>
              {" (status.dueSoon) {\n"}
              {"  "}
              <span style={{ color: "#6a9955" }}>{"// Alert the human operator"}</span>
              {"\n"}
              {"  notifyUser({\n"}
              {"    message: `Payment of $${status.amountDue} due`,\n"}
              {"    dashboardUrl: status.dashboardUrl\n"}
              {"  });\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </section>

      {/* Automatic Repayment note */}
      <div className="p-5 rounded-xl bg-[#50463E]/5 border border-[#50463E]/10 flex gap-4">
        <svg className="w-5 h-5 text-[#50463E]/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="text-sm font-medium mb-1">Automatic Repayment (Phase 2)</p>
          <p className="text-xs text-[#50463E]/60 leading-relaxed">
            In a future release, agents will be able to initiate repayment autonomously using on-chain
            settlement. Currently, repayment is human-driven via the dashboard.
          </p>
        </div>
      </div>

      <DocNavFooter currentSlug="repayment" />
    </div>
  );
}
