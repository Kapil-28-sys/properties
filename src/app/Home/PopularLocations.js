"use client";
import { useState } from "react";

/* -------------------- RAJASTHAN DISTRICTS -------------------- */
const rajasthanLocations = [
    {
        name: "Ajmer",
        image: "https://www.rajasthantourpackages.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2F2edd1481-8338-419b-a9ea-06354e9b2300-ana-sagar-lake-ajmer-tour.jpg&w=3840&q=75",
        properties: 420,
        featured: false,
    },
    {
        name: "Alwar",
        image: "https://www.revv.co.in/blogs/wp-content/uploads/2020/05/road-trip-delhi-to-alwar.jpg",
        properties: 380,
        featured: false,
    },
    {
        name: "Bharatpur",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Purana_mehal.jpg",
        properties: 290,
        featured: false,
    },
    {
        name: "Bikaner",
        image: "https://static.tripclap.com/uploads/story/850X450/1667751632-1667751632-9801e.webp",
        properties: 510,
        featured: false,
    },
    {
        name: "Chittorgarh",
        image: "https://magikindia.com/wp-content/uploads/2018/08/chittorgarh-fort-1024x683.jpg",
        properties: 260,
        featured: false,
    },
    {
        name: "Jaipur",
        image: "https://www.agoda.com/wp-content/uploads/2024/05/Nahargarh-Fort-jaipur-india-1244x700.jpg",
        properties: 1200,
        featured: true,
    },
    {
        name: "Udaipur",
        image: "https://beantowntraveller.com/wp-content/uploads/2020/02/UNADJUSTEDNONRAW_thumb_b808-1024x680.jpg",
        properties: 860,
        featured: true,
    },
    {
        name: "Jaisalmer",
        image: "https://www.thepalaceonwheels.org/storage/jaislamer_fort_night_view_1914%20(1).jpg",
        properties: 640,
        featured: true,
    },
    {
        name: "Jodhpur",
        image: "/districts/jodhpur.png",
        properties: 980,
        featured: true,
    },
    {
        name: "Kota",
        image: "/districts/kota.png",
        properties: 530,
        featured: false,
    },
    {
        name: "Sikar",
        image: "/districts/sikar.png",
        properties: 310,
        featured: false,
    },
    {
        name: "Pali",
        image: "/districts/pali.png",
        properties: 270,
        featured: false,
    },
];

export default function PopularLocations() {
    const [showAll, setShowAll] = useState(false);

    const visible = showAll
        ? rajasthanLocations
        : rajasthanLocations.slice(0, 8);

    return (
        <section className="relative py-28 px-6 bg-gradient-to-b from-[#f7f7fb] via-white to-[#f7f7fb] overflow-hidden">

            {/* 🌄 BACKGROUND MAP */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/038/097/442/non_2x/rajasthan-india-outline-map-vector.jpg"
                    alt="rajasthan-bg"
                    className="absolute top-1/2 left-1/2 
                    w-[1200px] md:w-[1400px] lg:w-[1600px]
                    -translate-x-1/2 -translate-y-1/2 opacity-[1.7] blur-[1px]"
                />
            </div>

            {/* HEADER */}
            <div className="relative text-center mb-16 z-10">
                <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                    Explore Rajasthan
                </h2>
                <p className="text-gray-500 mt-3 text-lg">
                    Discover districts through interactive property insights
                </p>
            </div>

            {/* GRID */}
            <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 z-10">

                {visible.map((item, i) => (
                    <div key={i} className="group cursor-pointer">

                        <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100
                        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                            {/* IMAGE */}
                            <div className="relative h-32 bg-gray-100 overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                                {/* FEATURED */}
                                {item.featured && (
                                    <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full
                                    bg-[#b88a44] text-white font-medium shadow">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="p-5">

                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#b88a44] transition">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    {item.properties} Properties
                                </p>

                                <div className="mt-4 flex items-center justify-between">

                                    <span className="text-xs text-gray-400">
                                        Explore now →
                                    </span>

                                    <div className="w-8 h-8 rounded-full bg-[#f3e6d1] text-[#b88a44]
                                    flex items-center justify-center group-hover:bg-[#b88a44] group-hover:text-white transition">
                                        →
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* BUTTON */}
            <div className="relative text-center mt-16 z-10">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-12 py-3 rounded-full font-semibold text-white
                    bg-gradient-to-r from-[#b88a44] to-[#9f7338]
                    shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition"
                >
                    {showAll ? "Show Less" : "Explore All Districts"}
                </button>
            </div>

        </section>
    );
}