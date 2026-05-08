export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a1a1a]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.luxuryresidences.in/seo-assest/images/the-ark-voyage-banner.webp"
          alt="Luxury Property"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Grey Overlay */}
      <div className="absolute inset-0 bg-[#111111]/65"></div>

      {/* Soft Grey + Golden Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a]/40 to-[#b88a44]/10"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-10 min-h-screen flex items-center">

        <div className="max-w-4xl pt-28">

          {/* Premium Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#b88a44]/20 bg-white/[0.04] backdrop-blur-md">

            <div className="w-2 h-2 rounded-full bg-[#b88a44]"></div>

            <span className="text-[11px] sm:text-sm uppercase tracking-[0.35em] text-[#d6a85f] font-medium">
              Luxury International Properties
            </span>

          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-2px] font-semibold text-[#f5f5f5]">

            Discover

            <span className="block text-[#d6a85f]">
              Premium Living
            </span>

            Across The World

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-9 font-light">
            Explore iconic luxury residences, curated investment
            opportunities, and world-class properties designed for refined
            lifestyles.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <button className="px-9 py-4 rounded-full bg-[#b88a44] text-white font-semibold text-lg hover:scale-105 hover:bg-[#c7984f] transition-all duration-300 shadow-[0_10px_40px_rgba(184,138,68,0.35)]">
              Explore Properties
            </button>

            <button className="px-9 py-4 rounded-full border border-[#b88a44]/20 bg-white/[0.04] backdrop-blur-md text-[#f3f3f3] font-medium text-lg hover:bg-white/[0.08] transition-all duration-300">
              Schedule Consultation
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}