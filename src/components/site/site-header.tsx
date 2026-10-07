import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ASSETS, NAV_PACKAGES, NAV_SERVICES, NAV_SOLUTIONS } from "../../lib/site-data";

function AnimatedHamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center">
      <span
        className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
        }`}
      />
    </div>
  );
}

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
        {/* Left: Logo — stays visible when mobile menu is open */}
        <div
          className={`transition-all duration-500 z-50 ${
            scrolled && !mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group py-1"
            aria-label="NOLA Web Solutions home"
          >
            <img
              src={mobileOpen || onDark ? ASSETS.logoWhite : ASSETS.logoPrimary}
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

        {/* Mobile toggle button */}
        <button
          className={`lg:hidden ml-auto z-50 inline-flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-2xl shadow-xl border transition-all duration-300 active:scale-95 ${
            mobileOpen || scrolled
              ? "border-white/[0.12] bg-ink/70 shadow-ink/20 text-white hover:bg-ink/90"
              : onDark
                ? "border-white/10 bg-white/[0.06] text-white hover:bg-white/15"
                : "border-border/40 bg-background/60 shadow-black/5 text-foreground hover:bg-background/90"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatedHamburgerIcon isOpen={mobileOpen} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onDark={onDark} onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
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
  const handleClick = () => {
    if (to === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
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

function MobileMenu({ onDark, onClose }: { onDark: boolean; onClose: () => void }) {
  const [section, setSection] = useState<string | null>(null);
  const sections: { key: string; label: string; items: { label: string; to: string }[] }[] = [
    { key: "packages", label: "Packages", items: NAV_PACKAGES },
    { key: "capabilities", label: "Capabilities", items: NAV_SERVICES },
    { key: "solutions", label: "Solutions", items: NAV_SOLUTIONS },
  ];

  const isDarkMenu = onDark;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between overflow-y-auto px-6 pt-24 pb-10 w-screen h-screen ${
        isDarkMenu
          ? "bg-ink/98 text-white backdrop-blur-3xl"
          : "bg-background/98 text-foreground backdrop-blur-3xl"
      }`}
    >
      <div className="mx-auto w-full max-w-lg space-y-4">
        {sections.map((s) => (
          <div
            key={s.key}
            className={`py-3 border-b ${isDarkMenu ? "border-white/10" : "border-border"}`}
          >
            <button
              className={`flex w-full items-center justify-between py-1 text-lg font-semibold tracking-tight ${
                isDarkMenu ? "text-white" : "text-foreground"
              }`}
              onClick={() => setSection(section === s.key ? null : s.key)}
            >
              {s.label}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  section === s.key ? "rotate-180" : ""
                }`}
              />
            </button>
            {section === s.key && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 space-y-1 pb-2 pl-3"
              >
                {s.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onClose}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isDarkMenu
                        ? "text-white/70 hover:bg-white/10 hover:text-white"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-2 pt-4">
          <Link
            to="/"
            onClick={() => {
              onClose();
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`rounded-xl px-3 py-2.5 text-lg font-semibold transition-colors ${
              isDarkMenu ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/packages"
            onClick={onClose}
            className={`rounded-xl px-3 py-2.5 text-lg font-semibold transition-colors ${
              isDarkMenu ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className={`rounded-xl px-3 py-2.5 text-lg font-semibold transition-colors ${
              isDarkMenu ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"
            }`}
          >
            About
          </Link>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="mx-auto w-full max-w-lg pt-6">
        <Link
          to="/contact"
          onClick={onClose}
          className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold shadow-lg transition-all duration-300 ${
            isDarkMenu
              ? "bg-white text-ink hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          Book a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

