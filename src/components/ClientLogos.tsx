import { useInView } from "@/hooks/useInView";
import iskcon from "@/assets/clients/iskcon.png";
import ekveera from "@/assets/clients/ekveera.png";
import ecoridge from "@/assets/clients/ecoridge.png";
import eeshanya from "@/assets/clients/eeshanya.png";
import hrInfra from "@/assets/clients/hr-infra.png";

type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "ISKCON", logo: iskcon },
  { name: "Ekveera Constructions", logo: ekveera },
  { name: "Ecoridge Infrastructures", logo: ecoridge },
  { name: "Tokyo Japan Constructions" },
  { name: "Eeshanya Infra", logo: eeshanya },
  { name: "Blubuild Infra" },
  { name: "Taj Dharamshala" },
  { name: "HR Infra", logo: hrInfra },
];

const ClientLogos = () => {
  const { ref, inView } = useInView();
  const loop = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-20 border-y border-border bg-muted/30 ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 mb-10">
        <p className="text-center text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground">
          Trusted by leading organizations
        </p>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center gap-3 md:gap-4 px-8 md:px-12 shrink-0"
              aria-label={c.name}
            >
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="h-12 md:h-14 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              ) : (
                <div className="h-12 md:h-14 w-12 md:w-14 rounded-full border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground opacity-70 group-hover:opacity-100 transition">
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <span className="whitespace-nowrap text-sm md:text-base font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
