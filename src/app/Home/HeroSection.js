"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#faf8f3]">

      {/* Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.03); }
          to   { transform: scale(1.11); }
        }
        @keyframes ping {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 0.85; transform: scaleY(1.15); }
        }

        .hero-animate        { opacity: 0; animation: fadeUp 1s ease forwards; }
        .delay-1             { animation-delay: 0.1s; }
        .delay-2             { animation-delay: 0.2s; }
        .delay-3             { animation-delay: 0.35s; }
        .delay-4             { animation-delay: 0.45s; }
        .delay-5             { animation-delay: 0.6s; }
        .delay-6             { animation-delay: 0.8s; }

        .animate-slowZoom    { animation: slowZoom 18s ease-in-out infinite alternate; }
        .animate-glowPulse   { animation: glowPulse 5s ease-in-out infinite; }
        .animate-glowPulse-r { animation: glowPulse 7s ease-in-out infinite reverse; }
        .animate-ping-gold   { animation: ping 1.8s ease-out infinite; }
        .animate-scrollPulse { animation: scrollPulse 2s ease-in-out infinite; }

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #C59E2A;
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover          { color: #fff; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img
          src="https://www.luxuryresidences.in/seo-assest/images/the-ark-voyage-banner.webp"
          alt="Luxury Property"
          className="w-full h-full object-cover animate-slowZoom"
        />

        {/* Cream wash */}
        <div className="absolute inset-0 bg-[#faf8f3]/80" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-[#faf8f3]/50 to-[#faf8f3]/25" />

        {/* Gold radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_82%,rgba(197,158,42,0.14),transparent_50%)]" />

        {/* Top-left white radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_12%,rgba(255,255,255,0.55),transparent_45%)]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* ── Ambient Glows ── */}
      <div className="animate-glowPulse absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-white/55 blur-[110px] pointer-events-none" />
      <div className="animate-glowPulse-r absolute bottom-10 right-10 w-[260px] h-[260px] rounded-full bg-[rgba(197,158,42,0.10)] blur-[100px] pointer-events-none" />

      {/* ── Decorative Rings ── */}
      <div className="absolute top-[50px] right-[80px] w-[200px] h-[200px] rounded-full border border-[rgba(197,158,42,0.10)] rotate-[16deg] pointer-events-none" />
      <div className="absolute bottom-[80px] left-[60px] w-[260px] h-[260px] rounded-full border border-[rgba(0,0,0,0.04)] rotate-[20deg] pointer-events-none" />
      <div className="absolute top-[130px] right-[210px] w-[150px] h-[150px] rounded-full border border-[rgba(197,158,42,0.07)] -rotate-[12deg] pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-14 w-full">
          <div className="max-w-3xl pt-24">

            {/* Badge */}
            <div className="hero-animate delay-1 inline-flex items-center gap-3 px-[22px] py-2 rounded-full border border-black/9 bg-white/82 backdrop-blur-xl mb-9 relative">
              <span className="absolute w-[13px] h-[13px] rounded-full bg-[rgba(197,158,42,0.22)] animate-ping-gold" />
              <span className="relative w-[7px] h-[7px] rounded-full bg-[#C59E2A] shadow-[0_0_10px_1px_rgba(197,158,42,0.5)] flex-shrink-0" />
              <span className="font-jost text-[10px] font-light tracking-[0.35em] uppercase text-black/48">
                Luxury International Properties
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-cormorant hero-animate delay-2 text-[clamp(52px,8vw,108px)] leading-[0.88] tracking-[-0.03em] font-light">
              <span className="block text-[#1a1612]/88 font-light">Discover</span>
              <span className="block text-[#C59E2A] font-semibold">Premium Living</span>
              <span className="block text-[#1a1612]/65 italic font-light">Across The World</span>
            </h1>

            {/* Divider */}
            <div className="hero-animate delay-3 mt-7 w-[52px] h-px bg-gradient-to-r from-[#C59E2A] to-transparent" />

            {/* Description */}
            <p className="hero-animate delay-4 font-jost mt-7 text-[15px] font-light leading-[1.85] text-[#1a1612]/52 max-w-[440px] tracking-[0.01em]">
              Explore iconic luxury residences, curated investment
              opportunities, and world-class properties designed for
              refined lifestyles.
            </p>

            {/* Buttons */}
            <div className="hero-animate delay-5 mt-10 flex flex-wrap items-center gap-5">

              {/* Primary */}
              <button className="btn-primary relative overflow-hidden px-[34px] py-[14px] rounded-full border border-[#C59E2A] bg-transparent text-[#C59E2A] font-jost text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer transition-colors duration-[450ms]">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Properties
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {/* Secondary */}
              <button className="font-jost px-[34px] py-[14px] rounded-full border border-black/12 bg-white/60 backdrop-blur-xl text-[#1a1612]/65 text-[11px] font-normal tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:bg-white/90 hover:border-black/18 hover:text-[#1a1612]/85">
                Schedule Consultation
              </button>

            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
}