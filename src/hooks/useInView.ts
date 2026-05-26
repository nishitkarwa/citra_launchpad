import { useEffect, useRef, useState } from "react";

// Track scroll direction globally so all observers share it.
let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
let scrollingDown = true;
if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y !== lastScrollY) scrollingDown = y > lastScrollY;
      lastScrollY = y;
    },
    { passive: true },
  );
}

export function useInView(
  threshold = 0.25,
  rootMargin = "0px 0px -15% 0px",
  introDelay = 250,
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
          // Only trigger the appear animation when scrolling down.
          if (!scrollingDown) return;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => setInView(true), introDelay);
        } else {
          // Only reset (so it can replay) when the section leaves the viewport
          // while the user is scrolling UP — i.e. it disappeared below the
          // fold. Don't hide it when scrolling down past it.
          if (!scrollingDown) {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
            setInView(false);
          }
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
