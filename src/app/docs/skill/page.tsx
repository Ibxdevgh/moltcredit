import DocNavFooter from "@/components/DocNavFooter";

export default function SkillPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo mb-2">02</p>
      <h1 className="text-4xl sm:text-5xl font-heading font-medium leading-tight tracking-tight mb-4">
        Integration Skill
      </h1>
      <p className="text-lg text-[#50463E]/60 mb-12 max-w-2xl">
        Learn how SKILL.md enables zero-code integration for your agent.
      </p>

      {/* Why SKILL.md? */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">Why SKILL.md?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-[#50463E]/10 bg-white/40">
            <h3 className="font-heading font-medium mb-2">The Driver for the SDK</h3>
            <p className="text-sm text-[#50463E]/60 leading-relaxed">
              SKILL.md is a machine-readable file that teaches your agent how to use the MoltCredit SDK.
              Instead of manually coding API calls, your agent reads the skill file and autonomously
              installs and executes the integration.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#50463E]/10 bg-white/40">
            <h3 className="font-heading font-medium mb-2">Self-Installation</h3>
            <p className="text-sm text-[#50463E]/60 leading-relaxed">
              Place the SKILL.md file in your agent&apos;s context and it handles the rest.
              The agent learns the steps, installs the SDK, registers itself, and begins
              making payments autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12 pt-8 border-t border-[#50463E]/10">
        <h2 className="text-2xl font-heading font-medium mb-6">How It Works</h2>
        <div className="space-y-8">
          {[
            {
              number: "01",
              title: "Teach the Skill",
              description:
                "Add SKILL.md to your agent's working directory or context. The file contains all instructions your agent needs.",
            },
            {
              number: "02",
              title: "Agent Learns & Installs",
              description:
                "Your agent reads the skill file, installs the @moltcredit/sdk package, and prepares the integration.",
            },
            {
              number: "03",
              title: "Autonomous Execution",
              description:
                "The agent registers with MoltCredit, applies for a credit line, and begins making payments - all without manual coding.",
            },
          ].map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff624a]/10 flex items-center justify-center text-[#ff624a] text-xs font-logo flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading font-medium">{step.title}</h3>
                <p className="text-sm text-[#50463E]/60 leading-relaxed mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="p-6 rounded-xl bg-[#ff624a]/5 border border-[#ff624a]/10">
        <p className="text-sm text-[#50463E]/80 mb-3">
          Ready to get started? Download the SKILL.md file and add it to your agent.
        </p>
        <a
          href="/SKILL.md"
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#ff624a] text-white text-sm font-medium rounded-lg hover:bg-[#ff4d32] transition-colors"
        >
          Download SKILL.md
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      <DocNavFooter currentSlug="skill" />
    </div>
  );
}
