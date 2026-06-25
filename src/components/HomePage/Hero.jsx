import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const imageModules = import.meta.glob('../../assets/images/hero/*.webp', { eager: true });
const bannerImg = (path) => imageModules[`../../assets/images/hero/${path}`]?.default?.src;

const placeholder = "/images/tcj-banner-placeholder.png";

const slides = [
  {
    id: 1,
    desktop: bannerImg('banner-1-desktop.webp'),
    wide:    bannerImg('banner-1-wide.webp'),
    tablet:  bannerImg('banner-1-tablet.webp'),
    alt: "TCJ Realty Luxury Property",
  },
  {
    id: 2,
    desktop: bannerImg('banner-2-desktop.webp'),
    wide:    bannerImg('banner-2-wide.webp'),
    tablet:  bannerImg('banner-2-tablet.webp'),
    alt: "TCJ Realty Luxury Property",
  },
];

const MOBILE_VIDEO     = "/images/hero/output-compressed.webm";
const MOBILE_POSTER    = "/images/hero/banner-1-mobile.png";

function MobileHero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  return (
    <section className="relative w-full mt-26 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"        
        poster={MOBILE_POSTER}
        className="w-full h-auto block"
      >
        <source src="/images/hero/output-compressed.webm" type="video/webm" />
        <source src="/images/hero/banner-1-mobile-compressed.mp4"  type="video/mp4" />
      </video>

      {/* Pause / Play */}
      <button
        onClick={toggle}
        className="absolute bottom-4 right-4 z-20 p-2 rounded-full border border-white/20 text-white backdrop-blur-sm"
        aria-label={playing ? 'Pause video' : 'Play video'}
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </section>
  );
}

function DesktopHero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy">
      <style>{`
        .hero-swiper,
        .hero-swiper .swiper-wrapper,
        .hero-swiper .swiper-slide {
          height: 100% !important;
          width: 100% !important;
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        loop={true}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <picture className="block w-full">
                <source media="(max-width: 1024px)" srcSet={slide.tablet} />
                <source media="(max-width: 1700px)" srcSet={slide.desktop} />
                <img
                  src={slide.wide}
                  alt={slide.alt}
                  className="w-full h-auto block"
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

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 lg:px-10 pointer-events-none">
        <button className="hero-prev pointer-events-auto p-2 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-next pointer-events-auto p-2 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-brand-navy transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default function Hero() {

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  return isMobile ? <MobileHero /> : <DesktopHero />;
}