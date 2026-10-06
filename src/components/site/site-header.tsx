import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { ASSETS, NAV_PACKAGES, NAV_SERVICES, NAV_SOLUTIONS } from "../../lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onDark = isDarkRoute(location.pathname);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-500 bg-transparent border-b border-transparent h-20">
      {/* Full-width centering container — relative so we can absolutely center the nav */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* Left: Logo — fades out when scrolled */}
        <div
          className={`transition-all duration-500 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group py-1"
            aria-label="NOLA Web Solutions home"
          >
            <img
              src={onDark ? ASSETS.logoWhite : ASSETS.logoPrimary}
              alt="NOLA Web Solutions"
              className="h-8 w-auto sm:h-10 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Center: Floating Capsule Navigation Pill — always readable */}
        <nav
          className={`hidden lg:flex items-center gap-7 rounded-full px-7 py-2 backdrop-blur-2xl shadow-xl border absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled
              ? "border-white/[0.12] bg-ink/50 shadow-ink/20"
              : onDark
              ? "border-white/10 bg-white/[0.06]"
              : "border-border/40 bg-background/60"
          } ${scrolled ? "scale-[1.04]" : "scale-100"}`}
        >
          <SimpleLink to="/" onDark={scrolled || onDark}>
            Home
          </SimpleLink>
          <NavItem
            label="Packages"
            onDark={scrolled || onDark}
            menuKey="packages"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={NAV_PACKAGES}
          />
          <SimpleLink to="/packages" onDark={scrolled || onDark}>
            How It Works
          </SimpleLink>
          <NavItem
            label="Capabilities"
            onDark={scrolled || onDark}
            menuKey="services"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={NAV_SERVICES}
          />
          <SimpleLink to="/about" onDark={scrolled || onDark}>
            About
          </SimpleLink>
          <SimpleLink to="/contact" onDark={scrolled || onDark}>
            Contact
          </SimpleLink>
        </nav>

        {/* Right: Capsule CTA — fades out when scrolled, pushed to far right via ml-auto */}
        <div className="ml-auto hidden lg:flex items-center">
          <div
            className={`transition-all duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link
              to="/contact"
              className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
                onDark
                  ? "border-white bg-white text-ink hover:bg-transparent hover:text-white"
                  : "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
              }`}
            >
              Book a Consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && <MobileMenu onDark={onDark} />}
    </header>
  );
}

function isDarkRoute(pathname: string) {
  return pathname === "/" || pathname === "/solutions";
}

function SimpleLink({
  to,
  onDark,
  children,
}: {
  to: string;
  onDark: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={() => {
        if (to === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      activeProps={{ className: onDark ? "text-white" : "text-foreground" }}
      className={`relative text-sm font-medium transition-colors ${
        onDark ? "text-white/65 hover:text-white" : "text-foreground/65 hover:text-foreground"
      } after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
    >
      {children}
    </Link>
  );
}

function NavItem({
  label,
  onDark,
  menuKey,
  openMenu,
  setOpenMenu,
  items,
}: {
  label: string;
  onDark: boolean;
  menuKey: string;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
  items: { label: string; to: string }[];
}) {
  const open = openMenu === menuKey;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(menuKey)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
          onDark ? "text-white/65 hover:text-white" : "text-foreground/65 hover:text-foreground"
        }`}
        onClick={() => setOpenMenu(open ? null : menuKey)}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-3">
          <div
            className={`w-72 overflow-hidden rounded-xl border p-2 shadow-2xl ${
              onDark
                ? "border-white/10 bg-ink-2/95 backdrop-blur-xl"
                : "border-border bg-popover shadow-black/10"
            }`}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  onDark
                    ? "text-white/75 hover:bg-white/5 hover:text-white"
                    : "text-foreground/85 hover:bg-accent hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ onDark }: { onDark: boolean }) {
  const [section, setSection] = useState<string | null>(null);
  const sections: { key: string; label: string; items: { label: string; to: string }[] }[] = [
    { key: "packages", label: "Packages", items: NAV_PACKAGES },
    { key: "capabilities", label: "Capabilities", items: NAV_SERVICES },
    { key: "solutions", label: "Solutions", items: NAV_SOLUTIONS },
  ];
  return (
    <div
      className={`lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t ${
        onDark ? "border-white/10 bg-ink/90 backdrop-blur-xl" : "border-border bg-background/95 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        {sections.map((s) => (
          <div
            key={s.key}
            className={`py-2 border-b ${onDark ? "border-white/10" : "border-border"}`}
          >
            <button
              className={`flex w-full items-center justify-between py-2 text-base font-semibold ${
                onDark ? "text-white" : "text-foreground"
              }`}
              onClick={() => setSection(section === s.key ? null : s.key)}
            >
              {s.label}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${section === s.key ? "rotate-180" : ""}`}
              />
            </button>
            {section === s.key && (
              <div className="mt-1 space-y-1 pb-2 pl-3">
                {s.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      onDark
                        ? "text-white/60 hover:bg-white/5 hover:text-white"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-1 py-3">
          <Link
            to="/"
            onClick={() => {
              if (window.location.pathname === "/" || location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`rounded-lg px-3 py-2 text-base font-semibold ${
              onDark ? "text-white hover:bg-white/5" : "text-foreground hover:bg-accent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/packages"
            className={`rounded-lg px-3 py-2 text-base font-semibold ${
              onDark ? "text-white hover:bg-white/5" : "text-foreground hover:bg-accent"
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/about"
            className={`rounded-lg px-3 py-2 text-base font-semibold ${
              onDark ? "text-white hover:bg-white/5" : "text-foreground hover:bg-accent"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:bg-transparent hover:text-white border border-white"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
