import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string; // e.g. "70+", "100%", "15+"
  inView: boolean;
  className?: string;
}

const AnimatedNumber = ({ value, inView, className }: AnimatedNumberProps) => {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part and suffix
    const match = value.match(/^(\d+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2]; // e.g. "+", "%"
    const duration = 1000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span className={className}>{display}</span>;
};

export default AnimatedNumber;
