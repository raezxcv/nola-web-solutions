import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "../../lib/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
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
  stagger = 0.05,
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

/** Smooth, robust headline reveal for editorial typography and gradient text. */
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
  const fullClass = [className, wordClassName].filter(Boolean).join(" ");

  return (
    <motion.span
      ref={ref as never}
      className={`inline-block ${fullClass}`}
      initial={{ opacity: 0, y: 12, filter: "blur(2px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 12, filter: "blur(2px)" }
      }
      transition={{
        duration: 0.5,
        ease: EASE,
        delay,
      }}
    >
      {text}
    </motion.span>
  );
}
