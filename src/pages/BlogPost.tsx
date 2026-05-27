import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogData } from "@/data/blogData";
import ParallaxImage from "@/components/ParallaxImage";
import { useInView } from "@/hooks/useInView";

// Curated architectural image pool from existing assets
import aboutBuilding from "@/assets/about-building.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import contactHero from "@/assets/contact-hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import heroDesert from "@/assets/hero-desert-house.jpg";
import heroMain from "@/assets/hero.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectConvent from "@/assets/project-convent.jpg";
import projectFarm from "@/assets/project-farm.jpg";
import projectGolf from "@/assets/project-golf.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectLandscape from "@/assets/project-landscape.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectReligious from "@/assets/project-religious.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectRoofgarden from "@/assets/project-roofgarden.jpg";
import projectsHero from "@/assets/projects-hero.jpg";
import projectsHeroCollage from "@/assets/projects-hero-collage.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceMasterplan from "@/assets/service-masterplan.jpg";
import serviceCollab from "@/assets/service-collab.jpg";
import service3d from "@/assets/service-3d.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";

type Post = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt?: string;
  image?: string;
  coverImage?: string;
  heroImage?: string;
  detailImage?: string;
  content?: string;
};

// Intelligent internal linking — curated per topic
const RELATED: Record<number, number[]> = {
  1: [14, 17, 8],
  2: [11, 14, 17],
  3: [16, 13, 20],
  4: [17, 8, 1],
  5: [1, 7, 17],
  6: [10, 19, 18],
  7: [13, 8, 5],
  8: [1, 4, 13],
  9: [16, 19, 20],
  10: [19, 18, 6],
  11: [2, 14, 17],
  12: [1, 3, 14],
  13: [3, 7, 16],
  14: [11, 17, 1],
  15: [20, 17, 11],
  16: [3, 19, 13],
  17: [1, 14, 11],
  18: [10, 19, 1],
  19: [16, 10, 18],
  20: [11, 15, 17],
};

// Category-based image pools for galleries / alternating sections
const POOLS: Record<string, string[]> = {
  Residential: [projectResidential, hero4, hero2, projectFarm, projectRoofgarden, projectLandscape, aboutBuilding],
  Design: [serviceDesign, hero3, aboutBuilding, hero4, projectResidential, projectOffice, hero2],
  Sustainability: [projectRoofgarden, projectLandscape, projectFarm, serviceMasterplan, projectGolf, aboutHero],
  Process: [serviceCollab, service3d, serviceConstruction, projectResidential, heroMain, serviceRenovation],
  Architecture: [projectHospitality, projectCommercial, projectOffice, projectConvent, hero5, aboutBuilding],
  Technology: [service3d, serviceConstruction, contactHero, projectOffice, hero5, serviceMasterplan],
  Culture: [projectsHero, projectsHeroCollage, projectConvent, projectReligious, aboutBuilding, heroMain],
  Commercial: [projectCommercial, projectRetail, projectOffice, serviceCommercial, projectHospitality, hero5],
  Landscape: [projectLandscape, projectRoofgarden, projectGolf, projectFarm, aboutHero, heroDesert],
  Philosophy: [projectConvent, projectReligious, heroMain, aboutBuilding, hero3, projectResidential],
  Urbanism: [serviceMasterplan, projectsHero, projectsHeroCollage, projectCommercial, projectRetail, contactHero],
  Interior: [hero4, hero2, hero3, serviceDesign, projectResidential, aboutBuilding],
  Market: [projectCommercial, projectRetail, projectOffice, serviceCommercial, hero5, projectHospitality],
};

const FALLBACK_POOL = [heroMain, aboutBuilding, projectResidential, projectLandscape, serviceDesign, hero4];

