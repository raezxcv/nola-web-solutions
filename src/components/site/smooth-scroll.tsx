import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "../../lib/performance";

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const isTouchOnly =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(hover: hover)").matches;

    // Mobile / touch devices already have native hardware-accelerated momentum scrolling.
    // Hijacking touch on mobile causes micro-stutters and input lag on budget devices.
    const lenis = new Lenis({
      duration: isTouchOnly ? 0.6 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      syncTouch: false,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
