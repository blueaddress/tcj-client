import { motion } from "framer-motion";
// Importing the image directly for Vite/Astro to process it
import aboutImg from "../../assets/images/about/about.webp";

export default function AboutUs() {
  return (
    <section id="about-us" className="relative w-full min-h-[90vh] bg-black text-white py-20 lg:py-32 flex items-center overflow-hidden">
      
      {/* Background Image / Line Art Simulation */}
      {/* Reduced opacity heavily to mimic the dark architectural background from the screenshot */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img 
          src={aboutImg.src || aboutImg} 
          alt="Background Texture" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/tcj-banner-placeholder.png";
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left Side: Large Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-start pt-10"
          >
            <h2 className="font-heading text-6xl md:text-7xl lg:text-[7rem] uppercase leading-[1.1] tracking-tight">
              LIVE{' '}
              {/* Highlight Box mimicking the screenshot */}
              <span className="relative inline-block">
                <span className="relative z-10">ABOVE</span>
                <span className="absolute inset-y-0 -inset-x-4 bg-white/10 z-0"></span>
              </span>
              <br />
              ORDINARY
            </h2>
          </motion.div>

          {/* Right Side: Content Block positioned lower */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-end lg:pt-64"
          >
            <div className="max-w-md font-body ml-auto space-y-6 text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
              <p>
                Established in 1996, TCJ Realty is one of the most distinguished and admired real estate developers in Kalyan, Ambernath & Badlapur.With a robust track record of 7 delivered projects with over 1500 Happy families, it has continuously driven to keep the customer as a focal point in the designing, planning and construction of all its projects.
              </p>
              <p>
                
              </p>
              
              {/* Styled like the David Chipperfield signature in the image */}
              {/* <p className="pt-2 font-body text-white font-normal">
                — TCJ Realty
              </p> */}

              <div className="pt-6">
                <a 
                  href="/projects" 
                  className="inline-block group font-body text-sm tracking-[0.2em] font-bold uppercase text-white hover:text-accent transition-colors"
                >
                  Explore Our Projects &rarr;
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}