export default function WhatsAppButton({
  phone = "+919307741303",
  projectName, 
  projectUrl
}) {
  const baseMessage  = projectName
    ? `Hi, I'd like to know more about ${projectName}.`
    : `Hi, I'd like to know more about your properties.`;

   const message = projectUrl ? `${projectUrl} ${baseMessage}` : baseMessage;

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.72.45 3.4 1.3 4.88L2 22l5.34-1.4a9.87 9.87 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.15c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.11.11-1.79-.11a16.5 16.5 0 0 1-1.6-.6c-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.37c.26-.29.56-.36.75-.36l.54.01c.17.01.4-.06.63.48.24.55.8 1.9.87 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.7 1.17 1.51 1.9 1.04.93 1.92 1.22 2.2 1.36.28.14.44.12.6-.07.16-.19.68-.8.87-1.07.19-.28.37-.23.63-.14.26.09 1.62.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z"/>
      </svg>
    </a>
  );
}