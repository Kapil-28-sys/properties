"use client";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#fbfaf8] overflow-hidden">

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }
      `}</style>

      {/* soft glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#b88a44]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* container */}
        <div className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-xl px-10 py-16 text-center">

          {/* subtle gold line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b88a44]/10 to-transparent opacity-60" />

          {/* TEXT */}
          <div className="relative z-10">

            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-black leading-tight">
              Find Your Dream Property in Rajasthan
            </h2>

            <p className="font-body mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Explore luxury homes, villas, and investment opportunities crafted for modern living.
            </p>

            {/* BUTTON */}
            <button className="mt-8 px-8 py-4 rounded-full bg-[#b88a44] text-white font-body text-sm md:text-base font-medium shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
              Get Started Now
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}