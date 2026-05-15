import projectReligious from "@/assets/project-religious.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectConvent from "@/assets/project-convent.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectFarm from "@/assets/project-farm.jpg";
import projectLandscape from "@/assets/project-landscape.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectRoofgarden from "@/assets/project-roofgarden.jpg";
import projectGolf from "@/assets/project-golf.jpg";
import iskconNerellaHero from "@/assets/projects/iskcon-nerella-hero.jpg";
import iskconNerella1 from "@/assets/projects/iskcon-nerella-1.jpg";
import iskconNerella2 from "@/assets/projects/iskcon-nerella-2.jpg";
import iskconNerella3 from "@/assets/projects/iskcon-nerella-3.jpg";
import iskconNerella4 from "@/assets/projects/iskcon-nerella-4.jpg";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Religious"
  | "Master Plan";

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  location: string;
  year: string;
  status: string;
  category: ProjectCategory;
  section: string;
  tagline: string;
  description: string[];
  highlights: string[];
  meta: { label: string; value: string }[];
  cover: string;
  gallery: string[];
  featured?: boolean;
  driveLink?: string;
};

export const projects: Project[] = [
  {
    slug: "iskcon-master-plan-nerella",
    title: "ISKCON Master Plan – Nerella",
    location: "Nerella, India",
    year: "2024 – Ongoing",
    status: "Design Completed, Major Development Ongoing",
    category: "Master Plan",
    section: "Master Plan",
    tagline:
      "A 16-acre spiritual master plan rooted in tradition, sustainability, and community living.",
    description: [
      "A large-scale 16-acre master planning project designed for the ISKCON organization, developed with a strong focus on spirituality, sustainability, and community living.",
      "The master plan is centered around the main temple located at the Brahmasthana, with all supporting functions radiating around it.",
      "The design integrates traditional temple architecture with sustainable planning principles, ensuring natural ventilation, water management, and a serene spiritual environment.",
    ],
    highlights: [
      "Main Temple Complex",
      "Mandava House (10,000 SFT)",
      "Cottages & Residential Spaces",
      "Goshala (Cow Shelter)",
      "Annadanam Kshetram",
      "Solar Parking",
      "Water Infrastructure (Large Well + Tank)",
      "Landscape Design with Plantation Zones",
    ],
    meta: [
      { label: "Section", value: "Master Plan" },
      { label: "Site Area", value: "16 Acres" },
      { label: "Year", value: "2024 – Ongoing" },
      { label: "Status", value: "Design Completed" },
    ],
    cover: iskconNerellaHero,
    gallery: [iskconNerellaHero, iskconNerella1, iskconNerella2, iskconNerella3],
    featured: true,
    driveLink: "https://drive.google.com/drive/folders/1j0iiTJeRPsd_xPdNz6i8Fz8WONfwCKyd",
  },
  {
    slug: "moti-mahal",
    title: "Moti Mahal",
    location: "Mozamjahi Market, Hyderabad",
    year: "2019",
    status: "Completed",
    category: "Commercial",
    section: "Commercial",
    tagline: "A 63,000 SFT heritage-inspired commercial landmark in the heart of Hyderabad.",
    description: [
      "A 63,000 SFT commercial landmark project located in the heart of Hyderabad near Mozamjahi Market.",
      "The design reflects classical heritage architecture, inspired by intricate detailing and ornamentation resembling \u201CMoti\u201D (pearl-like elegance).",
      "This project stands as a city-level landmark, blending traditional aesthetics with commercial functionality.",
    ],
    highlights: [
      "6 Floors + 2 Cellars",
      "Rich façade detailing and carved elements",
      "Strong visual identity in a heritage context",
      "City-level commercial landmark",
    ],
    meta: [
      { label: "Section", value: "Commercial" },
      { label: "Built-up Area", value: "63,000 SFT" },
      { label: "Year", value: "2019" },
      { label: "Status", value: "Completed" },
    ],
    cover: projectCommercial,
    gallery: [projectCommercial, projectCommercial, projectCommercial, projectCommercial],
    featured: true,
    driveLink: "https://drive.google.com/drive/folders/1QPtvAcif0-eytmgPKhpj19PU-nqsggVp",
  },
  {
    slug: "varahi-homes-nizamabad",
    title: "Varahi Homes – Nizamabad",
    location: "Nizamabad, India",
    year: "2025 – Ongoing",
    status: "Under Development",
    category: "Residential",
    section: "Residential",
    tagline: "A modern, Vaastu-compliant residential apartment development in central Nizamabad.",
    description: [
      "A modern residential apartment development located in the heart of Nizamabad.",
      "The project focuses on efficient space utilization, modern aesthetics, and Vaastu-compliant planning.",
    ],
    highlights: [
      "Architectural Design",
      "Floor Planning",
      "Elevation Design",
      "Structural Coordination",
      "Layout Planning & Permissions",
    ],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Location", value: "Nizamabad" },
      { label: "Year", value: "2025 – Ongoing" },
      { label: "Status", value: "Under Development" },
    ],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
    featured: true,
    driveLink: "https://drive.google.com/drive/folders/1AdtkoRIoFlaoNVvYla77oWkaV7uO-k0U",
  },
  {
    slug: "hr-infra-westro-villas-attapur",
    title: "HR Infra – Westro Villas, Attapur",
    location: "Attapur, Hyderabad",
    year: "2025 – Ongoing",
    status: "Under Construction",
    category: "Residential",
    section: "Residential",
    tagline: "Premium triplex villas offering modern luxury living within compact urban layouts.",
    description: [
      "A premium villa project consisting of triplex villas with high-end design.",
      "The project reflects modern luxury living within compact urban layouts.",
    ],
    highlights: [
      "4–5 BHK Triplex Villas",
      "Grand Elevation Design",
      "Optimized Floor Planning",
      "Open Space Integration",
    ],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Plot Size", value: "~135 Sq Yards" },
      { label: "Year", value: "2025 – Ongoing" },
      { label: "Status", value: "Under Construction" },
    ],
    cover: projectRetail,
    gallery: [projectRetail, projectRetail, projectRetail, projectRetail],
    featured: true,
    driveLink: "https://drive.google.com/drive/folders/1p6EaLMgx4ZiUG0vPv8y-vMS39fGHY4lg",
  },
  {
    slug: "surabhi-medical-college-canteen",
    title: "Surabhi Medical College – Canteen",
    location: "Siddipet, India",
    year: "2024",
    status: "Completed",
    category: "Commercial",
    section: "Institutional",
    tagline: "A functional, sustainable canteen design with smart kitchen planning and climate-responsive roofing.",
    description: [
      "A functional and sustainable canteen design located in Siddipet.",
      "The project emphasizes efficiency, sustainability, and user comfort.",
    ],
    highlights: [
      "Smart Kitchen Planning & Zoning",
      "Fabrication-based Construction",
      "Climate-responsive Roofing Design",
      "Water Flow Integration Concept",
    ],
    meta: [
      { label: "Section", value: "Institutional" },
      { label: "Location", value: "Siddipet" },
      { label: "Year", value: "2024" },
      { label: "Status", value: "Completed" },
    ],
    cover: projectFarm,
    gallery: [projectFarm, projectFarm, projectFarm, projectFarm],
  },
  {
    slug: "church-parametric-chapel",
    title: "Church – Parametric Chapel",
    location: "India",
    year: "2025 – Ongoing",
    status: "Under Construction",
    category: "Religious",
    section: "Religious",
    tagline: "A parametric design-based chapel exploring modern religious architecture.",
    description: [
      "A parametric design-based chapel exploring modern religious architecture, with a strong focus on form, structure, and spiritual ambience.",
    ],
    highlights: [
      "Unique Parametric Form Development",
      "Structural Design Integration",
      "Spiritual Ambience through Form",
    ],
    meta: [
      { label: "Section", value: "Religious" },
      { label: "Plot Size", value: "~300 Sq Yards" },
      { label: "Year", value: "2025 – Ongoing" },
      { label: "Status", value: "Under Construction" },
    ],
    cover: projectReligious,
    gallery: [projectReligious, projectReligious, projectReligious, projectReligious],
  },
  {
    slug: "convent-school-rayagada",
    title: "Convent School – Rayagada Region",
    location: "Rayagada Region, India",
    year: "—",
    status: "Design",
    category: "Religious",
    section: "Institutional",
    tagline: "A 30,000 SFT institutional campus planned around a central courtyard.",
    description: [
      "A large-scale institutional project planned within 1 acre.",
      "The project focuses on student-centric spatial planning with strong architectural identity.",
    ],
    highlights: [
      "Central Courtyard Planning",
      "Functional Academic Zoning",
      "Balanced Light & Ventilation Design",
    ],
    meta: [
      { label: "Section", value: "Institutional" },
      { label: "Site Area", value: "1 Acre" },
      { label: "Built-up Area", value: "~30,000 SFT" },
      { label: "Status", value: "Design" },
    ],
    cover: projectConvent,
    gallery: [projectConvent, projectConvent, projectConvent, projectConvent],
  },
  {
    slug: "telecom-colony-villa-alwal",
    title: "Telecom Colony Villa Residence – Alwal",
    location: "Alwal, Hyderabad",
    year: "Ongoing",
    status: "Design Completed, Execution Ongoing",
    category: "Residential",
    section: "Residential",
    tagline: "A modern independent house designed for a multi-family requirement.",
    description: [
      "A modern independent house design for a multi-family requirement.",
      "Designed for 3 brothers with efficient and flexible planning.",
    ],
    highlights: [
      "Multiple Floor Plan Options",
      "Elevation Design",
      "Interior Concepts",
    ],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Plot Size", value: "135 Sq Yards" },
      { label: "Status", value: "Execution Ongoing" },
    ],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
  },
  {
    slug: "ishanya-infra-villa-development",
    title: "Ishanya Infra – Villa Development",
    location: "India",
    year: "—",
    status: "Design & Visualization",
    category: "Master Plan",
    section: "Master Plan",
    tagline: "A villa development project with complete visualization and design support.",
    description: [
      "A villa development project with complete visualization and design support.",
      "Focus on premium villa lifestyle presentation and visualization.",
    ],
    highlights: [
      "Architectural Design",
      "3D Walkthrough",
      "Concept Development",
    ],
    meta: [
      { label: "Section", value: "Master Plan" },
      { label: "Status", value: "Design & Visualization" },
    ],
    cover: projectLandscape,
    gallery: [projectLandscape, projectLandscape, projectLandscape, projectLandscape],
  },
  {
    slug: "rainbow-vistas-5-acre-development",
    title: "Rainbow Vistas – 5 Acre Development",
    location: "India",
    year: "2022",
    status: "Completed",
    category: "Master Plan",
    section: "Master Plan",
    tagline: "A large-scale plotted development focused on clear visualization for marketing.",
    description: [
      "A large-scale plotted development project, focused on clear project visualization for marketing and development.",
    ],
    highlights: [
      "Layout Planning",
      "Architectural Visualization",
      "Walkthrough Design",
    ],
    meta: [
      { label: "Section", value: "Master Plan" },
      { label: "Site Area", value: "5 Acres" },
      { label: "Plot Division", value: "~200 Sq Yards Units" },
      { label: "Year", value: "2022" },
    ],
    cover: projectOffice,
    gallery: [projectOffice, projectOffice, projectOffice, projectOffice],
  },
  {
    slug: "nikitas-villa",
    title: "Nikita's Villa",
    location: "India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A premium villa elevation project with strong visual identity.",
    description: [
      "A premium villa elevation project with strong visual identity.",
    ],
    highlights: [
      "Contemporary Elevation Design",
      "Clean façade composition",
      "Luxury residential appeal",
    ],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Status", value: "Design" },
    ],
    cover: projectRoofgarden,
    gallery: [projectRoofgarden, projectRoofgarden, projectRoofgarden, projectRoofgarden],
  },
  {
    slug: "naveen-residence-keshavaram",
    title: "Naveen Residence – Keshavaram",
    location: "Keshavaram, India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A complete residential design focused on functional planning with aesthetic elevation.",
    description: [
      "A complete residential design project focused on functional planning with aesthetic elevation.",
    ],
    highlights: ["Floor Planning", "Elevation Design"],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Built-up Area", value: "2,000 SFT" },
    ],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
  },
  {
    slug: "balreddy-residence-yadagirigutta",
    title: "Mr. Balreddy Residence – Yadagirigutta",
    location: "Yadagirigutta Region, India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A custom independent house designed around layout optimization.",
    description: [
      "A custom independent house design focused on layout optimization and residential comfort.",
    ],
    highlights: ["Floor Planning", "Residential Layout Optimization"],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Location", value: "Yadagirigutta" },
    ],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
  },
  {
    slug: "satyam-residence",
    title: "Mr. Satyam Residence",
    location: "India",
    year: "2019",
    status: "Completed",
    category: "Residential",
    section: "Residential",
    tagline: "A large residential planning project on ~1,400 sq yards.",
    description: [
      "A large residential planning project on ~1,400 sq yards with complete floor planning and spatial zoning.",
    ],
    highlights: ["Complete Floor Planning", "Spatial Zoning"],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Plot Size", value: "~1,400 Sq Yards" },
      { label: "Year", value: "2019" },
    ],
    cover: projectHospitality,
    gallery: [projectHospitality, projectHospitality, projectHospitality, projectHospitality],
  },
  {
    slug: "agaru-church",
    title: "Agaru Church",
    location: "India",
    year: "2022",
    status: "Completed",
    category: "Religious",
    section: "Religious",
    tagline: "A religious structure developed using traditional architectural principles.",
    description: [
      "A religious structure design developed with traditional architectural principles, including 3D design and concept development.",
    ],
    highlights: ["3D Design", "Concept Development"],
    meta: [
      { label: "Section", value: "Religious" },
      { label: "Year", value: "2022" },
    ],
    cover: projectReligious,
    gallery: [projectReligious, projectReligious, projectReligious, projectReligious],
  },
  {
    slug: "manikonda-commercial-building",
    title: "Manikonda Commercial Building (Mr. Anil)",
    location: "Manikonda, Hyderabad",
    year: "—",
    status: "Design",
    category: "Commercial",
    section: "Commercial",
    tagline: "A mixed-use commercial building with focused floor planning and elevation design.",
    description: [
      "A mixed-use commercial building design focused on floor planning and elevation design.",
    ],
    highlights: ["Floor Planning", "Elevation Design"],
    meta: [
      { label: "Section", value: "Commercial" },
      { label: "Location", value: "Manikonda" },
    ],
    cover: projectRetail,
    gallery: [projectRetail, projectRetail, projectRetail, projectRetail],
  },
  {
    slug: "msr-villa-floor-planning",
    title: "MSR Villa – Floor Planning",
    location: "India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A high-quality residential floor planning project for a modern villa.",
    description: [
      "A high-quality residential floor planning project, focused on efficient layout and modern villa planning concepts.",
    ],
    highlights: ["Efficient Layout", "Modern Villa Planning Concepts"],
    meta: [{ label: "Section", value: "Residential" }],
    cover: projectGolf,
    gallery: [projectGolf, projectGolf, projectGolf, projectGolf],
  },
  {
    slug: "ravi-kishore-floor-planning",
    title: "Ravi Kishore – Floor Planning",
    location: "India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A concept-driven residential planning project showcasing planning expertise.",
    description: [
      "A concept-driven residential planning project. Used as a reference model for showcasing planning expertise.",
    ],
    highlights: ["Concept-driven Planning", "Reference Model"],
    meta: [{ label: "Section", value: "Residential" }],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
  },
  {
    slug: "meghnath-reddy-residence-floor-planning",
    title: "Meghnath Reddy Residence – Floor Planning",
    location: "India",
    year: "—",
    status: "Design",
    category: "Residential",
    section: "Residential",
    tagline: "A residential planning project focused on functional design solutions.",
    description: [
      "A residential planning project focused on functional design solutions.",
    ],
    highlights: ["Functional Floor Planning", "Residential Layout"],
    meta: [{ label: "Section", value: "Residential" }],
    cover: projectHospitality,
    gallery: [projectHospitality, projectHospitality, projectHospitality, projectHospitality],
  },
  {
    slug: "vijay-thomas-residence",
    title: "Vijay Thomas Residence",
    location: "India",
    year: "—",
    status: "Completed",
    category: "Residential",
    section: "Residential",
    tagline: "A fully developed residential project from planning to execution.",
    description: [
      "A fully developed residential project, covering floor planning, elevation design, and execution support.",
    ],
    highlights: ["Floor Planning", "Elevation Design", "Execution Support"],
    meta: [
      { label: "Section", value: "Residential" },
      { label: "Status", value: "Completed" },
    ],
    cover: projectResidential,
    gallery: [projectResidential, projectResidential, projectResidential, projectResidential],
  },
];

export const signatureProjects = projects.filter((p) => p.featured);

export const getProjectBySlug = (slug?: string) =>
  projects.find((p) => p.slug === slug);

export const projectCategories: (ProjectCategory | "All Projects")[] = [
  "All Projects",
  "Residential",
  "Commercial",
  "Religious",
  "Master Plan",
];
