import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "../../lib/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const { ref, inView } = useInView();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — children should be <Reveal> or motion elements. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/** Word-by-word headline reveal for editorial typography moments. */
export function RevealWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  const words = text.split(" ");

  // Extract any gradient text utility classes from className/wordClassName so they are applied
  // directly on animated motion.span. This prevents WebKit/Chromium composite layer clip bugs.
  const hasBrandGradient =
    className.includes("text-gradient-brand") || wordClassName.includes("text-gradient-brand");
  const hasSoftGradient =
    className.includes("text-gradient-soft") || wordClassName.includes("text-gradient-soft");

  const cleanOuterClassName = className
    .replace("text-gradient-brand", "")
    .replace("text-gradient-soft", "")
    .trim();

  const cleanWordClassName = wordClassName
    .replace("text-gradient-brand", "")
    .replace("text-gradient-soft", "")
    .trim();

  const gradientClass = hasBrandGradient
    ? "text-gradient-brand"
    : hasSoftGradient
      ? "text-gradient-soft"
      : "";

  const finalWordClass = ["inline-block", cleanWordClassName, gradientClass]
    .filter(Boolean)
    .join(" ");

  return (
    <span ref={ref as never} className={cleanOuterClassName} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1.5 -mb-1.5">
          <motion.span
            className={finalWordClass}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: delay + i * 0.06,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
