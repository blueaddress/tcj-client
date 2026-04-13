import { motion } from "framer-motion";
// Importing the image directly for Vite/Astro to process it
import aboutImg from "../../assets/images/about/about.jpg";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 lg:py-32 bg-secondary-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image with Decorative Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative gold border behind the image */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-accent/30 z-0"></div>
            
            <div className="relative z-10 overflow-hidden shadow-2xl rounded-sm">
              <img 
                /* FIX: Using the imported 'aboutImg' variable instead of the string path */
                src={aboutImg.src || aboutImg} 
                alt="Luxury Living at TCJ Realty" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/images/tcj-banner-placeholder.png";
                }}
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h4 className="font-body text-accent text-xs tracking-[0.3em] font-bold uppercase">
                Welcome to TCJ Realty
              </h4>
              <h2 className="font-heading text-primary-bg text-4xl md:text-5xl leading-tight">
                Crafting Spaces Where <br />
                <span className="italic font-normal">Luxury Meets Legacy</span>
              </h2>
            </div>

            <div className="w-20 h-[2px] bg-accent"></div>

            <div className="space-y-4 font-body text-slate-600 leading-relaxed text-lg font-light">
              <p>
                Established in 1996, TCJ Realty is one of the most distinguished and admired real estate developers in Kalyan, Ambernath & Badlapur. The company built some of the first residential complexes in Badlapur in the early 2000s setting a benchmark in the micro-market.
              </p>
              <p>
                With a robust track record of 7 delivered projects with over 1500 Happy families, it has continuously driven to keep the customer as a focal point in the designing, planning and construction of all its projects.
              </p>
            </div>

            <div className="pt-6">
              <a 
                href="#projects" 
                className="inline-block group"
              >
                <span className="font-body text-primary-bg text-xs tracking-widest font-bold uppercase border-b-2 border-accent pb-2 group-hover:text-accent transition-colors">
                  Explore Our Projects &rarr;
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}