import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import citraLogo from "@/assets/citra-logo.png";

// Routes that render the navbar over a light background at the top of the page.
// On these routes we use a cyan-blue accent (#38BDF8) for nav text to ensure contrast.
const LIGHT_BG_ROUTES = ["/blog"];

const navLinks = [
  { label: "Projects", link: "/projects" },
  { label: "Services", link: "/services" },
  { label: "About Us", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isLightBg = LIGHT_BG_ROUTES.some(
    (r) => location.pathname === r || location.pathname.startsWith(r + "/"),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src={citraLogo}
            alt="CITRA"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Center pill nav — desktop */}
        <div
          className={`hidden md:flex items-center gap-1 rounded-full px-1.5 py-1.5 transition-colors ${
            scrolled ? "bg-transparent" : "bg-primary-foreground/10 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((l) => {
            const isRoute = l.link.startsWith("/") && !l.link.includes("#");
            const className = `px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              scrolled
                ? "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            }`;
            return isRoute ? (
              <Link key={l.label} to={l.link} className={className}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.link} className={className}>
                {l.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
        >
          Get In Touch
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke={scrolled ? "currentColor" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 space-y-3">
          {navLinks.map((l) => {
            const isRoute = l.link.startsWith("/") && !l.link.includes("#");
            const cls = "block text-base font-medium text-foreground/70 hover:text-foreground";
            return isRoute ? (
              <Link key={l.label} to={l.link} onClick={() => setOpen(false)} className={cls}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.link} onClick={() => setOpen(false)} className={cls}>
                {l.label}
              </a>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground mt-2"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
