import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultation: "",
    project: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!/^[\d+\s()-]{7,}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.consultation.trim()) errs.consultation = "Please specify consultation requirement";
    if (!form.project.trim()) errs.project = "Please provide a brief about the project";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formatDateTime = (d = new Date()) => {
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const buildWhatsAppMessage = () => {
    const now = formatDateTime();
    const lines = [
      "━━━━━━━━━━━━━━━━━━",
      "🏛️ *CITRA INFRA STUDIO*",
      "✨ New Premium Client Enquiry Received",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "👤 *Client Details*",
      `• Name: ${form.firstName.trim()} ${form.lastName.trim()}`,
      `• Contact: ${form.phone.trim()}`,
      `• Email: ${form.email.trim()}`,
      "",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "📌 *Consultation Requirement*",
      `${form.consultation.trim()}`,
      "",
      "📝 *Project Brief*",
      `${form.project.trim()}`,
      "",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "🌍 *Lead Source*",
      "Citra Official Website",
      "",
      "⏰ *Received On*",
      `${now}`,
      "",
      "🚀 *Lead Status:* HOT LEAD",
      "━━━━━━━━━━━━━━━━━━",
    ];

    return lines.join("\n");
  };

  const ADMIN_WA_NUMBER = "918686662540"; // admin WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;
    setSubmitting(true);
    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encoded}`;
    // open in new tab/window
    window.open(url, "_blank");
    // small UX: re-enable after short delay and clear form
    setTimeout(() => {
      setSubmitting(false);
      setForm({ firstName: "", lastName: "", email: "", phone: "", consultation: "", project: "" });
    }, 800);
  };

  const inputClass =
    "w-full rounded-2xl bg-primary-foreground/[0.07] border border-primary-foreground/15 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow";

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-dark"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
        <p className={`label-caption text-primary mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>GET IN TOUCH</p>
        <h2
          className={`text-primary-foreground mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "80ms" } : undefined}
        >
          Let's Build Something Great Together
        </h2>
        <p
          className={`body-large text-primary-foreground/60 mb-14 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "160ms" } : undefined}
        >
          Tell us about your project. Whether you have a detailed brief or just an idea, we are ready to help you bring it to life.
        </p>
        <form
          className={`space-y-4 text-left ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={inView ? { animationDelay: "280ms" } : undefined}
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={inputClass}
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
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
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
          <input
            name="consultation"
            value={form.consultation}
            onChange={handleChange}
            placeholder="Consultation Requirement (Commercial, Residential, etc.)"
            className={inputClass}
          />
          <textarea
            name="project"
            rows={4}
            value={form.project}
            onChange={handleChange}
            placeholder="Project brief: timeline, scale, goals"
            className={`${inputClass} resize-none`}
          />
          {Object.keys(errors).length > 0 && (
            <div className="text-sm text-rose-400 space-y-1">
              {Object.entries(errors).map(([k, v]) => (
                <div key={k}>{v}</div>
              ))}
            </div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all mt-2 ${submitting ? 'opacity-60 pointer-events-none' : ''}`}
          >
            {submitting ? 'Opening WhatsApp...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
