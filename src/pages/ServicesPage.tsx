import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/service_hero.png";
import imgResidential from "@/assets/project-residential.jpg";
import imgCommercial from "@/assets/service-commercial.jpg";
import imgReligious from "@/assets/project-religious.jpg";
import imgMasterplan from "@/assets/service-masterplan.jpg";
import imgConstruction from "@/assets/service-construction.jpg";
import imgDesignConsult from "@/assets/service-3d.jpg";
import imgPermission from "@/assets/service-collab.jpg";

/* ── Hero ── */
const ServicesHero = () => (
  <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
    <img src={servicesHero} alt="CITRA services" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
    <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
      <h1 className="animate-fade-in-up">
        Comprehensive <em className="italic">Design</em> and <em className="italic">Development</em> for Business‑Focused Projects
      </h1>
      <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
        Building the future with vision &amp; precision. We transform abstract ideas into concrete reality through a structured, multi‑disciplinary approach.
      </p>
    </div>
  </section>
);

/* ── Service Group ── */
type SubService = { title: string; desc: string; img: string };
type Group = { number: string; title: string; intro: string; subs: SubService[] };

const groups: Group[] = [
  {
    number: "01",
    title: "Architecture",
    intro:
      "Design-led architecture across every typology — from intimate homes to large-scale master plans, with cultural and contextual sensitivity at the core.",
    subs: [
      {
        title: "Residential",
        desc: "Homes, villas, and multi-family residences designed around the way people actually live.",
        img: imgResidential,
      },
      {
        title: "Commercial",
        desc: "Offices, retail, and mixed-use developments that elevate brand and footfall.",
        img: imgCommercial,
      },
      {
        title: "Cultural / Religious Projects",
        desc: "Places of worship, memorials, and cultural buildings designed with reverence and craft.",
        img: imgReligious,
      },
      {
        title: "Master Plan",
        desc: "Strategic land-use planning for large, multi-phase, mixed-use developments.",
        img: imgMasterplan,
      },
    ],
  },
  {
    number: "02",
    title: "Turnkey",
    intro:
      "End-to-end execution where we take ownership of the entire delivery — so you get a finished space without the coordination burden.",
    subs: [
      {
        title: "Construction",
        desc: "Full-scope construction management with our trusted network of contractors and trades.",
        img: imgConstruction,
      },
      {
        title: "Design Consultation",
        desc: "Expert guidance on feasibility, design strategy, and project direction at any phase.",
        img: imgDesignConsult,
      },
    ],
  },
  {
    number: "03",
    title: "Permission",
    intro:
      "Specialist services for other companies — we handle land documentation and government permissions so your project stays compliant and on schedule.",
    subs: [
      {
        title: "Land Papers & Approvals",
        desc: "Acquiring land titles, clearances, and the regulatory paperwork required to break ground.",
        img: imgPermission,
      },
    ],
  },
];

const GroupSection = ({ group, isLast }: { group: Group; isLast: boolean }) => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className={`section-padding ${isLast ? "" : "border-b border-border"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
              {group.number} — Service
            </p>
            <h2
              className={`mb-5 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: "80ms" } : undefined}
            >
              {group.title}
            </h2>
            <p
              className={`body-default text-muted-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: "160ms" } : undefined}
            >
              {group.intro}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className={`grid ${group.subs.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"} gap-6`}>
              {group.subs.map((s, i) => (
                <div
                  key={s.title}
                  className={`group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={inView ? { animationDelay: `${200 + i * 80}ms` } : undefined}
                >
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="mt-5">{s.title}</h4>
                  <p className="body-default text-muted-foreground mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGroups = () => (
  <>
    {groups.map((g, i) => (
      <GroupSection key={g.title} group={g} isLast={i === groups.length - 1} />
    ))}
  </>
);

const CTA = () => (
  <section className="section-padding bg-secondary">
    <div className="container mx-auto px-6 lg:px-8 text-center max-w-2xl">
      <h2 className="mb-4">Have a project in mind?</h2>
      <p className="body-default text-muted-foreground mb-8">
        Let's talk about how CITRA can bring your vision from concept to completion.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <ServicesHero />
    <ServicesGroups />
    <CTA />
    <Footer />
  </div>
);

export default ServicesPage;
