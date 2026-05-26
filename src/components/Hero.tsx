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
  const { ref: statsRef, inView: statsInView } = useInView(0.3);

  return (
    <section id="home" ref={ref} className="relative flex flex-col">
      {/* Background image — taller than viewport so the house sits below the fold */}
      <div className="relative w-full h-[145svh] min-h-[1000px] overflow-hidden">
        <img
          src={heroDesert}
          alt="Modern desert architectural development"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns will-change-transform"
          style={{ objectPosition: "center bottom" }}
          width={1920}
          height={1088}
          loading="eager"
        />
        {/* Bottom fade into page background for a soft blend */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        {/* Copy positioned over the sky area */}
        <div className="relative z-10 flex flex-col items-center text-center container mx-auto px-6 lg:px-8 pt-28 md:pt-32">
          <p className={`label-caption text-primary-foreground/90 mb-4 text-[10.5px] md:text-[11px] ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
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
      <div ref={statsRef} className="border-t border-border bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {stats.map((s) => (
              <div key={s.label} className="py-6 md:py-8 flex flex-col items-center justify-center overflow-hidden">
                <p className="text-2xl md:text-4xl font-bold text-foreground leading-none tabular-nums">
                  <AnimatedNumber value={s.value} inView={statsInView} />
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
