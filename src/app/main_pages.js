import Hero from "../pages/hero.js";
import About from "../pages/about.js";
import Skills from "../pages/skills.js";
import Projects from "../pages/projects.js";
import Experience from "../pages/experience.js";
import Contact from "../pages/contact.js";
import ThemeToggle from "../theme/theme-toggle.js";

export default function Main_Pages() {
    return (
        <main className="min-h-screen bg-background dark:bg-background-dark">
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
