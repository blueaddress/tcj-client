// src/components/Projects/ProjectDetails/EnquiryPopup.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

export default function EnquiryPopup({ projectName = "General Inquiry" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // small delay so it doesn't feel like it's blocking initial page render
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-sm shadow-2xl overflow-hidden max-h-[90vh] overflow-noneg">
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-sm transition-colors"
              >
                <X size={16} className="text-primary-bg" />
              </button>

              {/* Header block */}
              <div className="bg-primary-bg px-8 py-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-body text-accent text-xs tracking-[0.3em] font-bold uppercase mb-3">
                    Exclusive Enquiry
                  </h4>
                  <h2 className="font-heading text-white text-2xl leading-tight">
                    Interested in <span className="italic font-normal text-accent">{projectName}</span>?
                  </h2>
                  <p className="font-body text-white/60 text-xs leading-relaxed mt-3">
                    Leave your details and our team will get back to you shortly.
                  </p>
                </div>
                <div className="absolute -bottom-10 -left-10 opacity-5 w-48 h-48 border-4 border-white rounded-full"></div>
              </div>

              {/* Form */}
              <form
                action="https://formspree.io/f/xojyjoyq"
                method="POST"
                className="p-8 space-y-6"
              >
                <div className="space-y-2">
                  <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 000000 XXXXX"
                    className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[10px] tracking-widest uppercase font-bold text-primary-bg/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border-b border-slate-200 py-3 font-body text-primary-bg focus:outline-none focus:border-accent transition-colors bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-[10px] tracking-widest uppercase font-bold text-accent">
                    Subject of Inquiry
                  </label>
                  <input
                    type="text"
                    name="interested_project"
                    value={projectName}
                    readOnly
                    className="w-full border-b border-slate-100 py-3 font-body text-slate-400 bg-transparent cursor-not-allowed italic"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex items-center justify-center w-full px-8 py-4 bg-primary-bg text-white font-body text-xs tracking-[0.3em] font-bold uppercase transition-all hover:bg-accent overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Inquiry
                    <Send
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}