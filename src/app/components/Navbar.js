"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-10">
        <div className="h-[90px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d6a55b] to-[#8d6330] flex items-center justify-center text-black font-bold text-xl shadow-lg">
              E
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-white text-xl font-semibold tracking-wide">
                Estate Prime
              </span>

              <span className="text-[11px] uppercase tracking-[0.3em] text-gray-400">
                Luxury Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[14px] uppercase tracking-[0.2em] text-gray-300 hover:text-white transition duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#d6a55b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition duration-300">
              Sign In
            </button>

             

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? "max-h-[500px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl p-6 flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white transition text-lg"
              >
                {link.name}
              </Link>
            ))}

            

          </div>
        </div>
      </nav>
    </header>
  );
}