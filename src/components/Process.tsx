import { useInView } from "@/hooks/useInView";
import { Compass, PencilRuler, HardHat, KeyRound, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Compass,
    title: "Analyse",
    body: "Site, zoning, market & financial viability assessed up front.",
    tags: ["Site study", "Zoning", "Feasibility"],
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "Design",
    body: "Concepts, 3D renders & spatial strategy aligned to budget.",
    tags: ["Concepts", "3D renders", "Spatial strategy"],
  },
  {
    step: "03",
    icon: HardHat,
    title: "Build",
    body: "Approvals, contractors, materials & on-site execution managed.",
    tags: ["Approvals", "Coordination", "Execution"],
  },
  {
    step: "04",
    icon: KeyRound,
    title: "Deliver",
    body: "Quality control, timelines and a smooth handover at every stage.",
    tags: ["QC", "On-time", "Handover"],
  },
];

const Process = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>HOW WE WORK</p>
            <h2
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={inView ? { animationDelay: "80ms" } : undefined}
            >
              Our End‑to‑End Process
            </h2>
          </div>
          <p
            className={`body-default text-muted-foreground max-w-md ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            Four disciplined phases — from raw land and brief to a fully delivered, commercially optimised development.
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" aria-hidden />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`relative ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={inView ? { animationDelay: `${120 + i * 100}ms` } : undefined}
                >
                  {/* icon node on the line */}
                  <div className="hidden lg:flex absolute -top-0 left-7 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center ring-8 ring-secondary z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="bg-background border border-border rounded-2xl p-6 lg:pt-20 h-full flex flex-col transition-transform duration-500 ease-out hover:-translate-y-8 hover:scale-105 will-change-transform">
                    {/* mobile icon */}
                    <div className="lg:hidden w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="label-caption text-primary">Step {s.step}</span>
                      {i < steps.length - 1 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-muted-foreground/40" />
                      )}
                    </div>

                    <h4 className="mb-2 text-xl">{s.title}</h4>
                    <p className="body-default text-muted-foreground mb-5">{s.body}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-foreground/70 border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
