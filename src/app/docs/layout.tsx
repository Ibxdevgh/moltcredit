import DocsHeader from "@/components/DocsHeader";
import DocsSidebar from "@/components/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#50463E]">
      <DocsHeader />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-16 py-12">
        <div className="flex gap-16 lg:gap-24">
          <DocsSidebar />
          <main className="flex-1 min-w-0 max-w-4xl">{children}</main>
        </div>
      </div>
    </div>
  );
}
