import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Credentials from "@/components/Credentials";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      {/* Cosmic background: starfield (dark) / sun & sky (light) */}
      <SpaceBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          <Hero />
          <About />
          <Education />
          <Credentials />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
