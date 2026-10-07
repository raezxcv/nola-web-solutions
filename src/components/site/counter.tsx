import { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  value: string; // e.g. "120+", "90+", "5★"
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
}

export function Counter({ value, className = "", style, duration = 2.0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Extract prefix, numeric portion, and suffix from string
  // Examples:
  // "120+" -> prefix: "", numericVal: 120, suffix: "+"
  // "90+"  -> prefix: "", numericVal: 90,  suffix: "+"
  // "5★"   -> prefix: "", numericVal: 5,   suffix: "★"
  // "$500" -> prefix: "$", numericVal: 500, suffix: ""
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const numericVal = numStr ? parseFloat(numStr.replace(/,/g, "")) : 0;
  const suffix = match ? (match[3] ?? "") : value;
  const isFloat = numStr.includes(".");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isNaN(numericVal)) return;

    const controls = animate(0, numericVal, {
      duration,
      ease: [0.16, 1, 0.3, 1], // fluid ease out cubic
      onUpdate: (latest) => {
        setCount(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, numericVal, duration]);

  const formattedNumber = isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
