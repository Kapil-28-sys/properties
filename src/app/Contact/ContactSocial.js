export function ContactSocial() {
  return (
    <section className="w-full bg-[#f7f4ee] py-16">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="font-heading text-3xl md:text-4xl font-semibold">
          Follow Us on <span className="text-[#b08d57]">Social Media</span>
        </h3>

        <p className="font-body text-gray-600 mt-2 text-sm">
          Stay connected for updates, offers, and announcements.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-6 mt-8">

          {/* Google / Website */}
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#b08d57] hover:shadow-md transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21.35 11.1h-9.18v2.98h5.28c-.23 1.28-1.52 3.76-5.28 3.76-3.18 0-5.78-2.63-5.78-5.86s2.6-5.86 5.78-5.86c1.81 0 3.03.77 3.73 1.43l2.54-2.46C17.25 4.6 15.04 3.6 12.17 3.6 6.98 3.6 2.8 7.7 2.8 12.98S6.98 22.4 12.17 22.4c5.37 0 8.92-3.77 8.92-9.1 0-.61-.07-1.08-.17-1.7z"
                fill="#b08d57"/>
            </svg>
          </a>

          {/* Instagram (Apple style camera icon) */}
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#b08d57] hover:shadow-md transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="#b08d57" strokeWidth="1.8"/>
              <circle cx="12" cy="12" r="4" stroke="#b08d57" strokeWidth="1.8"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#b08d57"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#b08d57] hover:shadow-md transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1-1.5-1.6-4-.8-4.6 1.4-.1.4-.1.8 0 1.2-3.2-.2-6-1.7-7.9-4.1-1.1 1.9-.6 4.3 1.3 5.5-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.4 4.1-.5.1-1 .2-1.5.1.4 1.6 1.9 2.7 3.6 2.8-1.4 1.1-3.1 1.8-4.9 1.8H3c1.8 1.2 4 1.8 6.2 1.8 7.5 0 11.6-6.3 11.3-11.9.8-.5 1.4-1.2 1.5-2z"
                fill="#b08d57"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#b08d57] hover:shadow-md transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 9.5V20h3V9.5h-3zM8 4.5C6.9 4.5 6 5.4 6 6.5S6.9 8.5 8 8.5 10 7.6 10 6.5 9.1 4.5 8 4.5zM13 9.5V20h3v-5.5c0-1.5.6-2.5 2-2.5s1.8 1 1.8 2.5V20h3v-6.5c0-3-1.5-4.5-4-4.5-1.6 0-2.8.8-3.5 2V9.5h-2.3z"
                fill="#b08d57"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}