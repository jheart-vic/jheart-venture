// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { fadeUp } from "@/lib/motion";

// export default function Reveal({
//   children,
//   delay = 0,
//   className = "",
//   whileHover,
//   transition,
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const reduce = useReducedMotion();
//   if (reduce) return <div className={className}>{children}</div>;

//   return (
//     <motion.div
//       className={className}
//       initial="hidden"
//       whileInView="show"
//       whileHover={whileHover}
//       transition={transition}
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeUp}
//       custom={delay}
//     >
//       {children}
//     </motion.div>
//   );
// }



"use client";

import React from "react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  whileHover,
  transition,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={delay}
      // ✅ allow per-usage hover + transition overrides
      whileHover={whileHover}
      transition={transition}
      // ✅ allow any other motion props
      {...rest}
    >
      {children}
    </motion.div>
  );
}
