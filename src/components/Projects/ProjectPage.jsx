import { useState } from 'react';
import Banner from './Banner.jsx';
import ProjectCard from "../Shared/ProjectCard.jsx";
import Footer from '../Shared/Footer.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  { id: 1, title: "Ira", location: "Ambernath", status: "Ongoing", image: "/images/projects/ira.jpg", slug: "tcj-ira" },
  { id: 2, title: "Arya", location: "Ambernath", status: "Ongoing", image: "/images/projects/arya.jpg", slug: "tcj-arya" },
  { id: 3, title: "Vivanta", location: "Ambernath", status: "Ongoing", image: "/images/projects/vivanta.jpg", slug: "tcj-vivanta" },
  { id: 4, title: "King's Court", location: "Ambernath", status: "Completed", image: "/images/projects/kings-court.jpg", slug: "kings-court" },
];

export default function ProjectPage() {
  const [filter, setFilter] = useState('Ongoing');
  const filteredProjects = projectsData.filter(p => p.status === filter);

  return (
    <main className="bg-secondary-bg min-h-screen">
      <Banner />

      {/* Filter Tabs */}
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

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}