import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <header
      className="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] 
            bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 
            shadow-lg rounded-2xl z-50"
    >
      <div className="max-w-10xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Bhaviin Pathak
        </h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setActive(section)}
              className={`cursor-pointer transition-colors duration-300
                                ${
                                  active === section
                                    ? "text-primary"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white/90 dark:bg-gray-900/90 shadow-lg 
                    px-4 py-6 space-y-4 rounded-b-2xl backdrop-blur-md text-center"
        >
          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => {
                setActive(section);
                setMenuOpen(false);
              }}
              className={`block cursor-pointer transition-colors duration-300
                                ${
                                  active === section
                                    ? "text-primary"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
