import projectReligious from "@/assets/project-religious.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectRetail from "@/assets/project-retail.jpg";

export type SignatureProject = {
  slug: string;
  title: string;
  location: string;
  year: string;
  status: string;
  section: string;
  tagline: string;
  description: string[];
  highlights: string[];
  meta: { label: string; value: string }[];
  cover: string;
  gallery: string[];
  driveLink?: string;
};

export const signatureProjects: SignatureProject[] = [
  {
    slug: "iskcon-master-plan-nerella",
    title: "ISKCON Master Plan – Nerella",
    location: "Nerella, India",
    year: "2024 – Ongoing",
    status: "Design Completed, Major Development Ongoing",
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
    cover: projectReligious,
    gallery: [projectReligious, projectReligious, projectReligious, projectReligious],
    driveLink:
      "https://drive.google.com/drive/folders/1j0iiTJeRPsd_xPdNz6i8Fz8WONfwCKyd",
  },
  {
    slug: "moti-mahal",
    title: "Moti Mahal",
    location: "Mozamjahi Market, Hyderabad",
    year: "2019 – Completed",
    status: "Completed",
    section: "Commercial",
    tagline:
      "A 63,000 SFT heritage-inspired commercial landmark in the heart of Hyderabad.",
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
    driveLink:
      "https://drive.google.com/drive/folders/1QPtvAcif0-eytmgPKhpj19PU-nqsggVp",
  },
  {
    slug: "varahi-homes-nizamabad",
    title: "Varahi Homes – Nizamabad",
    location: "Nizamabad, India",
    year: "2025 – Ongoing",
    status: "Under Development",
    section: "Residential",
    tagline:
      "A modern, Vaastu-compliant residential apartment development in central Nizamabad.",
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
    driveLink:
      "https://drive.google.com/drive/folders/1AdtkoRIoFlaoNVvYla77oWkaV7uO-k0U",
  },
  {
    slug: "hr-infra-westro-villas-attapur",
    title: "HR Infra – Westro Villas, Attapur",
    location: "Attapur, Hyderabad",
    year: "2025 – Ongoing",
    status: "Under Construction",
    section: "Residential",
    tagline:
      "Premium triplex villas offering modern luxury living within compact urban layouts.",
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
    driveLink:
      "https://drive.google.com/drive/folders/1p6EaLMgx4ZiUG0vPv8y-vMS39fGHY4lg",
  },
];

export const getProjectBySlug = (slug?: string) =>
  signatureProjects.find((p) => p.slug === slug);
