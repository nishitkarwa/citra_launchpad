import { useInView } from "@/hooks/useInView";

const cards = [
  { title: "Business‑First Design", body: "We design spaces that work as hard as you do, balancing aesthetic excellence with measurable performance outcomes." },
  { title: "End‑to‑End Delivery", body: "From site analysis and concept design through to construction and handover, we own every phase so nothing falls through the cracks." },
  { title: "Proven Track Record", body: "Over 50 completed projects across commercial, retail, hospitality, and mixed‑use development with zero compromises on quality." },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className={`section-padding ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">ABOUT US</p>
        <h2 className="max-w-3xl mb-6">Where Architecture Meets Business Performance</h2>
        <p className="body-large text-muted-foreground max-w-3xl mb-12">
          At CIIRA we go beyond blueprints. Every project we take on is rooted in commercial thinking, built around your business goals, and delivered with end‑to‑end accountability from concept to handover.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-dark text-primary-foreground rounded-lg p-8">
              <h4 className="mb-3">{c.title}</h4>
              <p className="body-default text-primary-foreground/70">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