// Material palettes per category mood
const MATERIALS: Record<string, { name: string; tone: string; color: string }[]> = {
  warm: [
    { name: "Travertine", tone: "Honed limestone", color: "#E8E1D5" },
    { name: "European Oak", tone: "Brushed timber", color: "#C9A77A" },
    { name: "Brushed Brass", tone: "Warm metal", color: "#A37E4B" },
    { name: "Linen Plaster", tone: "Soft render", color: "#D8CFC0" },
  ],
  eco: [
    { name: "Rammed Earth", tone: "Local soil", color: "#B7956A" },
    { name: "Reclaimed Teak", tone: "Aged timber", color: "#7A5A3E" },
    { name: "Permeable Stone", tone: "Natural paving", color: "#A89F90" },
    { name: "Living Green", tone: "Vertical garden", color: "#6E8E5C" },
  ],
  tech: [
    { name: "Architectural Concrete", tone: "Fair-faced", color: "#B7B5AE" },
    { name: "Bronze Mesh", tone: "Patinated metal", color: "#6B523A" },
    { name: "Smoked Glass", tone: "Tinted glazing", color: "#3F4448" },
    { name: "Honed Granite", tone: "Dense stone", color: "#2E2E2E" },
  ],
};

const PALETTE_BY_CATEGORY: Record<string, keyof typeof MATERIALS> = {
  Residential: "warm", Interior: "warm", Design: "warm", Philosophy: "warm",
  Sustainability: "eco", Landscape: "eco", Urbanism: "eco",
  Technology: "tech", Process: "tech", Commercial: "tech", Market: "tech",
  Architecture: "tech", Culture: "tech",
};

// Principles (4 cards) — curated, semi-generic but elegant
const PRINCIPLES = [
  { num: "01", title: "Considered Proportion", desc: "Every dimension tuned to the human body and the architectural whole." },
  { num: "02", title: "Material Honesty", desc: "Surfaces chosen for how they age, weather and reveal their making." },
  { num: "03", title: "Choreographed Light", desc: "Daylight as a primary material — modulated, framed and celebrated." },
  { num: "04", title: "Quiet Detailing", desc: "Junctions resolved with restraint so the architecture speaks calmly." },
];

const pickPool = (cat: string) => POOLS[cat] || FALLBACK_POOL;

