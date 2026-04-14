import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function EnquireNow() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-sm">
          
          {/* Left Side: Visual/Branding Block */}
          <div className="lg:w-1/2 bg-primary-bg p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-body text-accent text-xs tracking-[0.3em] font-bold uppercase mb-6">
                Connect With Us
              </h4>
              <h2 className="font-heading text-white text-4xl md:text-5xl leading-tight mb-8">
                Take the First Step Toward Your <span className="italic font-normal text-accent">New Legacy.</span>
              </h2>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Schedule a private viewing or request a detailed brochure of our current off-market developments.
              </p>
            </div>
            
            {/* Architectural Accent - Logo watermark */}
            <div className="absolute -bottom-10 -left-10 opacity-5 w-64 h-64 border-4 border-white rounded-full"></div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-1/3 bg-white p-10 lg:p-16">
            <form action="https://formspree.io/f/your-id" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="+91 00000 00000"
                  className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                />
              </div>

              {/* Project Selection */}
              <div className="space-y-2 md:col-span-2">
                <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">Interested In</label>
                <select 
                  name="project"
                  className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Alpha">Project Alpha</option>
                  <option value="Project Beta">Project Beta</option>
                  <option value="Project Gamma">Project Gamma</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows="3"
                  placeholder="Tell us about your requirements..."
                  className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit"
                  className="group relative flex items-center justify-center w-full md:w-auto px-12 py-4 bg-primary-bg text-white font-body text-xs tracking-[0.3em] font-bold uppercase transition-all hover:bg-accent overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}