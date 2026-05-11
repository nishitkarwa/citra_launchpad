import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView(0.1);
  const { ref: formRef, inView: formInView } = useInView(0.1);
  const { ref: tagRef, inView: tagInView } = useInView(0.2);
  const { ref: mapRef, inView: mapInView } = useInView(0.1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    consultation: "",
    projectInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you! We'll be in touch soon.");
    setForm({ firstName: "", lastName: "", phone: "", email: "", consultation: "", projectInfo: "" });
  };

  return (
    <main className="bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img src={contactHero} alt="CITRA team meeting" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-foreground/50" />
        <h1
          className={`relative z-10 text-primary-foreground text-center max-w-2xl px-6 ${heroInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Let's Develop Something Exceptional.
        </h1>
      </section>

      {/* ── Form Section ── */}
      <section ref={formRef} className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header row */}
          <div
            className={`flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14 ${formInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div>
              <h2 className="text-foreground">
                Connect with Us for<br />
                <span className="italic font-normal">Your Next Project</span>
              </h2>
            </div>
            <div className="md:max-w-sm md:text-right">
              <p className="body-default text-muted-foreground mb-4">
                You can contact us through the form below, or give us a call during our office hours, from Monday to Friday, 9:00AM to 7:00PM. Let's work together to bring your ideas to life.
              </p>
              <div className="flex items-center gap-2 md:justify-end">
                <span className="text-sm text-muted-foreground">You can follow us on</span>
                {/* Social icons */}
                {[
                  { label: "YouTube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" },
                  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
                ].map((icon) => (
                  <a
                    key={icon.label}
                    href="#"
                    aria-label={icon.label}
                    className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={icon.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`max-w-3xl mx-auto space-y-8 ${formInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={formInView ? { animationDelay: "150ms" } : undefined}
          >
            {/* First / Last Name */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="label-caption text-foreground block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="label-caption text-foreground block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  required
                  maxLength={100}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="label-caption text-foreground block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                maxLength={20}
              />
            </div>

            {/* Email */}
            <div>
              <label className="label-caption text-foreground block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                required
                maxLength={255}
              />
            </div>

            {/* Consultation */}
            <div>
              <label className="label-caption text-foreground block mb-2">Consultation</label>
              <input
                type="text"
                name="consultation"
                value={form.consultation}
                onChange={handleChange}
                placeholder="What would you like to consult about"
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                maxLength={200}
              />
            </div>

            {/* Project Information */}
            <div>
              <label className="label-caption text-foreground block mb-2">Project Information</label>
              <textarea
                name="projectInfo"
                value={form.projectInfo}
                onChange={handleChange}
                placeholder="Project description"
                rows={3}
                className="w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                maxLength={1000}
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section ref={tagRef} className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p
            className={`text-3xl md:text-[44px] leading-tight font-normal italic text-foreground max-w-2xl mx-auto ${tagInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Your Vision. Our Architecture. One Development Journey.
          </p>
        </div>
      </section>

      {/* ── Map ── */}
      <section ref={mapRef} className={`${mapInView ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="container mx-auto px-6 lg:px-8 pb-20 md:pb-28">
          <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
            <iframe
              title="CITRA Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169117!2d78.24323!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
