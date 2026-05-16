"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

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
    <>
      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: var(--transition);
        }

        .navbar-root.scrolled {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: var(--shadow-md);
          border-bottom: 1.5px solid var(--border);
        }

        .navbar-root.top {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* LOGO */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-img-wrap {
          width: 70px;
          height: 70px;
          
          overflow: hidden;
         
          transition: var(--transition);
        
        }

        .logo-link:hover .logo-img-wrap {
          
          transform: rotate(-2deg) scale(1.04);
        }

        .logo-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.3px;
        }

        .logo-sub {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--primary);
          font-weight: 600;
        }

        /* DESKTOP NAV */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
        }

        .nav-link {
          position: relative;
          padding: 8px 18px;
          font-size: 12.5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-light);
          text-decoration: none;
          transition: var(--transition);
          border-radius: 999px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: transparent;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--secondary);
        }

        .nav-link:hover::before {
          background: rgba(15, 61, 145, 0.06);
        }

        .nav-link.active {
          color: var(--secondary);
        }

        .nav-link.active::before {
          background: rgba(15, 61, 145, 0.08);
        }

        .nav-link-dot {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0;
          transition: var(--transition);
        }

        .nav-link.active .nav-link-dot,
        .nav-link:hover .nav-link-dot {
          opacity: 1;
        }

        /* CTA */
        .cta-group {
          display: none;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .cta-group { display: flex; }
        }

        .btn-outline {
          padding: 9px 22px;
          border-radius: 999px;
          border: 1.5px solid var(--secondary);
          background: transparent;
          color: var(--secondary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          letter-spacing: 0.03em;
        }

        .btn-outline:hover {
          background: var(--secondary);
          color: var(--white);
        }

        .btn-primary {
          padding: 10px 26px;
          border-radius: 999px;
          border: none;
          background: var(--primary);
          color: var(--white);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          letter-spacing: 0.03em;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          border-radius: inherit;
          pointer-events: none;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.45);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        /* MOBILE TOGGLE */
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--text);
          cursor: pointer;
          transition: var(--transition);
        }

        .mobile-toggle:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(245, 158, 11, 0.06);
        }

        @media (min-width: 1024px) {
          .mobile-toggle { display: none; }
        }

        /* MOBILE MENU */
        .mobile-menu-wrap {
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.35s ease;
        }

        .mobile-menu-wrap.open {
          max-height: 600px;
          opacity: 1;
        }

        .mobile-menu-wrap.closed {
          max-height: 0;
          opacity: 0;
        }

        .mobile-menu {
          margin: 0 0 12px;
          border-radius: var(--radius);
          border: 1.5px solid var(--border);
          background: var(--white);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }

        .mobile-menu-header {
          padding: 18px 20px 14px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-menu-badge {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--primary);
          background: rgba(245, 158, 11, 0.1);
          padding: 3px 10px;
          border-radius: 999px;
        }

        .mobile-links {
          padding: 8px 8px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 14px;
          border-radius: 12px;
          text-decoration: none;
          color: var(--text);
          font-size: 15px;
          font-weight: 500;
          transition: var(--transition);
        }

        .mobile-nav-link:hover {
          background: rgba(15, 61, 145, 0.06);
          color: var(--secondary);
          padding-left: 18px;
        }

        .mobile-nav-link svg {
          opacity: 0;
          transform: translateX(-4px);
          transition: var(--transition);
          color: var(--primary);
        }

        .mobile-nav-link:hover svg {
          opacity: 1;
          transform: translateX(0);
        }

        .mobile-cta {
          padding: 0 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-btn-outline {
          padding: 13px;
          border-radius: 12px;
          border: 1.5px solid var(--secondary);
          background: transparent;
          color: var(--secondary);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-align: center;
        }

        .mobile-btn-outline:hover {
          background: var(--secondary);
          color: var(--white);
        }

        .mobile-btn-primary {
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: var(--primary);
          color: var(--white);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          text-align: center;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3);
        }

        .mobile-btn-primary:hover {
          background: var(--primary-dark);
        }

        /* DIVIDER */
        .mobile-divider {
          height: 1px;
          background: var(--border);
          margin: 0 16px 16px;
        }
      `}</style>

      <header className={`navbar-root ${scrolled ? "scrolled" : "top"}`}>
        <nav style={{ width: "100%", padding: "0 1.25rem" }}>
          <div className="navbar-inner">

            {/* LOGO */}
            <Link href="/" className="logo-link" onClick={() => setActiveLink("/")}>
              <div className="logo-img-wrap">
                <img src="/properties.png" alt="Estate Prime Logo" />
              </div>
              
            </Link>

            {/* DESKTOP NAV */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                >
                  {link.name}
                  <span className="nav-link-dot" aria-hidden="true" />
                </Link>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="cta-group">
              <button className="btn-outline">Sign In</button>
              <button className="btn-primary">List Property</button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

          {/* MOBILE MENU */}
          <div className={`mobile-menu-wrap ${mobileOpen ? "open" : "closed"}`}>
            <div className="mobile-menu">

              <div className="mobile-menu-header">
                <span className="mobile-menu-badge">Navigation</span>
              </div>

              <div className="mobile-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => {
                      setMobileOpen(false);
                      setActiveLink(link.href);
                    }}
                  >
                    {link.name}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mobile-divider" />

              <div className="mobile-cta">
                <button className="mobile-btn-outline">Sign In</button>
                <button className="mobile-btn-primary">List Property →</button>
              </div>

            </div>
          </div>

        </nav>
      </header>
    </>
  );
}