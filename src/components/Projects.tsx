import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import ParallaxImage from "@/components/ParallaxImage";
import imgCommercial from "@/assets/project-commercial.jpg";
import imgRetail from "@/assets/project-retail.jpg";
import imgOffice from "@/assets/project-office.jpg";
import imgHospitality from "@/assets/project-hospitality.jpg";
import imgResidential from "@/assets/project-residential.jpg";

const ProjectCard = ({
  img,
  title,
  category,
  className = "",
}: {
  img: string;
  title: string;
  category: string;
  className?: string;
}) => (
  <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${className}`}>
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
  </div>
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
          <a
            href="#projects"
            className={`rounded-full border-[1.5px] border-primary px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors self-start md:self-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "160ms" } : undefined}
          >
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`md:col-span-2 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "120ms" } : undefined}>
            <ProjectCard
              img={imgCommercial}
              title="Commercial Complex Development"
              category="Mixed‑Use Development"
              className="h-[280px] md:h-[420px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "240ms" } : undefined}>
            <ProjectCard
              img={imgRetail}
              title="Retail Plaza"
              category="Retail Architecture"
              className="h-[240px] md:h-[340px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "360ms" } : undefined}>
            <ProjectCard
              img={imgOffice}
              title="Corporate Office"
              category="Commercial Interior"
              className="h-[240px] md:h-[340px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "480ms" } : undefined}>
            <ProjectCard
              img={imgHospitality}
              title="Hospitality Resort"
              category="Hospitality Design"
              className="h-[240px]"
            />
          </div>
          <div className={inView ? "animate-fade-in-up" : "opacity-0"} style={inView ? { animationDelay: "560ms" } : undefined}>
            <ProjectCard
              img={imgResidential}
              title="Residential Tower"
              category="Luxury Residential"
              className="h-[240px]"
            />
          </div>
          <div className={`${inView ? "animate-fade-in-up" : "opacity-0"}`} style={inView ? { animationDelay: "640ms" } : undefined}>
          <div className="bg-dark text-primary-foreground rounded-2xl p-8 flex flex-col justify-center h-[240px]">
            <h3 className="mb-3 text-xl md:text-2xl">Ready to see more?</h3>
            <p className="body-default text-primary-foreground/60 mb-6">
              Browse our full portfolio of completed and ongoing developments.
            </p>
            <a
              href="#projects"
              className="self-start rounded-full bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
            >
              View All Projects
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
