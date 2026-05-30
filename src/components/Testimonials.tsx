import { useInView } from "@/hooks/useInView";
import ecoridgeLogo from "@/assets/clients/ecoridge.png";
import ekveeraLogo from "@/assets/clients/ekveera.png";
import tokyoLogo from "@/assets/clients/tokyo.png";

const reviews = [
  {
    quote:
      "CITRA completely transformed how we thought about our retail space. The team brought commercial intelligence to every design decision and delivered exactly what they promised.",
    name: "Mr. Sandeep Polakonda",
    title: "MD, ECORIDGE INFRASTRUCTURES",
    logo: ecoridgeLogo,
  },
  {
    quote:
      "From the first brief to final handover, the process was seamless. We had full visibility at every stage and the finished development exceeded our expectations on every metric.",
    name: "Sanjeev Kanaparthi",
    title: "CEO, EKVEERA CONSTRUCTIONS",
    logo: ekveeraLogo,
  },
  {
    quote:
      "Their visualisation work alone sold three floors of our commercial tower before construction even began. That is the kind of value CITRA delivers.",
    name: "Mr. Surender Surana",
    title: "M.D., Tokyo Japan Constructions",
    logo: tokyoLogo,
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="section-padding bg-secondary"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>THE REVIEWS</p>
          <h2
            className={inView ? "animate-fade-in-up" : "opacity-0"}
            style={inView ? { animationDelay: "80ms" } : undefined}
          >
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={inView ? { animationDelay: `${120 + i * 120}ms` } : undefined}
            >
            <div className="bg-background rounded-2xl p-8 flex flex-col justify-between h-full">
              <div>
                <svg className="text-primary mb-4" width="32" height="24" viewBox="0 0 32 24" fill="currentColor">
                  <path d="M0 24V14.4C0 6.08 4.48 1.12 13.44 0l1.28 3.84C9.28 5.12 6.88 8.64 6.72 12H12v12H0zm18.56 0V14.4c0-8.32 4.48-13.28 13.44-14.4L33.28 3.84C27.84 5.12 25.44 8.64 25.28 12H30.56v12H18.56z" />
                </svg>
                <p className="body-default text-muted-foreground mb-8">{r.quote}</p>
              </div>
              <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-muted-foreground/10 shrink-0">
                    {r.logo ? (
                      <img src={r.logo} alt={r.name} className="max-w-[85%] max-h-[85%] object-contain" />
                    ) : (
                      <span className="text-sm font-semibold text-secondary-foreground">
                        {r.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.title}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
