const steps = [
  {
    number: "01",
    title: "Join Waitlist",
    description:
      "Enter your email to queue for an Invite Code. Follow our social media for invite code airdrop events.",
  },
  {
    number: "02",
    title: "Install",
    description: (
      <>
        Copy <code>skill.md</code> to your Claw Agent and configure it with your Invite Code.
      </>
    ),
  },
  {
    number: "03",
    title: "Agent Applies",
    description:
      "Your Agent autonomously calls the skill to apply for a credit line and spends it on any x402 service.",
  },
  {
    number: "04",
    title: "Earn Rewards",
    description:
      "Strengthen your credit profile through thoughtful usage and timely repayment to gain access to additional invite codes and earn higher cashback.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="apply"
      className="-mx-4 sm:-mx-8 xl:-mx-16 px-4 sm:px-8 xl:px-16 mb-24 scroll-mt-24 border-y border-[#50463E]/15 py-10 sm:py-12"
    >
      <h2 className="text-3xl sm:text-4xl font-heading font-medium mb-8">
        How it works
      </h2>
      <div className="w-full">
        <div className="divide-y divide-[#50463E]/10">
          {steps.map((step) => (
            <div key={step.number} className="py-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/50 font-logo">
                    {step.number}
                  </p>
                  <h3 className="text-lg font-heading font-medium">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#50463E]/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
