import { RefObject, useEffect } from "react";

type Options = {
  selector?: string;
  baseDelay?: number;
  step?: number;
  unit?: string;
};

export default function useStaggeredAnimation(
  containerRef: RefObject<HTMLElement | null>,
  inView: boolean,
  { selector = "*:scope > *", baseDelay = 0, step = 55, unit = "ms" }: Options = {}
) {
  useEffect(() => {
    if (!inView) return;
    const el = containerRef.current;
    if (!el) return;

    const nodeList = el.querySelectorAll(selector);
    const items: HTMLElement[] = Array.from(nodeList) as HTMLElement[];

    items.sort((a, b) => {
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      const topDiff = Math.round(ra.top) - Math.round(rb.top);
      if (Math.abs(topDiff) > 2) return topDiff;
      return Math.round(ra.left) - Math.round(rb.left);
    });

    items.forEach((it, i) => {
      // only set if not already set
      it.style.animationDelay = `${baseDelay + i * step}${unit}`;
    });
  }, [containerRef, inView, selector, baseDelay, step, unit]);
}
