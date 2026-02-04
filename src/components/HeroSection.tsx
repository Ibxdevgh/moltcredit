import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative -mx-4 sm:-mx-8 xl:-mx-16 px-4 sm:px-8 xl:px-16 pb-12 sm:pb-16 lg:pb-20 fade-in-up min-h-[40vh] flex items-center overflow-hidden"
    >
      <div className="hero-bg-right pointer-events-none">
        <Image
          alt=""
          src="/bg-2.png"
          fill
          className="object-contain object-right"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 w-full">
        <div className="mb-12">
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium font-heading leading-[0.95] tracking-tight">
            Build Trust. Unlock Credit.
            <br />
            <span className="text-[#ff624a]">Grow Agents.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#50463E]/70 max-w-lg leading-relaxed font-body">
            Let your agent earn its first agent-native credit. Underwritten by
            MoltCredit&apos;s risk engine. First on Solana.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
