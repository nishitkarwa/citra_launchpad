import { useInView } from "@/hooks/useInView";

const ClientLogos = () => {
  const { ref, inView } = useInView();

  const logos = ["Surabi", "EcoEdge", "Greenmark", "ProBridge", "Luminos", "Nexgen", "Buildcraft", "Vertex"];

  return (
    <section ref={ref} className={`py-12 md:py-16 border-y border-border ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-6 gap-x-8 md:gap-x-4">
          {logos.map((name) => (
            <div key={name} className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
              <div className="w-6 h-6 rounded bg-muted-foreground/30" />
              <span className="text-sm font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
