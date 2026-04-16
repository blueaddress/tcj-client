export default function ContactForm() {
  return (
    <form 
      action="https://formspree.io/f/xvzdzjla" 
      method="POST" 
      className="space-y-8"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-2xl text-primary-bg mb-2">Send a Message</h3>
        <p className="font-body text-xs text-slate-400">Our concierge team will respond within 24 hours.</p>
      </div>

      <div className="space-y-6">
        {/* Added specific 'name' attributes for Formspree mapping */}
        <InputField 
          label="Full Name" 
          name="full_name" 
          type="text" 
          placeholder="e.g. Rahul Sharma" 
          required 
        />
        <InputField 
          label="Phone Number" 
          name="phone" 
          type="tel" 
          placeholder="+91 00000 00000" 
          required 
        />
        <InputField 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="rahul@example.com" 
          required 
        />
        
        <div className="flex flex-col gap-2">
          <label className="font-body text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Message</label>
          <textarea 
            name="message"
            rows="4" 
            required
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm resize-none transition-colors"
            placeholder="How can we assist you today?"
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