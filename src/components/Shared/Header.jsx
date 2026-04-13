import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "home", path: "#overview" },
    { label: "about us", path: "#projects" },
    { label: "projects", path: "#amenities" },
    { label: "KNOWLEDGE center", path: "#knowledge" },
    { label: "PARTNER", path: "#partner" },
  ];

  const drawer = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{ zIndex: 9999 }}
          className="fixed inset-0 bg-primary-bg p-10 flex flex-col"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-white cursor-pointer"
          >
            <X size={32} />
          </button>
          <nav className="mt-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl tracking-widest font-heading border-b border-white/10 pb-4 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed font-body top-0 left-0 w-full z-50 transition-all duration-500 flex items-center
          ${scrolled
            ? "h-22 bg-white/90 backdrop-blur-md shadow-md"
            : "h-25 bg-white/10 backdrop-blur-sm border-b border-white/10"
          }`}
      >
        <div className="w-full max-w-360 mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo — no invert, always visible */}
          <div className="shrink-0">
            <a href="/" className="block h-10 lg:h-12.5">
              <img
                src="/images/tcj-zoomed-no-bg.png"
                alt="TCJ Realty"
                className="h-full w-auto transition-all duration-300"
              />
            </a>
          </div>

          {/* Capsule Navigation */}
          <nav className="hidden lg:block">
            <ul
              className={`flex items-center rounded-full border transition-all duration-300
                ${scrolled
                  ? "border-primary-bg bg-white/70 backdrop-blur-md shadow-sm"
                  : "border-accent bg-white/10 backdrop-blur-md"
                }`}
            >
              {navLinks.map((link, index) => (
                <li key={link.label} className="relative flex items-center uppercase font-body group">
                  <a
                    href={link.path}
                    className={`relative px-8 py-5 text-[10px] tracking-[0.2em] font-bold transition-all duration-300 hover:text-accent
                      ${scrolled ? "text-primary-bg" : "text-primary-bg"}`}
                  >
                    {/* Animated gold underline on hover */}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
                    {link.label}
                  </a>
                  {index !== navLinks.length - 1 && (
                    <div className={`h-14 w-px ${scrolled ? "bg-primary-bg" : "bg-accent"}`} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden uppercase lg:block px-6 py-2 text-[10px] tracking-widest font-bold border rounded-full transition-all duration-300
                ${scrolled
                  ? "border-primary-bg text-primary-bg hover:bg-primary-bg hover:text-white"
                  : "border-primary-bg/60 text-primary-bg hover:bg-primary-bg hover:text-white"
                }`}
            >
              contact us
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden cursor-pointer p-2 transition-colors duration-300
                ${scrolled ? "text-primary-bg" : "text-primary-bg"}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}