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
      <section id="home" className="py-5">
        <Hero />
      </section>
      <section id="about" className="py-5">
        <About />
      </section>
      <section id="skills" className="py-5">
        <Skills />
      </section>
      <section id="projects" className="py-5">
        <Projects />
      </section>
      <section id="experience" className="py-5">
        <Experience />
      </section>
      <section id="contact" className="py-5">
        <Contact />
      </section>
    </div>
  );
}
