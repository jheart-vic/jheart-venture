// src/lib/motion.ts

// Cubic-bezier curves (work nicely across Framer Motion versions/types)
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.7, 0, 0.84, 0];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  // Use `custom` as delay to satisfy Framer Motion's Variant resolver typing
  show: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT, delay: custom },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (custom: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay: custom },
  }),
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: EASE_IN },
  },
};
