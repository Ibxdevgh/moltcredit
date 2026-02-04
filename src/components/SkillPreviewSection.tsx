export default function SkillPreviewSection() {
  return (
    <section
      id="agent"
      className="-mx-4 sm:-mx-8 xl:-mx-16 px-4 sm:px-8 xl:px-16 mb-12 scroll-mt-24 border-y border-[#50463E]/15 py-10 sm:py-12"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-heading font-medium mb-2">
            Machine Readable
          </h2>
          <p className="text-[#50463E]/60 text-sm">
            This page exposes <code>/SKILL.md</code> for Agents.
          </p>
        </div>
        <a
          href="/SKILL.md"
          target="_blank"
          className="px-6 py-2 bg-[#ff624a] text-white text-sm font-medium rounded-lg hover:bg-[#ff4d32] transition-colors flex items-center gap-2"
        >
          <span>Download SKILL.md</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      <a
        href="/SKILL.md"
        target="_blank"
        className="block rounded-xl overflow-hidden border border-[#50463E]/10 hover:border-[#ff624a]/30 transition-all cursor-pointer group"
      >
        <div className="bg-[#ff624a]/5 px-4 py-3 border-b border-[#50463E]/10 flex items-center justify-between">
          <span className="text-xs text-[#ff624a] font-medium uppercase tracking-wider">
            Preview Only - Click to Download Full File
          </span>
          <svg
            className="w-4 h-4 text-[#ff624a] group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>

        {/* Terminal chrome */}
        <div className="bg-[#2d2c2c] px-4 py-2 flex items-center gap-2 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-white/50 font-mono">SKILL.md preview</span>
        </div>

        {/* Code preview */}
        <div className="select-none pointer-events-none">
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "0.875rem",
              fontFamily:
                'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
              lineHeight: 1.5,
              padding: "1.5rem",
              margin: 0,
              overflow: "auto",
              background: "#1e1e1e",
              userSelect: "none",
            }}
          >
            <code style={{ fontSize: "13px" }}>
              <span style={{ color: "#569cd6" }}># MoltCredit Integration Skill</span>
              {"\n\n"}
              <span style={{ color: "#569cd6" }}>## 1. Overview</span>
              {"\n"}
              {"MoltCredit provides a credit line you can use directly for:\n"}
              {"1. Buying compute\n"}
              {"2. Calling any x402-enabled service\n"}
              {"3. Paying for any goods via x402\n\n"}
              <span style={{ color: "#569cd6" }}>## 2. Quick Start</span>
              {"\n"}
              {"```javascript\n"}
              <span style={{ color: "#569CD6" }}>const</span>
              {" {"}
              <span style={{ color: "#4ec9b0" }}> MoltCredit</span>
              {", audit } = "}
              <span style={{ color: "#dcdcaa" }}>require</span>
              {"("}
              <span style={{ color: "#ce9178" }}>&apos;@moltcredit/sdk&apos;</span>
              {");\n\n"}
              <span style={{ color: "#6a9955" }}>{"// 1. Initialize"}</span>
              {"\n"}
              <span style={{ color: "#569CD6" }}>const</span>
              {" credit = "}
              <span style={{ color: "#569CD6" }}>new</span>
              <span style={{ color: "#4ec9b0" }}> MoltCredit</span>
              {"({ agentName: "}
              <span style={{ color: "#ce9178" }}>&quot;MyAgent&quot;</span>
              {" });\n\n"}
              <span style={{ color: "#6a9955" }}>{"// 2. Register"}</span>
              {"\n"}
              <span style={{ color: "#569CD6" }}>await</span>
              {" credit.register({\n"}
              {"  inviteCode: "}
              <span style={{ color: "#ce9178" }}>&quot;YOUR_CODE&quot;</span>
              {",\n"}
              {"  runtimeEnv: "}
              <span style={{ color: "#ce9178" }}>&quot;node-v22&quot;</span>
              {"\n});\n\n"}
              <span style={{ color: "#6a9955" }}>{"// 3. Pay"}</span>
              {"\n"}
              <span style={{ color: "#569CD6" }}>const</span>
              {" result = "}
              <span style={{ color: "#569CD6" }}>await</span>
              {" credit.pay({\n"}
              {"  transaction: {\n"}
              {"    recipient: "}
              <span style={{ color: "#ce9178" }}>&quot;merchant_id&quot;</span>
              {",\n"}
              {"    amount: "}
              <span style={{ color: "#b5cea8" }}>5.00</span>
              {",\n"}
              {"    chain: "}
              <span style={{ color: "#ce9178" }}>&quot;SOLANA&quot;</span>
              {",\n"}
              {"    asset: "}
              <span style={{ color: "#ce9178" }}>&quot;USDC&quot;</span>
              {"\n  }\n});\n"}
              {"```"}
            </code>
          </pre>
        </div>
      </a>
    </section>
  );
}
