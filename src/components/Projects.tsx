import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import ParallaxImage from "@/components/ParallaxImage";
import iskconNerellaHero from "@/assets/projects/iskcon-nerella-hero.jpg";
import motiMahalHero from "@/assets/projects/moti-mahal-hero.jpg";
import varahiHero from "@/assets/projects/varahi-hero.png";
import westroHero from "@/assets/projects/westro-hero.png";
import chapelHero from "@/assets/projects/chapel-hero.png";

const ProjectCard = ({
  img,
  title,
  category,
  to,
  className = "",
}: {
  img: string;
  title: string;
  category: string;
  to: string;
  className?: string;
}) => (
  <Link to={to} className={`relative rounded-2xl overflow-hidden group cursor-pointer block ${className}`}>
    <ParallaxImage
      src={img}
      alt={title}
      className="absolute inset-0 w-full h-full"
      imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
    <div className="absolute bottom-0 left-0 p-5 md:p-7">
      <p className="label-caption text-primary mb-1.5">{category}</p>
      <h4 className="text-primary-foreground text-lg md:text-xl">{title}</h4>
    </div>
  </Link>
);


const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>OUR WORK</p>
            <h2
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={inView ? { animationDelay: "80ms" } : undefined}
            >
              Feature Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className={`rounded-full border-[1.5px] border-primary px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors self-start md:self-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`md:col-span-2 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "120ms" } : undefined}>
            <ProjectCard
              img={iskconNerellaHero}
              title="ISKCON Master Plan – Nerella"
              category="Master Plan"
              to="/projects/iskcon-master-plan-nerella"
              className="h-[280px] md:h-[420px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "240ms" } : undefined}>
            <ProjectCard
              img={motiMahalHero}
              title="Moti Mahal"
              category="Commercial"
              to="/projects/moti-mahal"
              className="h-[240px] md:h-[340px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "360ms" } : undefined}>
            <ProjectCard
              img={varahiHero}
              title="Varahi Homes – Nizamabad"
              category="Residential"
              to="/projects/varahi-homes-nizamabad"
              className="h-[240px] md:h-[340px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "480ms" } : undefined}>
            <ProjectCard
              img={westroHero}
              title="HR Infra – Westro Villas"
              category="Residential"
              to="/projects/hr-infra-westro-villas-attapur"
              className="h-[240px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "560ms" } : undefined}>
            <ProjectCard
              img={chapelHero}
              title="Parametric Chapel"
              category="Religious"
              to="/projects/church-parametric-chapel"
              className="h-[240px]"
            />
          </div>
          <div className={`${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "640ms" } : undefined}>
          <div className="bg-dark text-primary-foreground rounded-2xl p-8 flex flex-col justify-center h-[240px]">
            <h3 className="mb-3 text-xl md:text-2xl">Ready to see more?</h3>
            <p className="body-default text-primary-foreground/60 mb-6">
              Browse our full portfolio of completed and ongoing developments.
            </p>
            <Link
              to="/projects"
              className="self-start rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
            >
              View All Projects
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
