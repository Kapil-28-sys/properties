"use client";

import Link from "next/link";
import {
  ChevronRight,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const footerSections = [
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
      links: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Ajmer"],
    },
    {
      title: "Services",
      links: [
        "Buy Property",
        "Sell Property",
        "Rentals",
        "Investment",
        "Consulting",
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-white">
      {/* FONTS */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap");

        .font-heading {
          font-family: "Cormorant Garamond", serif;
        }

        .font-body {
          font-family: "Jost", sans-serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }
      `}</style>

      {/* GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#b88a44]/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-[#b88a44]/10 blur-[140px] rounded-full" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-20 lg:pt-24 pb-10 font-body">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14 lg:gap-16">
          {/* BRAND */}
          <div className="fade-up">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-22 rounded-2xl  flex items-center justify-center overflow-hidden backdrop-blur-xl">
                <img
                  src="/properties.png"
                  alt="Estate Prime Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="font-heading text-3xl font-semibold tracking-wide">
                  FutureEstate
                </h2>

                <p className="text-[#b88a44] text-sm tracking-[4px] uppercase">
                  Luxury Living
                </p>
              </div>
            </div>

            {/* LINE */}
            <div className="w-24 h-[2px] bg-[#b88a44]/70 mt-8 rounded-full" />

            {/* DESCRIPTION */}
            <p className="mt-7 text-gray-400 leading-7 text-sm max-w-md">
              Experience refined living through curated luxury homes,
              world-class architecture, and premium real estate investments
              crafted for modern lifestyles.
            </p>

            {/* CONTACT */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[#b88a44]" />
                hello@futurestate.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-[#b88a44]" />
                +91 98765 43210
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {/* Globe */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <Globe
                  size={18}
                  className="text-gray-400 group-hover:text-black transition duration-300"
                />
              </a>

              {/* Mail */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <Mail
                  size={18}
                  className="text-gray-400 group-hover:text-black transition duration-300"
                />
              </a>

              {/* Phone */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <Phone
                  size={18}
                  className="text-gray-400 group-hover:text-black transition duration-300"
                />
              </a>

              {/* Facebook SVG */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 1.8h8.5c2.18 0 3.95 1.77 3.95 3.95v8.5c0 2.18-1.77 3.95-3.95 3.95h-8.5A3.95 3.95 0 0 1 3.8 16.25v-8.5c0-2.18 1.77-3.95 3.95-3.95Zm9.7 1.35a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8Z" />
                </svg>
              </a>

              {/* Twitter SVG */}
              <a
                href="#"
                className="group w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px] text-gray-400 group-hover:text-black transition"
                >
                  <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 12 8.3a11.3 11.3 0 0 1-8.2-4.1 4 4 0 0 0 1.2 5.3A4 4 0 0 1 3 8.9v.1A4 4 0 0 0 6.2 13a4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 17.5a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5A8 8 0 0 0 22 5.8Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerSections.map((section, i) => (
            <div key={i} className="fade-up">
              <h3 className="font-heading text-2xl font-semibold mb-7">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <ChevronRight
                        size={15}
                        className="text-[#b88a44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />

                      <span className="relative">
                        {item}

                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b88a44] transition-all duration-300 group-hover:w-1/2" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2026 FutureEstate. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map(
              (item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-white text-xs transition-all duration-300 relative group"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b88a44] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}