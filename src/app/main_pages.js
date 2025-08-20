import Hero from "../pages/home.js";
import About from "../pages/about.js";
import Skills from "../pages/skills.js";
import Projects from "../pages/projects.js";
import Experience from "../pages/experience.js";
import Contact from "../pages/contact.js";
import Header from "../components/header.js";

export default function Main_Pages() {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home" className="py-12">
        <Hero />
      </section>
      <section id="about" className="py-12">
        <About />
      </section>
      <section id="skills" className="py-12">
        <Skills />
      </section>
      <section id="projects" className="py-12">
        <Projects />
      </section>
      <section id="experience" className="py-12">
        <Experience />
      </section>
      <section id="contact" className="py-12">
        <Contact />
      </section>
    </div>
  );
}
