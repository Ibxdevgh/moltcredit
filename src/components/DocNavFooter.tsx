import { docsPages } from "@/lib/docs-data";

interface DocNavFooterProps {
  currentSlug: string;
}

export default function DocNavFooter({ currentSlug }: DocNavFooterProps) {
  const currentIndex = docsPages.findIndex((p) => p.slug === currentSlug);
  const next = currentIndex < docsPages.length - 1 ? docsPages[currentIndex + 1] : null;
  const prev = currentIndex > 0 ? docsPages[currentIndex - 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-[#50463E]/10 flex justify-between items-center">
      {prev ? (
        <a
          href={`/docs/${prev.slug}`}
          className="group flex items-center gap-2 text-[#50463E]/60 hover:text-[#ff624a] transition-colors"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-50">Previous</p>
            <p className="text-sm font-medium">{prev.title}</p>
          </div>
        </a>
      ) : (
        <div />
      )}
      {next ? (
        <a
          href={`/docs/${next.slug}`}
          className="group flex items-center gap-2 text-[#50463E]/60 hover:text-[#ff624a] transition-colors text-right"
        >
          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-50">Next</p>
            <p className="text-sm font-medium">{next.title}</p>
          </div>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
