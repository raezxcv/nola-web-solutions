import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ASSETS, NAV_PACKAGES, NAV_SERVICES } from "../../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <img src={ASSETS.logoWhite} alt="NOLA Web Solutions" className="h-14 sm:h-16 md:h-20 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              We don't just build websites. We build the digital system around your business.
            </p>
          </div>

          <FooterCol title="Packages" items={NAV_PACKAGES} />
          <FooterCol title="Capabilities" items={NAV_SERVICES.slice(0, 6)} />
          <FooterCol
            title="Company"
            items={[
              { label: "About", to: "/about" },
              { label: "Work", to: "/work" },
              { label: "Solutions", to: "/solutions" },
              { label: "Contact", to: "/contact" },
            ]}
          />
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
    <div>
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
