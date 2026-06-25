import { useState } from 'react';
import Banner from '../Shared/Banner.jsx';
import ProjectCard from "../Shared/ProjectCard.jsx";
import Footer from '../Shared/Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';

import arya from '../../assets/images/projects/arya.webp';
import ira from '../../assets/images/projects/ira.webp';
import vivanta from '../../assets/images/projects/vivanta.webp';
import kingscourt from '../../assets/images/projects/kings-court.webp';

const projectsData = [
  { id: 1, title: "Ira",          location: "Ambernath", status: "Ongoing",   image: ira.src ,         slug: "tcj-ira" },
  { id: 2, title: "Arya",         location: "Ambernath", status: "Ongoing",   image: arya.src ,        slug: "tcj-arya" },
  { id: 3, title: "Vivanta",      location: "Ambernath", status: "Ongoing",   image: vivanta.src ,     slug: "tcj-vivanta" },
  { id: 4, title: "King's Court", location: "Ambernath", status: "Completed", image: kingscourt.src , slug: "kings-court" },
];

export default function ProjectPage() {
  const [filter, setFilter] = useState('Ongoing');
  const filteredProjects = projectsData.filter(p => p.status === filter);
  const PLACEHOLDER = "/images/tcj-banner-placeholder.png";

  return (
    <main className="bg-secondary-bg min-h-screen">
      <Banner title="Projects" image={PLACEHOLDER}/>

      {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
      <section className="py-12 flex justify-center border-b border-slate-200 bg-white">
        <div className="flex gap-12">
          {['Ongoing', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`relative font-body text-xs tracking-[0.3em] font-bold uppercase pb-4 transition-colors
                ${filter === tab ? "text-primary-bg" : "text-slate-400 hover:text-primary-bg"}`}
            >
              {tab} Projects
              {filter === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                {/* index passed so ProjectCard can stagger its own entrance */}
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}