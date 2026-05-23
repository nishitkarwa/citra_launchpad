import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Max translateY in px applied to the image as it scrolls through viewport. */
  strength?: number;
  loading?: "eager" | "lazy";
}

/**
 * Frame-clipped parallax image. The wrapper has fixed bounds and overflow-hidden,
 * the inner <img> is scaled larger than the frame and translated on scroll so it
 * shifts vertically inside the frame without ever revealing empty space.
 */
const ParallaxImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  strength = 60,
  loading = "lazy",
}: ParallaxImageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // progress: -1 (frame just below viewport) -> 0 (centered) -> 1 (just above)
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      setOffset(-clamped * strength);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-[calc(100%+${strength * 2}px)] object-cover will-change-transform ${imgClassName}`}
        style={{
          transform: `translate3d(0, ${offset}px, 0)`,
          height: `calc(100% + ${strength * 2}px)`,
          marginTop: `-${strength}px`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;
