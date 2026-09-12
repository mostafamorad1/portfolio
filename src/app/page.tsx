import DataRainBackground from "@/components/DataRainBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300 relative">
      {/* Animated Data Rain Background */}
      <DataRainBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
