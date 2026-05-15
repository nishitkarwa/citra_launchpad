import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string; // e.g. "50+", "100%", "5,00,000+"
  inView: boolean;
  className?: string;
  duration?: number;
}

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

    // Premium feel: longer for small numbers, snappy for big numbers
    const dur = duration ?? (target >= 10000 ? 1800 : 1400);
    const startTime = performance.now();

    const format = (n: number) =>
      useIndianFormat ? n.toLocaleString("en-IN") : n.toString();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / dur, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${format(current)}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span className={className}>{display}</span>;
};

export default AnimatedNumber;
