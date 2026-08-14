import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Singleton so only one Lenis instance runs
let lenisInstance: Lenis | null = null;

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.destroy();
    }

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenisInstance?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
