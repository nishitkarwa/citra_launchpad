import heroImg from "@/assets/hero.jpg";
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

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern architectural development at dusk"
          className="w-full h-full object-cover"
          width={1920}
          height={960}
        />
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

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.15em] text-primary-foreground/40">Scroll down</span>
        <div className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-1.5 rounded-full bg-primary-foreground/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
