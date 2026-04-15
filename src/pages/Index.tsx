import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Editorial from "@/components/Editorial";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Editorial />
    <ClientLogos />
    <About />
    <Projects />
    <Process />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default Index;
