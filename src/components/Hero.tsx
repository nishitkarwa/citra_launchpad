import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import { useInView } from "@/hooks/useInView";
import AnimatedNumber from "@/components/AnimatedNumber";

const heroImages = [heroImg, hero2, hero3, hero4, hero5];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "15+", label: "Years of Experience" },
  { value: "5,00,000+", label: "SFT Delivered" },
];

const Hero = () => {
  const { ref, inView } = useInView(0.1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col">
      {/* Full-bleed background */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Modern architectural development"
            className={`absolute inset-0 w-full h-full object-cover animate-ken-burns transition-opacity duration-[2000ms] ease-in-out will-change-[opacity,transform] ${i === active ? "opacity-100" : "opacity-0"}`}
            width={1920}
            height={960}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-6 lg:px-8 pt-28 pb-8">
        <p className={`label-caption text-primary mb-5 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>ARCHITECTURE AND DEVELOPMENT</p>
        <h1
          className={`text-primary-foreground max-w-3xl mb-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "80ms" } : undefined}
        >
          Transforming Land Into Experience‑Led Developments
        </h1>
        <p
          className={`body-large text-primary-foreground/70 max-w-xl mb-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "160ms" } : undefined}
        >
          We partner with businesses and developers to design, build, and deliver high‑performance spaces that drive real commercial outcomes.
        </p>
        <div
          className={`flex flex-wrap gap-4 mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "240ms" } : undefined}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary pl-7 pr-2.5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
          >
            Explore Projects
            <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-primary-foreground/30 px-7 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors whitespace-nowrap"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Stats strip at bottom */}
      <div className="relative z-10 border-t border-primary-foreground/15">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-primary-foreground/15">
            {stats.map((s) => (
              <div key={s.label} className="py-6 md:py-8 flex flex-col items-center justify-center overflow-hidden">
                <p className="text-2xl md:text-4xl font-bold text-primary-foreground leading-none"><AnimatedNumber value={s.value} inView={inView} /></p>
                <p className="text-xs md:text-sm text-primary-foreground/50 mt-1.5 text-center">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
