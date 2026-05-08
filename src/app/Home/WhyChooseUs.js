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
      desc: "Luxury homes in premium locations.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Investment Growth",
      desc: "High-return properties with appreciation.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Verified Deals",
      desc: "Trusted & transparent real estate experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6f2ea] py-14 lg:py-16 border-y border-[#d9c3a0]/30">

      {/* PREMIUM SQUARE GRID BG */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(184,138,68,0.18) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(184,138,68,0.18) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "58px 58px",
          maskImage:
            "radial-gradient(circle at center, black 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 65%, transparent 100%)",
        }}
      />

      {/* EXTRA GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,68,0.10),transparent_35%)]"></div>

      {/* BIG BLUR */}
      <div className="absolute top-[-140px] right-[-120px] w-[380px] h-[380px] rounded-full bg-[#b88a44]/10 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#d9c3a0]/30 shadow-sm">

              <Sparkles size={14} className="text-[#b88a44]" />

              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#b88a44]">
                Why Choose Us
              </span>

            </div>

            {/* HEADING */}
            <h2 className="mt-5 text-[2.5rem] sm:text-5xl lg:text-[64px] font-semibold leading-[0.95] tracking-[-2px] text-[#1f1f1f]">

              Luxury Living

              <span className="block text-[#b88a44]">
                Reimagined.
              </span>

            </h2>

            {/* DESC */}
            <p className="mt-5 text-[15px] sm:text-base leading-7 text-gray-600 max-w-xl">
              Premium real estate solutions designed for modern lifestyles,
              investment growth, and exceptional living experiences.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-3 mt-7">

              {[
                ["10K+", "Clients"],
                ["500+", "Homes"],
                ["18%", "ROI"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/85 backdrop-blur-md border border-[#d9c3a0]/20 rounded-[22px] px-5 py-4 shadow-md min-w-[120px]"
                >

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] leading-none">
                    {item[0]}
                  </h3>

                  <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                    {item[1]}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}
            <button className="group mt-7 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1f1f1f] text-white text-sm font-medium hover:bg-[#b88a44] duration-300 shadow-xl">

              Explore Properties

              <ArrowUpRight
                size={17}
                className="group-hover:rotate-45 duration-300"
              />

            </button>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* IMAGE */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[520px] overflow-hidden rounded-[32px] shadow-[0_20px_70px_rgba(0,0,0,0.12)] border border-white/30">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

              {/* FLOAT CARD */}
              <div className="absolute left-4 right-4 bottom-4">

                <div className="bg-white/88 backdrop-blur-xl rounded-[26px] p-4 sm:p-5 border border-white/50 shadow-2xl">

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">
                        Trusted Experience
                      </p>

                      <h3 className="mt-1 text-3xl font-semibold text-[#1f1f1f]">
                        98%
                      </h3>

                      <p className="text-sm text-gray-600 mt-1">
                        Client Satisfaction
                      </p>

                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-[#b88a44] flex items-center justify-center text-white shadow-lg shrink-0">

                      <ShieldCheck size={24} />

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING SMALL CARD */}
            <div className="absolute -top-4 -left-4 hidden lg:block">

              <div className="bg-white/90 backdrop-blur-md border border-[#d9c3a0]/20 rounded-[24px] px-5 py-4 shadow-xl">

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Excellence
                </p>

                <h3 className="mt-1 text-3xl font-bold text-[#b88a44]">
                  12+
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

          {cards.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] bg-white/85 backdrop-blur-md border border-[#d9c3a0]/20 p-5 sm:p-6 shadow-md hover:-translate-y-1.5 hover:shadow-2xl duration-300"
            >

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b88a44]/8 to-transparent opacity-0 group-hover:opacity-100 duration-300"></div>

              <div className="relative">

                {/* ICON */}
                <div className="w-12 h-12 rounded-2xl bg-[#b88a44]/10 text-[#b88a44] flex items-center justify-center group-hover:bg-[#b88a44] group-hover:text-white duration-300 shadow-sm">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-[#1f1f1f]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}