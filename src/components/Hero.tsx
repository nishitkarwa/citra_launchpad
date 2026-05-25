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

  return (
    <section id="home" ref={ref} className="relative flex flex-col">
      {/* Background image */}
      <div className="relative w-full h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src={heroDesert}
          alt="Modern desert architectural development"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns will-change-transform"
          width={1920}
          height={1280}
          loading="eager"
        />
        {/* Bottom fade into page background for the soft blend like the reference */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        {/* Copy positioned over the sky area at the top */}
        <div className="relative z-10 flex flex-col items-center text-center container mx-auto px-6 lg:px-8 pt-24 md:pt-28">
          <p className={`label-caption text-primary-foreground/90 mb-3 text-[10px] md:text-xs ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            ARCHITECTURE AND DEVELOPMENT
          </p>
          <h1
            className={`text-primary-foreground max-w-xl mb-3 text-xl md:text-2xl leading-tight font-semibold ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "80ms" } : undefined}
          >
            Transforming Land Into Experience‑Led Developments
          </h1>
          <p
            className={`text-primary-foreground/85 max-w-md mb-5 text-xs md:text-sm ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            We partner with businesses and developers to design, build, and deliver high‑performance spaces that drive real commercial outcomes.
          </p>
          <a
            href="#projects"
            className={`inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-xs font-medium text-background hover:brightness-110 transition-all ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "240ms" } : undefined}
          >
            Explore Projects
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-border">
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
