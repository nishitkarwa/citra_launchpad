import { useState } from "react";

const navLinks = ["Home", "About", "Projects", "Services"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <span className="text-xl font-bold tracking-tight text-foreground">CIIRA</span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="body-default text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Get In Touch
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block body-default text-muted-foreground">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
