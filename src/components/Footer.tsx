const navLinks = ["Home", "About Us", "Projects", "Services", "Contact"];

const Footer = () => (
  <footer className="bg-dark text-primary-foreground">
    <div className="container mx-auto py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <span className="text-xl font-bold">CIIRA</span>
          <p className="body-default text-primary-foreground/60 mt-3 mb-6">Transforming land into experience‑led developments.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Instagram", "Twitter", "Facebook"].map((s) => (
              <a key={s} href="#" aria-label={s} className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-xs text-primary-foreground/60 hover:border-primary hover:text-primary transition-colors">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Middle */}
        <div>
          <p className="label-caption text-primary-foreground/60 mb-4">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="body-default text-primary-foreground/70 hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="label-caption text-primary-foreground/60 mb-4">Contact</p>
          <ul className="space-y-2 body-default text-primary-foreground/70">
            <li>hello@ciira.com</li>
            <li>+91 98765 43210</li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/50 gap-4">
        <p>© 2025 CIIRA. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
