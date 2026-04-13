import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {
  const placeholder = "/images/tcj-banner-placeholder.png";
  
  // Try to use your real images, but if they are missing, the onError handles it
  const slides = [
    { id: 1, image: "/images/hero/banner-1.jpg" },
    { id: 2, image: "/images/hero/banner-2.jpg" },
  ];

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-brand-navy mt-18">
    
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-full w-full">
              <div className="relative h-full w-full">
                {/* Dark Overlay for Luxury Feel and Text Contrast */}
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                
                <img
                  src={slide.image}
                  alt="TCJ Realty Luxury Property"
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = placeholder;
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Content Layer - Centered exactly in viewport */}
      {/* <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-6">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-xs sm:text-sm tracking-[0.4em] uppercase font-bold text-white/80 mb-6 block">
            Welcome to TCJ Realty
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl mb-4 leading-tight">
            Unlock <span className="italic font-light">Exclusive</span> Access
          </h1>
          <p className="font-body text-lg sm:text-2xl font-extralight tracking-wide max-w-2xl mx-auto">
            to Mumbai's Hidden Real Estate Gems
          </p>
        </motion.div>
      </div> */}

      {/* 3. Custom Navigation - Placed at the edges */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 lg:px-10 pointer-events-none">
        <button className="hero-prev pointer-events-auto p-4 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-next pointer-events-auto p-4 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 4. Bottom Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">Discover More</p>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="mx-auto text-white/80" />
        </motion.div>
      </div> */}
    </section>
  );
}