import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { Icon: FaInstagram, href: "https://www.instagram.com/tcj.realty/", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/tcjrealty/", label: "LinkedIn" },
    { Icon: FaXTwitter, href: "https://x.com/tcjrealty", label: "X / Twitter" },
    { Icon: FaFacebook, href: "https://www.facebook.com/share/18zPs5EjkZ/", label: "Facebook" },
  ];

  return (
    <footer className="bg-white text-[#1a1a1a] pt-16 md:pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {/* Main Grid — stacks on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16 items-start">

          {/* Column 1: Contact */}
          <div className="space-y-5">
            <h4 className="text-xl md:text-2xl font-medium">Contact Us</h4>
            <div className="text-gray-500 space-y-4 leading-relaxed text-sm md:text-base">
              <p>105, Arya, Jhulelal Chowk,<br />Kalyan (West) — 421301</p>
              <div className="space-y-2">
                <a
                  href="tel:+919307741303"
                  className="block border-b border-dashed border-gray-300 pb-1 w-fit hover:text-black hover:border-black transition-colors"
                >
                  +91 9307741303
                </a>
                <a
                  href="mailto:contact@tcjrealty.in"
                  className="block border-b border-dashed border-gray-300 pb-1 w-fit hover:text-black hover:border-black transition-colors"
                >
                  contact@tcjrealty.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Links + Subscribe */}
          <div className="space-y-10 sm:space-y-24">
            <div>
              <h4 className="text-xl md:text-2xl font-medium mb-5">Quick Links</h4>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-gray-500 text-sm md:text-base">
                {links.map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-black transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Subscribe — full width on mobile */}
            <div className="flex w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="min-w-0 flex-1 border border-gray-300 px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button
                onClick={() => setEmail("")}
                className="bg-[#e31e24] text-white px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 3: Tagline + Socials — left-aligned on mobile, right on desktop */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1 lg:items-end lg:text-right">
            <div className="mb-6 md:mb-8">
              <h2 className="font-heading text-5xl md:text-6xl xl:text-7xl leading-none tracking-tight">
                #liveabove
              </h2>
              <h2 className="font-heading text-6xl md:text-7xl xl:text-8xl leading-none uppercase italic tracking-tighter">
                ordinary
              </h2>
            </div>

            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-gray-200 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <img
            src="/images/tcj-zoomed-no-bg.png"
            alt="TCJ Realty"
            className="h-10 md:h-14 w-auto grayscale contrast-125"
            loading="lazy"
            width="120"
            height="56"
          />
          <p className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-widest">
            TCJ Realty LLP © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}