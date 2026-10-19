import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ASSETS, NAV_PACKAGES } from "../../lib/site-data";

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

  // Lock background scroll when mobile navigation menu is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
      document.body.style.overscrollBehavior = "none";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overscrollBehavior = "";
      lenis?.start();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
      document.body.style.overscrollBehavior = "";
      lenis?.start();
    };
  }, [mobileOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileOpen]);

  const onDark = isDarkRoute(location.pathname);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-500 bg-transparent border-b border-transparent h-20">
      {/* Full-width centering container */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
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
              src={ASSETS.logoNavbar}
              alt="NOLA Web Solutions"
              className="h-8 w-auto sm:h-10 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Center: Floating Capsule Navigation Pill */}
        <nav
          className={`hidden lg:flex items-center gap-5.5 xl:gap-6 rounded-full px-6 py-2 backdrop-blur-2xl shadow-xl border absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled
              ? "border-white/[0.12] bg-ink/50 shadow-ink/20 text-white"
              : onDark
                ? "border-white/10 bg-white/[0.06] text-white"
                : "border-border/40 bg-background/60 text-foreground"
          } ${scrolled ? "scale-[1.04]" : "scale-100"}`}
        >
          <SimpleLink to="/" onDark={scrolled || onDark}>
            Home
          </SimpleLink>
          <SimpleLink to="/our-works" onDark={scrolled || onDark}>
            Our Works
          </SimpleLink>
          <NavItem
            label="Packages"
            to="/packages"
            onDark={scrolled || onDark}
            menuKey="packages"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            items={NAV_PACKAGES}
          />
          <SimpleLink to="/about" onDark={scrolled || onDark}>
            About
          </SimpleLink>
          <SimpleLink to="/contact" onDark={scrolled || onDark}>
            Contact
          </SimpleLink>
        </nav>

        {/* Right: Capsule CTA — desktop */}
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

        {/* Mobile hamburger toggle button — mobile only */}
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

function isDarkRoute(_pathname: string) {
  // Always true so floating capsule navbar uses sleek glassmorphism across all pages like in home
  return true;
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  to,
  onDark,
  menuKey,
  openMenu,
  setOpenMenu,
  items,
}: {
  label: string;
  to?: string;
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
      <div className="inline-flex items-center gap-0.5">
        {to ? (
          <Link
            to={to}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-sm font-medium transition-colors ${
              onDark ? "text-white/65 hover:text-white" : "text-foreground/65 hover:text-foreground"
            } after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
          >
            {label}
          </Link>
        ) : (
          <span
            className={`text-sm font-medium ${onDark ? "text-white/65" : "text-foreground/65"}`}
          >
            {label}
          </span>
        )}
        <button
          className={`inline-flex items-center transition-colors p-0.5 ${
            onDark ? "text-white/65 hover:text-white" : "text-foreground/65 hover:text-foreground"
          }`}
          onClick={() => setOpenMenu(open ? null : menuKey)}
          aria-label={`Toggle ${label} menu`}
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
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
  const location = useLocation();
  const pathname = location.pathname;
  const isPackagesActive = pathname.startsWith("/packages");
  const [packagesOpen, setPackagesOpen] = useState(isPackagesActive);

  const isDarkMenu = onDark;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-40 lg:hidden flex flex-col h-[100dvh] w-full overflow-hidden ${
        isDarkMenu
          ? "bg-ink/98 text-white backdrop-blur-3xl"
          : "bg-background/98 text-foreground backdrop-blur-3xl"
      }`}
    >
      {/* Top spacer matching fixed header height (h-20) */}
      <div className="h-20 shrink-0 w-full" aria-hidden="true" />

      {/* Center scrollable navigation list: matches desktop arrangement exactly */}
      <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-8 py-4 sm:py-6">
        <div className="mx-auto w-full max-w-md space-y-1.5">
          {/* 1. Home */}
          <Link
            to="/"
            onClick={() => {
              onClose();
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-all ${
              pathname === "/"
                ? isDarkMenu
                  ? "bg-white/10 text-white font-bold"
                  : "bg-accent text-foreground font-bold"
                : isDarkMenu
                  ? "text-white/80 hover:bg-white/[0.06] hover:text-white"
                  : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
            }`}
          >
            <span>Home</span>
            {pathname === "/" && (
              <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/20" />
            )}
          </Link>

          {/* 2. Our Works */}
          <Link
            to="/our-works"
            onClick={onClose}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-all ${
              pathname === "/our-works"
                ? isDarkMenu
                  ? "bg-white/10 text-white font-bold"
                  : "bg-accent text-foreground font-bold"
                : isDarkMenu
                  ? "text-white/80 hover:bg-white/[0.06] hover:text-white"
                  : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
            }`}
          >
            <span>Our Works</span>
            {pathname === "/our-works" && (
              <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/20" />
            )}
          </Link>

          {/* 3. Packages with expandable submenu */}
          <div className="rounded-xl transition-all">
            <div
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition-all ${
                isPackagesActive
                  ? isDarkMenu
                    ? "bg-white/10 text-white font-bold"
                    : "bg-accent text-foreground font-bold"
                  : isDarkMenu
                    ? "text-white/80 hover:bg-white/[0.06] hover:text-white"
                    : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
              }`}
            >
              <Link
                to="/packages"
                onClick={onClose}
                className="text-lg font-semibold flex-1 tracking-tight py-1"
              >
                Packages
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPackagesOpen((v) => !v);
                }}
                className={`p-2 -mr-1 rounded-lg transition-all active:scale-90 ${
                  isDarkMenu
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                }`}
                aria-label="Toggle Packages submenu"
                aria-expanded={packagesOpen}
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    packagesOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {packagesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={`my-1.5 ml-4 pl-3.5 space-y-1 border-l ${
                      isDarkMenu ? "border-white/15" : "border-border"
                    }`}
                  >
                    {NAV_PACKAGES.map((pkg) => {
                      const isActive = pathname === pkg.to;
                      return (
                        <Link
                          key={pkg.label}
                          to={pkg.to}
                          onClick={onClose}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                            isActive
                              ? isDarkMenu
                                ? "bg-white/10 text-white font-semibold"
                                : "bg-accent text-foreground font-semibold"
                              : isDarkMenu
                                ? "text-white/70 hover:bg-white/[0.06] hover:text-white"
                                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                          }`}
                        >
                          <span>{pkg.label}</span>
                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. About */}
          <Link
            to="/about"
            onClick={onClose}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-all ${
              pathname === "/about"
                ? isDarkMenu
                  ? "bg-white/10 text-white font-bold"
                  : "bg-accent text-foreground font-bold"
                : isDarkMenu
                  ? "text-white/80 hover:bg-white/[0.06] hover:text-white"
                  : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
            }`}
          >
            <span>About</span>
            {pathname === "/about" && (
              <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/20" />
            )}
          </Link>

          {/* 5. Contact */}
          <Link
            to="/contact"
            onClick={onClose}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-all ${
              pathname === "/contact"
                ? isDarkMenu
                  ? "bg-white/10 text-white font-bold"
                  : "bg-accent text-foreground font-bold"
                : isDarkMenu
                  ? "text-white/80 hover:bg-white/[0.06] hover:text-white"
                  : "text-foreground/80 hover:bg-accent/60 hover:text-foreground"
            }`}
          >
            <span>Contact</span>
            {pathname === "/contact" && (
              <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/20" />
            )}
          </Link>
        </div>
      </nav>

      {/* Pinned Bottom Action Area: Always visible at bottom of screen */}
      <div
        className={`shrink-0 w-full border-t px-5 sm:px-8 pt-3.5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl ${
          isDarkMenu
            ? "border-white/10 bg-ink/95 backdrop-blur-2xl"
            : "border-border bg-background/95 backdrop-blur-2xl"
        }`}
      >
        <div className="mx-auto w-full max-w-md">
          <Link
            to="/contact"
            onClick={onClose}
            className={`group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold shadow-lg transition-all duration-300 active:scale-[0.98] ${
              isDarkMenu
                ? "bg-white text-ink hover:bg-white/90 shadow-black/30"
                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25"
            }`}
          >
            <span>Book a Consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
