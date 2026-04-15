import { useInView } from "@/hooks/useInView";
import imgCollab from "@/assets/service-collab.jpg";
import imgDesign from "@/assets/service-design.jpg";
import imgCommercial from "@/assets/service-commercial.jpg";
import imgConstruction from "@/assets/service-construction.jpg";
import imgMasterplan from "@/assets/service-masterplan.jpg";
import img3d from "@/assets/service-3d.jpg";

const services = [
  { img: imgCollab, title: "Collaborative Development", body: "We work alongside your internal teams and stakeholders to ensure every decision reflects your commercial vision and operational needs." },
  { img: imgDesign, title: "Development Design", body: "Full architectural design services from feasibility studies and concept drawings through to technical documentation and regulatory submissions." },
  { img: imgCommercial, title: "Commercial Architecture", body: "Purpose‑built commercial spaces designed for maximum footfall, brand expression, and long‑term asset value." },
  { img: imgConstruction, title: "Turnkey Construction", body: "We take full ownership of the build phase, coordinating all contractors, trades, and suppliers so you receive a finished space with zero headaches." },
  { img: imgMasterplan, title: "Master Planning", body: "Strategic land use and development planning that maximises the potential of large‑scale or multi‑phase sites." },
  { img: img3d, title: "3D Visualisation", body: "Photorealistic renders and spatial walkthroughs that bring your project to life before ground is even broken." },
];

const Services = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" ref={ref} className={`section-padding ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto">
        <p className="label-caption text-primary mb-4">WHAT WE DO</p>
        <h2 className="mb-4">Core Services</h2>
        <p className="body-default text-muted-foreground max-w-2xl mb-12">Comprehensive solutions at every phase of your development journey.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg overflow-hidden border border-border">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-8">
                <h4 className="mb-2">{s.title}</h4>
                <p className="body-default text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
