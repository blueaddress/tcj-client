import { FaXTwitter, FaInstagram, FaLinkedinIn , FaFacebook} from "react-icons/fa6";
import { Mail } from 'lucide-react';
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-white text-[#1a1a1a] pt-20 pb-10 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16 items-start">
          
          {/* Column 1: Contact Us */}
          <div className="space-y-6">
            <h4 className="text-2xl font-medium">Contact Us</h4>
            <div className="text-gray-500 space-y-4 leading-relaxed">
              <p className="max-w-70">
                105, Arya, Jhulelal Chowk,<br />
                Kalyan (West) — 421301
              </p>
              <div className="space-y-1">
                <p className="border-b border-dashed border-gray-300 inline-block pb-1">
                  +91 9307741303
                </p>
                <br />
                <p className="border-b border-dashed border-gray-300 inline-block pb-1">
                  contact@tcjrealty.in
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Subscription */}
          <div className="space-y-28">
            <div>
              <h4 className="text-2xl font-medium mb-6">Quick Links</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-500">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <a key={link} href="#" className="hover:text-black transition-colors">{link}</a>
                ))}
              </div>
            </div>

            {/* Subscription Box */}
            <div className="flex w-full max-w-md">
              <input 
                type="email" 
                placeholder="Email"
                className="grow border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-[#e31e24] text-white px-6 py-3 flex items-center gap-2 font-bold uppercase tracking-wider hover:bg-black transition-colors">
                <Mail size={18} />
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Column 3: Tagline & Socials */}
          <div className="flex flex-col items-end text-right">
            <div className="mb-8">
              <h2 className="text-6xl xl:text-7xl font-serif leading-none tracking-tight">
                #liveabove
              </h2>
              <h2 className="text-7xl xl:text-8xl font-serif leading-none uppercase italic tracking-tighter">
                ordinary
              </h2>
            </div>
            
            <div className="flex gap-4">
              {[
                { Icon: FaInstagram, href: "https://www.instagram.com/tcj.realty/" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/tcjrealty/" },
                { Icon: FaXTwitter, href: "https://x.com/tcjrealty" },
                { Icon: FaFacebook, href: "https://www.facebook.com/share/18zPs5EjkZ/?mibextid=wwXIfr" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <img 
            src="/images/tcj-zoomed-no-bg.png" 
            alt="TCJ Realty" 
            className="h-14 w-auto grayscale contrast-125" 
          />
          <p className="text-sm text-gray-600 font-medium uppercase tracking-widest">
            TCJ REALTY LLP © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}