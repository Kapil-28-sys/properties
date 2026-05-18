"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";

const allProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Mumbai",
    price: 4500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,800 sqft",
    floor: "G + 2",
    parking: "2 Covered",
    facing: "East",
    age: "New Construction",
    description:
      "A stunning luxury villa nestled in the heart of Mumbai, offering world-class interiors, lush private landscaping, and breathtaking city views. Designed for the discerning buyer who demands nothing but the best in luxury real estate.",
    features: ["4 Bedrooms", "3 Bathrooms", "Private Garden", "2 Parking", "City View", "Modern Kitchen", "Smart Home", "Security System"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Delhi",
    price: 2200000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,900 sqft",
    floor: "7th Floor",
    parking: "1 Covered",
    facing: "North",
    age: "2 Years",
    description:
      "A sleek and contemporary apartment in Delhi's most sought-after neighbourhood. Floor-to-ceiling windows, premium fittings, and smart-home integration make this a truly modern living experience.",
    features: ["3 Bedrooms", "2 Bathrooms", "City View", "1 Parking", "Gym Access", "Modern Kitchen", "Smart Home", "24/7 Security"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Premium Penthouse",
    location: "Bangalore",
    price: 6500000,
    type: "Penthouse",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,200 sqft",
    floor: "Top Floor",
    parking: "3 Covered",
    facing: "West",
    age: "New Construction",
    description:
      "Perched atop Bangalore's skyline, this premium penthouse redefines luxury urban living. Private rooftop terrace, panoramic views of the city, and curated interiors crafted by award-winning designers.",
    features: ["5 Bedrooms", "4 Bathrooms", "Rooftop Terrace", "3 Parking", "Sky View", "Wine Cellar", "Smart Home", "Private Lift"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Beach Villa",
    location: "Goa",
    price: 8500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "4,500 sqft",
    floor: "G + 1",
    parking: "2 Covered",
    facing: "Sea Facing",
    age: "1 Year",
    description:
      "Experience premium luxury living with this modern beachfront villa featuring spacious interiors, ocean views, private garden, and swimming pool just steps from the shore.",
    features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool", "Private Garden", "2 Parking", "Sea View", "Modern Kitchen", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Family House",
    location: "Jaipur",
    price: 1800000,
    type: "House",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,600 sqft",
    floor: "G + 1",
    parking: "2 Open",
    facing: "North-East",
    age: "5 Years",
    description:
      "A warm and welcoming family home in one of Jaipur's most established residential areas. Generous living spaces, a verdant backyard, and proximity to top schools make this the ideal family retreat.",
    features: ["4 Bedrooms", "2 Bathrooms", "Backyard", "2 Parking", "Vastu Compliant", "Modular Kitchen", "Servant Quarter", "Gated Society"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Luxury Flat",
    location: "Pune",
    price: 2800000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sqft",
    floor: "4th Floor",
    parking: "2 Covered",
    facing: "South",
    age: "3 Years",
    description:
      "An immaculate luxury flat in Pune's vibrant tech corridor. Italian marble flooring, imported fixtures, and a sweeping view of the Sahyadri hills — a rare blend of sophistication and comfort.",
    features: ["3 Bedrooms", "2 Bathrooms", "Hill View", "2 Parking", "Club House", "Modern Kitchen", "Smart Home", "Concierge"],
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

export default function PropertyDetailPage({ params }) {
  const resolvedParams = typeof params?.then === "function" ? use(params) : params;
  const property = allProperties.find((p) => p.id === Number(resolvedParams?.id)) || allProperties[0];

  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!property) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background)" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 28, marginBottom: 16, fontFamily: "'Playfair Display', serif" }}>Property not found</h2>
          <button onClick={() => router.back()} style={{ padding: "12px 28px", background: "var(--secondary)", color: "white", border: "none", borderRadius: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Go Back</button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const emiEstimate = Math.round(property.price * 0.8 * 0.007).toLocaleString();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --primary: #f59e0b;
          --primary-dark: #d97706;
          --primary-light: #fbbf24;
          --secondary: #0f3d91;
          --secondary-dark: #082f73;
          --secondary-light: #2563eb;
          --accent: #3fa34d;
          --accent-light: #6ccf79;
          --background: #f8fafc;
          --white: #ffffff;
          --text: #0f172a;
          --text-light: #64748b;
          --border: #e2e8f0;
          --shadow-sm: 0 4px 14px rgba(0,0,0,0.06);
          --shadow-md: 0 14px 40px rgba(0,0,0,0.1);
          --radius: 18px;
          --transition: all 0.35s ease;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-page {
          min-height: 100vh;
          background: var(--background);
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
        }

        /* ── HERO ── */
        .pd-hero {
          position: relative;
          width: 100%;
          height: 88vh;
          overflow: hidden;
        }
        .pd-hero-img {
          width: 100%; height: 100%; object-fit: cover;
          animation: fadeIn 0.45s ease both;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }

        .pd-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.05) 40%,
            rgba(0,0,0,0.65) 100%
          );
        }

        /* back / save */
        .pd-hero-back {
          position: absolute; top: 24px; left: 24px; z-index: 30;
          display: flex; align-items: center; gap: 8px;
          height: 44px; padding: 0 20px; border-radius: 100px;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.35); color: white;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: var(--transition); letter-spacing: 0.03em;
          font-family: 'DM Sans', sans-serif;
        }
        .pd-hero-back:hover { background: var(--white); color: var(--text); }

        .pd-hero-actions {
          position: absolute; top: 24px; right: 24px; z-index: 30;
          display: flex; gap: 10px;
        }
        .pd-hero-action-btn {
          height: 44px; padding: 0 20px; border-radius: 100px;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.35); color: white;
          font-size: 13px; font-weight: 500; cursor: pointer;
          transition: var(--transition); font-family: 'DM Sans', sans-serif;
        }
        .pd-hero-action-btn:hover { background: var(--white); color: var(--text); }
        .pd-hero-action-btn.saved { background: var(--primary); border-color: var(--primary); color: white; }

        /* hero title */
        .pd-hero-title-block {
          position: absolute; bottom: 60px; left: 0; right: 0;
          padding: 0 24px;
          max-width: 1280px; margin: 0 auto;
          z-index: 10;
        }
        .pd-hero-type-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: var(--primary); color: white;
          border-radius: 100px; padding: 5px 14px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .pd-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 6vw, 68px);
          color: white; font-weight: 700;
          line-height: 1.1; margin-bottom: 18px;
        }
        .pd-hero-meta {
          display: flex; flex-wrap: wrap; align-items: center; gap: 14px;
        }
        .pd-hero-location {
          display: flex; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.85); font-size: 15px; font-weight: 400;
        }
        .pd-hero-divider { width: 1px; height: 18px; background: rgba(255,255,255,0.35); }
        .pd-hero-price {
          font-family: 'Playfair Display', serif;
          font-size: 26px; color: white; font-weight: 600;
        }
        .pd-hero-pill {
          padding: 6px 16px; border-radius: 100px;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: white; font-size: 13px; font-weight: 500;
        }

        /* arrows */
        .pd-arrow {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 20;
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,0.18); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.35); color: white;
          font-size: 18px; cursor: pointer; transition: var(--transition);
          display: flex; align-items: center; justify-content: center;
        }
        .pd-arrow:hover { background: var(--white); color: var(--text); }
        .pd-arrow-left { left: 20px; }
        .pd-arrow-right { right: 20px; }

        /* thumbnails */
        .pd-thumbs {
          position: absolute; bottom: 20px; right: 24px; z-index: 20;
          display: flex; gap: 8px; align-items: center;
        }
        .pd-thumb {
          width: 64px; height: 64px; border-radius: 12px; overflow: hidden;
          border: 2.5px solid transparent; cursor: pointer;
          transition: var(--transition); opacity: 0.65;
        }
        .pd-thumb.active { border-color: var(--primary); opacity: 1; transform: scale(1.06); }
        .pd-thumb img { width: 100%; height: 100%; object-fit: cover; }

        /* ── BREADCRUMB ── */
        .pd-breadcrumb {
          background: var(--white); border-bottom: 1px solid var(--border);
          padding: 0 24px;
        }
        .pd-breadcrumb-inner {
          max-width: 1280px; margin: 0 auto;
          height: 48px; display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--text-light);
        }
        .pd-breadcrumb-link { cursor: pointer; color: var(--text-light); transition: var(--transition); font-weight: 500; }
        .pd-breadcrumb-link:hover { color: var(--secondary); }
        .pd-breadcrumb-current { color: var(--text); font-weight: 600; }

        /* ── MAIN ── */
        .pd-main {
          max-width: 1280px; margin: 0 auto;
          padding: 56px 24px 80px;
          display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap;
        }

        /* ── LEFT ── */
        .pd-left {
          flex: 1 1 560px; min-width: 0;
          display: flex; flex-direction: column; gap: 48px;
        }

        /* section label */
        .pd-section-label {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .pd-section-label span {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--secondary);
        }
        .pd-section-label-line { flex: 1; height: 1px; background: var(--border); }

        /* overview */
        .pd-overview-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 40px);
          color: var(--text); font-weight: 700;
          margin-bottom: 16px; line-height: 1.2;
        }
        .pd-overview-desc {
          color: var(--text-light); line-height: 1.85; font-size: 15px; font-weight: 400;
        }

        /* quick stats */
        .pd-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
        }
        @media (max-width: 600px) { .pd-stats { grid-template-columns: repeat(2, 1fr); } }
        .pd-stat-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px 12px;
          text-align: center; box-shadow: var(--shadow-sm);
          transition: var(--transition);
          position: relative; overflow: hidden;
        }
        .pd-stat-card::before {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, var(--secondary), var(--secondary-light));
          transform: scaleX(0); transform-origin: left;
          transition: var(--transition);
        }
        .pd-stat-card:hover::before { transform: scaleX(1); }
        .pd-stat-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .pd-stat-icon { font-size: 24px; margin-bottom: 8px; }
        .pd-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 22px; color: var(--text); font-weight: 600; margin-bottom: 4px;
        }
        .pd-stat-label {
          font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
          color: var(--text-light); font-weight: 600;
        }

        /* details table */
        .pd-table {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 24px; overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .pd-table-row {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          border-bottom: 1px solid var(--border);
          transition: background 0.2s;
        }
        .pd-table-row:last-child { border-bottom: none; }
        .pd-table-row:hover { background: rgba(245,158,11,0.04); }
        .pd-table-row:nth-child(even) { background: #f9fafb; }
        .pd-table-row:nth-child(even):hover { background: rgba(245,158,11,0.04); }
        .pd-table-key { font-size: 13.5px; color: var(--text-light); font-weight: 500; }
        .pd-table-val { font-size: 13.5px; color: var(--text); font-weight: 600; }
        .pd-table-val.highlight { color: var(--secondary); font-size: 15px; }

        /* amenities */
        .pd-amenities {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
          gap: 10px;
        }
        .pd-amenity {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 14px 16px;
          display: flex; align-items: center; gap: 10px;
          font-size: 13.5px; font-weight: 500; color: var(--text);
          box-shadow: var(--shadow-sm); transition: var(--transition);
        }
        .pd-amenity:hover {
          border-color: var(--primary); background: #fffdf6;
          transform: translateY(-1px);
        }
        .pd-amenity-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--primary); flex-shrink: 0;
        }

        /* location placeholder */
        .pd-map-placeholder {
          background: linear-gradient(135deg, #e8f0fe 0%, #dbeafe 100%);
          border: 1px solid var(--border); border-radius: 20px;
          height: 180px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 10px;
        }
        .pd-map-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px; color: var(--secondary); font-weight: 600;
        }
        .pd-map-sub { font-size: 13px; color: var(--text-light); }

        /* ── RIGHT ── */
        .pd-right {
          flex: 0 0 390px; width: 390px; max-width: 100%;
        }
        .pd-sticky { position: sticky; top: 24px; display: flex; flex-direction: column; gap: 14px; }

        /* enquiry card */
        .pd-enquiry-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 28px; overflow: hidden; box-shadow: var(--shadow-md);
        }

        .pd-enquiry-header {
          background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
          padding: 28px 32px; position: relative; overflow: hidden;
        }
        .pd-enquiry-header::after {
          content: '';
          position: absolute; right: -20px; bottom: -20px;
          width: 100px; height: 100px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
        }
        .pd-enquiry-header::before {
          content: '';
          position: absolute; right: 30px; bottom: 30px;
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .pd-enquiry-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.55);
          margin-bottom: 6px; position: relative; z-index: 1;
        }
        .pd-enquiry-h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px; color: white; font-weight: 700;
          margin-bottom: 6px; position: relative; z-index: 1;
        }
        .pd-enquiry-sub {
          font-size: 13px; color: rgba(255,255,255,0.55);
          position: relative; z-index: 1;
        }

        .pd-price-strip {
          padding: 14px 32px;
          background: #f9fafb; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .pd-price-strip-label { font-size: 13px; color: var(--text-light); font-weight: 500; }
        .pd-price-strip-val {
          font-family: 'Playfair Display', serif;
          font-size: 20px; color: var(--text); font-weight: 600;
        }

        /* form inside card */
        .pd-form { padding: 24px 32px 28px; display: flex; flex-direction: column; gap: 16px; }

        .pd-field label {
          display: block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-light); margin-bottom: 7px;
        }
        .pd-field input, .pd-field select, .pd-field textarea {
          width: 100%; border: 1.5px solid var(--border);
          border-radius: 12px; padding: 0 14px;
          font-size: 14px; color: var(--text); font-family: 'DM Sans', sans-serif;
          background: #fafbfc; transition: var(--transition); font-weight: 500;
        }
        .pd-field input, .pd-field select { height: 46px; }
        .pd-field textarea { padding: 12px 14px; resize: none; }
        .pd-field input:focus, .pd-field select:focus, .pd-field textarea:focus {
          outline: none; border-color: var(--primary);
          background: #fffdf6; box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
        }
        .pd-field input::placeholder, .pd-field textarea::placeholder { color: #a0aec0; font-weight: 400; }

        .pd-submit-btn {
          width: 100%; height: 52px;
          background: linear-gradient(135deg, var(--secondary), var(--secondary-light));
          border: none; border-radius: 14px;
          color: white; font-size: 14px; font-weight: 700;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: var(--transition);
          box-shadow: 0 6px 24px rgba(15,61,145,0.28);
          position: relative; overflow: hidden;
        }
        .pd-submit-btn::before {
          content: ''; position: absolute;
          top: 0; left: 0; width: 4px; height: 100%;
          background: var(--primary);
        }
        .pd-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(15,61,145,0.35); }
        .pd-submit-btn:active { transform: translateY(0); }

        .pd-form-note {
          text-align: center; font-size: 12px;
          color: var(--text-light); margin-top: -4px;
        }

        /* success state */
        .pd-success {
          padding: 40px 32px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }
        .pd-success-ring {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(63,163,77,0.1); border: 2px solid rgba(63,163,77,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; color: var(--accent);
        }
        .pd-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px; color: var(--text); font-weight: 700;
        }
        .pd-success-msg { font-size: 14px; color: var(--text-light); line-height: 1.6; }
        .pd-success-retry {
          font-size: 13px; color: var(--text-light); background: none; border: none;
          cursor: pointer; text-decoration: underline; font-family: 'DM Sans', sans-serif;
          transition: var(--transition);
        }
        .pd-success-retry:hover { color: var(--secondary); }

        /* EMI card */
        .pd-emi-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 20px; padding: 24px 28px;
          box-shadow: var(--shadow-sm);
          position: relative; overflow: hidden;
        }
        .pd-emi-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
        }
        .pd-emi-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--text-light); margin-bottom: 14px;
        }
        .pd-emi-amount {
          font-family: 'Playfair Display', serif;
          font-size: 32px; color: var(--text); font-weight: 700;
        }
        .pd-emi-unit { font-size: 15px; color: var(--text-light); font-family: 'DM Sans', sans-serif; font-weight: 400; }
        .pd-emi-note { font-size: 12px; color: var(--text-light); margin-top: 6px; }

        @media (max-width: 900px) {
          .pd-right { flex: 1 1 100%; width: 100%; }
          .pd-sticky { position: static; }
        }
        @media (max-width: 600px) {
          .pd-hero-h1 { font-size: 34px; }
          .pd-hero-title-block { bottom: 40px; }
        }
      `}</style>

      <div className="pd-page">

        {/* ── HERO ── */}
        <div className="pd-hero">
          <img
            key={currentImage}
            src={property.images[currentImage]}
            alt={property.title}
            className="pd-hero-img"
          />
          <div className="pd-hero-overlay" />

          {/* Back */}
          <button className="pd-hero-back" onClick={() => router.back()}>
            ← Back
          </button>

          {/* Actions */}
          <div className="pd-hero-actions">
            <button
              className={`pd-hero-action-btn${saved ? " saved" : ""}`}
              onClick={() => setSaved(!saved)}
            >
              {saved ? "♥ Saved" : "♡ Save"}
            </button>
            <button className="pd-hero-action-btn">⎘ Share</button>
          </div>

          {/* Title block */}
          <div className="pd-hero-title-block">
            <div className="pd-hero-type-badge">
              <span>◆</span> {property.type}
            </div>
            <h1 className="pd-hero-h1">{property.title}</h1>
            <div className="pd-hero-meta">
              <span className="pd-hero-location">📍 {property.location}, India</span>
              <div className="pd-hero-divider" />
              <span className="pd-hero-price">₹{property.price.toLocaleString()}</span>
              <span className="pd-hero-pill">{property.area}</span>
              <span className="pd-hero-pill">{property.age}</span>
            </div>
          </div>

          {/* Arrows */}
          <button className="pd-arrow pd-arrow-left" onClick={() => setCurrentImage((p) => (p === 0 ? property.images.length - 1 : p - 1))}>←</button>
          <button className="pd-arrow pd-arrow-right" onClick={() => setCurrentImage((p) => (p === property.images.length - 1 ? 0 : p + 1))}>→</button>

          {/* Thumbnails */}
          <div className="pd-thumbs">
            {property.images.map((img, i) => (
              <div key={i} className={`pd-thumb${currentImage === i ? " active" : ""}`} onClick={() => setCurrentImage(i)}>
                <img src={img} alt="thumb" />
              </div>
            ))}
          </div>
        </div>

        {/* ── BREADCRUMB ── */}
        <div className="pd-breadcrumb">
          <div className="pd-breadcrumb-inner">
            <span className="pd-breadcrumb-link" onClick={() => router.back()}>Properties</span>
            <span style={{ color: "var(--text-light)" }}>›</span>
            <span className="pd-breadcrumb-link">{property.location}</span>
            <span style={{ color: "var(--text-light)" }}>›</span>
            <span className="pd-breadcrumb-current">{property.title}</span>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div className="pd-main">

          {/* ── LEFT ── */}
          <div className="pd-left">

            {/* Overview */}
            <div>
              <div className="pd-section-label">
                <span>Overview</span>
                <div className="pd-section-label-line" />
              </div>
              <h2 className="pd-overview-title">{property.title}</h2>
              <p className="pd-overview-desc">{property.description}</p>
            </div>

            {/* Quick stats */}
            <div>
              <div className="pd-section-label">
                <span>Quick Stats</span>
                <div className="pd-section-label-line" />
              </div>
              <div className="pd-stats">
                {[
                  ["🛏", property.bedrooms, "Bedrooms"],
                  ["🚿", property.bathrooms, "Bathrooms"],
                  ["📐", property.area, "Area"],
                  ["🏠", property.type, "Type"],
                ].map(([icon, value, label]) => (
                  <div key={label} className="pd-stat-card">
                    <div className="pd-stat-icon">{icon}</div>
                    <div className="pd-stat-value">{value}</div>
                    <div className="pd-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details table */}
            <div>
              <div className="pd-section-label">
                <span>Property Details</span>
                <div className="pd-section-label-line" />
              </div>
              <div className="pd-table">
                {[
                  ["Property Type", property.type],
                  ["Location", `${property.location}, India`],
                  ["Total Area", property.area],
                  ["Bedrooms", property.bedrooms],
                  ["Bathrooms", property.bathrooms],
                  ["Floor", property.floor],
                  ["Parking", property.parking],
                  ["Facing", property.facing],
                  ["Property Age", property.age],
                  ["Status", "Ready to Move"],
                  ["Listed Price", `₹${property.price.toLocaleString()}`],
                ].map(([key, val], i) => (
                  <div key={key} className="pd-table-row" style={i % 2 !== 0 ? { background: "#f9fafb" } : {}}>
                    <span className="pd-table-key">{key}</span>
                    <span className={`pd-table-val${key === "Listed Price" ? " highlight" : ""}`}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="pd-section-label">
                <span>Amenities & Features</span>
                <div className="pd-section-label-line" />
              </div>
              <div className="pd-amenities">
                {property.features.map((f, i) => (
                  <div key={i} className="pd-amenity">
                    <div className="pd-amenity-dot" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="pd-section-label">
                <span>Location</span>
                <div className="pd-section-label-line" />
              </div>
              <div className="pd-map-placeholder">
                <span style={{ fontSize: 36 }}>📍</span>
                <p className="pd-map-title">{property.location}, India</p>
                <p className="pd-map-sub">Interactive map coming soon</p>
              </div>
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className="pd-right">
            <div className="pd-sticky">

              {/* Enquiry card */}
              <div className="pd-enquiry-card">
                <div className="pd-enquiry-header">
                  <p className="pd-enquiry-eyebrow">Interested?</p>
                  <h3 className="pd-enquiry-h3">Enquire Now</h3>
                  <p className="pd-enquiry-sub">Our agent will contact you within 24 hours</p>
                </div>

                <div className="pd-price-strip">
                  <span className="pd-price-strip-label">Listed Price</span>
                  <span className="pd-price-strip-val">₹{property.price.toLocaleString()}</span>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="pd-form">
                    {[
                      { label: "Full Name *", key: "name", type: "text", placeholder: "Rahul Sharma" },
                      { label: "Email Address *", key: "email", type: "email", placeholder: "rahul@email.com" },
                      { label: "Phone Number *", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key} className="pd-field">
                        <label>{label}</label>
                        <input
                          required type={type} placeholder={placeholder}
                          value={form[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        />
                      </div>
                    ))}

                    <div className="pd-field">
                      <label>Your Budget</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                        <option value="">Select budget range</option>
                        <option value="10-25">₹10L – ₹25L</option>
                        <option value="25-50">₹25L – ₹50L</option>
                        <option value="50-1cr">₹50L – ₹1Cr</option>
                        <option value="1cr+">₹1Cr+</option>
                      </select>
                    </div>

                    <div className="pd-field">
                      <label>Message</label>
                      <textarea
                        rows={3}
                        placeholder={`I'm interested in ${property.title}...`}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="pd-submit-btn">
                      <span style={{ position: "relative", zIndex: 1 }}>Send Enquiry</span>
                    </button>

                    <p className="pd-form-note">By submitting you agree to our privacy policy</p>
                  </form>
                ) : (
                  <div className="pd-success">
                    <div className="pd-success-ring">✓</div>
                    <p className="pd-success-title">Enquiry Sent!</p>
                    <p className="pd-success-msg">
                      Thank you, <strong>{form.name}</strong>. Our agent will reach out at{" "}
                      <strong>{form.phone}</strong> within 24 hours.
                    </p>
                    <button className="pd-success-retry" onClick={() => setSubmitted(false)}>
                      Submit another enquiry
                    </button>
                  </div>
                )}
              </div>

              {/* EMI card */}
              <div className="pd-emi-card">
                <p className="pd-emi-label">EMI Estimate</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <span className="pd-emi-amount">₹{emiEstimate}</span>
                    <span className="pd-emi-unit"> /mo</span>
                    <p className="pd-emi-note">Approx. (80% loan · 8.5% p.a. · 20 yrs)</p>
                  </div>
                  <span style={{ fontSize: 32, opacity: 0.15 }}>🏦</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}