import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const placeholder = "/images/tcj-banner-placeholder.png";

const slides = [
  {
    id: 1,
    desktop: "/images/hero/banner-1-desktop.png",   // 1920×1080
    wide:    "/images/hero/banner-1-wide.png",       // 1650×637
    tablet:  "/images/hero/banner-1-tablet.png",     // 1024×900
    mobile:  "/images/hero/banner-1-mobile.png",     // 750×844
    alt: "TCJ Realty Luxury Property",
  },
  {
    id: 2,
    desktop: "/images/hero/banner-2-desktop.png",
    wide:    "/images/hero/banner-2-wide.png",
    tablet:  "/images/hero/banner-2-tablet.png",
    mobile:  "/images/hero/banner-2-mobile.png",
    alt: "TCJ Realty Luxury Property",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-navy mt-26">

      <style>{`
        .hero-swiper,
        .hero-swiper .swiper-wrapper,
        .hero-swiper .swiper-slide {
          height: 100% !important;
          width: 100% !important;
        }
      `}</style>

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
          className="hero-swiper h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />

                {/* Responsive image via <picture> */}
                <picture className="absolute inset-0 h-full w-full">
                  <source media="(max-width: 640px)"  srcSet={slide.mobile} />
                  <source media="(max-width: 1024px)" srcSet={slide.tablet} />
                  <source media="(max-width: 1700px)" srcSet={slide.desktop} />
                  <img
                    src={slide.wide}
                    alt={slide.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = placeholder;
                    }}
                  />
                </picture>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 lg:px-10 pointer-events-none">
        <button className="hero-prev pointer-events-auto p-4 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-next pointer-events-auto p-4 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

    </section>
  );
}