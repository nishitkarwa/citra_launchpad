import { useInView } from "@/hooks/useInView";

const cards = [
  {
    title: "Business‑First Design",
    body: "We design spaces that work as hard as you do, balancing aesthetic excellence with measurable performance outcomes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "End‑to‑End Delivery",
    body: "From site analysis and concept design through to construction and handover, we own every phase so nothing falls through the cracks.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    body: "Over 50 completed projects across commercial, retail, hospitality, and mixed‑use development with zero compromises on quality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L5.1 18l.9-5.3-4-3.9 5.5-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="aboutus"
      ref={ref}
      className="section-padding"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>ABOUT US</p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <h2
            className={inView ? "animate-fade-in-up" : "opacity-0"}
            style={inView ? { animationDelay: "80ms" } : undefined}
          >
            Where Architecture Meets Business Performance
          </h2>
          <div
            className={`flex items-end ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            <p className="body-large text-muted-foreground">
              At CITRA we go beyond blueprints. Every project we take on is rooted in commercial thinking, built around your business goals, and delivered with end‑to‑end accountability from concept to handover.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={inView ? { animationDelay: `${120 + i * 120}ms` } : undefined}
            >
            <div className="bg-dark text-primary-foreground rounded-2xl p-8 flex flex-col h-full transition-transform duration-500 ease-out hover:-translate-y-8 hover:scale-[1.15] will-change-transform">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                {c.icon}
              </div>
              <h4 className="mb-3">{c.title}</h4>
              <p className="body-default text-primary-foreground/60">{c.body}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
