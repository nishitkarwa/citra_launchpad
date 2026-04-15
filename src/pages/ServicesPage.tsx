import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import servicesHero from "@/assets/services-hero.jpg";
import service3d from "@/assets/service-3d.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceMasterplan from "@/assets/service-masterplan.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

/* ── Hero ── */
const ServicesHero = () => (
  <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
    <img src={servicesHero} alt="CIIRA services" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0 bg-foreground/50" />
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

/* ── Services Grid ── */
const services = [
  {
    title: "3D Visualisation & Walkthroughs",
    desc: "Visual storytelling through cinematic renders and motion design.",
    img: service3d,
  },
  {
    title: "Commercial Architecture",
    desc: "Design‑led development tailored for business and brand impact.",
    img: serviceCommercial,
  },
  {
    title: "Development Design & Planning",
    desc: "Design‑led development tailored for business and brand impact.",
    img: serviceDesign,
  },
  {
    title: "Turnkey Construction",
    desc: "Full design‑to‑delivery execution handled by our expert team.",
    img: serviceConstruction,
  },
  {
    title: "Master Planning",
    desc: "Large‑scale campus, institutional, and mixed‑use developments.",
    img: serviceMasterplan,
  },
  {
    title: "Renovation & Adaptive Reuse",
    desc: "Redefining existing properties into modern commercial assets.",
    img: serviceRenovation,
  },
];

const ServicesGrid = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${100 + i * 80}ms` } : undefined}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-5">{s.title}</h4>
              <p className="body-default text-muted-foreground mt-2">{s.desc}</p>
              <a href="#" className="inline-block mt-3 text-sm font-medium text-primary hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ── Page ── */
const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <ServicesHero />
    <ServicesGrid />
    <Footer />
  </div>
);

export default ServicesPage;
