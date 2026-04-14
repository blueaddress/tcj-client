export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-1">
        <h3 className="font-heading text-2xl text-primary-bg mb-2">Send a Message</h3>
        <p className="font-body text-xs text-slate-400">Our concierge team will respond within 24 hours.</p>
      </div>

      <div className="space-y-6">
        <InputField label="Full Name" type="text" placeholder="e.g. Rahul Sharma" />
        <InputField label="Phone Number" type="tel" placeholder="+91 00000 00000" />
        <InputField label="Email Address" type="email" placeholder="rahul@example.com" />
        
        <div className="flex flex-col gap-2">
          <label className="font-body text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Message</label>
          <textarea 
            rows="4" 
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm resize-none"
            placeholder="How can we assist you today?"
          ></textarea>
        </div>
      </div>

      <button className="w-full bg-primary-bg text-white py-4 font-body text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-accent transition-all duration-300">
        Submit Inquiry
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