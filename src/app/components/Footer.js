"use client";

import {
  ChevronRight,
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] border-t border-white/[0.05]">

      {/* Top Premium Glow */}
      <div className="absolute top-[-280px] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[#b88a44]/15 blur-[180px] rounded-full" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#b88a44]/10 blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[size:26px_26px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-14 pt-24">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 pb-24">

          {/* Brand Side */}
          <div className="animate-fadeUp">

            {/* Logo */}
            <div className="relative inline-block">
              <h2 className="text-[60px] leading-none font-semibold tracking-[-4px] text-white relative z-10">
                LuxeEstate
              </h2>

              <div className="absolute -bottom-2 left-1 w-[120px] h-[10px] bg-[#b88a44]/30 blur-xl rounded-full"></div>
            </div>

            {/* Line */}
            <div className="mt-7 h-[1px] w-32 bg-gradient-to-r from-[#b88a44] via-[#b88a44]/50 to-transparent"></div>

            {/* Description */}
            <p className="mt-8 text-[15px] leading-8 text-gray-400 max-w-md">
              Experience refined living through handpicked luxury homes,
              iconic architecture, and world-class investment opportunities.
            </p>

           

            {/* Social */}
            <div className="flex items-center gap-4 mt-12">

              {[
                { icon: Globe },
                { icon: Mail },
                { icon: Phone },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <button
                    key={i}
                    className="group relative w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#b88a44]/40 hover:shadow-[0_15px_40px_rgba(184,138,68,0.15)]"
                  >

                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b88a44] to-[#d8a85b] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Shine Effect */}
                    <div className="absolute top-0 left-[-120%] w-[80%] h-full bg-white/20 skew-x-12 group-hover:left-[140%] transition-all duration-700"></div>

                    <div className="relative z-10 flex items-center justify-center h-full">
                      <Icon
                        size={18}
                        className="text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                      />
                    </div>

                  </button>
                );
              })}

            </div>

          </div>

          {/* Footer Links */}
          {[
            {
              title: "Company",
              links: [
                "About Us",
                "Properties",
                "Luxury Villas",
                "Agents",
                "Contact",
              ],
            },
            {
              title: "Locations",
              links: [
                "Dubai Marina",
                "Palm Jumeirah",
                "Singapore",
                "New York",
                "London City",
              ],
            },
            {
              title: "Services",
              links: [
                "Buy Property",
                "Sell Property",
                "Luxury Rentals",
                "Investment Plans",
                "Consultation",
              ],
            },
          ].map((section, i) => (
            <div key={i} className="animate-fadeUp">

              <h3 className="text-white text-[24px] font-medium tracking-tight relative inline-block">

                {section.title}

                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#b88a44] transition-all duration-500 group-hover:w-full"></span>

              </h3>

              <div className="mt-9 flex flex-col gap-5">

                {section.links.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="group flex items-center gap-3 text-gray-500 hover:text-white transition-all duration-300 w-fit"
                  >

                    {/* Icon */}
                    <div className="w-5 overflow-hidden flex items-center">

                      <ChevronRight
                        size={15}
                        className="text-[#b88a44] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />

                    </div>

                    {/* Text */}
                    <span className="relative">

                      <span className="group-hover:translate-x-1 inline-block transition-all duration-300">
                        {item}
                      </span>

                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b88a44] group-hover:w-full transition-all duration-500"></span>

                    </span>

                  </a>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm tracking-wide">
            © 2026 LuxeEstate. Crafted with elegance & modern luxury.
          </p>

          <div className="flex items-center gap-8 flex-wrap justify-center">

            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Sitemap",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="group relative text-sm text-gray-500 hover:text-[#d6a85f] transition-all duration-300"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d6a85f] group-hover:w-full transition-all duration-500"></span>

              </a>
            ))}

          </div>

        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </footer>
  );
}