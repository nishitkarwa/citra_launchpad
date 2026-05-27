import { Link } from "react-router-dom";
import citraLogo from "@/assets/citra-logo.png";
import { projects } from "@/data/projects";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
const featuredProjects = projects.slice(0, 5);

const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand Section */}
          <div>
            <img
              src={citraLogo}
              alt="CITRA Infra Studio"
              className="h-14 w-auto object-contain mb-5"
            />

            <p className="text-sm leading-7 text-white/60 max-w-sm">
              Crafting timeless architecture and transformative infrastructure
              experiences through innovative design, strategic planning, and
              premium development solutions.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {[
                { label: "LinkedIn", short: "Li", href: "https://www.linkedin.com/company/citra-associates/" },
                { label: "Instagram", short: "Ig", href: "https://www.instagram.com/citra_associates/" },
                { label: "YouTube", short: "Yt", href: "https://www.youtube.com/@architect_ravivarma" },
                { label: "WhatsApp", short: "Wa", href: "https://wa.me/918686662540" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/60 hover:text-white hover:border-cyan-400 transition-all duration-300"
                >
                  {item.short}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-6">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-6">
              Featured Projects
            </h3>

            <ul className="space-y-4">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm leading-6"
                  >
                    {project.shortTitle ?? project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-white/60">
              <a
                href="mailto:hello@citrainfrastudio.com"
                className="block hover:text-white transition-colors duration-300"
              >
                hello@citrainfrastudio.com
              </a>

              <a
                href="tel:+919876543210"
                className="block hover:text-white transition-colors duration-300"
              >
                +91 98765 43210
              </a>

              <p>
                Hyderabad, Telangana, India
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-400 text-black text-sm font-medium hover:bg-cyan-300 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/40">
            © 2025 CITRA Infra Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/40">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;