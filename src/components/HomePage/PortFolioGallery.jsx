import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

// Add to your entry file (main.jsx / index.js):
// import 'swiper/css';
// import 'swiper/css/pagination';

const FALLBACK = "/images/tcj-banner-placeholder.png";

const developments = [
  { id: "kings-court", year: "2018", title: "King's Court", location: "Kalyan West", status: "Completed", image: "/images/projects/kings-court.jpg", slug: "kings-court" },
  { id: "tcj-arya",    year: "2026", title: "Arya",         location: "Kalyan West", status: "Ongoing",   image: "/images/projects/arya.jpg",        slug: "tcj-arya" },
  { id: "tcj-ira",     year: "2026", title: "Ira",          location: "Kalyan West", status: "Ongoing",   image: "/images/projects/ira.jpg",         slug: "tcj-ira" },
  { id: "tcj-vivanta", year: "2026", title: "Vivanta",      location: "Ambernath West", status: "Ongoing",   image: "/images/projects/vivanta.jpg",     slug: "tcj-vivanta" },
];

function ProjectImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover object-center"
      onError={() => setImgSrc(FALLBACK)}
      loading="lazy"
      decoding="async"
    />
  );
}

/* ─── Single panel — shared by both mobile (Swiper slide) and desktop (accordion) ── */
function Panel({ project, isActive, onEnter, onLeave, alwaysExpanded }) {
  const expanded = alwaysExpanded || isActive;

  return (
    <a
      href={`/projects/${project.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      // On desktop: flex width animates. On mobile (alwaysExpanded): full height fixed panel.
      style={!alwaysExpanded ? {
        flex: expanded ? '1.5 1 0%' : '1 1 0%',
        minWidth: expanded ? '250px' : '80px',
      } : undefined}
      className={[
        'relative flex flex-col no-underline overflow-hidden bg-white',
        !alwaysExpanded && 'border-r border-gray-200 last:border-r-0 transition-[flex,min-width] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer',
        alwaysExpanded && 'h-full',
      ].filter(Boolean).join(' ')}
    >
      {/* Vertical year */}
      <div className="pt-8 flex justify-center shrink-0">
        <span
          className={`font-heading text-5xl select-none transition-colors duration-300 ${
            expanded ? 'text-black' : 'text-gray-300'
          }`}
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        >
          {project.year}
        </span>
      </div>

      {/* Image — always visible on mobile, fades in on desktop hover */}
<div
  className={[
    'mx-3 my-3 flex justify-center overflow-hidden',
    !alwaysExpanded && 'transition-opacity duration-500',
    !alwaysExpanded && (expanded ? 'opacity-100' : 'opacity-0'),
  ].filter(Boolean).join(' ')}
>
  <div className="h-85 w-fit overflow-hidden bg-gray-100 shrink-0">
    <ProjectImage
      src={project.image}
      alt={`${project.title}, ${project.location}`}
    />
  </div>
</div>

      {/* Bottom text */}
      <div className="px-4 pb-5 shrink-0">
        <p className={`font-body text-[10px] tracking-[0.25em] uppercase font-bold mb-1 transition-colors duration-300 ${
          expanded ? 'text-accent' : 'text-gray-300'
        }`}>
          {project.location}
        </p>
        <h3 className={`font-body text-base font-medium leading-tight transition-colors duration-300 ${
          expanded ? 'text-black' : 'text-gray-400'
        }`}>
          {project.title}
        </h3>

        {/* Status badge */}
        <div className={`overflow-hidden transition-all duration-500 ${
          expanded ? 'max-h-10 mt-2 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <span className="inline-block bg-white border border-gray-200 text-gray-600 text-[9px] tracking-widest uppercase font-bold px-2.5 py-1">
            {project.status}
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`h-0.5 bg-accent transition-all duration-700 ${expanded ? 'w-full' : 'w-0'}`} />
    </a>
  );
}

export default function PortfolioGallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24">

      {/* Header */}
      <div className="text-center mb-12 md:mb-20 px-4">
        <h1 className="font-heading text-5xl sm:text-6xl uppercase tracking-wide text-black">
          Portfolio
        </h1>
      </div>

      {/* ── Mobile: Swiper (< md) ────────────────────────────────────────────
          overflow-hidden on the wrapper clips slides to viewport width.
          The Swiper itself does NOT get overflow-visible so nothing bleeds.   */}
      <div className="md:hidden overflow-hidden px-4">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={1}           /* panels share a 1px border illusion     */
          slidesPerView={1.35}       /* peek next slide without overflow        */
          slidesOffsetAfter={16}
          pagination={{ clickable: true, el: '.portfolio-pagination' }}
          breakpoints={{
            480: { slidesPerView: 1.8 },
            600: { slidesPerView: 2.2 },
          }}
          style={{ height: '480px' }}
        >
          {developments.map((project) => (
            <SwiperSlide
              key={project.id}
              className="border-r border-gray-200 last:border-r-0 bg-white"
            >
              <Panel project={project} alwaysExpanded />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pill pagination */}
        <div className="
          portfolio-pagination mt-6
          [&_.swiper-pagination-bullet]:inline-block
          [&_.swiper-pagination-bullet]:h-1
          [&_.swiper-pagination-bullet]:w-5
          [&_.swiper-pagination-bullet]:rounded-none
          [&_.swiper-pagination-bullet]:bg-gray-200
          [&_.swiper-pagination-bullet]:opacity-100
          [&_.swiper-pagination-bullet]:transition-all
          [&_.swiper-pagination-bullet]:duration-300
          [&_.swiper-pagination-bullet-active]:w-10
          [&_.swiper-pagination-bullet-active]:bg-black
        " />
      </div>

      {/* ── Desktop: Accordion (md+) ─────────────────────────────────────── */}
      <div className="hidden md:flex h-150 w-full border border-gray-200 overflow-hidden">
        {developments.map((project) => (
          <Panel
            key={project.id}
            project={project}
            isActive={hoveredId === project.id}
            onEnter={() => setHoveredId(project.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

    </section>
  );
}