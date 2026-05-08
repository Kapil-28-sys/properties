import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Building2 size={20} />,
      title: "Prime Properties",
      desc: "Luxury homes in premium curated locations.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Investment Growth",
      desc: "High-return assets with strong appreciation potential.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Verified Deals",
      desc: "Secure, transparent and trusted real estate experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f2ea] py-16 border-y border-[#d9c3a0]/30">

      {/* ✨ Fonts + Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes softFloat {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .float { animation: softFloat 5s ease-in-out infinite; }

        .gold-hover {
          transition: all 0.4s ease;
        }
        .gold-hover:hover {
          background: #b88a44;
          color: white;
        }

        .shine {
          position: relative;
          overflow: hidden;
        }
        .shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: 0.6s;
        }
        .shine:hover::after {
          left: 120%;
        }
      `}</style>

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,138,68,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184,138,68,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#b88a44]/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8 font-body">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="fade-up">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-[#d9c3a0]/40">

              <Sparkles size={14} className="text-[#b88a44]" />

              <span className="text-[11px] tracking-[0.25em] uppercase text-[#b88a44] font-medium">
                Why Choose Us
              </span>

            </div>

            {/* HEADING */}
            <h2 className="font-heading mt-5 text-5xl lg:text-6xl leading-[1.05] text-[#1f1f1f] font-semibold">

              Luxury Living
              <span className="block text-[#b88a44]">
                Reimagined
              </span>

            </h2>

            {/* DESC */}
            <p className="mt-5 text-gray-600 leading-7 max-w-lg text-[15px]">
              Premium real estate crafted for modern lifestyles, long-term value,
              and refined living experiences.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-3 mt-8">

              {[
                ["10K+", "Clients"],
                ["500+", "Homes"],
                ["18%", "ROI"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur border border-[#d9c3a0]/25 rounded-2xl px-5 py-4 min-w-[120px] shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-semibold text-[#1f1f1f] font-heading">
                    {item[0]}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {item[1]}
                  </p>
                </div>
              ))}

            </div>

            {/* BUTTON */}
            <button className="shine gold-hover mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f1f1f] text-white text-sm font-medium shadow-lg">

              Explore Properties
              <ArrowUpRight size={16} className="transition group-hover:rotate-45" />

            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative float">

            <div className="h-[480px] rounded-[30px] overflow-hidden shadow-2xl border border-white/40">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                className="w-full h-full object-cover scale-[1.03] hover:scale-110 transition duration-700"
                alt="Luxury Property"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* FLOAT CARD */}
              <div className="absolute bottom-5 left-5 right-5">

                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 border border-white/40">

                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Client Satisfaction
                      </p>
                      <h3 className="text-3xl font-semibold font-heading text-[#1f1f1f]">
                        98%
                      </h3>
                      <p className="text-sm text-gray-600">
                        Trusted Experience
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-[#b88a44] flex items-center justify-center text-white">
                      <ShieldCheck size={20} />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {cards.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/70 backdrop-blur border border-[#d9c3a0]/25 shadow-sm hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >

              <div className="w-11 h-11 rounded-xl bg-[#b88a44]/10 text-[#b88a44] flex items-center justify-center group-hover:bg-[#b88a44] group-hover:text-white transition">

                {item.icon}

              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#1f1f1f] font-heading">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}