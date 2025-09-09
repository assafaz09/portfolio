import React from "react";
import Navbar from "./Navbar";
import { translations } from "../translations";

export default function Portfolio({
  onNavigate,
  currentLanguage,
  onLanguageChange,
}) {
  const projects = [
    {
      id: 1,
      title: translations[currentLanguage].chenCosmetics,
      description: translations[currentLanguage].chenCosmeticsDesc,
      technologies: [
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Hebrew RTL Support",
      ],
      bgColor: "bg-black/20 backdrop-blur-sm border border-white/20",
      borderColor: "hover:border-pink-300/40",
      link: "https://chen-cosmetics-production.up.railway.app/",
      image: "./pro1.png",
      additionalImage: "./pro2.1.png",
    },
    {
      id: 2,
      title: translations[currentLanguage].chakiDj,
      description: translations[currentLanguage].chakiDjDesc,
      technologies: ["React", "CSS3", "JavaScript", "Audio Integration"],
      bgColor: "bg-black/20 backdrop-blur-sm border border-white/20",
      borderColor: "hover:border-blue-300/40",
      link: "https://chakihouse-production.up.railway.app/",
      image: "./pro2 (1).png",
      additionalImage: "./pro1.1.png",
    },
    {
      id: 3,
      title: translations[currentLanguage].orProductions,
      description: translations[currentLanguage].orProductionsDesc,
      technologies: ["React", "Tailwind CSS", "Image Gallery", "Contact Forms"],
      bgColor: "bg-black/20 backdrop-blur-sm border border-white/20",
      borderColor: "hover:border-green-300/40",
      link: "#",
      image: "./pro3.png",
      additionalImage: "./pro3.1.png",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden"
      dir={currentLanguage === "he" ? "rtl" : "ltr"}
    >
      <Navbar
        onNavigate={onNavigate}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />

      {/* Mobile Language Switcher - Outside Navbar */}
      <div className="md:hidden fixed top-20 right-4 z-40">
        <button
          onClick={() =>
            onLanguageChange(currentLanguage === "en" ? "he" : "en")
          }
          className="mobile-language-switcher bg-black/20 backdrop-blur-sm border border-cyan-500/20 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-black/30 transition-all duration-300 font-medium"
        >
          {currentLanguage === "en" ? "עברית" : "EN"}
        </button>
      </div>

      {/* Portfolio Page */}
      <section
        className="portfolio-page relative digital-background"
        style={{ paddingTop: "100px" }}
      >
        {/* Dynamic Background Elements */}
        <div className="code-element" style={{ top: "10%", left: "8%" }}>
          {`const portfolio = {`}
        </div>
        <div className="code-element" style={{ top: "20%", right: "12%" }}>
          {`projects: 3`}
        </div>
        <div className="code-element" style={{ bottom: "15%", left: "18%" }}>
          {`type: 'Landing Pages'`}
        </div>

        {/* Glowing Shapes */}
        <div
          className="glowing-shape"
          style={{
            top: "15%",
            right: "25%",
            width: "80px",
            height: "80px",
          }}
        ></div>
        <div
          className="glowing-shape"
          style={{
            bottom: "25%",
            right: "20%",
            width: "120px",
            height: "120px",
          }}
        ></div>

        {/* Circuit Lines */}
        <div
          className="circuit-line"
          style={{ top: "30%", left: "-200px", width: "250px" }}
        ></div>
        <div
          className="circuit-line"
          style={{ bottom: "40%", right: "-200px", width: "250px" }}
        ></div>

        {/* Floating Tech Icons */}
        <div
          className="floating-icon"
          style={{ top: "7%", left: "11%", animationDelay: "0s" }}
        >
          <img src="/vitejs-svgrepo-com.svg" alt="Vite" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "24%", right: "14%", animationDelay: "1s" }}
        >
          <img
            src="/tailwind-svgrepo-com.svg"
            alt="Tailwind"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "41%", left: "6%", animationDelay: "2s" }}
        >
          <img
            src="/node-js-svgrepo-com.svg"
            alt="Node.js"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "58%", right: "21%", animationDelay: "3s" }}
        >
          <img
            src="/mongodb-svgrepo-com.svg"
            alt="MongoDB"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "75%", left: "19%", animationDelay: "4s" }}
        >
          <img
            src="/logo-ts-svgrepo-com.svg"
            alt="TypeScript"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "92%", right: "9%", animationDelay: "5s" }}
        >
          <img
            src="/html-5-svgrepo-com.svg"
            alt="HTML5"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "16%", left: "33%", animationDelay: "6s" }}
        >
          <img src="/css-3-svgrepo-com.svg" alt="CSS3" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "57%", right: "58%", animationDelay: "7.2s" }}
        >
          <img
            src="/javascript-logo-svgrepo-com.svg"
            alt="JavaScript"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "74%", left: "75%", animationDelay: "8.2s" }}
        >
          <img src="/mongo-svgrepo-com.svg" alt="Mongo" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "91%", right: "78%", animationDelay: "9.2s" }}
        >
          <img src="/mongo-svgrepo-com.svg" alt="Mongo" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "16%", left: "85%", animationDelay: "10.2s" }}
        >
          <img
            src="/next-dot-js-svgrepo-com.svg"
            alt="Next.js"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "33%", right: "89%", animationDelay: "11.2s" }}
        >
          <img
            src="/node-js-svgrepo-com (1).svg"
            alt="Node.js Alt"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "50%", left: "93%", animationDelay: "12.2s" }}
        >
          <img
            src="/js02-svgrepo-com.svg"
            alt="JavaScript Alt"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "67%", right: "96%", animationDelay: "13.2s" }}
        >
          <img
            src="/github-svgrepo-com.svg"
            alt="GitHub"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "84%", left: "99%", animationDelay: "14.2s" }}
        >
          <img
            src="/github-svgrepo-com (2).svg"
            alt="GitHub Alt"
            className="tech-icon"
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Section */}
          <div className="hero-section text-center">
            <h1 className="animate-fade-down text-4xl sm:text-5xl lg:text-6xl">
              {translations[currentLanguage].portfolioPageTitle}
            </h1>
            <div className="divider"></div>
            <p className="animate-fade-up animate-delay-200 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto">
              {translations[currentLanguage].portfolioPageSubtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card animate-fade-up bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {project.title}
                  </h3>
                  <p className="description text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Used - Compact */}
                  <div className="technologies-section mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-2 sm:mb-3">
                      {translations[currentLanguage].technologiesUsed}
                    </h4>
                    <div className="technologies-grid flex flex-wrap justify-center gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="tech-tag px-2 py-0.5 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Images - Larger */}
                  <div className="images-section grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    {/* Main Project Image */}
                    <div className="image-container main-image">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image w-full h-56 sm:h-64 lg:h-72 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                          onClick={() => window.open(project.link, "_blank")}
                        />
                      ) : (
                        <div className="project-image w-full h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-lg">
                          <span className="text-white/60 text-sm sm:text-base">
                            {translations[currentLanguage].projectImage.replace(
                              "{id}",
                              project.id
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Additional Project Image */}
                    <div className="image-container additional-image">
                      {project.additionalImage ? (
                        <img
                          src={project.additionalImage}
                          alt="Additional Project Image"
                          className="project-image w-full h-56 sm:h-64 lg:h-72 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                          onClick={() => window.open(project.link, "_blank")}
                        />
                      ) : (
                        <div className="project-image w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center rounded-lg">
                          <span className="text-white/60 text-sm sm:text-base">
                            {translations[currentLanguage].additionalImage}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="view-button"
                  >
                    {project.link === "#"
                      ? translations[currentLanguage].comingSoon
                      : translations[currentLanguage].viewProject}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="call-to-action text-center mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              {translations[currentLanguage].readyToCreate}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              {translations[currentLanguage].letsWorkTogether}
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="cta-button px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg sm:text-xl lg:text-2xl font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              {translations[currentLanguage].getStartedToday}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
