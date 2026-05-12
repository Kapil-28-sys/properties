"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-black/5"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="w-full px-5 sm:px-6 lg:px-10">
        <div className="h-[85px] flex items-center justify-between">

          {/* LOGO */}
         {/* LOGO */}
<Link href="/" className="flex items-center gap-3 group">
  
  {/* Logo Image */}
  <div className="relative w-20 h-20 rounded-2xl overflow-hidden   ">
    <img
      src="/properties.png"
      alt="Estate Prime Logo"
      className="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
    />
  </div>

  

</Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-[13px] uppercase tracking-[0.18em] text-gray-700 hover:text-black transition duration-300"
              >
                {link.name}

                {/* underline (short + centered) */}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[1px] w-0 bg-[#b88a44] group-hover:w-[55%] transition-all duration-300"></span>

              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="px-6 py-2.5 rounded-full bg-[#b88a44] text-white text-sm font-medium hover:bg-black transition duration-300 shadow-sm">
              Sign In
            </button>

          </div>

          {/* MOBILE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-black"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 rounded-3xl border border-black/10 bg-white p-6 flex flex-col gap-5 shadow-lg">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 hover:text-black text-lg transition"
              >
                {link.name}
              </Link>
            ))}

            <button className="mt-4 px-6 py-3 rounded-full bg-[#b88a44] text-white font-medium">
              Sign In
            </button>

          </div>
        </div>

      </nav>
    </header>
  );
}