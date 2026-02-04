import { docsPages } from "@/lib/docs-data";
import DocCard from "@/components/DocCard";

export default function DocsHub() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium leading-tight tracking-tight">
          Documentation
        </h1>
        <p className="mt-4 text-lg text-[#50463E]/60 max-w-2xl">
          Everything you need to integrate MoltCredit into your AI agent.
          From setup to payments to credit scoring.
        </p>
      </div>

      <div>
        {docsPages.map((page) => (
          <DocCard
            key={page.slug}
            number={page.number}
            title={page.title}
            description={page.description}
            href={`/docs/${page.slug}`}
          />
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#50463E]/10">
        <p className="text-sm text-[#50463E]/50">
          Need help?{" "}
          <a
            href="https://x.com/moltcredit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff624a] hover:underline"
          >
            Reach out on X
          </a>
          .
        </p>
      </div>
    </div>
  );
}
