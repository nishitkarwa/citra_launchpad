import { useInView } from "@/hooks/useInView";

const steps = [
  {
    step: "01",
    title: "Site Analysis and Strategy",
    body: "We assess location, zoning, market potential, and financial viability before a single design decision is made.",
  },
  {
    step: "02",
    title: "Concept Design and Visualisation",
    body: "Our team produces detailed concepts, 3D renders, and spatial strategies that align design ambition with budget reality.",
  },
  {
    step: "03",
    title: "Planning and Construction",
    body: "We manage approvals, contractor coordination, materials procurement, and on‑site execution with full transparency.",
  },
  {
    step: "04",
    title: "Supervision and Delivery",
    body: "Dedicated project leads ensure quality control, timeline adherence, and a smooth handover at every stage.",
  },
];

const Process = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`section-padding bg-secondary ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <p className="label-caption text-primary mb-4">HOW WE WORK</p>
            <h2>Our End‑to‑End Process</h2>
          </div>
          <p className="body-default text-muted-foreground max-w-md">
            A disciplined four‑phase process that takes your project from raw land and rough brief to a fully delivered, commercially optimised development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-dark text-primary-foreground rounded-2xl p-7 flex flex-col group hover:bg-primary transition-colors duration-300"
            >
              <span className="label-caption text-primary group-hover:text-primary-foreground/80 mb-auto transition-colors">
                Step {s.step}
              </span>
              <div className="mt-16">
                <h4 className="mb-3 text-lg">{s.title}</h4>
                <p className="body-default text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
