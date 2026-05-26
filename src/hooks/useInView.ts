import { useEffect, useRef, useState } from "react";

export function useInView(
  threshold = 0.25,
  rootMargin = "0px 0px -15% 0px",
  introDelay = 500,
) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => setInView(true), introDelay);
        } else {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => {
      if (timer) clearTimeout(timer);
      obs.disconnect();
    };
  }, [threshold, rootMargin, introDelay]);

  return { ref, inView };
}
