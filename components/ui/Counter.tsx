"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 2
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Adjusted spring for smoother animation based on duration
  const spring = useSpring(0, { 
    stiffness: 45, 
    damping: 20,
    mass: 1
  });
  
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.floor(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
