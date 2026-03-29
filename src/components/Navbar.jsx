import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "HOME", section: "home" },
  // Change "ABOUT" nav: preserve the label but send to #about instead of "about" page
  { label: "ABOUT", section: "about-section" },
  { label: "EXPERIENCE", section: "experience" },
  { label: "SKILLS", section: "skills" },
  { label: "EDUCATION", section: "education" },
  { label: "LETS TALK", section: "contact" },
];

export default function Navbar({
  onNavigate,
  currentLanguage, // still passed in, but not used (can be removed if unused elsewhere)
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom navigation: "ABOUT" goes to #about section of main page
  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);

    if (section === "about-section") {
      // Use scroll to about section in the main page
      const aboutElem = document.getElementById("about");
      if (aboutElem) {
        // Smooth scroll to the about section
        aboutElem.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (onNavigate) {
        // fallback for SPA navigation
        onNavigate("about");
      }
    } else {
      if (onNavigate) onNavigate(section);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/20 md:bg-black/30 backdrop-blur-sm md:backdrop-blur-lg border-b border-cyan-500/20 shadow-lg"
          : isMenuOpen
            ? "bg-black/20 md:bg-black/30 border-b border-cyan-500/20 shadow-lg"
            : "bg-transparent border-b border-transparent"
      }`}
      dir={currentLanguage === "he" ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                isScrolled || isMenuOpen
                  ? "border-cyan-400/30 shadow-lg"
                  : "border-white/20"
              }`}
            >
              <img
                src="./assaf's logo (1).png"
                alt="Assaf Azran Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => handleNavigation("home")}
              className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 hover:scale-105"
            >
              Assaf Azran
            </button>
          </div>

          {/* Desktop Navigation - Spread across full width */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center justify-between max-w-2xl w-full px-6">
              {NAV_LINKS.map((nav) => (
                <button
                  key={nav.section}
                  onClick={() => handleNavigation(nav.section)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === nav.section
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/25"
                      : "text-white hover:bg-white/10 hover:text-cyan-300 hover:shadow-md"
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {/* Reserved area for right-aligned desktop items, if needed */}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 transition-all duration-300 border ${
                isScrolled || isMenuOpen
                  ? "bg-white/10 hover:bg-white/20 border-white/20 hover:border-cyan-400/40"
                  : "bg-white/5 hover:bg-white/15 border-white/10 hover:border-white/30"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden transition-all duration-300 opacity-100 visible">
          <div className="px-4 pt-4 pb-6 space-y-3 border-t shadow-xl bg-black/40 md:bg-black/50 border-cyan-500/20">
            {NAV_LINKS.map((nav) => (
              <button
                key={nav.section}
                onClick={() => handleNavigation(nav.section)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === nav.section
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg"
                    : "text-white hover:bg-white/10 hover:text-cyan-300 border border-transparent hover:border-white/20"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
