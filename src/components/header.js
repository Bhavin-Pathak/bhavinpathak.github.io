import { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll"; // ✅ scroller import
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // ✅ default active tab = home

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  // ✅ Page load hote hi home par scroll kare
  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 0,
      smooth: true,
      offset: -70,
    });
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden md:block fixed top-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%]
          bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20
          shadow-lg rounded-2xl z-50"
      >
        <div className="max-w-10xl mx-auto flex items-center justify-between px-6 py-3">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Bhaviin Pathak
          </h1>
          <nav className="flex space-x-6 items-center">
            {navItems.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => setActiveTab(section)} // ✅ update active tab
                className={`cursor-pointer transition-colors duration-300 
                  ${activeTab === section
                    ? "text-[#2563EB] font-bold dark:text-[#2563EB]"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Mobile: Floating Menu Button */}
      <button
        className="fixed top-4 right-4 block md:hidden z-50 p-2 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      </button>

      {/* Mobile: Glass Drawer Sidebar */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <aside
            className="fixed top-6 right-4 z-50 w-52 rounded-2xl bg-white/30 dark:bg-gray-900/40
              backdrop-blur-xl shadow-2xl border border-white/30
              flex flex-col items-end overflow-hidden animate-fade-in"
          >
            <button
              className="p-2 text-gray-800 dark:text-gray-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col space-y-5 mt-4 items-center text-center w-full">
              {navItems.map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onSetActive={() => setActiveTab(section)}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-1 cursor-pointer transition-colors duration-300 text-base
                    ${activeTab === section
                      ? "text-[#2563EB] font-bold dark:text-[#2563EB]"
                      : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
