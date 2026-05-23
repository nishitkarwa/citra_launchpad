import { useInView } from "@/hooks/useInView";
import ParallaxImage from "@/components/ParallaxImage";
import imgArchitecture from "@/assets/service-design.jpg";
import imgTurnkey from "@/assets/service-construction.jpg";
import imgPermission from "@/assets/service-collab.jpg";

const services = [
  {
    img: imgArchitecture,
    title: "Architecture",
    body: "End-to-end architectural design across residential, commercial, cultural and master-plan projects.",
    items: ["Residential", "Commercial", "Cultural / Religious Projects", "Master Plan"],
  },
  {
    img: imgTurnkey,
    title: "Turnkey",
    body: "Full ownership of build and design — from concept through to handover.",
    items: ["Construction", "Design Consultation"],
  },
  {
    img: imgPermission,
    title: "Permission",
    body: "We handle land documentation and government permissions on behalf of other companies.",
    items: ["Land Papers", "Government Approvals", "Regulatory Liaison"],
  },
];

const Services = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>WHAT WE DO</p>
          <h2
            className={`mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "80ms" } : undefined}
          >
            Core Services
          </h2>
          <p
            className={`body-default text-muted-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            Comprehensive solutions at every phase of your development journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={inView ? { animationDelay: `${120 + i * 80}ms` } : undefined}
            >
              <div className="rounded-2xl overflow-hidden border border-border group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h4 className="mb-2">{s.title}</h4>
                  <p className="body-default text-muted-foreground">{s.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
