import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import AnimatedNumber from "@/components/AnimatedNumber";
import aboutHero from "@/assets/about-hero.jpg";
import aboutBuilding from "@/assets/about-building.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import team7 from "@/assets/team-7.jpg";

/* ── Hero ── */
const AboutHero = () => (
  <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
    <img src={aboutHero} alt="CIIRA headquarters" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 text-center text-primary-foreground px-6">
      <p className="label-caption text-primary mb-4 animate-fade-in-up">About Us</p>
      <h1 className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        Design. Develop. Deliver.
      </h1>
      <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        End‑to‑End Architecture, Development, and Construction Services.
      </p>
    </div>
  </section>
);

/* ── About Section ── */
const AboutSection = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={inView ? "animate-fade-in-up" : "opacity-0"}>
            <img src={aboutBuilding} alt="CIIRA project" className="rounded-2xl w-full h-[400px] md:h-[480px] object-cover" loading="lazy" width={640} height={800} />
          </div>
          <div>
            <p className={`label-caption text-primary mb-3 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>WHO WE ARE</p>
            <h2 className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "80ms" } : undefined}>
              About CIIRA
            </h2>
            <div className={`mt-6 space-y-4 body-default text-muted-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "160ms" } : undefined}>
              <p>• CIIRA is a business‑focused architecture and construction firm based in Hyderabad, India.</p>
              <p>• We specialise in end‑to‑end real estate development — from design and 3D visualisation to project execution. Our approach combines analytical thinking, construction expertise, and market insight, helping clients build projects that perform as assets.</p>
            </div>
            <a
              href="/contact"
              className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: "240ms" } : undefined}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Stats ── */
const stats = [
  { value: "70+", label: "Satisfied Clients" },
  { value: "15+", label: "Years of Excellence" },
  { value: "100%", label: "On‑Time Completion" },
  { value: "200+", label: "Projects Delivered" },
];

const Stats = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${i * 100}ms` } : undefined}
            >
              <p className="text-[40px] md:text-[52px] font-bold leading-none text-foreground"><AnimatedNumber value={s.value} inView={inView} /></p>
              <p className="label-caption text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Capability ── */
const capabilities = [
  {
    title: "Analysis",
    desc: "Feasibility study & site evaluation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 24V14M16 24V8M24 24V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Design",
    desc: "Architectural planning & blueprints",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 26L26 6M6 6v20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Construction",
    desc: "Project management & execution",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="14" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 6v8M10 14l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Fit‑out",
    desc: "Interior detailing & furnishing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="18" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M8 18v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6M10 22v4M22 22v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Branding",
    desc: "Identity integration & handover",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/><path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const Capability = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className={inView ? "animate-fade-in-up" : "opacity-0"}>End‑to‑End Capability</h2>
        <p className={`body-default text-muted-foreground max-w-2xl mx-auto mt-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "80ms" } : undefined}>
          From the first sketch to the final handover, our integrated team handles every stage of your project.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-14">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`flex flex-col items-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${120 + i * 80}ms` } : undefined}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h4 className="text-base font-semibold">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Leaders ── */
const leaders = [
  { name: "Ar. Ravi", title: "Founding Principal & Creative Director", img: leader1 },
  { name: "Mr. P. Goel", title: "Joint Director & Management Head", img: leader2 },
];

const Leaders = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className={inView ? "animate-fade-in-up" : "opacity-0"}>Our Leaders</h2>
        <div className="flex flex-wrap justify-center gap-12 mt-14">
          {leaders.map((l, i) => (
            <div
              key={l.name}
              className={`w-56 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${100 + i * 120}ms` } : undefined}
            >
              <img src={l.img} alt={l.name} className="w-48 h-56 object-cover rounded-2xl mx-auto" loading="lazy" width={512} height={640} />
              <h4 className="mt-4 text-lg">{l.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{l.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Team ── */
const teamMembers = [
  { name: "Pawan", title: "Sr. Site Engineer", img: team1 },
  { name: "Ar. Nandini", title: "Design Director", img: team2 },
  { name: "Akhil Kalyan", title: "3D Artist", img: team3 },
  { name: "Vaishali", title: "Junior Architect", img: team4 },
  { name: "Ganesh", title: "Project Manager", img: team5 },
  { name: "Veena Ramani", title: "Planning Lead", img: team6 },
  { name: "Sanjeev Kanakarthi", title: "Civil Analyst", img: team7 },
];

const Team = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className={inView ? "animate-fade-in-up" : "opacity-0"}>Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-14">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${80 + i * 60}ms` } : undefined}
            >
              <img src={m.img} alt={m.name} className="w-36 h-44 object-cover rounded-2xl mx-auto" loading="lazy" width={512} height={640} />
              <h4 className="mt-3 text-base">{m.name}</h4>
              <p className="text-sm text-muted-foreground mt-0.5">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CTA ── */
const CTA = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding bg-dark text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className={inView ? "animate-fade-in-up" : "opacity-0"}>Ready to build?</h2>
        <p className={`body-large text-primary-foreground/70 max-w-xl mx-auto mt-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "80ms" } : undefined}>
          Let's turn your vision into reality. Partner with CIIRA for your next landmark.
        </p>
        <a
          href="/#contact"
          className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "160ms" } : undefined}
        >
          Discuss a Project
        </a>
      </div>
    </section>
  );
};

/* ── Badges ── */
const Badges = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-12 border-t border-border">
      <div className={`container mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-8 label-caption text-muted-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
        <span>Certified Architects</span>
        <span className="hidden md:inline">|</span>
        <span>Strategic Designers</span>
        <span className="hidden md:inline">|</span>
        <span>Trusted Developers</span>
      </div>
    </section>
  );
};

/* ── Page ── */
const AboutUs = () => (
  <div className="min-h-screen">
    <Navbar />
    <AboutHero />
    <AboutSection />
    <Stats />
    <Capability />
    <Leaders />
    <Team />
    <CTA />
    <Badges />
    <Footer />
  </div>
);

export default AboutUs;
