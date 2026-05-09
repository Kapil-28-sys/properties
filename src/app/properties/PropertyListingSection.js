"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { allProperties } from "@/app/properties/propertiesData";

export default function PropertyListingSection() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState("latest");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filtered = useMemo(() => {
    let list = [...allProperties];
    if (search) list = list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    if (propertyType) list = list.filter((p) => p.type === propertyType);
    if (location) list = list.filter((p) => p.location === location);
    if (budget === "10-25") list = list.filter((p) => p.price >= 1000000 && p.price <= 2500000);
    if (budget === "25-50") list = list.filter((p) => p.price >= 2500000 && p.price <= 5000000);
    if (budget === "50+") list = list.filter((p) => p.price >= 5000000);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    return list;
  }, [search, propertyType, location, budget, sort]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap");
        .font-heading { font-family: "Cormorant Garamond", serif; }
        .font-body { font-family: "Jost", sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
      `}</style>

      <section className="bg-[#f8f5ef] py-20 px-4 md:px-8 lg:px-16 font-body">
        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="uppercase tracking-[4px] text-sm text-black mb-3 fade-up">Featured Properties</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-heading fade-up">
                Find Your Perfect Home
              </h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap fade-up">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-12 px-5 rounded-full border border-[#d8d8d8] bg-white text-black text-sm outline-none">
                <option value="latest">Sort by Latest</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>
              <div className="flex items-center bg-white border border-[#ddd] rounded-full p-1">
                {["grid", "list"].map((v) => (
                  <button key={v} onClick={() => setView(v)} className={`px-5 h-10 rounded-full text-sm transition-all duration-300 capitalize ${view === v ? "bg-black text-white" : "text-black"}`}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="bg-white border border-[#ece6dc] rounded-[30px] p-6 md:p-8 shadow-lg mb-16 fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              <input type="text" placeholder="Search Property" value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} className="h-14 rounded-2xl border border-[#ddd] px-5 outline-none text-black placeholder:text-black" />
              <select value={propertyType} onChange={(e) => { setPropertyType(e.target.value); setCurrentPage(1); }} className="h-14 rounded-2xl border border-[#ddd] px-5 outline-none bg-white text-black">
                <option value="">Property Type</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Penthouse">Penthouse</option>
              </select>
              <select value={location} onChange={(e) => { setLocation(e.target.value); setCurrentPage(1); }} className="h-14 rounded-2xl border border-[#ddd] px-5 outline-none bg-white text-black">
                <option value="">Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Goa">Goa</option>
                <option value="Pune">Pune</option>
              </select>
              <select value={budget} onChange={(e) => { setBudget(e.target.value); setCurrentPage(1); }} className="h-14 rounded-2xl border border-[#ddd] px-5 outline-none bg-white text-black">
                <option value="">Budget</option>
                <option value="10-25">₹10L - ₹25L</option>
                <option value="25-50">₹25L - ₹50L</option>
                <option value="50+">₹50L+</option>
              </select>
              <button onClick={() => { setSearch(""); setPropertyType(""); setLocation(""); setBudget(""); setSort("latest"); setCurrentPage(1); }} className="h-14 rounded-2xl bg-black text-white font-medium hover:bg-[#2a2a2a] transition-all duration-300">
                Reset Filters
              </button>
            </div>
          </div>

          {/* CARDS */}
          <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-8"}>
            {paginated.map((property) => (
              <div key={property.id} className={`group bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 fade-up ${view === "list" ? "flex flex-col md:flex-row" : ""}`}>
                <div className={`overflow-hidden ${view === "list" ? "md:w-[350px] h-[300px]" : "h-[260px]"}`}>
                  <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-[2px] bg-[#f3eee5] text-black px-4 py-2 rounded-full">{property.type}</span>
                      <span className="text-lg font-semibold text-black">₹{property.price.toLocaleString()}</span>
                    </div>
                    <h3 className="text-3xl text-black mb-2 font-heading">{property.title}</h3>
                    <p className="text-black text-sm mb-6">{property.location}, India</p>
                  </div>
                  {/* ← this is the only change: router.push to the detail page */}
                  <button
                    onClick={() => router.push(`/properties/${property.id}`)}
                    className="w-full md:w-[220px] h-12 rounded-2xl border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-3xl font-heading text-black mb-3">No Properties Found</h3>
              <p className="text-black">Try changing your search or filters.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16 flex-wrap">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-12 h-12 rounded-full border transition-all duration-300 ${currentPage === i + 1 ? "bg-black text-white border-black" : "bg-white text-black border-[#ddd]"}`}>
                  {i + 1}
                </button>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}