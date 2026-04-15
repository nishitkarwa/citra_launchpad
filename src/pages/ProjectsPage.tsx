import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import projectsHero from "@/assets/projects-hero.jpg";
import projectConvent from "@/assets/project-convent.jpg";
import projectRoofgarden from "@/assets/project-roofgarden.jpg";
import projectGolf from "@/assets/project-golf.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectReligious from "@/assets/project-religious.jpg";
import projectFarm from "@/assets/project-farm.jpg";
import projectLandscape from "@/assets/project-landscape.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectResidential from "@/assets/project-residential.jpg";

/* ── Hero ── */
const ProjectsHero = () => (
  <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
    <img src={projectsHero} alt="CIIRA projects" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
      <h1 className="animate-fade-in-up">
        A Showcase of <em className="italic">Design, Detail</em> &amp; <em className="italic">Development.</em>
      </h1>
      <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: "120ms" }}>
        Exploring the intersection of structural integrity and aesthetic innovation across our global portfolio.
      </p>
    </div>
  </section>
);

/* ── Signature Projects ── */
const signatureProjects = [
  {
    title: "Piarist Convent",
    desc: "Piarist Convent is a thoughtfully planned institutional campus designed to support community living, learning, and spiritual practice through calm materials, clean lines, and efficient space planning.",
    img: projectConvent,
  },
  {
    title: "Vesella Roof Garden",
    desc: "Vesella Meadows Roof Garden transforms an elevated terrace into a serene experience‑led outdoor space with curated planting, leisure zones, and clever hardscape planning.",
    img: projectRoofgarden,
  },
  {
    title: "Golf Course Rooftop",
    desc: "Golf Course Rooftop creates an elevated outdoor environment that blends structural landscaping, comfort, focused zoning, and panoramic views for a resort‑like rooftop experience.",
    img: projectGolf,
  },
];

const SignatureProjects = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Signature Projects</h2>
        <div className="mt-14 space-y-20">
          {signatureProjects.map((p, i) => (
            <div
              key={p.title}
              className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${100 + i * 120}ms` } : undefined}
            >
              <div className="border border-border rounded-2xl p-6 md:p-8">
                <p className="label-caption text-muted-foreground mb-2">Featured</p>
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <h3>{p.title}</h3>
                    <p className="body-default text-muted-foreground mt-3">{p.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <img src={p.img} alt={p.title} className="rounded-xl w-full h-40 object-cover col-span-2" loading="lazy" />
                    <img src={p.img} alt={p.title} className="rounded-xl w-full h-32 object-cover" loading="lazy" />
                    <img src={p.img} alt={p.title} className="rounded-xl w-full h-32 object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Our Work Grid ── */
const categories = [
  "All Projects",
  "Commercial & Mixed‑Use",
  "Religious / Institutional",
  "Master Planning",
  "Farm & Experience",
  "Landscaping",
  "3D Visualisation",
];

const workItems = [
  { title: "Sri Tirumala", subtitle: "ISKCON Temple Design", location: "Bangalore, IN", status: "Completed", category: "Religious / Institutional", img: projectReligious },
  { title: "Residency 18", subtitle: "Skymark Resi. Complex", location: "Gurgaon, IN", status: "Completed", category: "Commercial & Mixed‑Use", img: projectCommercial },
  { title: "Kalyan Farms", subtitle: "Multi‑Use Agri Market", location: "Bangalore, IN", status: "Completed", category: "Farm & Experience", img: projectFarm },
  { title: "Centra Hub", subtitle: "Deccan Business Centre", location: "Bangalore, IN", status: "Completed", category: "Commercial & Mixed‑Use", img: projectRetail },
  { title: "Nadaprabhu Complex", subtitle: "Rainbow Towers Institutional", location: "Bangalore, IN", status: "Completed", category: "Master Planning", img: projectOffice },
  { title: "Meadows Jasmine", subtitle: "Silverlane Tourism Complex", location: "Mangalore, IN", status: "Completed", category: "Farm & Experience", img: projectLandscape },
  { title: "Park Avenue Villas", subtitle: "BHCDS Jabalpur", location: "Bangalore, IN", status: "Completed", category: "Commercial & Mixed‑Use", img: projectResidential },
  { title: "Landscaping", subtitle: "Golf Course Rooftop", location: "Bangalore, IN", status: "Completed", category: "Landscaping", img: projectHospitality },
];

const OurWork = () => {
  const { ref, inView } = useInView();
  const [active, setActive] = useState("All Projects");
  const filtered = active === "All Projects" ? workItems : workItems.filter((w) => w.category === active);

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Our Work</h2>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mt-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "80ms" } : undefined}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {filtered.map((w, i) => (
            <div
              key={w.title + i}
              className={`group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${120 + i * 60}ms` } : undefined}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 text-base">{w.title}</h4>
              <p className="text-sm text-muted-foreground">{w.subtitle}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {w.location} · <span className="text-primary">{w.status}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
          >
            Load More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── Page ── */
const ProjectsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <ProjectsHero />
    <SignatureProjects />
    <OurWork />
    <Footer />
  </div>
);

export default ProjectsPage;
