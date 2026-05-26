import { useEffect, useRef, useState } from "react";
import heroDesert from "@/assets/hero-desert-house.jpg";
import { useInView } from "@/hooks/useInView";
import AnimatedNumber from "@/components/AnimatedNumber";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "15+", label: "Years of Experience" },
  { value: "5,00,000+", label: "SFT Delivered" },
];

const Hero = () => {
  const { ref, inView } = useInView(0.1);
  const imgRef = useRef<HTMLImageElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  // Recompute parallax travel based on rendered image vs stage so we never
  // reveal empty space and the image never overscrolls past its natural bounds.
  useEffect(() => {
    const compute = () => {
      const stage = stageRef.current;
      const img = imgRef.current;
      if (!stage || !img) return;
      setMaxOffset(Math.max(0, img.offsetHeight - stage.offsetHeight));
    };
    compute();
    const img = imgRef.current;
    if (img && !img.complete) img.addEventListener("load", compute, { once: true });
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Parallax: image moves up at ~45% of scroll, capped to image overflow
        setOffset(Math.min(window.scrollY * 0.45, maxOffset));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [maxOffset]);

  return (
    <section id="home" ref={ref} className="relative flex flex-col">
      {/* Hero stage: viewport-sized; image is taller and revealed via parallax */}
      <div ref={stageRef} className="relative w-full h-[100svh] min-h-[640px] overflow-hidden">
        <img
          ref={imgRef}
          src={heroDesert}
          alt="Luxury modern desert house at twilight"
          className="absolute inset-x-0 top-0 w-full h-[125svh] min-h-[820px] object-cover animate-ken-burns will-change-transform"
          style={{ objectPosition: "center top", transform: `translate3d(0, ${-offset}px, 0)` }}
          width={1920}
          height={1280}
          loading="eager"
        />


        {/* Cinematic gradients for depth and copy legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/35 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

        {/* Hero copy — centered with generous negative space */}
        <div className="relative z-10 flex flex-col items-center text-center container mx-auto px-6 lg:px-8 pt-28 md:pt-32">
          <p className={`label-caption text-primary-foreground/90 mb-4 text-[10.5px] md:text-[11px] tracking-[0.25em] ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            ARCHITECTURE AND DEVELOPMENT
          </p>
          <h1
            className={`text-primary-foreground max-w-2xl mb-5 text-3xl md:text-4xl lg:text-5xl leading-tight ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "80ms" } : undefined}
          >
            Transforming Land Into Experience‑Led Developments
          </h1>
          <p
            className={`text-primary-foreground/85 max-w-lg mb-7 text-sm md:text-base ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            We partner with businesses and developers to design, build, and deliver high‑performance spaces that drive real commercial outcomes.
          </p>
          <a
            href="#projects"
            className={`inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background hover:brightness-110 transition-all ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "240ms" } : undefined}
          >
            Explore Projects
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {stats.map((s) => (
              <div key={s.label} className="py-6 md:py-8 flex flex-col items-center justify-center overflow-hidden">
                <p className="text-2xl md:text-4xl font-bold text-foreground leading-none">
                  <AnimatedNumber value={s.value} inView={inView} />
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1.5 text-center">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
