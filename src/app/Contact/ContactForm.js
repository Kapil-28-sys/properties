"use client";

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-[#f7f4ee] text-black">

      {/* ================= FONTS ================= */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Jost', sans-serif;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>

      {/* ================= WRAPPER ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

        {/* ================= LEFT SIDE ================= */}
        <div className="fade-up flex flex-col justify-center space-y-6">

          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight">
            Let’s Connect & <span className="text-[#b08d57]">Collaborate</span>
          </h2>

          <p className="font-body text-gray-600 text-base leading-relaxed">
            We’re always open to conversations, ideas, and opportunities.
            Reach out and we’ll respond as soon as possible.
          </p>

          {/* CARD 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <p className="font-body text-xs text-gray-500">Email</p>
            <h3 className="font-heading text-lg text-[#b08d57] mt-1">
              support@yourdomain.com
            </h3>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <p className="font-body text-xs text-gray-500">Phone</p>
            <h3 className="font-heading text-lg text-[#b08d57] mt-1">
              +91 98765 43210
            </h3>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <p className="font-body text-xs text-gray-500">Location</p>
            <h3 className="font-heading text-lg text-[#b08d57] mt-1">
              Rajasthan, India
            </h3>
          </div>

        </div>

        {/* ================= RIGHT SIDE FORM ================= */}
        <div className="fade-up flex flex-col justify-center">

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md w-full h-full">

            <h3 className="font-heading text-2xl mb-6 text-black">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#fafafa] border border-gray-200 rounded-lg px-4 py-3 font-body text-sm outline-none focus:border-[#b08d57] transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#fafafa] border border-gray-200 rounded-lg px-4 py-3 font-body text-sm outline-none focus:border-[#b08d57] transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#fafafa] border border-gray-200 rounded-lg px-4 py-3 font-body text-sm outline-none focus:border-[#b08d57] transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-[#fafafa] border border-gray-200 rounded-lg px-4 py-3 font-body text-sm outline-none focus:border-[#b08d57] transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#b08d57] hover:bg-[#9a784a] transition text-white font-body font-medium py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}