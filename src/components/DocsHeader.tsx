import Image from "next/image";

export default function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 sm:h-20 bg-[#F2EFE9]/95 backdrop-blur-sm border-b border-[#50463E]/10">
      <div className="h-full flex items-center justify-between px-4 sm:px-8 xl:px-16 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
          <a href="/" className="text-xl font-medium tracking-tight font-logo hover:opacity-80 transition-opacity">
            MOLTCREDIT
          </a>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#50463E]/10 text-[#50463E]/70 font-medium">
            Docs
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="text-sm font-medium text-[#50463E]/70 hover:text-[#50463E] transition-colors"
            href="/docs"
          >
            Docs Home
          </a>
          <a
            href="/SKILL.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#50463E]/70 hover:text-[#50463E] transition-colors"
          >
            Download SKILL.md
          </a>
          <div className="w-px h-4 bg-[#50463E]/15" />
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/moltcredit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#50463E]/5 hover:bg-[#50463E]/10 transition-all flex items-center justify-center"
              aria-label="Twitter/X"
            >
              <div className="relative w-5 h-5">
                <Image alt="X" src="/X-dark.svg" fill className="object-contain" />
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
