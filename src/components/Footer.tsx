const navLinks = ["Home", "About Us", "Projects", "Services", "Contact"];

const Footer = () => (
  <footer className="bg-dark text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <span className="text-xl font-bold">CIIRA</span>
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

        {/* Middle */}
        <div>
          <p className="label-caption text-primary-foreground/50 mb-5">Navigation</p>
          <ul className="space-y-2.5">
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

        {/* Right */}
        <div>
          <p className="label-caption text-primary-foreground/50 mb-5">Contact</p>
          <ul className="space-y-2.5 body-default text-primary-foreground/60">
            <li>hello@ciira.com</li>
            <li>+91 98765 43210</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/40 gap-4">
        <p>© 2025 CIIRA. All rights reserved.</p>
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
