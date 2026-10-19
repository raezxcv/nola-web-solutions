import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY <= 300) {
          setVisible(false);
          ticking = false;
          return;
        }

        setVisible(true);

        // Check if button is positioned over a dark section
        const x = Math.max(10, window.innerWidth - 48);
        const y = Math.max(10, window.innerHeight - 48);
        const el = document.elementFromPoint(x, y);

        if (el) {
          const darkAncestor = el.closest(
            ".bg-ink, .bg-ink-2, .bg-ink-3, [data-dark='true'], footer, .bg-slate-900, .bg-slate-950, .bg-black",
          );
          setIsDarkBg(Boolean(darkAncestor));
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`group fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-transparent shadow-lg transition-all duration-300 active:scale-95 ${
            isDarkBg
              ? "bg-white text-ink hover:border-white hover:bg-transparent hover:text-white"
              : "bg-slate-900 text-white hover:border-slate-900 hover:bg-transparent hover:text-slate-900"
          }`}
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
