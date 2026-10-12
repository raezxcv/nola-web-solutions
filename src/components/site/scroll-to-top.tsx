import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
        return;
      }

      // Check background luminance at button position
      const x = window.innerWidth - 48;
      const y = window.innerHeight - 48;
      const elements = document.elementsFromPoint(x, y);
      let detectedDark = false;
      for (const el of elements) {
        if (el.closest("button[aria-label='Scroll to top']")) continue;
        const darkAncestor = el.closest(
          ".bg-ink, [data-dark='true'], footer, .bg-slate-900, .bg-slate-950, .bg-black",
        );
        if (darkAncestor) {
          detectedDark = true;
          break;
        }
        const bg = window.getComputedStyle(el).backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (match) {
          const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
          if (alpha > 0.4) {
            const r = parseInt(match[1] ?? "0", 10);
            const g = parseInt(match[2] ?? "0", 10);
            const b = parseInt(match[3] ?? "0", 10);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            detectedDark = luminance < 0.45;
            break;
          }
        }
      }
      setIsDarkBg(detectedDark);
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
          className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-transparent shadow-lg transition-all duration-300 active:scale-95 ${
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
