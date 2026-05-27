import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogData } from "@/data/blogData";
import ParallaxImage from "@/components/ParallaxImage";

type Post = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt?: string;
  image: string;
  detailImage?: string;
  fullArticleUrl?: string;
  content?: string;
};

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string | undefined;
  const posts = blogData as unknown as Post[];
  const post = slug ? posts.find((b) => b.slug === slug) : undefined;

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

  const paragraphs: string[] = post.content ? String(post.content).split(/\n\n+/).map((p: string) => p.trim()).filter(Boolean) : [];

  return (
    <main className="bg-background">
      <Navbar />

      <article className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:underline">← Back to Blog</Link>

          <div className="max-w-3xl mx-auto mt-6">
            <span className="inline-block text-sm font-medium" style={{ color: "#00BCD4" }}>{post.category}</span>

            <h1 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">{post.title}</h1>

            <p className="text-sm text-muted-foreground mt-2">Citra Infra Studio • {post.date} • {post.readTime}</p>

            <div className="mt-8 rounded-lg overflow-hidden" style={{ maxHeight: 480 }}>
              <ParallaxImage
                src={(post as any).heroImage || (post as any).detailImage || post.image}
                alt={post.title}
                className="w-full h-[min(480px,60vh)]"
                imgClassName=""
                loading="lazy"
              />
            </div>

            <div className="mt-10">
              {paragraphs.map((para, i) => (
                <p key={i} style={{ maxWidth: 760, margin: "18px auto", fontSize: 17, lineHeight: 1.8 }} className="text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            {/* External full-article links removed — full content is served from `post.content` */}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;

