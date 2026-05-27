import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { blogData } from "@/data/blogData";
import { useState } from "react";

const posts = blogData;

const BlogPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView(0.1);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? posts : posts.slice(0, 3);

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
            {displayed.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`group block cursor-pointer hover:scale-[1.02] transition-transform duration-200 ${gridInView ? "animate-fade-in-up" : "opacity-0"}`}
                style={gridInView ? { animationDelay: `${i * 120}ms` } : undefined}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (t.src !== post.detailImage) t.src = post.detailImage || t.src;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="label-caption text-primary">{post.category}</span>
                <h3 className="text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="body-default text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground/60 mt-3">{post.date}</p>
              </Link>
            ))}
          </div>
          {!showAll && posts.length > 3 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-3 rounded-full border border-primary/20 px-6 py-3 bg-transparent text-sm text-primary hover:bg-primary/5 transition"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
