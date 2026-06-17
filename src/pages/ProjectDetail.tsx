import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { useInView } from "@/hooks/useInView";
import ParallaxImage from "@/components/ParallaxImage";
import { getProjectBySlug, signatureProjects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { ref, inView } = useInView();

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-center px-6 pt-24">
          <div>
            <p className="label-caption text-primary mb-3">404</p>
            <h1 className="mb-4">Project not found</h1>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
            >
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const others = signatureProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = () =>
    setLightboxIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));

  const goToNext = () =>
    setLightboxIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.title} - ${project.section} project by CITRA Associates in ${project.location}`}
          className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns will-change-transform"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pb-16 text-primary-foreground">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6 animate-fade-in-up"
          >
            <ArrowLeft size={16} /> All Projects
          </Link>
          <p className="label-caption text-primary mb-3 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            {project.section}
          </p>
          <h1 className="max-w-4xl animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <span className="inline-flex items-center gap-2"><MapPin size={14} />{project.location}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={14} />{project.year}</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" />{project.status}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section ref={ref} className="section-padding">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className={`label-caption text-primary mb-3 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>OVERVIEW</p>
            <h2 className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "80ms" } : undefined}>
              {project.tagline}
            </h2>
            <div className={`mt-6 space-y-4 body-default text-muted-foreground ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "160ms" } : undefined}>
              {project.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className={`rounded-2xl border border-border p-6 md:p-7 h-fit ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "240ms" } : undefined}>
            <p className="label-caption text-muted-foreground mb-4">Project Facts</p>
            <dl className="space-y-4">
              {project.meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</dt>
                  <dd className="text-sm font-medium text-foreground mt-1">{m.value}</dd>
                </div>
              ))}
            </dl>
            {project.driveLink && (
              <a
                href={project.driveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-6 hover:underline"
              >
                View Reference Drive <ExternalLink size={14} />
              </a>
            )}
          </aside>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-secondary/40 border border-border p-8 md:p-12">
            <h3 className="mb-8">Project Highlights</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 body-default text-foreground/85">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="label-caption text-primary mb-3">GALLERY</p>
          <h2 className="mb-10">Visual Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2 h-[300px] md:h-[520px]" : "h-[240px]"}`}
              >
                <img
                  src={g}
                  alt={`${project.title} ${project.location} - ${project.section} architecture by CITRA Associates, image ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Placeholder visuals — final imagery to be added.</p>
        </div>
      </section>

      {/* Other projects */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <h3>Explore Other Projects</h3>
            <Link to="/projects" className="text-sm font-medium text-primary hover:underline">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/projects/${o.slug}`} className="group">
                <div className="rounded-2xl overflow-hidden">
                  <ParallaxImage
                    src={o.cover}
                    alt={o.title}
                    className="w-full h-56"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="label-caption text-primary mt-4">{o.section}</p>
                <h4 className="mt-1 text-lg">{o.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{o.location} · {o.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2>Have a similar project in mind?</h2>
          <p className="body-large text-primary-foreground/70 max-w-xl mx-auto mt-4">
            Let's discuss how CITRA can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-8"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
