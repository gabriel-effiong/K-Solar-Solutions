import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Calculator } from "./components/Calculator";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Calculator />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
