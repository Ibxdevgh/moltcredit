import Navbar from "@/components/Navbar";
import NoticeBanner from "@/components/NoticeBanner";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SkillPreviewSection from "@/components/SkillPreviewSection";
import Footer from "@/components/Footer";
import CrabScene from "@/components/CrabScene";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen bg-[#F2EFE9] text-[#50463E] relative overflow-auto lg:overflow-hidden">
      <Navbar />
      <NoticeBanner />

      {/* Vertical divider on desktop */}
      <div
        className="hidden lg:block fixed top-0 bottom-0 left-[60%] w-px bg-[#50463E]/15 z-30"
        aria-hidden="true"
      />

      {/* Right panel background - desktop only */}
      <div className="fixed right-0 top-0 bottom-0 w-2/5 h-screen z-10 hidden lg:block">
        <CrabScene />
      </div>

      {/* Main scrollable content */}
      <div className="w-full min-h-screen pt-28 sm:pt-32 relative z-20 pointer-events-auto lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-3/5 lg:overflow-y-auto lg:pt-32 no-scrollbar">
        <div className="w-full">
          <div className="w-full pt-20 pb-20">
            <div className="w-full px-4 sm:px-8 xl:px-16">
              <HeroSection />
              <MetricsSection />
              <HowItWorksSection />
              <SkillPreviewSection />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
