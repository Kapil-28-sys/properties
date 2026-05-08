export function ContactMap() {
  return (
    <section className="w-full bg-[#f7f4ee] py-16">

      {/* ================= WRAPPER ================= */}
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <div className="mb-6">
          <h3 className="font-heading text-3xl md:text-4xl font-semibold">
            Find Us on <span className="text-[#b08d57]">Google Maps</span>
          </h3>
          <p className="font-body text-gray-600 mt-2 text-sm">
            Visit our location for meetings and collaborations.
          </p>
        </div>

        {/* ================= MAP BOX ================= */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4807349640394!2d75.86498607542314!3d26.912433976664734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b2d6c8f2e7%3A0x2a7c1a3c7c9c9f0!2sRajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>

        </div>

      </div>
    </section>
  );
}