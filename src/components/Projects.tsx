import { useInView } from "@/hooks/useInView";
import imgCommercial from "@/assets/project-commercial.jpg";
import imgRetail from "@/assets/project-retail.jpg";
import imgOffice from "@/assets/project-office.jpg";
import imgHospitality from "@/assets/project-hospitality.jpg";
import imgResidential from "@/assets/project-residential.jpg";

const ProjectCard = ({ img, title, category, className = "" }: { img: string; title: string; category: string; className?: string }) => (
  <div className={`relative rounded-lg overflow-hidden group ${className}`}>
    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6">
      <p className="label-caption text-primary-foreground/80 mb-1">{category}</p>
      <h4 className="text-primary-foreground">{title}</h4>
    </div>
  </div>
);

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" ref={ref} className={`section-padding ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">OUR WORK</p>
        <h2 className="mb-12">Feature Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large */}
          <ProjectCard img={imgCommercial} title="Commercial Complex Development" category="Mixed‑Use Development" className="md:col-span-2 h-[280px] md:h-[400px]" />
          {/* Medium */}
          <ProjectCard img={imgRetail} title="Retail Plaza" category="Retail Architecture" className="h-[240px] md:h-[320px]" />
          <ProjectCard img={imgOffice} title="Corporate Office" category="Commercial Interior" className="h-[240px] md:h-[320px]" />
          {/* Small + CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2">
            <ProjectCard img={imgHospitality} title="Hospitality Resort" category="Hospitality Design" className="h-[240px]" />
            <ProjectCard img={imgResidential} title="Residential Tower" category="Luxury Residential" className="h-[240px]" />
            <div className="sm:col-span-2 md:col-span-1 bg-dark text-primary-foreground rounded-lg p-8 flex flex-col justify-center">
              <h3 className="mb-3">Ready to see more?</h3>
              <p className="body-default text-primary-foreground/70 mb-6">Browse our full portfolio of completed and ongoing developments.</p>
              <a href="#projects" className="self-start rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
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
