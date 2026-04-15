import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className={`section-padding bg-dark ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto max-w-2xl text-center">
        <p className="label-caption text-primary mb-4">GET IN TOUCH</p>
        <h2 className="text-primary-foreground mb-4">Let's Build Something Great Together</h2>
        <p className="body-large text-primary-foreground/70 mb-12">
          Tell us about your project. Whether you have a detailed brief or just an idea, we are ready to help you bring it to life.
        </p>
        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your contact number" className="w-full rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input name="type" value={form.type} onChange={handleChange} placeholder="Commercial, Residential, Mixed-Use..." className="w-full rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and goals" className="w-full rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