// Scroll-triggered fade-in wrapper
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[900ms] ease-out`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Reading progress bar
const ReadingProgress: React.FC = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (scrolled / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40 transition-[width] duration-150 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  );
};

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string | undefined;
  const posts = blogData as unknown as Post[];
  const post = slug ? posts.find((b) => b.slug === slug) : undefined;
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(false);
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, [slug]);

  if (!post) {
    return (
      <main className="bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-6">
          <h1 className="text-foreground">Post not found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block hover:underline">← Back to blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const hero = post.heroImage || post.detailImage || post.coverImage || post.image || heroMain;
  const pool = pickPool(post.category);
  const paragraphs: string[] = post.content
    ? String(post.content).split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
    : [];

  // Split intro vs body sections
  const intro = paragraphs[0] || post.excerpt || "";
  const sections = paragraphs.slice(1).map((para) => {
    const m = para.match(/^([^:]{3,60}):\s*(.*)$/s);
    return m ? { heading: m[1].trim(), body: m[2].trim() } : { heading: "", body: para };
  });

  // Pull a pull-quote: first sentence of section 2 or excerpt
  const quoteSource = sections[1]?.body || sections[0]?.body || post.excerpt || "";
  const pullQuote = (quoteSource.split(/(?<=\.)\s/)[0] || quoteSource).slice(0, 220);

  const paletteKey = PALETTE_BY_CATEGORY[post.category] || "warm";
  const materials = MATERIALS[paletteKey];

  const related = (RELATED[post.id] || [])
    .map((id) => posts.find((p) => p.id === id))
    .filter(Boolean) as Post[];

  // Cinematic stats — derived/curated
  const stats = [
    { value: "15+", label: "Years of craft" },
    { value: "100+", label: "Spaces realised" },
    { value: "98%", label: "Client retention" },
  ];

  return (
    <main className="bg-[#F7F4EF] text-foreground">
      <ReadingProgress />
      <Navbar />

      {/* CINEMATIC HERO */}
      <section className="relative w-full h-[92vh] min-h-[640px] overflow-hidden">
        <img
          src={hero}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            transform: heroLoaded ? "scale(1.02)" : "scale(1.12)",
            transition: "transform 1800ms cubic-bezier(.2,.7,.2,1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 lg:px-10 pb-20 md:pb-28">
            <div
              className="max-w-4xl text-white"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 1200ms ease, transform 1200ms ease",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase border border-white/40 px-3 py-1 rounded-full backdrop-blur-md bg-white/10">
                  {post.category}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/70">
                  {post.date} · {post.readTime}
                </span>
              </div>
              <h1 className="font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.015em]">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-white/70">
                <span className="w-10 h-px bg-white/50" />
                <span>Citra Editorial</span>
              </div>
            </div>
          </div>
        </div>
        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[10px] tracking-[0.4em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10 max-w-4xl">
          <Reveal>
            <p className="text-[22px] md:text-[28px] leading-[1.55] font-light text-foreground/85 tracking-[-0.005em]">
              {intro.replace(/^Introduction:\s*/i, "")}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <span>Written by Citra Studio</span>
              <span className="w-12 h-px bg-foreground/20" />
              <span>{post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALTERNATING SECTIONS */}
      {sections.slice(0, 4).map((sec, i) => {
        const img = pool[i % pool.length];
        const reverse = i % 2 === 1;
        return (
          <section key={i} className="py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-10">
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <Reveal className="lg:col-span-7">
                  <div className="overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
                    <ParallaxImage
                      src={img}
                      alt={sec.heading || post.title}
                      className="w-full h-[380px] md:h-[520px]"
                      strength={50}
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className="lg:col-span-5">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </div>
                  {sec.heading && (
                    <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-[-0.01em] mb-6">
                      {sec.heading}
                    </h2>
                  )}
                  <p className="text-base md:text-[17px] leading-[1.85] text-foreground/75 font-light">
                    {sec.body}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* PULL QUOTE — full-width image break */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden my-12">
        <ParallaxImage
          src={pool[(sections.length) % pool.length] || pool[0]}
          alt="Editorial break"
          className="absolute inset-0 w-full h-full"
          strength={90}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex items-center justify-center px-6">
          <Reveal>
            <blockquote className="max-w-4xl text-center text-white">
              <div className="text-[60px] md:text-[90px] leading-none font-serif opacity-40 mb-4">“</div>
              <p className="text-2xl md:text-4xl font-light leading-[1.35] tracking-[-0.01em]">
                {pullQuote}
              </p>
              <div className="mt-8 text-[11px] tracking-[0.35em] uppercase text-white/70">
                Citra Design Principle
              </div>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* MATERIAL PALETTE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Material Palette</div>
              <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-[-0.01em]">
                The textures behind the architecture
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden border border-foreground/10 bg-white/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                  <div
                    className="h-44 md:h-56 w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundColor: m.color }}
                  />
                  <div className="p-5">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{m.tone}</div>
                    <div className="text-lg font-light mt-1">{m.name}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES CARDS */}
      <section className="py-20 md:py-28 bg-[#EFE9DF]">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7">
                <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">Design Principles</div>
                <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-[-0.01em]">
                  Four ideas that shape every Citra space.
                </h2>
              </div>
              <p className="lg:col-span-5 text-foreground/70 font-light leading-relaxed">
                Whether the brief is a private villa or a mixed-use precinct, the same discipline anchors our work.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white/70 backdrop-blur-md border border-foreground/5 p-7 transition-all duration-500 hover:bg-foreground hover:text-background hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
                  <div className="text-xs tracking-[0.3em] uppercase opacity-60">{p.num}</div>
                  <h3 className="mt-6 text-xl font-light leading-snug">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-75 font-light">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10 border-y border-foreground/10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="px-6 py-12 text-center">
                  <div className="text-5xl md:text-6xl font-light tracking-[-0.02em]">{s.value}</div>
                  <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">Gallery</div>
                <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-[-0.01em]">
                  Spaces that inspired this story
                </h2>
              </div>
              <Link to="/projects" className="text-sm tracking-[0.2em] uppercase border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                View all projects →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[120px] md:auto-rows-[160px]">
            {[0, 1, 2, 3, 4].map((i) => {
              const img = pool[(i + 1) % pool.length];
              const spans = [
                "md:col-span-7 md:row-span-3 col-span-2 row-span-2",
                "md:col-span-5 md:row-span-2 col-span-1 row-span-2",
                "md:col-span-5 md:row-span-2 col-span-1 row-span-2",
                "md:col-span-4 md:row-span-2 col-span-1 row-span-2",
                "md:col-span-8 md:row-span-2 col-span-1 row-span-2",
              ];
              return (
                <Reveal key={i} delay={i * 80} className={spans[i]}>
                  <div className="group relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt={`${post.title} reference ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESIGNER INSIGHT */}
      <section className="py-20 md:py-28 bg-[#1C1A17] text-[#F7F4EF]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={pool[2 % pool.length]} alt="Designer insight" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-7">
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-5">Studio Insight</div>
              <h2 className="text-3xl md:text-5xl font-light leading-[1.15] tracking-[-0.01em] mb-8">
                “Great architecture is invisible discipline — restraint that frees the experience.”
              </h2>
              <p className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-xl">
                At Citra, every project begins with a careful reading of site, climate and client ritual.
                The result is architecture that performs quietly and ages with grace — a discipline that
                threads through {post.category.toLowerCase()} work as much as everything else we do.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm">CR</div>
                <div>
                  <div className="text-sm">Citra Design Studio</div>
                  <div className="text-xs text-white/50 tracking-[0.2em] uppercase">Architecture & Interiors</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">Continue Exploring</div>
                  <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-[-0.01em] max-w-2xl">
                    Related stories from the Citra editorial
                  </h2>
                </div>
                <Link to="/blog" className="text-sm tracking-[0.2em] uppercase border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                  All articles →
                </Link>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-7">
              {related.map((r, i) => (
                <Reveal key={r.id} delay={i * 120}>
                  <Link to={`/blog/${r.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                      <img
                        src={r.heroImage || r.coverImage || r.image || heroMain}
                        alt={r.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute inset-0 p-7 flex flex-col justify-between text-white">
                        <span className="self-start text-[10px] tracking-[0.3em] uppercase border border-white/40 px-3 py-1 rounded-full backdrop-blur-md bg-white/10">
                          {r.category}
                        </span>
                        <div>
                          <div className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-3">
                            {r.date} · {r.readTime}
                          </div>
                          <h3 className="text-xl md:text-2xl font-light leading-snug tracking-[-0.005em] group-hover:translate-x-1 transition-transform duration-500">
                            {r.title}
                          </h3>
                          <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase">
                            <span>Read story</span>
                            <span className="w-8 h-px bg-white/60 group-hover:w-14 transition-all duration-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA CONCLUSION */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10 py-24 md:py-32">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">In Closing</div>
              <h2 className="text-4xl md:text-6xl font-light leading-[1.1] tracking-[-0.015em]">
                Let&apos;s shape your next space together.
              </h2>
              <p className="mt-8 text-lg text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
                If this story resonates with the project you are imagining, we would love to begin the
                conversation — from first sketch to final handover.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-foreground/85 transition-all hover:-translate-y-0.5"
                >
                  Start a Project
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-10 py-4 text-sm tracking-[0.2em] uppercase hover:border-foreground transition-all"
                >
                  More Stories
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
