"use client";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text)]">

      {/* Animations Only */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slowZoom {
          from { transform: scale(1.03); }
          to   { transform: scale(1.11); }
        }

        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.85; transform: scaleY(1.15); }
        }

        @keyframes ping {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        @keyframes glowPulse {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hero-animate {
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.35s; }
        .delay-4 { animation-delay: 0.45s; }
        .delay-5 { animation-delay: 0.6s; }

        .animate-slowZoom {
          animation: slowZoom 18s ease-in-out infinite alternate;
        }

        .animate-ping-gold {
          animation: ping 1.8s ease-out infinite;
        }

        .animate-glowPulse {
          animation: glowPulse 5s ease-in-out infinite;
        }

        .animate-glowPulse-rev {
          animation: glowPulse 7s ease-in-out infinite reverse;
        }

        .btn-hero-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--primary);
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-hero-primary:hover::before {
          transform: translateX(0);
        }

        .btn-hero-primary:hover {
          color: var(--white);
        }

        .play-ring-fill {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: var(--primary);
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .play-btn-wrap:hover .play-ring-fill {
          transform: scale(1);
        }

        .play-btn-wrap:hover .play-triangle {
          border-color: transparent transparent transparent white;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover animate-slowZoom"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--background)]/85" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />

        {/* Orange Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_85%,rgba(245,158,11,0.18),transparent_50%)]" />

        {/* Blue Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(37,99,235,0.12),transparent_45%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[var(--primary-light)]/20 blur-[110px] rounded-full animate-glowPulse pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-[260px] h-[260px] bg-[var(--secondary-light)]/20 blur-[100px] rounded-full animate-glowPulse-rev pointer-events-none" />

      {/* Rings */}
      <div className="absolute top-[50px] right-[80px] w-[200px] h-[200px] rounded-full border border-[var(--primary)]/10 rotate-[16deg]" />

      <div className="absolute bottom-[80px] left-[60px] w-[260px] h-[260px] rounded-full border border-[var(--secondary)]/10 rotate-[20deg]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="hero-animate delay-1 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--border)] bg-white/80 backdrop-blur-xl mb-9 relative shadow-[var(--shadow-sm)]">

              <span className="absolute w-[13px] h-[13px] rounded-full bg-[var(--primary)]/30 animate-ping-gold" />

              <span className="relative w-[7px] h-[7px] rounded-full bg-[var(--primary)] shadow-[0_0_12px_rgba(245,158,11,0.6)] flex-shrink-0" />

              <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--text-light)]">
                Luxury Architecture Studio
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-animate delay-2 text-[clamp(58px,8vw,110px)] leading-[0.9] tracking-[-0.04em] font-light">
              <span className="block text-[var(--text)]">
                Building
              </span>

              <span className="block italic text-[var(--secondary)]/80">
                Timeless
              </span>

              <span className="block font-semibold text-[var(--primary)]">
                Experiences
              </span>
            </h1>

            {/* Divider */}
            <div className="hero-animate delay-3 mt-7 w-[65px] h-[2px] bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full" />

            {/* Description */}
            <p className="hero-animate delay-4 mt-7 text-[15px] leading-[1.9] text-[var(--text-light)] max-w-[500px] tracking-[0.01em] font-light">
              We craft premium spaces with emotional architecture,
              refined interiors, and modern luxury aesthetics that
              create unforgettable living experiences.
            </p>

            {/* Buttons */}
            <div className="hero-animate delay-5 mt-10 flex flex-wrap items-center gap-6">

              {/* Primary Button */}
              <button className="btn-hero-primary relative overflow-hidden px-[34px] py-[15px] rounded-full border border-[var(--primary)] bg-transparent text-[var(--primary)] text-[11px] font-medium tracking-[0.2em] uppercase cursor-pointer transition-all duration-500 hover:shadow-[var(--shadow-md)]">

                <span className="relative z-10 flex items-center gap-2">
                  Explore Company

                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M1 10L10 1M10 1H3M10 1V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Play Button */}
              <button className="play-btn-wrap flex items-center gap-4 bg-transparent border-none cursor-pointer">

                <div className="relative w-[55px] h-[55px] rounded-full border border-[var(--border)] bg-white/80 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-[var(--shadow-sm)]">

                  <div className="play-ring-fill" />

                  <div
                    className="play-triangle relative z-10 ml-[3px]"
                    style={{
                      width: 0,
                      height: 0,
                      borderStyle: "solid",
                      borderWidth: "7px 0 7px 13px",
                      borderColor:
                        "transparent transparent transparent var(--text)",
                      transition: "border-color 0.4s",
                    }}
                  />
                </div>

                <div>
                  <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--text-light)] block">
                    Watch
                  </span>

                  <span className="text-[18px] italic text-[var(--text)] block mt-[2px]">
                    Our Story
                  </span>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}