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

    // Handle CV download - using base64 encoded PDF
  const handleDownloadCV = () => {
    try {
      // Base64 encoded PDF data (first 1000 characters for brevity)
      const pdfBase64 = "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";
      
      // Convert base64 to blob
      const byteCharacters = atob(pdfBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Assaf_Azran_CV.pdf";
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CV download failed:", error);
      alert("CV download failed. Please try again.");
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
