"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-16 sm:h-20">
        <div className="h-full flex items-center justify-between px-4 sm:px-8 xl:px-16 lg:w-3/5 bg-[#F2EFE9]/95 backdrop-blur-sm border-b border-[#50463E]/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-medium tracking-tight font-logo">
                MOLTCREDIT
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#ff624a]/10 text-[#ff624a] font-medium">
                Beta
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium text-[#50463E]/70 hover:text-[#50463E] transition-colors whitespace-nowrap"
              href="/docs"
            >
              Docs
            </a>
            <a
              href="/SKILL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#50463E]/70 hover:text-[#50463E] transition-colors whitespace-nowrap"
            >
              Get /SKILL.md
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
                  <Image
                    alt="X"
                    src="/X-dark.svg"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </nav>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#50463E]/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`2xl:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-[#50463E]/20 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute left-0 right-0 top-0 bg-[#F2EFE9] shadow-2xl p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="h-16" />
          <nav className="space-y-2">
            <a
              className="block w-full text-left px-4 py-3 rounded-xl hover:bg-[#50463E]/5 transition-colors font-medium"
              href="/docs"
            >
              Docs
            </a>
            <a
              href="/SKILL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 rounded-xl hover:bg-[#50463E]/5 transition-colors font-medium"
            >
              Get /SKILL.md
            </a>
          </nav>
          <div className="mt-auto pt-4 border-t border-[#50463E]/10">
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/moltcredit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#50463E]/5 hover:bg-[#50463E]/10 transition-all flex items-center justify-center"
                aria-label="Twitter/X"
              >
                <div className="relative w-5 h-5">
                  <Image alt="X" src="/X-dark.svg" fill className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
