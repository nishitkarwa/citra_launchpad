import { useInView } from "@/hooks/useInView";

const reviews = [
  { quote: "CIIRA completely transformed how we thought about our retail space. The team brought commercial intelligence to every design decision and delivered exactly what they promised.", name: "Ananya Mehta", title: "Director, Surabi Group" },
  { quote: "From the first brief to final handover, the process was seamless. We had full visibility at every stage and the finished development exceeded our expectations on every metric.", name: "Rohan Desai", title: "CEO, Greenmark Developments" },
  { quote: "Their visualisation work alone sold three floors of our commercial tower before construction even began. That is the kind of value CIIRA delivers.", name: "Priya Nambiar", title: "Founder, EcoEdge Properties" },
];

const Testimonials = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={`section-padding bg-secondary ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">THE REVIEWS</p>
        <h2 className="mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-lg p-8">
              <p className="body-default text-muted-foreground mb-6">"{r.quote}"</p>
              <p className="font-semibold text-foreground">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
