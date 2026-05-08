import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-bg text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <img 
              src="/images/tcj-zoomed-no-bg.png" 
              alt="TCJ Realty" 
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Redefining Mumbai's skyline with exclusive off-market gems and luxury developments curated for the discerning few.
            </p>
            <div className="flex gap-4">
              {/* {[Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-white/10 rounded-full hover:bg-accent hover:border-accent transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))} */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-accent mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about-us" className="hover:text-accent transition-colors">About TCJ Realty</a></li>
              <li><a href="/projects" className="hover:text-accent transition-colors">Current Projects</a></li>
              {/* <li><a href="#knowledge-center" className="hover:text-accent transition-colors">Knowledge Corner</a></li>
              <li><a href="#partner" className="hover:text-accent transition-colors">Partner With Us</a></li> */}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-heading text-xl text-accent mb-6">Connect</h4>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>105, Arya, Jhulelal Chowk, Kalyan (West) - 421301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 9307741303</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>contact@tcjrealty.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="font-heading text-xl text-accent mb-6">Stay Updated</h4>
            <p className="font-body text-xs text-white/50 mb-4 tracking-wider uppercase">Subscribe for exclusive listings</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="mt-4 w-full bg-accent text-primary-bg font-bold py-3 text-xs tracking-widest uppercase hover:bg-white transition-colors duration-300">
                Join Now
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <p className="text-[10px] text-white/40 leading-relaxed font-body">
                Disclaimer: The content on this website is for informational purposes only and does not constitute a legal offering. 
                Images are for representational purposes. RERA numbers are available upon request.
              </p>
              <p className="text-xs text-white/60 font-body">
                &copy; {currentYear} TCJ Realty. All Rights Reserved.
              </p>
            </div>
            <div className="flex lg:justify-end gap-6 text-[10px] tracking-widest uppercase font-bold text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">RERA Info</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}