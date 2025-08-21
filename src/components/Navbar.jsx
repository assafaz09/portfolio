import React, { useState, useEffect } from "react";
import { translations } from "../translations";

export default function Navbar({
  onNavigate,
  currentLanguage,
  onLanguageChange,
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

  // Close mobile menu when navigating
  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    // Call onNavigate first to ensure navigation happens
    if (onNavigate) {
      onNavigate(section);
    }
  };

  // Handle CV download - using fetch with fallback
  const handleDownloadCV = () => {
    // קישור ישיר ל-Google Drive (תחליף את הקישור שלך)
    const googleDriveLink =
      "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE";

    const link = document.createElement("a");
    link.href = googleDriveLink;
    link.download = "Assaf_Azran_CV.pdf";
    link.target = "_blank"; // פותח בטאב חדש
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                src="/assaf's logo (1).png"
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
            <div className="flex items-center justify-between max-w-xl w-full px-6">
              <button
                onClick={() => handleNavigation("home")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "home"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/25"
                    : "text-white hover:bg-white/10 hover:text-cyan-300 hover:shadow-md"
                }`}
              >
                {translations[currentLanguage].home}
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "about"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/25"
                    : "text-white hover:bg-white/10 hover:text-cyan-300 hover:shadow-md"
                }`}
              >
                {translations[currentLanguage].about}
              </button>
              <button
                onClick={() => handleNavigation("portfolio")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "portfolio"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/25"
                    : "text-white hover:bg-white/10 hover:text-cyan-300 hover:shadow-md"
                }`}
              >
                {translations[currentLanguage].portfolio}
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "contact"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/25"
                    : "text-white hover:bg-white/10 hover:text-cyan-300 hover:shadow-md"
                }`}
              >
                {translations[currentLanguage].contact}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={() =>
                onLanguageChange(currentLanguage === "en" ? "he" : "en")
              }
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 border ${
                isScrolled || isMenuOpen
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-cyan-400/40"
                  : "bg-white/5 hover:bg-white/15 text-white border-white/10 hover:border-white/30"
              }`}
              title={translations[currentLanguage].language}
            >
              <span className="flex items-center space-x-1">
                <span className="text-xs">🌍</span>
                <span>{currentLanguage === "en" ? "עברית" : "EN"}</span>
              </span>
            </button>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className={`bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5 transform hover:scale-105 border ${
                isScrolled || isMenuOpen
                  ? "border-cyan-400/30"
                  : "border-white/20"
              }`}
            >
              <span className="flex items-center space-x-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm">
                  {translations[currentLanguage].downloadCV}
                </span>
              </span>
            </button>
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
            <button
              onClick={() => handleNavigation("home")}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                activeSection === "home"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg"
                  : "text-white hover:bg-white/10 hover:text-cyan-300 border border-transparent hover:border-white/20"
              }`}
            >
              {translations[currentLanguage].home}
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                activeSection === "about"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg"
                  : "text-white hover:bg-white/10 hover:text-cyan-300 border border-transparent hover:border-white/20"
              }`}
            >
              {translations[currentLanguage].about}
            </button>
            <button
              onClick={() => handleNavigation("portfolio")}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                activeSection === "portfolio"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg"
                  : "text-white hover:bg-white/10 hover:text-cyan-300 border border-transparent hover:border-white/20"
              }`}
            >
              {translations[currentLanguage].portfolio}
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                activeSection === "contact"
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg"
                  : "text-white hover:bg-white/10 hover:text-cyan-300 border border-transparent hover:border-white/20"
              }`}
            >
              {translations[currentLanguage].contact}
            </button>
            {/* Language Switcher for Mobile */}
            <button
              onClick={() =>
                onLanguageChange(currentLanguage === "en" ? "he" : "en")
              }
              className="language-switcher-mobile block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border border-white/20 hover:border-cyan-400/40 bg-white/5 hover:bg-white/10 text-white hover:text-cyan-300"
            >
              <span className="flex items-center space-x-2">
                <span className="text-sm">🌍</span>
                <span>{currentLanguage === "en" ? "עברית" : "English"}</span>
              </span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="block w-full text-left bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 mt-4 border border-cyan-400/30 hover:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>{translations[currentLanguage].downloadCV}</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
