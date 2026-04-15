import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import blogSample from "@/assets/blog-sample.jpg";
import projectConvent from "@/assets/project-convent.jpg";
import projectRoofgarden from "@/assets/project-roofgarden.jpg";

const posts = [
  {
    slug: "sustainable-architecture-2025",
    title: "The Rise of Sustainable Architecture in 2025",
    excerpt: "From net-zero energy buildings to biophilic design, how the architecture industry is embracing sustainability at every scale.",
    image: blogSample,
    date: "April 10, 2025",
    category: "Sustainability",
  },
  {
    slug: "adaptive-reuse-heritage",
    title: "Adaptive Reuse: Breathing New Life Into Heritage Structures",
    excerpt: "How modern developers are preserving cultural landmarks while creating functional commercial and residential spaces.",
    image: projectConvent,
    date: "March 22, 2025",
    category: "Heritage",
  },
  {
    slug: "rooftop-landscapes-urban",
    title: "Rooftop Landscapes: The Future of Urban Green Spaces",
    excerpt: "Exploring the trend of transforming neglected rooftops into lush gardens, social hubs, and productive farms.",
    image: projectRoofgarden,
    date: "February 15, 2025",
    category: "Landscaping",
  },
];

const BlogPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView(0.1);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <p className={`label-caption text-primary mb-4 ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}>INSIGHTS & IDEAS</p>
          <h1 className={`text-foreground max-w-2xl ${heroInView ? "animate-fade-in-up" : "opacity-0"}`} style={heroInView ? { animationDelay: "80ms" } : undefined}>
            Blog
          </h1>
          <p className={`body-large text-muted-foreground max-w-xl mt-4 ${heroInView ? "animate-fade-in-up" : "opacity-0"}`} style={heroInView ? { animationDelay: "160ms" } : undefined}>
            Stories, insights, and perspectives from the world of architecture and real estate development.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={gridRef} className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`group block ${gridInView ? "animate-fade-in-up" : "opacity-0"}`}
                style={gridInView ? { animationDelay: `${i * 120}ms` } : undefined}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="label-caption text-primary">{post.category}</span>
                <h3 className="text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="body-default text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground/60 mt-3">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
