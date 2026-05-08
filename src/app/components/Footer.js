"use client";

import {
  ChevronRight,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-white font-body">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.9s ease forwards; }

        /* LINKS → WHITE ON HOVER */
        .link-hover {
          transition: all 0.3s ease;
        }

        .link-hover:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        /* UNDERLINE GOLD STAYS */
        .underline-grow {
          position: relative;
        }

        .underline-grow::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 1px;
          background: #b88a44;
          transition: 0.4s ease;
        }

        .underline-grow:hover::after {
          width: 50%;
        }
      `}</style>

      {/* GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#b88a44]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-100px] w-[450px] h-[450px] bg-[#b88a44]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14 pt-24 pb-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16">

          {/* BRAND */}
          <div className="fade-up">

            <h2 className="font-heading text-5xl lg:text-6xl font-semibold tracking-[-2px]">
              LuxeEstate
            </h2>

            <div className="w-24 h-[2px] bg-[#b88a44]/70 mt-6" />

            <p className="mt-6 text-gray-400 leading-7 max-w-md text-sm">
              Experience refined living through curated luxury homes,
              premium architecture, and high-value investments.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-10">

              {[Globe, Mail, Phone].map((Icon, i) => (
                <button
                  key={i}
                  className="group w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition hover:bg-white"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-black transition"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* LINKS */}
          {[
            {
              title: "Company",
              links: ["About Us", "Properties", "Luxury Villas", "Agents", "Contact"],
            },
            {
              title: "Locations",
              links: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Ajmer"],
            },
            {
              title: "Services",
              links: ["Buy Property", "Sell Property", "Rentals", "Investment", "Consulting"],
            },
          ].map((section, i) => (
            <div key={i} className="fade-up">

              <h3 className="font-heading text-xl font-semibold mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4">

                {section.links.map((item, idx) => (
                  <li key={idx}>

                    <a
                      href="#"
                      className="group flex items-center gap-2 text-gray-400 link-hover underline-grow text-sm"
                    >

                      <ChevronRight
                        size={14}
                        className="text-[#b88a44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
                      />

                      {item}

                    </a>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-xs">
            © 2026 LuxeEstate. Crafted with modern luxury.
          </p>

          <div className="flex gap-6">

            {["Privacy Policy", "Terms", "Sitemap"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-500 text-xs transition hover:text-white underline-grow"
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
}