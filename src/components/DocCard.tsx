interface DocCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function DocCard({ number, title, description, href }: DocCardProps) {
  return (
    <a
      href={href}
      className="group flex items-start justify-between py-6 border-b border-[#50463E]/10 hover:bg-[#50463E]/[0.02] transition-colors -mx-4 px-4 rounded-lg"
    >
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.3em] text-[#50463E]/40 font-logo mb-1">
          {number}
        </p>
        <h3 className="text-lg font-heading font-medium group-hover:text-[#ff624a] transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#50463E]/60">{description}</p>
      </div>
      <svg
        className="w-5 h-5 text-[#ff624a] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0 ml-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}
