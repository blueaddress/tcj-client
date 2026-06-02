export default function CareerForm() {
  return (
    <form 
      action="https://formspree.io/f/xkoyadoj" 
      method="POST" 
      encType="multipart/form-data"
      className="space-y-8"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-2xl text-primary-bg mb-2">Build your Career at TCJ Realty</h3>
        <p className="font-body text-xs text-slate-400">Send us your resume. We will respond within 24 hours.</p>
      </div>

      <div className="space-y-6">
        
        <InputField 
          label="Full Name" 
          name="full_name" 
          type="text" 
          placeholder="e.g. Rahul Sharma" 
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
          label="Phone Number" 
          name="phone" 
          type="tel" 
          placeholder="+91 00000 00000" 
          required 
        />

        <InputField 
          label="Experience (In Years)" 
          name="experience" 
          type="number" 
          min="0"
          placeholder="e.g. 5" 
          required 
        />

        {/* Dropdown for Position */}
        <div className="flex flex-col gap-2">
          <label className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Position Applying For</label>
          <select 
            name="position" 
            required
            defaultValue=""
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm transition-colors text-slate-700"
          >
            <option value="" disabled>Select a department...</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Engineering & Construction">Engineering & Construction</option>
            <option value="Architecture & Design">Architecture & Design</option>
            <option value="Finance & Operations">Finance & Operations</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* File Upload for Resume */}
        <div className="flex flex-col gap-2">
          <label className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Upload Resume (PDF, DOCX)</label>
          <input 
            type="file" 
            name="resume" 
            accept=".pdf,.doc,.docx"
            required
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-gray-100 file:text-primary-bg hover:file:bg-gray-200 cursor-pointer"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-heading
            text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Message (Optional)</label>
          <textarea 
            name="message"
            rows="4" 
            className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm resize-none transition-colors"
            placeholder="Tell us why you'd be a great fit for this role..."
          ></textarea>
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-primary-bg text-white py-4 font-body text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-accent transition-all duration-300 cursor-pointer"
      >
        Submit Application
      </button>
    </form>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading text-[10px] tracking-[0.2em] uppercase font-bold text-accent">{label}</label>
      <input 
        {...props}
        className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-accent bg-transparent font-body text-sm transition-colors"
      />
    </div>
  );
}