import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCountUp(
  target: number,
  duration: number = 2000,
  suffix: string = "",
  prefix: string = ""
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * (target - startValue) + startValue);

      setCount(current);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(`${prefix}${target}${suffix}`);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration, suffix, prefix]);

  return { ref, displayValue, count };
}

// Parses a stat like "250+" into { value: 250, suffix: "+" }
export function parseStatValue(raw: string): { prefix: string; value: number; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", value: 0, suffix: raw };
  return {
    prefix: match[1] || "",
    value: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}
