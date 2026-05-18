"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { allProperties } from "@/app/properties/propertiesData";

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const BedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 16h20M6 8v4"/>
  </svg>
);

const BathIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l2 2-2 2m4-4l2 2-2 2M5 12h14a2 2 0 012 2v2a5 5 0 01-10 0h-2a5 5 0 01-5-2v-2a2 2 0 012-2z"/>
  </svg>
);

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const TYPE_COLORS = {
  Villa:      { bg: "#F0FDF4", text: "#166534", dot: "#22c55e" },
  Apartment:  { bg: "#EFF6FF", text: "#1D4ED8", dot: "#3b82f6" },
  House:      { bg: "#FFF7ED", text: "#9A3412", dot: "#f97316" },
  Penthouse:  { bg: "#FAF5FF", text: "#6B21A8", dot: "#a855f7" },
};

const formatPrice = (price) => {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`;
  if (price >= 100000)   return `₹${(price / 100000).toFixed(0)}L`;
  return `₹${price.toLocaleString()}`;
};

export default function PropertyListingSection() {
  const router = useRouter();

  const [search, setSearch]             = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation]         = useState("");
  const [budget, setBudget]             = useState("");
  const [sort, setSort]                 = useState("latest");
  const [view, setView]                 = useState("grid");
  const [currentPage, setCurrentPage]   = useState(1);
  const [wishlist, setWishlist]         = useState(new Set());

  const itemsPerPage = 6;

  const filtered = useMemo(() => {
    let list = [...allProperties];
    if (search)        list = list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    if (propertyType)  list = list.filter((p) => p.type === propertyType);
    if (location)      list = list.filter((p) => p.location === location);
    if (budget === "10-25") list = list.filter((p) => p.price >= 1000000  && p.price <= 2500000);
    if (budget === "25-50") list = list.filter((p) => p.price >= 2500000  && p.price <= 5000000);
    if (budget === "50+")   list = list.filter((p) => p.price >= 5000000);
    if (sort === "low")  list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    return list;
  }, [search, propertyType, location, budget, sort]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated  = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const resetFilters = () => {
    setSearch(""); setPropertyType(""); setLocation("");
    setBudget(""); setSort("latest"); setCurrentPage(1);
  };

  const activeFilterCount = [search, propertyType, location, budget].filter(Boolean).length;

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pls-root * { box-sizing: border-box; }

        .pls-root {
          --gold:       #C9A84C;
          --gold-light: #F5EDD5;
          --gold-dark:  #9A7535;
          --ink:        #1A1A2E;
          --ink-soft:   #4A4A6A;
          --ink-muted:  #8888A8;
          --surface:    #FAFAF8;
          --white:      #FFFFFF;
          --border:     rgba(26,26,46,0.10);
          --border-md:  rgba(26,26,46,0.18);
          --radius-sm:  10px;
          --radius-md:  16px;
          --radius-lg:  24px;
          --radius-xl:  32px;
          --shadow-xs:  0 1px 3px rgba(26,26,46,0.06);
          --shadow-sm:  0 2px 12px rgba(26,26,46,0.07);
          --shadow-md:  0 8px 32px rgba(26,26,46,0.10);
          --shadow-lg:  0 16px 48px rgba(26,26,46,0.14);
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
          background: var(--surface);
        }

        .pls-serif { font-family: 'DM Serif Display', serif; }

        /* Inputs & Selects */
        .pls-input, .pls-select {
          height: 48px;
          padding: 0 16px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
        }
        .pls-select { padding-right: 38px; cursor: pointer; }
        .pls-select-wrap { position: relative; }
        .pls-select-wrap .chevron {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          color: var(--ink-muted); pointer-events: none;
        }
        .pls-input:focus, .pls-select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
        }
        .pls-input::placeholder { color: var(--ink-muted); }

        /* Cards */
        .prop-card {
          background: var(--white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.35s ease;
          cursor: pointer;
          position: relative;
        }
        .prop-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .prop-card .img-wrap {
          overflow: hidden;
          position: relative;
        }
        .prop-card .img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .prop-card:hover .img-wrap img { transform: scale(1.07); }

        /* Wishlist btn */
        .wish-btn {
          position: absolute; top: 14px; right: 14px; z-index: 2;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s, background 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .wish-btn:hover { transform: scale(1.12); }
        .wish-btn.active { background: #FEE2E2; color: #EF4444; }
        .wish-btn svg { transition: fill 0.2s; }
        .wish-btn.active svg { fill: #EF4444; stroke: #EF4444; }

        /* Type badge */
        .type-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 999px;
        }
        .type-badge .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Primary CTA button */
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          height: 44px;
          padding: 0 24px;
          border-radius: 999px;
          background: var(--ink);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: var(--gold-dark);
          transform: scale(1.03);
          box-shadow: 0 4px 16px rgba(154,117,53,0.3);
        }

        /* Sort select */
        .sort-select {
          height: 44px;
          padding: 0 40px 0 16px;
          border-radius: 999px;
          border: 1.5px solid var(--border-md);
          background: var(--white);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          appearance: none; -webkit-appearance: none;
          outline: none; cursor: pointer;
          transition: border-color 0.2s;
        }
        .sort-select:hover { border-color: var(--gold); }

        /* View toggle */
        .view-toggle {
          display: flex; align-items: center;
          border: 1.5px solid var(--border-md);
          border-radius: 999px;
          overflow: hidden;
          background: var(--white);
        }
        .view-toggle button {
          width: 44px; height: 40px;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background: transparent;
          color: var(--ink-muted);
          transition: background 0.2s, color 0.2s;
        }
        .view-toggle button.active {
          background: var(--ink);
          color: var(--white);
        }

        /* Pagination */
        .page-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid var(--border-md);
          background: var(--white);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .page-btn:hover { border-color: var(--gold); color: var(--gold-dark); }
        .page-btn.active {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--white);
        }

        /* Stagger animation */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stagger > * { animation: fadeSlideUp 0.5s ease both; }
        .stagger > *:nth-child(1) { animation-delay: 0.05s; }
        .stagger > *:nth-child(2) { animation-delay: 0.12s; }
        .stagger > *:nth-child(3) { animation-delay: 0.19s; }
        .stagger > *:nth-child(4) { animation-delay: 0.26s; }
        .stagger > *:nth-child(5) { animation-delay: 0.33s; }
        .stagger > *:nth-child(6) { animation-delay: 0.40s; }

        /* Results count pill */
        .results-pill {
          display: inline-flex; align-items: center;
          background: var(--gold-light);
          color: var(--gold-dark);
          font-size: 12px; font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.04em;
        }

        /* Filter strip */
        .filter-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px;
          border-radius: 999px;
          background: var(--gold-light);
          color: var(--gold-dark);
          font-size: 12px; font-weight: 500;
        }
        .filter-chip button {
          border: none; background: none; cursor: pointer;
          color: var(--gold-dark); padding: 0; line-height: 1;
          font-size: 14px;
        }
      `}</style>

      <section className="pls-root" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>

          {/* ── HEADER ── */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 28, height: 2, background: "var(--gold)", display: "block", borderRadius: 2 }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-dark)" }}>
                  Featured Properties
                </span>
              </div>
              <h2 className="pls-serif" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.1, color: "var(--ink)", margin: 0 }}>
                Find Your<br />
                <span style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>Perfect</span> Home
              </h2>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span className="results-pill">{filtered.length} properties</span>

              {/* Sort */}
              <div style={{ position: "relative" }}>
                <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="latest">Latest</option>
                  <option value="low">Price ↑</option>
                  <option value="high">Price ↓</option>
                </select>
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--ink-muted)", pointerEvents: "none" }}>
                  <ChevronIcon />
                </span>
              </div>

              {/* View toggle */}
              <div className="view-toggle">
                {[["grid", <GridIcon />], ["list", <ListIcon />]].map(([v, icon]) => (
                  <button key={v} className={view === v ? "active" : ""} onClick={() => setView(v)} title={v}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── FILTERS ── */}
          <div style={{
            background: "var(--white)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border)",
            padding: "28px 28px",
            marginBottom: 20,
            boxShadow: "var(--shadow-sm)",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>

              {/* Search */}
              <div style={{ position: "relative", gridColumn: "span 1" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--ink-muted)" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
                <input
                  type="text"
                  placeholder="Search property..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  className="pls-input"
                  style={{ paddingLeft: 40 }}
                />
              </div>

              {/* Type */}
              <div className="pls-select-wrap">
                <select className="pls-select" value={propertyType} onChange={(e) => { setPropertyType(e.target.value); setCurrentPage(1); }}>
                  <option value="">Property Type</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
                <span className="chevron"><ChevronIcon /></span>
              </div>

              {/* Location */}
              <div className="pls-select-wrap">
                <select className="pls-select" value={location} onChange={(e) => { setLocation(e.target.value); setCurrentPage(1); }}>
                  <option value="">Location</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Goa">Goa</option>
                  <option value="Pune">Pune</option>
                </select>
                <span className="chevron"><ChevronIcon /></span>
              </div>

              {/* Budget */}
              <div className="pls-select-wrap">
                <select className="pls-select" value={budget} onChange={(e) => { setBudget(e.target.value); setCurrentPage(1); }}>
                  <option value="">Budget</option>
                  <option value="10-25">₹10L – ₹25L</option>
                  <option value="25-50">₹25L – ₹50L</option>
                  <option value="50+">₹50L+</option>
                </select>
                <span className="chevron"><ChevronIcon /></span>
              </div>

              {/* Reset */}
              <button
                onClick={resetFilters}
                style={{
                  height: 48, borderRadius: "var(--radius-md)",
                  border: "1.5px solid var(--border-md)",
                  background: activeFilterCount > 0 ? "var(--ink)" : "var(--white)",
                  color: activeFilterCount > 0 ? "var(--white)" : "var(--ink-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}
              >
                {activeFilterCount > 0 && (
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700,
                  }}>{activeFilterCount}</span>
                )}
                Reset Filters
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {search && (
                <span className="filter-chip">
                  "{search}"
                  <button onClick={() => setSearch("")}>×</button>
                </span>
              )}
              {propertyType && (
                <span className="filter-chip">
                  {propertyType}
                  <button onClick={() => setPropertyType("")}>×</button>
                </span>
              )}
              {location && (
                <span className="filter-chip">
                  {location}
                  <button onClick={() => setLocation("")}>×</button>
                </span>
              )}
              {budget && (
                <span className="filter-chip">
                  {budget === "50+" ? "₹50L+" : budget === "10-25" ? "₹10L–₹25L" : "₹25L–₹50L"}
                  <button onClick={() => setBudget("")}>×</button>
                </span>
              )}
            </div>
          )}

          {/* ── CARDS ── */}
          {paginated.length > 0 ? (
            <div
              className="stagger"
              style={view === "grid"
                ? { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }
                : { display: "flex", flexDirection: "column", gap: 20 }
              }
            >
              {paginated.map((property) => {
                const tc = TYPE_COLORS[property.type] || TYPE_COLORS.House;
                const isWished = wishlist.has(property.id);

                if (view === "list") {
                  return (
                    <div
                      key={property.id}
                      className="prop-card"
                      style={{ display: "flex", flexDirection: "row", borderRadius: "var(--radius-lg)" }}
                      onClick={() => router.push(`/properties/${property.id}`)}
                    >
                      <div className="img-wrap" style={{ width: 280, minHeight: 200, flexShrink: 0, borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)" }}>
                        <img src={property.images[0]} alt={property.title} style={{ height: "100%" }} />
                        <button className={`wish-btn${isWished ? " active" : ""}`} onClick={(e) => toggleWishlist(property.id, e)}>
                          <HeartIcon />
                        </button>
                      </div>
                      <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                            <span className="type-badge" style={{ background: tc.bg, color: tc.text }}>
                              <span className="dot" style={{ background: tc.dot }} />
                              {property.type}
                            </span>
                            <span style={{ fontSize: 22, fontWeight: 600, color: "var(--gold-dark)", fontFamily: "'DM Serif Display', serif" }}>
                              {formatPrice(property.price)}
                            </span>
                          </div>
                          <h3 className="pls-serif" style={{ fontSize: 26, margin: "8px 0 6px", color: "var(--ink)", lineHeight: 1.2 }}>
                            {property.title}
                          </h3>
                          <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 4 }}>
                            <MapPinIcon /> {property.location}, India
                          </p>
                          {(property.beds || property.baths) && (
                            <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--ink-soft)" }}>
                              {property.beds && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BedIcon /> {property.beds} Beds</span>}
                              {property.baths && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BathIcon /> {property.baths} Baths</span>}
                            </div>
                          )}
                        </div>
                        <button className="btn-primary" style={{ alignSelf: "flex-start", marginTop: 20 }} onClick={(e) => { e.stopPropagation(); router.push(`/properties/${property.id}`); }}>
                          View Details <ArrowIcon />
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={property.id}
                    className="prop-card"
                    onClick={() => router.push(`/properties/${property.id}`)}
                  >
                    {/* Image */}
                    <div className="img-wrap" style={{ height: 240 }}>
                      <img src={property.images[0]} alt={property.title} />
                      {/* Gradient overlay */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.35) 0%, transparent 55%)", pointerEvents: "none" }} />
                      {/* Price pill on image */}
                      <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderRadius: 999, padding: "6px 14px", fontWeight: 600, fontSize: 15, color: "var(--ink)", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontFamily: "'DM Serif Display', serif" }}>
                        {formatPrice(property.price)}
                      </div>
                      {/* Wishlist */}
                      <button className={`wish-btn${isWished ? " active" : ""}`} onClick={(e) => toggleWishlist(property.id, e)}>
                        <HeartIcon />
                      </button>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "20px 22px 22px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <span className="type-badge" style={{ background: tc.bg, color: tc.text }}>
                          <span className="dot" style={{ background: tc.dot }} />
                          {property.type}
                        </span>
                      </div>

                      <h3 className="pls-serif" style={{ fontSize: 22, margin: "0 0 6px", color: "var(--ink)", lineHeight: 1.2 }}>
                        {property.title}
                      </h3>

                      <p style={{ fontSize: 13, color: "var(--ink-muted)", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 4 }}>
                        <MapPinIcon /> {property.location}, India
                      </p>

                      {(property.beds || property.baths) && (
                        <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--ink-soft)", marginBottom: 18, paddingBottom: 18, borderBottom: "1px solid var(--border)" }}>
                          {property.beds  && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BedIcon /> {property.beds} Beds</span>}
                          {property.baths && <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BathIcon /> {property.baths} Baths</span>}
                        </div>
                      )}

                      <button
                        className="btn-primary"
                        style={{ width: "100%" }}
                        onClick={(e) => { e.stopPropagation(); router.push(`/properties/${property.id}`); }}
                      >
                        View Details <ArrowIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🏡</div>
              <h3 className="pls-serif" style={{ fontSize: 32, color: "var(--ink)", marginBottom: 8 }}>No Properties Found</h3>
              <p style={{ color: "var(--ink-muted)", marginBottom: 24 }}>Try adjusting your search or filters.</p>
              <button className="btn-primary" onClick={resetFilters}>Clear Filters</button>
            </div>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 56 }}>
              <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                style={{ opacity: currentPage === 1 ? 0.3 : 1 }}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} className={`page-btn${currentPage === i + 1 ? " active" : ""}`} onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              ))}
              <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                style={{ opacity: currentPage === totalPages ? 0.3 : 1 }}
              >
                ›
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}