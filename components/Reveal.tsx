"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });
  const reduceMotion = useReducedMotion();

  const variants = {
    up: {
      hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    left: {
      hidden: { opacity: 0, x: -22, filter: "blur(6px)" },
      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
    },
    none: {
      hidden: { opacity: 0, filter: "blur(6px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const v = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : v.hidden}
      animate={isInView ? v.visible : v.hidden}
      transition={{
        duration: 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
