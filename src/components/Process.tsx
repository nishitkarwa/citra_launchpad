import { useInView } from "@/hooks/useInView";

const steps = [
  { step: "01", title: "Site Analysis and Strategy", body: "We assess location, zoning, market potential, and financial viability before a single design decision is made." },
  { step: "02", title: "Concept Design and Visualisation", body: "Our team produces detailed concepts, 3D renders, and spatial strategies that align design ambition with budget reality." },
  { step: "03", title: "Planning and Construction", body: "We manage approvals, contractor coordination, materials procurement, and on‑site execution with full transparency." },
  { step: "04", title: "Supervision and Delivery", body: "Dedicated project leads ensure quality control, timeline adherence, and a smooth handover at every stage." },
];

const Process = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={`section-padding bg-secondary ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">HOW WE WORK</p>
        <h2 className="mb-4">Our End‑to‑End Process</h2>
        <p className="body-default text-muted-foreground max-w-3xl mb-12">
          A disciplined four‑phase process that takes your project from raw land and rough brief to a fully delivered, commercially optimised development.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="bg-dark text-primary-foreground rounded-lg p-8">
              <p className="label-caption text-primary mb-4">Step {s.step}</p>
              <h4 className="mb-3">{s.title}</h4>
              <p className="body-default text-primary-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
