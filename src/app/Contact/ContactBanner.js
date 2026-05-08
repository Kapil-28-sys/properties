"use client";

export default function Achievements() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center text-white">

      {/* ================= FONTS ================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }
      `}</style>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

        <div className="max-w-xl text-left fade-up">

          <p className="font-body text-[#d4af37] tracking-[4px] uppercase text-xs mb-4">
            Contact Us
          </p>

          <h2 className="font-heading text-4xl md:text-6xl font-semibold leading-tight">
            Let’s Build Something <span className="text-[#d4af37]">Together</span>
          </h2>

          <p className="font-body text-gray-300 mt-5 text-base md:text-lg leading-relaxed">
            Have a question, project idea, or just want to connect?
            We’re here to help you every step of the way. Reach out to us
            and our team will respond as soon as possible.
          </p>

        
        </div>
      </div>

    </section>
  );
}