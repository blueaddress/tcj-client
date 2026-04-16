import React from 'react';
import Banner from './Banner';
import EnquireNow from '../../HomePage/EnquireNow'
import Footer from '../../Shared/Footer.jsx';
import { motion } from "framer-motion";
import { MapPin} from "lucide-react";
import Amenities from './Amenities';

export default function ProjectDetailsPage({ project }) {
  if (!project) return null;

  return (
    <main className="bg-white">
      {/* 1. Header Banner */}
      <Banner title={project.projectName} tagline={project.tagline} image={project.image}/>

      {/* 2. Main Content Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Overview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-body text-accent text-xs tracking-[0.3em] font-bold uppercase mb-4">The Property</h4>
                <h2 className="font-heading text-primary-bg text-4xl mb-6">About {project.projectName}</h2>
                <p className="font-body text-slate-600 leading-relaxed text-lg font-light">
                  {project.overview.description}
                </p>
              </motion.div>

              {/* Amenities Grid */}
              {/* {console.log(project.amenities)} */}
              <Amenities amenities={project.amenities} />

              {/* Technical Specifications */}
              <div className="space-y-6">
                <h4 className="font-body text-primary-bg text-xs tracking-[0.3em] font-bold uppercase">Technical Specs</h4>
                <div className="divide-y divide-slate-100 border-t border-slate-100">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="py-4 grid grid-cols-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{key}</span>
                      <span className="col-span-2 text-sm text-slate-600 font-body">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Project Status Card */}
                <div className="bg-primary-bg p-10 text-white rounded-sm">
                  <h3 className="font-heading text-2xl text-accent mb-6">Quick Overview</h3>
                  <div className="space-y-4">
                     <FactItem label="Status" value={project.status} />
                     <FactItem label="RERA ID" value={project.reraNumber} />
                     <FactItem label="Location" value={project.location.neighborhood} />
                  </div>
                </div>

                {/* Location Box */}
                <div className="border border-slate-100 p-8 rounded-sm">
                  <h4 className="font-heading text-xl text-primary-bg mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-accent"/> Landmark
                  </h4>
                  <div className="space-y-3">
                    {project.connectivity.map((item, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="text-[11px] uppercase text-slate-400 font-bold">{item.landmark}</span>
                        <span className="text-xs font-bold text-primary-bg">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* 3. Global Footer Form */}
      <EnquireNow />
      <Footer/>
    </main>
  );
}

// Simple internal helper
function FactItem({ label, value }) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-2">
      <span className="text-[10px] uppercase tracking-widest opacity-50">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}