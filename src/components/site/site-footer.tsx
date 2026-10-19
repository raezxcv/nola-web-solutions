import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ASSETS, CONTACT_INFO, NAV_PACKAGES } from "../../lib/site-data";
import { SocialIconsRow } from "./social-links";

const FOOTER_COMPANY = [
  { label: "Home", to: "/" },
  { label: "Our Works", to: "/our-works" },
  { label: "About", to: "/about" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="w-full">
            <img
              src={ASSETS.logoWhite}
              alt="NOLA Web Solutions"
              className="h-14 sm:h-16 md:h-20 w-auto max-w-full"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/45">
              We don't just build websites. We build the digital system around your business.
            </p>

            <div className="mt-6">
              <SocialIconsRow dark />
            </div>
          </div>

          <FooterCol title="Company" items={FOOTER_COMPANY} />

          <FooterCol title="Packages" items={NAV_PACKAGES} />

          <div className="w-full">
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block truncate transition-colors hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phonePHTel}`}
                  className="block transition-colors hover:text-white"
                >
                  PH: {CONTACT_INFO.phonePH}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneUKTel}`}
                  className="block transition-colors hover:text-white"
                >
                  UK: {CONTACT_INFO.phoneUK}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  WhatsApp: {CONTACT_INFO.phonePH}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NOLA Web Solutions.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <a
              href="https://nolacrm.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-white/70"
            >
              NOLA CRM <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* large final brand statement */}
        <div className="mt-20 select-none">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-none tracking-tight text-white/[0.07]">
            NOLA WEB SOLUTIONS
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/25">
            Build better. Grow smarter.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div className="w-full">
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/35">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="text-sm text-white/55 transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
