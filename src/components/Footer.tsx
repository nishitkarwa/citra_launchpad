import { Link } from "react-router-dom";
import citraLogo from "@/assets/citra-logo.png";
import { projects } from "@/data/projects";

const navLinks = ["Home", "About Us", "Projects", "Services", "Contact"];
const featuredProjects = projects.slice(0, 5);

const Footer = () => (
  <footer className="bg-dark text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Left */}
        <div>
          <img src={citraLogo} alt="CITRA" className="h-12 w-auto object-contain" />
          <p className="body-default text-primary-foreground/50 mt-3 mb-6">
            Transforming land into experience‑led developments.
          </p>
          <div className="flex gap-3">
            {["Li", "Ig", "Tw", "Fb"].map((s, i) => (
              <a
                key={i}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-[10px] font-medium text-primary-foreground/50 hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="label-caption text-primary-foreground/50 mb-5">Navigation</p>
          <ul className="space-y-4">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                  className="body-default text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Projects */}
        <div>
          <p className="label-caption text-primary-foreground/50 mb-5">Featured Projects</p>
          <ul className="space-y-4">
            {featuredProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="body-default text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {p.shortTitle ?? p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="label-caption text-primary-foreground/50 mb-5">Contact</p>
          <ul className="space-y-4 body-default text-primary-foreground/60">
            <li>hello@citra.com</li>
            <li>+91 98765 43210</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/40 gap-4">
        <p>© 2025 CITRA. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
