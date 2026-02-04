"use client";

import { usePathname } from "next/navigation";
import { docsPages } from "@/lib/docs-data";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block md:w-56 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs uppercase tracking-[0.2em] text-[#50463E]/50 font-logo mb-4">
          Contents
        </p>
        <nav className="space-y-1">
          {docsPages.map((page) => {
            const href = `/docs/${page.slug}`;
            const isActive = pathname === href;
            return (
              <a
                key={page.slug}
                href={href}
                className={`block px-3 py-2 text-sm rounded-lg transition-all border-l-2 ${
                  isActive
                    ? "border-[#ff624a] text-[#ff624a] font-medium translate-x-1"
                    : "border-transparent text-[#50463E]/60 hover:text-[#50463E] hover:bg-[#50463E]/5"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-50 mr-2">
                  {page.number}
                </span>
                {page.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
