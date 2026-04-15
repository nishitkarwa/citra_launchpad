import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import blogSample from "@/assets/blog-sample.jpg";
import projectConvent from "@/assets/project-convent.jpg";
import projectRoofgarden from "@/assets/project-roofgarden.jpg";

const postsData: Record<string, { title: string; image: string; date: string; category: string; content: string[] }> = {
  "sustainable-architecture-2025": {
    title: "The Rise of Sustainable Architecture in 2025",
    image: blogSample,
    date: "April 10, 2025",
    category: "Sustainability",
    content: [
      "Sustainability is no longer a trend — it's the standard. In 2025, the architecture industry is witnessing a paradigm shift where every new development is evaluated not only by its aesthetics and function but by its environmental impact.",
      "Net-zero energy buildings, once considered ambitious outliers, have become the baseline expectation for commercial and institutional projects. Developers and architects are collaborating more closely with environmental engineers to integrate passive cooling, solar harvesting, and rainwater management systems from the earliest design stages.",
      "Biophilic design principles are reshaping interiors and exteriors alike. Living walls, indoor gardens, and natural material palettes are being specified not as luxury add-ons but as fundamental elements that improve occupant well-being and reduce operational costs.",
      "At CIIRA, we've embraced this movement from the ground up. Our recent projects incorporate locally sourced materials, energy-efficient building envelopes, and landscape designs that restore native ecosystems. We believe that great architecture doesn't just serve the people inside it — it serves the planet.",
      "Looking ahead, we see regulatory frameworks catching up with industry ambition. Green building certifications, carbon accounting requirements, and embodied-carbon limits are set to become standard in India's major metros. Firms that have already invested in sustainable expertise will lead the next decade of development.",
    ],
  },
  "adaptive-reuse-heritage": {
    title: "Adaptive Reuse: Breathing New Life Into Heritage Structures",
    image: projectConvent,
    date: "March 22, 2025",
    category: "Heritage",
    content: [
      "Heritage buildings tell stories that no new construction ever could. But maintaining these structures in a rapidly urbanising landscape requires more than preservation — it demands reinvention.",
      "Adaptive reuse is the practice of repurposing old buildings for new functions while retaining their historical character. A colonial-era warehouse becomes a boutique hotel; a disused textile mill transforms into a thriving co-working campus.",
      "The challenge lies in balancing structural integrity with modern building codes and user expectations. At CIIRA, our team of architects and structural engineers conducts exhaustive surveys before any adaptive reuse project begins, mapping load paths, identifying restoration-grade materials, and designing interventions that are reversible wherever possible.",
      "Our Piarist Convent project is a prime example. The original stone masonry was meticulously restored, while a new glass-and-steel extension was inserted to house modern amenities without compromising the building's visual integrity.",
      "Adaptive reuse also carries powerful sustainability credentials. By reusing existing structures, developers avoid the significant embodied carbon associated with demolition and new construction, while preserving cultural heritage for future generations.",
    ],
  },
  "rooftop-landscapes-urban": {
    title: "Rooftop Landscapes: The Future of Urban Green Spaces",
    image: projectRoofgarden,
    date: "February 15, 2025",
    category: "Landscaping",
    content: [
      "As cities grow denser and ground-level green space becomes scarce, rooftops are emerging as the next frontier for urban landscapes.",
      "Modern rooftop gardens go far beyond a few potted plants. They are fully engineered ecosystems featuring structural waterproofing, lightweight growing media, automated irrigation, and carefully curated plant palettes that can withstand wind exposure and temperature extremes.",
      "The benefits extend well beyond aesthetics. Green roofs reduce the urban heat island effect, manage stormwater runoff, improve air quality, and provide habitats for pollinators. For building owners, they increase property values and create attractive amenity spaces that differentiate their developments in competitive markets.",
      "CIIRA's Vesella Roof Garden project demonstrated how a previously unused rooftop could be transformed into a vibrant social and ecological space. The design incorporated native drought-resistant species, shaded seating areas, and a rainwater harvesting system that feeds back into the building's grey-water network.",
      "We see rooftop landscapes becoming a standard feature in Indian commercial developments within the next five years. Early adopters who invest in quality design and engineering will reap the greatest returns — both financially and environmentally.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;
  const { ref, inView } = useInView(0.1);

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

  return (
    <main className="bg-background">
      <Navbar />

      <article ref={ref} className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className={`label-caption text-primary hover:underline ${inView ? "animate-fade-in-up" : "opacity-0"}`}>← Back to Blog</Link>

          <span
            className={`label-caption text-primary block mt-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "60ms" } : undefined}
          >
            {post.category}
          </span>

          <h1
            className={`text-foreground mt-3 mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "120ms" } : undefined}
          >
            {post.title}
          </h1>

          <p
            className={`text-sm text-muted-foreground mb-10 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "180ms" } : undefined}
          >
            {post.date}
          </p>

          <div
            className={`aspect-[16/9] rounded-2xl overflow-hidden mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={inView ? { animationDelay: "240ms" } : undefined}
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="body-large text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
