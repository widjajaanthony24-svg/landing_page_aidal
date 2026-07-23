"use client";

import NumberFlow from "@number-flow/react";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * Counts up to `value` when it scrolls into view.
 * Adapted from Skiper UI's Skiper 37 (AnimatedNumber_004) — https://skiper-ui.com
 * Free component, attribution required.
 */
export function AnimatedNumber({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <NumberFlow value={display} prefix={prefix} suffix={suffix} />
    </span>
  );
}
