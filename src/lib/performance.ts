/**
 * Device capability and motion preference detection utilities.
 * Used across the application to scale down animations, reduce raymarching / WebGL passes,
 * and eliminate expensive blur/filter operations on lower-end hardware and mobile devices.
 */

import { useEffect, useState } from "react";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return true;

  // Check hardware concurrency (<= 4 cores is typical for low-end / entry-level mobile or older laptops)
  if (typeof navigator !== "undefined") {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
      return true;
    }

    const nav = navigator as unknown as {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };

    // Low RAM (<= 4GB)
    if (nav.deviceMemory && nav.deviceMemory <= 4) {
      return true;
    }

    // Data-saver mode or slow network
    if (
      nav.connection?.saveData ||
      nav.connection?.effectiveType === "2g" ||
      nav.connection?.effectiveType === "3g"
    ) {
      return true;
    }
  }

  // Small screens with touch pointer on budget displays
  if (window.innerWidth < 768 && window.matchMedia?.("(pointer: coarse)").matches) {
    return true;
  }

  return false;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    setReduced(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useIsLowEnd(): boolean {
  const [isLow, setIsLow] = useState<boolean>(() => isLowEndDevice());

  useEffect(() => {
    setIsLow(isLowEndDevice());
  }, []);

  return isLow;
}
