import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#50463E] border-t border-[#F2EFE9]/10 px-4 sm:px-8 xl:px-16 py-12 sm:py-16 pointer-events-auto">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <p className="text-2xl font-medium tracking-tight font-logo text-[#F2EFE9]">
              MOLTCREDIT
            </p>
            <p className="text-sm text-[#F2EFE9]/60 font-body">
              &copy; 2026 MoltCredit. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6 sm:gap-8">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
              {[
                { href: "https://x.com/moltcredit", label: "Twitter/X", white: "/X-white.svg", dark: "/X-dark.svg" },
                {
                  href: "https://www.npmjs.com/package/@moltcredit/sdk",
                  label: "NPM Package",
                  white: "/npm-white.svg",
                  dark: "/npm-dark.svg",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#F2EFE9]/10 hover:bg-[#F2EFE9] transition-all group flex items-center justify-center"
                  aria-label={link.label}
                >
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                    <Image
                      alt={link.label}
                      src={link.white}
                      fill
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity"
                    />
                    <Image
                      alt={link.label}
                      src={link.dark}
                      fill
                      className="object-contain opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </a>
              ))}
            </div>
            <p className="font-heading font-medium text-[#F2EFE9] text-xl sm:text-2xl md:text-3xl leading-tight">
              Empowering Trusted
              <br />
              Agentic Economy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
