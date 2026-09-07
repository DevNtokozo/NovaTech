import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";

import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}