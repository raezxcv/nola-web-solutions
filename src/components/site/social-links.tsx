import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO } from "../../lib/site-data";

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.188 8.188 0 01-5.83 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.185 8.185 0 01-1.25-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Social icon buttons row with hero-style hover effects */
export function SocialIconsRow({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const btnClass = dark
    ? "h-10 w-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-ink active:scale-95 shadow-sm"
    : "h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95 shadow-sm";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <a
        href={CONTACT_INFO.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={btnClass}
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={btnClass}
      >
        <WhatsAppIcon className="h-4 w-4" />
      </a>
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        aria-label="Email NOLA Web Solutions"
        className={btnClass}
      >
        <Mail className="h-4 w-4" />
      </a>
      <a
        href={`tel:${CONTACT_INFO.phonePHTel}`}
        aria-label="Call Philippines Office"
        className={btnClass}
      >
        <Phone className="h-4 w-4" />
      </a>
    </div>
  );
}
