export default function PartnerForm() {
  return (
    <form 
      action="https://formspree.io/f/xwvyjabe" 
      method="POST" 
      className="space-y-8"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-2xl text-primary-bg mb-2">Redevelopment Enquiry</h3>
        <p className="font-body text-xs text-slate-400">Partner with us to transform your society. We will respond within 24 hours.</p>
      </div>

      <div className="space-y-6">
        
        <InputField 
          label="Chairperson/Liasion Personnel Name" 
          name="personnel_name" 
          type="text" 
          placeholder="e.g. Rahul Sharma" 
          required 
        />
        
        <InputField 
          label="Co-op Housing Society Name" 
          name="society_name" 
          type="text" 
          placeholder="e.g. Sunrise CHS Ltd." 
          required 
        />
        
        <InputField 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="rahul@example.com" 
          required 
        />

        <InputField 
          label="Mobile Number" 
          name="mobile" 
          type="tel" 
          placeholder="+91 00000 00000" 
          required 
        />

        <InputField 
          label="Location" 
          name="location" 
          type="text" 
          placeholder="e.g. Bandra West, Mumbai" 
          required 
        />
        
        <div className="flex flex-col gap-2">
          <label className="font-body text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Message (Optional)</label>
          <textarea 
            name="message"
            rows="4" 
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm resize-none transition-colors"
            placeholder="Tell us about your property and requirements..."
          ></textarea>
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-primary-bg text-white py-4 font-body text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-accent transition-all duration-300 cursor-pointer"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-body text-[10px] tracking-[0.2em] uppercase font-bold text-accent">{label}</label>
      <input 
        {...props}
        className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm transition-colors"
      />
    </div>
  );
}