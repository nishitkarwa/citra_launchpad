import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import ParallaxImage from "@/components/ParallaxImage";
import { projects, signatureProjects, projectCategories } from "@/data/projects";
import projectsHero from "@/assets/projects-hero-collage.jpg";

/* ── Hero ── */
const headingLines: { text: string; italic?: boolean }[][] = [
  [{ text: "Designing" }, { text: "Spaces.", italic: true }],
  [{ text: "Building" }, { text: "Experiences.", italic: true }],
];


const subWords =
  "Exploring the intersection of structural integrity and aesthetic innovation across our global portfolio.".split(
    " "
  );

const ProjectsHero = () => (
  <section className="relative h-[75vh] min-h-[520px] w-full flex items-start justify-center overflow-hidden bg-black">
    <img
      src={projectsHero}
      alt="CITRA projects"
      className="absolute inset-0 w-full h-full object-contain md:object-cover animate-ken-burns-soft will-change-transform scale-[0.74] translate-y-[22%]"
      style={{ objectPosition: "center bottom", filter: "brightness(1.28) saturate(1.05)" }}
      width={1920}
      height={1280}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16 md:pt-20">
      <h1 className="animate-fade-in-up">
        {headingLines.map((line, li) => (
          <span key={li} className="block">
            {line.map((w, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
                {w.italic ? <em className="italic font-serif font-normal">{w.text}</em> : w.text}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p
        className="body-default text-black max-w-lg mx-auto mt-4 -translate-y-6 md:-translate-y-10 animate-fade-in-up"
        style={{ animationDelay: "160ms" }}
      >
        Exploring the intersection of structural integrity and aesthetic innovation across our global portfolio.
      </p>
    </div>
  </section>
);

/* ── Signature Projects ── */
const SignatureProjects = () => {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Signature Projects</h2>
        <p className={`body-default text-muted-foreground text-center max-w-2xl mx-auto mt-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "80ms" } : undefined}>
          A closer look at the developments that define our practice.
        </p>
        <div className="mt-14 space-y-20">
          {signatureProjects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.slug}
                className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={inView ? { animationDelay: `${100 + i * 120}ms` } : undefined}
              >
                <div className="border border-border rounded-2xl p-6 md:p-8">
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div>
                      <p className="label-caption text-primary mb-2">{p.section}</p>
                      <h3>{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {p.location} · {p.year}
                      </p>
                      <p className="body-default text-muted-foreground mt-4">{p.tagline}</p>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-foreground/80">
                        {p.highlights.slice(0, 4).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/projects/${p.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-7"
                      >
                        View Project
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <ParallaxImage
                        src={p.gallery[0] ?? p.cover}
                        alt={p.title}
                        className="rounded-xl w-full h-44 md:h-56 col-span-2"
                        loading="lazy"
                      />
                      <ParallaxImage
                        src={p.gallery[1] ?? p.cover}
                        alt={p.title}
                        className="rounded-xl w-full h-32"
                        loading="lazy"
                      />
                      <ParallaxImage
                        src={p.gallery[2] ?? p.gallery[1] ?? p.cover}
                        alt={p.title}
                        className="rounded-xl w-full h-32"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Our Work Grid ── */
const OurWork = () => {
  const { ref, inView } = useInView();
  const [active, setActive] = useState<string>("All Projects");
  const filtered =
    active === "All Projects" ? projects : projects.filter((w) => w.category === active);

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Our Work</h2>
        <p className={`body-default text-muted-foreground text-center max-w-2xl mx-auto mt-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "60ms" } : undefined}>
          Browse our full portfolio across residential, commercial, religious, and master plan projects.
        </p>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mt-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "120ms" } : undefined}>
          {projectCategories.map((c) => (
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {filtered.map((w, i) => (
            <Link
              to={`/projects/${w.slug}`}
              key={w.slug}
              className={`group ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={inView ? { animationDelay: `${120 + (i % 8) * 50}ms` } : undefined}
            >
              <div className="rounded-2xl overflow-hidden">
                <ParallaxImage
                  src={w.cover}
                  alt={w.title}
                  className="w-full h-48"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="label-caption text-primary mt-3">{w.category}</p>
              <h4 className="mt-1 text-base group-hover:text-primary transition-colors">{w.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">
                {w.location} · <span className="text-primary">{w.status}</span>
              </p>
            </Link>
          ))}
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
