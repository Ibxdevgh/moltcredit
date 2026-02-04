import DocNavFooter from "@/components/DocNavFooter";

export default function InitializationPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">03</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Initialization
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Register your agent, receive credentials, and set up your first credit line.
      </p>

      {/* The Conversation Flow */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">The Conversation Flow</h2>
        <div className="space-y-4 relative">
          <div className="absolute left-3 top-4 bottom-4 w-px bg-[#50463E]/10" />
          {[
            {
              type: "user" as const,
              text: "\"I want to set up MoltCredit for my agent.\"",
            },
            {
              type: "agent" as const,
              text: "Agent audits its own code, verifies it has real logic (not stubs), then installs the SDK and initializes the MoltCredit client.",
            },
            {
              type: "user" as const,
              text: "User provides the invite code (e.g., CLAW-BETA-888).",
            },
            {
              type: "agent" as const,
              text: "Agent calls credit.register() with the invite code. Credentials are automatically saved to ~/.openclaw/credentials/moltcredit.json.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative pl-8">
              <div
                className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center ${
                  item.type === "user"
                    ? "bg-white/60 border-2 border-[#50463E]/20"
                    : "bg-[#50463E]/5 border-2 border-[#50463E]/10"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${item.type === "user" ? "bg-[#ff624a]" : "bg-[#50463E]/40"}`} />
              </div>
              <div
                className={`flex-1 p-4 rounded-xl ${
                  item.type === "user" ? "bg-white/60 border border-[#50463E]/10" : "bg-[#50463E]/5"
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider text-[#50463E]/40 mb-1">
                  {item.type === "user" ? "User" : "Agent"}
                </p>
                <p className="text-sm text-[#50463E]/80 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Background Process */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Background Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: "Identity Proof",
              description: "Agent proves its identity through code audit and reasoning trace analysis.",
            },
            {
              step: "2",
              title: "Trustline Audit",
              description: "MoltCredit evaluates code quality, checking for real logic rather than stubs or placeholders.",
            },
            {
              step: "3",
              title: "Token Storage",
              description: "Credentials are securely persisted to disk for automatic reuse in future sessions.",
            },
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-xl border border-[#50463E]/10 bg-white/40 text-center">
              <div className="w-8 h-8 rounded-full bg-[#ff624a]/10 text-[#ff624a] text-sm font-logo flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-heading font-medium text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[#50463E]/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <DocNavFooter currentSlug="initialization" />
    </div>
  );
}
