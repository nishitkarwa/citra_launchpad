import { useEffect, useRef, useState } from "react";

// Track scroll direction globally so all observers share it.
let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
let scrollingDown = true;
if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      scrollingDown = y > lastScrollY;
      lastScrollY = y;
    },
    { passive: true },
  );
}

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
          // Only trigger the appear animation when the user is scrolling down.
          if (!scrollingDown) return;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => setInView(true), introDelay);
        } else {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          // Reset only when leaving past the bottom (i.e. scrolling down past it
          // or scrolling back up above it) so it can replay next time we scroll
          // down into it.
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
