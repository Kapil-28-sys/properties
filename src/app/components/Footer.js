"use client";

import Link from "next/link";
import { ChevronRight, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  const footerSections = [
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
  ];

  const socialIcons = [
    {
      label: "Website",
      icon: <Globe size={17} />,
    },
    {
      label: "Email",
      icon: <Mail size={17} />,
    },
    {
      label: "Phone",
      icon: <Phone size={17} />,
    },
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 1.8h8.5c2.18 0 3.95 1.77 3.95 3.95v8.5c0 2.18-1.77 3.95-3.95 3.95h-8.5A3.95 3.95 0 0 1 3.8 16.25v-8.5c0-2.18 1.77-3.95 3.95-3.95Zm9.7 1.35a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8Z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 12 8.3a11.3 11.3 0 0 1-8.2-4.1 4 4 0 0 0 1.2 5.3A4 4 0 0 1 3 8.9v.1A4 4 0 0 0 6.2 13a4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 17.5a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5A8 8 0 0 0 22 5.8Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer-root">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap");

        .footer-root {
          position: relative;
          overflow: hidden;
          background: #080c14;
          color: #ffffff;
          font-family: 'Jost', sans-serif;
        }

        .footer-glow-top {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 460px;
          background: radial-gradient(ellipse, rgba(15,61,145,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-glow-bottom {
          position: absolute;
          bottom: -160px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image:
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
        }

        .footer-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #f59e0b 30%, #0f3d91 70%, transparent 100%);
        }

        .footer-inner {
          position: relative;
          z-index: 10;
          max-width: 1360px;
          margin: 0 auto;
          padding: 72px 56px 0;
        }

        @media (max-width: 1024px) {
          .footer-inner { padding: 56px 28px 0; }
        }

        /* NEWSLETTER BAND */
        .newsletter-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 20px;
          padding: 28px 36px;
          margin-bottom: 64px;
          flex-wrap: wrap;
        }

        .newsletter-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
        }

        .newsletter-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          margin-top: 4px;
          font-weight: 300;
        }

        .newsletter-form {
          display: flex;
          gap: 10px;
          flex: 1;
          max-width: 420px;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 11px 20px;
          font-size: 13px;
          color: #fff;
          font-family: 'Jost', sans-serif;
          outline: none;
          transition: border-color 0.3s;
        }

        .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }

        .newsletter-input:focus {
          border-color: rgba(245,158,11,0.5);
        }

        .newsletter-btn {
          padding: 11px 24px;
          border-radius: 999px;
          border: none;
          background: #f59e0b;
          color: #080c14;
          font-size: 13px;
          font-weight: 700;
          font-family: 'Jost', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          letter-spacing: 0.03em;
        }

        .newsletter-btn:hover {
          background: #d97706;
          transform: translateY(-1px);
        }

        /* MAIN GRID */
        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr;
          gap: 48px 56px;
        }

        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .newsletter-band { padding: 22px 20px; }
          .newsletter-form { max-width: 100%; flex: unset; width: 100%; }
        }

        

        .brand-logo-img {
          width: 70px;
          height: 70px;
          c
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-logo-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #fff;
          line-height: 1;
        }

        .brand-tagline {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #f59e0b;
          margin-top: 5px;
        }

        .brand-divider {
          width: 40px;
          height: 2px;
          background: #f59e0b;
          border-radius: 999px;
          margin: 24px 0;
          opacity: 0.7;
        }

        .brand-desc {
          font-size: 13.5px;
          line-height: 1.85;
          color: rgba(255,255,255,0.42);
          font-weight: 300;
          max-width: 310px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-top: 14px;
          transition: color 0.3s;
        }

        .contact-row:first-child { margin-top: 20px; }

        .contact-row:hover { color: rgba(255,255,255,0.8); }

        .contact-icon {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: #f59e0b;
          border-color: #f59e0b;
          color: #080c14;
          transform: translateY(-2px);
        }

        /* LINK COLUMNS */
        .col-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 14px;
        }

        .col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 1.5px;
          background: #f59e0b;
          border-radius: 999px;
        }

        .col-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .col-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .col-link-arrow {
          color: #f59e0b;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .col-link:hover {
          color: rgba(255,255,255,0.9);
          padding-left: 4px;
        }

        .col-link:hover .col-link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .col-link-text {
          position: relative;
        }

        .col-link-text::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }

        .col-link:hover .col-link-text::after {
          width: 50%;
        }

        /* STATS STRIP */
        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          margin: 56px 0 0;
        }

        @media (max-width: 640px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-cell {
          padding: 22px 24px;
          background: rgba(255,255,255,0.02);
          text-align: center;
          transition: background 0.3s;
        }

        .stat-cell:hover { background: rgba(245,158,11,0.06); }

        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 700;
          color: #f59e0b;
          line-height: 1;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.35);
          margin-top: 5px;
        }

        /* BOTTOM */
        .footer-bottom {
          margin-top: 48px;
          padding: 22px 56px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .footer-bottom { padding: 22px 28px; }
        }

        .footer-copyright {
          font-size: 12px;
          color: rgba(255,255,255,0.28);
          font-weight: 300;
        }

        .footer-copyright span {
          color: #f59e0b;
          font-weight: 500;
        }

        .footer-legal {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
        }

        .footer-legal-link {
          font-size: 12px;
          color: rgba(255,255,255,0.28);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .footer-legal-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s;
        }

        .footer-legal-link:hover { color: rgba(255,255,255,0.75); }
        .footer-legal-link:hover::after { width: 100%; }

        .footer-legal-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: inline-block;
          vertical-align: middle;
        }

        /* MADE WITH BADGE */
        .footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          font-weight: 300;
        }

        .footer-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3fa34d;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* DECORATIVE ELEMENTS */}
      <div className="footer-accent-line" />
      <div className="footer-glow-top" />
      <div className="footer-glow-bottom" />
      <div className="footer-grid-pattern" />

      <div className="footer-inner">

       

        {/* MAIN GRID */}
        <div className="footer-grid">

          {/* BRAND COLUMN */}
          <div>
            <div className="brand-logo-row">
              <div className="brand-logo-img">
                <img src="/properties.png" alt="FutureEstate Logo" />
              </div>
              
            </div>

            <div className="brand-divider" />

            <p className="brand-desc">
              Experience refined living through curated luxury homes, world-class
              architecture, and premium real estate investments crafted for
              discerning modern lifestyles.
            </p>

            <a href="mailto:hello@futurestate.com" className="contact-row">
              <span className="contact-icon"><Mail size={15} /></span>
              hello@futurestate.com
            </a>
            <a href="tel:+919876543210" className="contact-row">
              <span className="contact-icon"><Phone size={15} /></span>
              +91 98765 43210
            </a>

            <div className="social-row">
              {socialIcons.map((s, i) => (
                <a key={i} href="#" className="social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="col-title">{section.title}</h3>
              <ul className="col-links">
                {section.links.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className="col-link">
                      <ChevronRight size={13} className="col-link-arrow" />
                      <span className="col-link-text">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* STATS STRIP */}
        <div className="stats-strip">
          {[
            { num: "2,400+", label: "Properties Listed" },
            { num: "₹840Cr", label: "Total Deals Closed" },
            { num: "18+", label: "Cities Covered" },
            { num: "99%", label: "Client Satisfaction" },
          ].map((s, i) => (
            <div key={i} className="stat-cell">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 <span>FutureEstate</span>. All Rights Reserved.
        </p>

        <div className="footer-legal">
          {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, i) => (
            <>
              {i > 0 && <span key={`dot-${i}`} className="footer-legal-dot" />}
              <Link key={item} href="#" className="footer-legal-link">{item}</Link>
            </>
          ))}
        </div>

        <div className="footer-badge">
          <span className="footer-badge-dot" />
          Built in Rajasthan, India
        </div>
      </div>

    </footer>
  );
}