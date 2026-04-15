import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-2xl bg-primary-foreground/[0.07] border border-primary-foreground/15 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow";

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-padding bg-dark ${inView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
        <p className="label-caption text-primary mb-4">GET IN TOUCH</p>
        <h2 className="text-primary-foreground mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="body-large text-primary-foreground/60 mb-14">
          Tell us about your project. Whether you have a detailed brief or just an idea, we are ready to help you bring it to life.
        </p>
        <form
          className="space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your contact number"
              className={inputClass}
            />
            <input
              name="type"
              value={form.type}
              onChange={handleChange}
              placeholder="Commercial, Residential, Mixed-Use..."
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project, timeline, and goals"
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
