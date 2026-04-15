import { useInView } from "@/hooks/useInView";

const ClientLogos = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={`py-20 md:py-24 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto text-center">
        <p className="label-caption text-muted-foreground mb-10">TRUSTED BY LEADING ORGANISATIONS</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-24 h-10 bg-muted-foreground/20 rounded-md" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
