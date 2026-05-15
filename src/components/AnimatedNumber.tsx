import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string; // e.g. "50+", "100%", "5,00,000+"
  inView: boolean;
  className?: string;
  duration?: number;
}

// Per-target duration tuning for a natural, staggered feel
const getDuration = (target: number) => {
  if (target >= 100000) return 3500; // 5,00,000+ — premium, ~3.5s
  if (target >= 100) return 2200;    // 100+ slightly faster
  if (target >= 50) return 2600;     // 50+ medium
  return 3000;                        // 15+ slow & smooth
};

const AnimatedNumber = ({ value, inView, className, duration }: AnimatedNumberProps) => {
  const [display, setDisplay] = useState(() => {
    const m = value.match(/^([\d,]+)(.*)$/);
    if (!m) return value;
    return `0${m[2]}`;
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const numericStr = match[1];
    const suffix = match[2];
    const target = parseInt(numericStr.replace(/,/g, ""), 10);
    const useIndianFormat = numericStr.includes(",");
    const dur = duration ?? getDuration(target);

    const format = (n: number) =>
      useIndianFormat ? n.toLocaleString("en-IN") : n.toString();

    // For very large numbers, snap to "smart" round step so it doesn't tick
    // through every integer — feels premium, not mechanical.
    const getStep = (t: number) => {
      if (t >= 100000) return 1000;  // jumps of 1K → smooth fluid feel at 60fps
      if (t >= 10000) return 100;
      return 1;
    };
    const step = getStep(target);

    const startTime = performance.now();
    let rafId = 0;

    // Ease-out quart — smoother deceleration than cubic, feels premium
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / dur, 1);
      const eased = ease(progress);
      const raw = eased * target;
      const current = progress === 1
        ? target
        : Math.min(target, Math.round(raw / step) * step);
      setDisplay(`${format(current)}${suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration]);

  return <span className={className}>{display}</span>;
};

export default AnimatedNumber;
