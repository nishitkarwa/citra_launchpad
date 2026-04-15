import heroImg from "@/assets/hero.jpg";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "15+", label: "Years of Experience" },
];

const Hero = () => {
  const { ref, inView } = useInView();

  return (
    <section id="home" ref={ref} className={`section-padding ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">ARCHITECTURE AND DEVELOPMENT</p>
        <h1 className="max-w-4xl mb-6">Transforming Land Into Experience‑Led Developments</h1>
        <p className="body-large text-muted-foreground max-w-2xl mb-8">
          We partner with businesses and developers to design, build, and deliver high‑performance spaces that drive real commercial outcomes.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#projects" className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Explore Projects
          </a>
          <a href="#about" className="rounded-full border-[1.5px] border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
            Learn More
          </a>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <img src={heroImg} alt="Modern architectural development" className="w-full h-[300px] md:h-[520px] object-cover" width={1920} height={960} />
          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6">
            <div className="bg-background/95 backdrop-blur rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-around gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                  <p className="body-default text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
