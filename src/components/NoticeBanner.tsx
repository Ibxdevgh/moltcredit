export default function NoticeBanner() {
  return (
    <div className="fixed left-0 right-0 top-16 sm:top-20 z-30 lg:w-3/5 bg-[#fff7f2] border-b border-[#ff624a]/20">
      <div className="px-4 sm:px-8 xl:px-16 py-2 text-[10px] sm:text-[11px] text-[#6a5c52] flex items-center gap-2 whitespace-nowrap overflow-hidden">
        <span className="px-2 py-0.5 rounded-full bg-[#ff624a]/10 text-[#ff624a] font-medium">
          Notice
        </span>
        <span className="truncate">
          We are planning to launch $moltcredit to support the ecosystem &mdash; follow{" "}
          <a
            href="https://x.com/moltcredit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff624a] hover:underline font-medium"
          >
            X
          </a>{" "}
          for updates.
        </span>
      </div>
    </div>
  );
}
