import "./App.css";
import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";
import Navbar from "./components/Navbar";
import { translations } from "./translations";

// 🚀 PERFORMANCE OPTIMIZATION: Dynamic imports for code splitting
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));

// 🚀 PERFORMANCE OPTIMIZATION: Memoized Tech Icon Component
const FloatingIcon = memo(({ src, alt, top, left, right, animationDelay, className = "" }) => (
  <div
    className={`floating-icon ${className}`}
    style={{ 
      top, 
      left, 
      right, 
      animationDelay 
    }}
  >
    <img
      src={src}
      alt={alt}
      className="tech-icon glow-on-hover"
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </div>
));

function App() {
  const observerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLanguage, setCurrentLanguage] = useState("en");


  // 🚀 PERFORMANCE OPTIMIZATION: Memoize expensive computations
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: translations[currentLanguage].studentSystem,
        emoji: "🎓",
        link: "https://f-student-system-production.up.railway.app/",
        description: translations[currentLanguage].studentSystemDesc,
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "JWT Auth",
        ],
        image: "project1.jpg",
        screenshots: ["project1.jpg"],
      },
      {
        id: 2,
        title: translations[currentLanguage].movieRate,
        emoji: "🎬",
        link: "https://github.com/assafaz09/movieRate",
        description: translations[currentLanguage].movieRateDesc,
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Movie API",
        ],
        image: "🎬",
      },
      {
        id: 3,
        title: translations[currentLanguage].eventStore,
        emoji: "🎪",
        link: "#",
        description: translations[currentLanguage].eventStoreDesc,
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "Stripe API",
          "Responsive Design",
        ],
        image: "🎪",
      },
      {
        id: 4,
        title: translations[currentLanguage].portfolioLanding,
        emoji: "🌐",
        link: "#",
        description: translations[currentLanguage].portfolioLandingDesc,
        technologies: [
          "React.js",
          "HTML5",
          "CSS3",
          "JavaScript",
          "Responsive Design",
          "Modern UI/UX",
        ],
        image: "🌐",
      },
    ],
    [currentLanguage]
  ); // Only recalculate when language changes

  // 🚀 PERFORMANCE OPTIMIZATION: Memoize event handlers to prevent unnecessary re-renders
  const handleProjectImageClick = useCallback((project) => {
    if (project.id === 4) {
      // Portfolio & Landing Pages - לעמוד הפורטפוליו
      setCurrentPage("portfolio");
    } else if (project.link !== "#") {
      // פרוייקטים עם קישור - פתיחה בחלון חדש
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
    // אם זה "Coming Soon" (link === "#") - לא עושים כלום
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    if (sectionId === "about") {
      setCurrentPage("about");
      return;
    }

    if (sectionId === "portfolio") {
      setCurrentPage("portfolio");
      return;
    }

    setCurrentPage("home");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // 🚀 PERFORMANCE OPTIMIZATION: Optimized Intersection Observer with requestAnimationFrame
  useEffect(() => {
    // Create intersection observer for animations with performance optimizations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for smooth animations and better performance
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              // Unobserve after animation to save resources
              observerRef.current?.unobserve(entry.target);
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // 🚀 PERFORMANCE OPTIMIZATION: Batch DOM queries and use requestAnimationFrame
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        // Single query for all animation selectors - more efficient
        const allAnimatedElements = document.querySelectorAll(
          ".animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-up"
        );

        // Batch observe all elements at once
        allAnimatedElements.forEach((el) => {
          if (observerRef.current) {
            observerRef.current.observe(el);
          }
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentPage]);

  return (
    <div
      className="min-h-screen bg-white text-black overflow-x-hidden"
      dir={currentLanguage === "he" ? "rtl" : "ltr"}
    >
      <Navbar
        onNavigate={scrollToSection}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* Mobile Language Switcher - Outside Navbar */}
      <div className="md:hidden fixed top-20 right-4 z-40">
        <button
          onClick={() =>
            setCurrentLanguage(currentLanguage === "en" ? "he" : "en")
          }
          className="mobile-language-switcher bg-black/20 backdrop-blur-sm border border-cyan-500/20 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-black/30 transition-all duration-300 font-medium"
        >
          {currentLanguage === "en" ? "עברית" : "EN"}
        </button>
      </div>

      {currentPage === "home" ? (
        <>
          {/* Hero Section */}
          <section
            id="hero"
            className="hero digital-background relative min-h-screen flex items-center justify-center p-8"
          >
            {/* Dynamic Background Elements */}
            <div className="code-element">{`const controller = new AbortController()`}</div>
            <div className="code-element">{`const timeout = setTimeout(() => controller.abort(), 5000)`}</div>
            <div className="code-element">{`async function loadItems() {`}</div>
            <div className="code-element">{`  const res = await fetch('/api/items', { signal: controller.signal })`}</div>
            <div className="code-element">{`  if (!res.ok) throw new Error('Request failed')`}</div>
            <div className="code-element">{`  const data = await res.json(); clearTimeout(timeout)`}</div>
            <div className="code-element">{`  console.log(data)`}</div>
            <div className="code-element">{`}`}</div>
            <div className="code-element">{`loadItems()`}</div>

            <div className="glowing-shape"></div>
            <div className="glowing-shape"></div>
            <div className="glowing-shape"></div>

            <div className="circuit-line"></div>
            <div className="circuit-line"></div>

            {/* Floating Tech Icons for Hero */}
            <FloatingIcon src="/vitejs-svgrepo-com.svg" alt="Vite" top="8%" left="12%" animationDelay="0.1s" />
            <FloatingIcon src="/tailwind-svgrepo-com.svg" alt="Tailwind" top="25%" right="18%" animationDelay="1.1s" />
            <FloatingIcon src="/node-js-svgrepo-com.svg" alt="Node.js" top="42%" left="9%" animationDelay="2.1s" />
            <FloatingIcon src="/mongodb-svgrepo-com.svg" alt="MongoDB" top="58%" right="7%" animationDelay="3.1s" />
            <FloatingIcon src="/logo-ts-svgrepo-com.svg" alt="TypeScript" top="75%" left="28%" animationDelay="4.1s" />
            <FloatingIcon src="/html-5-svgrepo-com.svg" alt="HTML5" top="19%" right="38%" animationDelay="5.1s" />
            <FloatingIcon src="/css-3-svgrepo-com.svg" alt="CSS3" top="36%" left="47%" animationDelay="6.1s" />
            <FloatingIcon src="/mongo-svgrepo-com.svg" alt="Mongo" top="70%" left="65%" animationDelay="8.1s" />
            <FloatingIcon src="/next-dot-js-svgrepo-com.svg" alt="Next.js" top="87%" right="55%" animationDelay="9.1s" />
            <FloatingIcon src="/js02-svgrepo-com.svg" alt="JavaScript" top="32%" right="78%" animationDelay="11.1s" />
            <FloatingIcon src="/github-svgrepo-com.svg" alt="GitHub" top="49%" left="88%" animationDelay="12.1s" />
            <FloatingIcon src="/github-svgrepo-com (2).svg" alt="GitHub Alt" top="66%" right="88%" animationDelay="13.1s" />

            <div className="circuit-line"></div>

            <div className="hero-content text-center z-10 relative pt-20">
              {/* Personal Image - Behind headings with animation */}
              <div className="hero-image absolute -top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 opacity-90 z-10">
                <img
                  src="/mainPic.png"
                  alt="Assaf"
                  className="w-full h-full object-cover rounded-full shadow-2xl animate-float magnetic glow-on-hover"
                  loading="lazy"
                  decoding="async"
            
                  style={{
                    scale: "0.7",
                    filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))",
                    margin: "20px",
                    marginLeft: "40px",
                  }}
                />
              </div>

              <div className="text-center flex flex-col items-center relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  Assaf Azran
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium mb-6 lg:mb-8 drop-shadow-lg">
                  {translations[currentLanguage].heroTitle}
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
                  {translations[currentLanguage].heroDescription}
                </p>
              </div>

              {/* Dynamic Scroll Down Indicator */}
              <div className="scroll-indicator mt-8">
                <div className="scroll-arrow">
                  <div className="scroll-line"></div>
                  <div className="scroll-dot"></div>
                </div>
                <p className="text-white/80 text-sm mt-4 font-light">
                  Scroll to explore
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section - Full Screen Projects */}
          <section
            id="projects"
            className="relative overflow-hidden digital-background min-h-screen"
          >
            {/* Header */}
            <div className="w-full flex flex-col items-center justify-center pt-0 animate-fade-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mt-10 drop-shadow-lg">
                {translations[currentLanguage].projectsTitle}
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-cyan-400 rounded-full mt-3 lg:mt-5 shadow-lg" />
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl lg:max-w-2xl text-center mt-3 lg:mt-5 drop-shadow-lg px-4">
                {translations[currentLanguage].projectsSubtitle}
              </p>
            </div>

            {/* CSS-Only Carousel Container */}
            <div className="projects-carousel relative min-h-[80vh] lg:min-h-[85vh] overflow-hidden mt-6 lg:mt-10 pb-16">
              {/* Dynamic Background Elements for Projects */}
              <div className="code-element" style={{ top: "10%", left: "5%" }}>
                {`const projects = [`}
              </div>
              <div
                className="code-element"
                style={{ top: "20%", right: "10%" }}
              >
                {`'React', 'Node.js'`}
              </div>
              <div
                className="code-element"
                style={{ bottom: "20%", left: "15%" }}
              >
                {`'MongoDB', 'Express'`}
              </div>

              {/* Floating Tech Icons */}
              <FloatingIcon src="/vitejs-svgrepo-com.svg" alt="Vite" top="7%" left="11%" animationDelay="0s" />
              <FloatingIcon src="/tailwind-svgrepo-com.svg" alt="Tailwind" top="24%" right="14%" animationDelay="1s" />
              <FloatingIcon src="/node-js-svgrepo-com.svg" alt="Node.js" top="41%" left="6%" animationDelay="2s" />
              <FloatingIcon src="/mongodb-svgrepo-com.svg" alt="MongoDB" top="58%" right="21%" animationDelay="3s" />
              <FloatingIcon src="/logo-ts-svgrepo-com.svg" alt="TypeScript" top="75%" left="19%" animationDelay="4s" />
              <FloatingIcon src="/html-5-svgrepo-com.svg" alt="HTML5" top="92%" right="9%" animationDelay="5s" />
              <FloatingIcon src="/css-3-svgrepo-com.svg" alt="CSS3" top="16%" left="33%" animationDelay="6s" />
              <FloatingIcon src="/next-dot-js-svgrepo-com.svg" alt="Next.js" top="67%" right="62%" animationDelay="9s" />
              <FloatingIcon src="/js02-svgrepo-com.svg" alt="JavaScript" top="11%" right="75%" animationDelay="11s" />
              <FloatingIcon src="/github-svgrepo-com.svg" alt="GitHub" top="28%" left="82%" animationDelay="12s" />
              <FloatingIcon src="/github-svgrepo-com (2).svg" alt="GitHub Alt" top="45%" right="89%" animationDelay="13s" />

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

              <div
                className="circuit-line"
                style={{ top: "30%", left: "-200px", width: "250px" }}
              ></div>
              <div
                className="circuit-line"
                style={{ bottom: "40%", right: "-200px", width: "250px" }}
              ></div>

              {/* Radio buttons for CSS-only carousel */}
              <input
                type="radio"
                id="project1cb"
                name="projects"
                defaultChecked
                className="project-radio"
              />
              <input
                type="radio"
                id="project2cb"
                name="projects"
                className="project-radio"
              />
              <input
                type="radio"
                id="project3cb"
                name="projects"
                className="project-radio"
              />
              <input
                type="radio"
                id="project4cb"
                name="projects"
                className="project-radio"
              />

              {projects.map((project, index) => {
                return (
                  <div
                    key={project.id}
                    className={`project-page`}
                    id={`project${index + 1}`}
                  >
                    {/* תוכן הסלייד */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1200px] h-full mx-auto px-4 lg:px-8">
                      {/* טקסט */}
                      <div className="flex-1 animate-fade-right order-2 lg:order-1 text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                        <p className="text-white/90 mb-6 text-base lg:text-lg leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 animate-fade-up justify-center lg:justify-start">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 lg:px-4 py-1 lg:py-2 rounded-full bg-white/10 text-white text-xs lg:text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="animate-scale-up animate-delay-300">
                          {project.id === 4 ? (
                            <button
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                              style={{ padding: "10px 24px" }}
                              onClick={() => setCurrentPage("portfolio")}
                            >
                              {translations[currentLanguage].takeALook}
                            </button>
                          ) : project.link === "#" ? (
                            <button
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white cursor-not-allowed"
                              style={{ padding: "10px 24px" }}
                              disabled
                            >
                              {translations[currentLanguage].comingSoon}
                            </button>
                          ) : (
                            <a
                              style={{ padding: "10px 24px" }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                              {translations[currentLanguage].takeALook}
                            </a>
                          )}
                        </div>

                        {/* Navigation to next project */}
                        <div className="mt-6">
                          {index < projects.length - 1 && (
                            <label
                              htmlFor={`project${index + 2}cb`}
                              className="project-nav-label inline-block cursor-pointer bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300 font-semibold"
                            >
                              {translations[currentLanguage].nextProject ||
                                "הבא"}{" "}
                              ➤
                            </label>
                          )}
                          {index === projects.length - 1 && (
                            <label
                              htmlFor="project1cb"
                              className="project-nav-label inline-block cursor-pointer bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-300 font-semibold"
                            >
                              ↺{" "}
                              {translations[currentLanguage].startAgain ||
                                "התחל מחדש"}
                            </label>
                          )}
                        </div>
                      </div>

                      {/* תמונה */}
                      <div className="flex-1 flex items-center justify-center animate-fade-left order-1 lg:order-2">
                        <div
                          className="w-full max-w-[350px] lg:max-w-[400px] relative group cursor-pointer"
                          onClick={() => handleProjectImageClick(project)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          {project.id === 1 ? (
                            <img
                              src="p1.jpg"
                              alt="Student System Interface"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.src = "/pro1.png"; // Fallback
                              }}
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : project.id === 2 ? (
                            <img
                              src="m11.jpg"
                              alt="Movie Rating Interface"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.src = "/pro2.png"; // Fallback
                              }}
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : project.id === 3 ? (
                            <img
                              src="P3.jpg"
                              alt="Event Production E-commerce"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.src = "/pro3.png"; // Fallback
                              }}
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <img
                              src="assafpps.png"
                              alt="Portfolio & Landing Pages"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.src = "/pro1.png"; // Fallback
                              }}
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Navigation indicators */}
              <div className="carousel-indicators absolute bottom-4 lg:bottom-6 inset-x-0 z-[100] flex items-center justify-center gap-3">
                <label
                  htmlFor="project1cb"
                  className="carousel-indicator h-3 w-3 rounded-full cursor-pointer transition-all duration-300 bg-white/40 hover:bg-white/60"
                ></label>
                <label
                  htmlFor="project2cb"
                  className="carousel-indicator h-3 w-3 rounded-full cursor-pointer transition-all duration-300 bg-white/40 hover:bg-white/60"
                ></label>
                <label
                  htmlFor="project3cb"
                  className="carousel-indicator h-3 w-3 rounded-full cursor-pointer transition-all duration-300 bg-white/40 hover:bg-white/60"
                ></label>
                <label
                  htmlFor="project4cb"
                  className="carousel-indicator h-3 w-3 rounded-full cursor-pointer transition-all duration-300 bg-white/40 hover:bg-white/60"
                ></label>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="skills digital-background relative px-6 z-10"
          >
            {/* Dynamic Background Elements for Skills */}
            <div className="code-element" style={{ top: "15%", left: "5%" }}>
              const skills ={" "}
            </div>
            <div className="code-element" style={{ top: "25%", right: "10%" }}>
              React, Node.js,
            </div>
            <div
              className="code-element"
              style={{ bottom: "25%", left: "15%" }}
            >
              MongoDB, Express
            </div>

            <div
              className="glowing-shape"
              style={{
                top: "20%",
                right: "30%",
                width: "60px",
                height: "60px",
              }}
            ></div>
            <div
              className="glowing-shape"
              style={{
                bottom: "15%",
                right: "15%",
                width: "80px",
                height: "80px",
              }}
            ></div>

            {/* Floating Tech Icons for Skills */}
            <FloatingIcon src="/vitejs-svgrepo-com.svg" alt="Vite" top="9%" left="13%" animationDelay="0.2s" />
            <FloatingIcon src="/tailwind-svgrepo-com.svg" alt="Tailwind" top="26%" right="16%" animationDelay="1.2s" />
            <FloatingIcon src="/node-js-svgrepo-com.svg" alt="Node.js" top="43%" left="7%" animationDelay="2.2s" />
            <FloatingIcon src="/mongodb-svgrepo-com.svg" alt="MongoDB" top="60%" right="23%" animationDelay="3.2s" />
            <FloatingIcon src="/logo-ts-svgrepo-com.svg" alt="TypeScript" top="77%" left="25%" animationDelay="4.2s" />
            <FloatingIcon src="/html-5-svgrepo-com.svg" alt="HTML5" top="94%" right="11%" animationDelay="5.2s" />
            <FloatingIcon src="/css-3-svgrepo-com.svg" alt="CSS3" top="17%" left="39%" animationDelay="6.2s" />
            <FloatingIcon src="/mongo-svgrepo-com.svg" alt="Mongo" top="51%" left="57%" animationDelay="8.2s" />
            <FloatingIcon src="/next-dot-js-svgrepo-com.svg" alt="Next.js" top="68%" right="60%" animationDelay="9.2s" />
            <FloatingIcon src="/js02-svgrepo-com.svg" alt="JavaScript" top="12%" right="72%" animationDelay="11.2s" />
            <FloatingIcon src="/github-svgrepo-com.svg" alt="GitHub" top="29%" left="79%" animationDelay="12.2s" />
            <FloatingIcon src="/github-svgrepo-com (2).svg" alt="GitHub Alt" top="46%" right="86%" animationDelay="13.2s" />

            <div className="max-w-4xl lg:max-w-6xl mx-auto relative z-10 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-white animate-fade-left">
                {translations[currentLanguage].skillsTitle}
              </h2>

              <div className="code-editor-container bg-gray-900 rounded-xl lg:rounded-2xl p-4 lg:p-8 shadow-2xl border border-gray-700 animate-scale-up">
                <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-2 lg:ml-4 font-mono text-xs lg:text-sm">
                    technologies.js
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 lg:p-6 mb-6 lg:mb-8 border border-gray-700 font-mono text-xs lg:text-base text-left max-w-full lg:max-w-2xl mx-auto shadow-lg overflow-x-auto">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-400">technologies</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">&#123;</span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">frontend</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'HTML'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'CSS'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'JavaScript'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'React'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'TypeScript'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Tailwind CSS'</span>
                    <span className="text-white">],</span>
                  </span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">backend</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'Node.js'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Express'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'MongoDB'</span>
                    <span className="text-white">],</span>
                  </span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">tools</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'GitHub'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'VS Code'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'cursor'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Figma'</span>
                    <span className="text-white">]</span>
                  </span>
                  <br />
                  <span className="text-white">&#125;;</span>
                </div>

                {/* Second Code Editor for Other Skills */}
                <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-2 lg:ml-4 font-mono text-xs lg:text-sm">
                    soft-skills.js
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 lg:p-6 border border-gray-700 font-mono text-xs lg:text-base text-left max-w-full lg:max-w-2xl mx-auto shadow-lg overflow-x-auto">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-yellow-400">softSkills</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">&#123;</span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">communication</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'Team Leadership'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Client Relations'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Problem Solving'</span>
                    <span className="text-white">],</span>
                  </span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">workStyle</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'Fast Learner'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Detail Oriented'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'Creative Thinking'</span>
                    <span className="text-white">],</span>
                  </span>
                  <br />
                  <span className="ml-4 lg:ml-8">
                    <span className="text-green-400">languages</span>
                    <span className="text-white">: [</span>
                    <span className="text-orange-400">'Hebrew'</span>
                    <span className="text-white">, </span>
                    <span className="text-orange-400">'English'</span>
                    <span className="text-white">]</span>
                  </span>
                  <br />
                  <span className="text-white">&#125;;</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="education digital-background">
            {/* Dynamic Background Elements for Education */}
            <div className="code-element" style={{ top: "15%", left: "10%" }}>
              {`const education = [`}
            </div>
            <div className="code-element" style={{ top: "25%", right: "15%" }}>
              {`'SV College', 'ORT'`}
            </div>
            <div
              className="code-element"
              style={{ bottom: "20%", left: "20%" }}
            >
              {`'Full Stack', 'Engineering'`}
            </div>

            <div
              className="glowing-shape"
              style={{
                top: "20%",
                right: "30%",
                width: "100px",
                height: "100px",
              }}
            ></div>
            <div
              className="glowing-shape"
              style={{
                bottom: "30%",
                right: "25%",
                width: "90px",
                height: "90px",
              }}
            ></div>

            <div
              className="circuit-line"
              style={{ top: "35%", left: "-250px", width: "300px" }}
            ></div>
            <div
              className="circuit-line"
              style={{ bottom: "45%", right: "-250px", width: "300px" }}
            ></div>

            {/* Floating Tech Icons for Education */}
            <FloatingIcon src="/vitejs-svgrepo-com.svg" alt="Vite" top="11%" left="14%" animationDelay="0.5s" />
            <FloatingIcon src="/tailwind-svgrepo-com.svg" alt="Tailwind" top="28%" right="19%" animationDelay="1.5s" />
            <FloatingIcon src="/node-js-svgrepo-com.svg" alt="Node.js" top="45%" left="8%" animationDelay="2.5s" />
            <FloatingIcon src="/mongodb-svgrepo-com.svg" alt="MongoDB" top="62%" right="26%" animationDelay="3.5s" />
            <FloatingIcon src="/mongo-svgrepo-com.svg" alt="Mongo" top="96%" right="32%" animationDelay="5.5s" />
            <FloatingIcon src="/next-dot-js-svgrepo-com.svg" alt="Next.js" top="13%" left="48%" animationDelay="6.5s" />
            <FloatingIcon src="/node-js-svgrepo-com (1).svg" alt="Node.js Alt" top="30%" right="55%" animationDelay="7.5s" />
            <FloatingIcon src="/js02-svgrepo-com.svg" alt="JavaScript" top="47%" left="62%" animationDelay="8.5s" />
            <FloatingIcon src="/github-svgrepo-com.svg" alt="GitHub" top="64%" right="69%" animationDelay="9.5s" />
            <FloatingIcon src="/github-svgrepo-com (2).svg" alt="GitHub Alt" top="81%" left="76%" animationDelay="10.5s" />

            <div className="container px-4">
              <div className="animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 lg:mb-16 text-white drop-shadow-lg">
                  {translations[currentLanguage].educationTitle}
                </h2>

                <div className="education-grid max-w-4xl mx-auto space-y-4 md:space-y-6">
                  <div className="education-card bg-black border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="education-title text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                      {translations[currentLanguage].fullStackCourse}
                    </h3>
                    <p className="education-institution text-cyan-400 text-sm sm:text-base lg:text-lg mb-2">
                      {translations[currentLanguage].svCollege}
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-1">
                      {translations[currentLanguage].fullStackDuration}
                    </p>
                    <p className="education-location text-white/70 text-xs sm:text-sm lg:text-base mb-3">
                      {translations[currentLanguage].telAvivLocation}
                    </p>
                    <p className="education-description text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {translations[currentLanguage].fullStackDesc}
                    </p>
                  </div>

                  <div className="education-card bg-black border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="education-title text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                      {translations[currentLanguage].mechanicalEngineer}
                    </h3>
                    <p className="education-institution text-cyan-400 text-sm sm:text-base lg:text-lg mb-2">
                      {translations[currentLanguage].ortCollege}
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-1">
                      {translations[currentLanguage].mechanicalDuration}
                    </p>
                    <p className="education-location text-white/70 text-xs sm:text-sm lg:text-base mb-1">
                      {translations[currentLanguage].ashkelonLocation}
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-3 font-medium">
                      {translations[currentLanguage].gpaText}
                    </p>
                    <p className="education-description text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {translations[currentLanguage].mechanicalDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact digital-background">
            {/* Dynamic Background Elements for Contact */}
            <div className="code-element" style={{ top: "10%", left: "8%" }}>
              {`const contact = {`}
            </div>
            <div className="code-element" style={{ top: "20%", right: "12%" }}>
              {`phone: '054-949-8551'`}
            </div>
            <div
              className="code-element"
              style={{ bottom: "15%", left: "18%" }}
            >
              {`email: 'assafaz09@gmail.com'`}
            </div>

            <div
              className="glowing-shape"
              style={{
                top: "25%",
                right: "35%",
                width: "110px",
                height: "110px",
              }}
            ></div>
            <div
              className="glowing-shape"
              style={{
                bottom: "35%",
                right: "30%",
                width: "95px",
                height: "95px",
              }}
            ></div>

            <div
              className="circuit-line"
              style={{ top: "40%", left: "-280px", width: "350px" }}
            ></div>
            <div
              className="circuit-line"
              style={{ bottom: "50%", right: "-280px", width: "350px" }}
            ></div>

            {/* Floating Tech Icons for Contact */}
            <FloatingIcon src="/logo-ts-svgrepo-com.svg" alt="TypeScript" top="12%" left="11%" animationDelay="0.3s" />
            <FloatingIcon src="/html-5-svgrepo-com.svg" alt="HTML5" top="29%" right="17%" animationDelay="1.3s" />
            <FloatingIcon src="/css-3-svgrepo-com.svg" alt="CSS3" top="46%" left="6%" animationDelay="2.3s" />
            <FloatingIcon src="/vitejs-svgrepo-com.svg" alt="Vite" top="63%" right="24%" animationDelay="3.3s" />
            <FloatingIcon src="/mongo-svgrepo-com.svg" alt="Mongo" top="97%" right="38%" animationDelay="5.3s" />
            <FloatingIcon src="/next-dot-js-svgrepo-com.svg" alt="Next.js" top="18%" left="45%" animationDelay="6.3s" />
            <FloatingIcon src="/node-js-svgrepo-com (1).svg" alt="Node.js Alt" top="35%" left="58%" animationDelay="7.3s" />
            <FloatingIcon src="/js02-svgrepo-com.svg" alt="JavaScript" top="52%" right="65%" animationDelay="8.3s" />
            <FloatingIcon src="/github-svgrepo-com.svg" alt="GitHub" top="69%" left="78%" animationDelay="9.3s" />
            <FloatingIcon src="/github-svgrepo-com (2).svg" alt="GitHub Alt" top="86%" right="81%" animationDelay="10.3s" />

            <div className="container px-4">
              <div className="animate-fade-right">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 lg:mb-8 text-white drop-shadow-lg">
                  Get In Touch
                </h2>

                <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-fade-up">
                  <div
                    style={{ backgroundColor: "black" }}
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect"
                  >
                    <h3 className="contact-label text-white text-lg lg:text-xl">
                      Phone
                    </h3>
                    <p className="contact-value text-cyan-400 text-base lg:text-lg">
                      054-949-8551
                    </p>
                  </div>

                  <div
                    style={{ backgroundColor: "black" }}
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect"
                  >
                    <h3 className="contact-label text-white text-lg lg:text-xl">
                      Email
                    </h3>
                    <p className="contact-value text-cyan-400 text-base lg:text-lg break-all">
                      assafaz09@gmail.com
                    </p>
                  </div>

                  <div
                    style={{ backgroundColor: "black" }}
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect"
                  >
                    <h3 className="contact-label text-white text-lg lg:text-xl">
                      GitHub
                    </h3>
                    <a
                      href="https://github.com/assafaz09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value text-cyan-400 hover:text-cyan-300 transition-colors text-base lg:text-lg break-all"
                    >
                      github.com/assafaz09
                    </a>
                  </div>

                  <div
                    style={{ backgroundColor: "black" }}
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect"
                  >
                    <h3 className="contact-label text-white text-lg lg:text-xl">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/assafazran-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value text-cyan-400 hover:text-cyan-300 transition-colors text-base lg:text-lg break-all"
                    >
                      linkedin.com/in/assafazran-developer
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Background Elements for Fun */}
            <div className="code-element" style={{ top: "12%", left: "12%" }}>
              {`const life = 'awesome'`}
            </div>
            <div className="code-element" style={{ top: "22%", right: "18%" }}>
              {`const coffee = 'fuel'`}
            </div>
            <div
              className="code-element"
              style={{ bottom: "18%", left: "25%" }}
            >
              {`const code = 'passion'`}
            </div>

            <div
              className="glowing-shape"
              style={{
                top: "18%",
                right: "40%",
                width: "85px",
                height: "85px",
              }}
            ></div>
            <div
              className="glowing-shape"
              style={{
                bottom: "28%",
                right: "35%",
                width: "105px",
                height: "105px",
              }}
            ></div>

            <div
              className="circuit-line"
              style={{ top: "42%", left: "-300px", width: "400px" }}
            ></div>
            <div
              className="circuit-line"
              style={{ bottom: "55%", right: "-300px", width: "400px" }}
            ></div>

            <div className="container px-4">
              <div className="animate-fade-left">
                <h2 className="mb-6 lg:mb-8 text-black drop-shadow-lg text-2xl sm:text-3xl lg:text-3xl font-bold text-center">
                  Living, learning, & leveling up one day at a time.
                </h2>
                <div className="emoji-container animate-scale-up flex justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 1V3"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 1V3"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 1V3"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon ml-4"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon ml-4"
                  >
                    <path
                      d="M9 3V7H11V5H13V7H15V3H17V7H19V9H17V11H19V13H17V15H19V17H17V19H15V17H13V19H11V17H9V19H7V17H5V15H7V13H5V11H7V9H5V7H7V5H9V3Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Section */}

          {/* Footer */}
          <footer className="footer">
            <div className="container px-4">
              <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="footer-section animate-fade-up">
                  <h3 className="footer-title text-lg lg:text-xl">
                    Assaf Azran
                  </h3>
                  <p className="footer-description text-sm lg:text-base">
                    Full Stack Developer passionate about creating exceptional
                    digital experiences
                  </p>
                </div>

                <div className="footer-section animate-fade-up animate-delay-200">
                  <h4 className="footer-subtitle text-base lg:text-lg">
                    Quick Links
                  </h4>
                  <ul className="footer-links">
                    <li className="text-sm lg:text-base">
                      <a href="#home">Home</a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a href="#projects">Projects</a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a href="#skills">Skills</a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a href="#projects">Education</a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-section animate-fade-up animate-delay-300">
                  <h4 className="footer-subtitle text-base lg:text-lg">
                    Technologies
                  </h4>
                  <ul className="footer-links">
                    <li className="text-sm lg:text-base">React.js</li>
                    <li className="text-sm lg:text-base">Node.js</li>
                    <li className="text-sm lg:text-base">MongoDB</li>
                    <li className="text-sm lg:text-base">JavaScript</li>
                    <li className="text-sm lg:text-base">CSS3</li>
                  </ul>
                </div>

                <div className="footer-section animate-fade-up animate-delay-400">
                  <h4 className="footer-subtitle text-base lg:text-lg">
                    Connect
                  </h4>
                  <ul className="footer-links">
                    <li className="text-sm lg:text-base">
                      <a
                        href="https://github.com/assafaz09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a
                        href="https://www.linkedin.com/in/assafazran-developer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li className="text-sm lg:text-base">
                      <a href="mailto:assafaz09@gmail.com">Email</a>
                    </li>
                    <li className="text-sm lg:text-base">
                      Phone: 054-949-8551
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom animate-fade-up animate-delay-500">
                <div className="footer-divider"></div>
                <p className="footer-copyright text-sm lg:text-base">
                  © 2025 Assaf Azran. Built with ❤️ and ☕
                </p>
              </div>
            </div>
          </footer>
        </>
      ) : currentPage === "portfolio" ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
            </div>
          }
        >
          <Portfolio
            onNavigate={scrollToSection}
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </Suspense>
      ) : currentPage === "about" ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
            </div>
          }
        >
          <About
            onNavigate={scrollToSection}
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </Suspense>
      ) : (
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1 style={{ color: "red", fontSize: "3rem" }}>ABOUT PAGE TEST</h1>
          <p style={{ fontSize: "1.5rem" }}>Current page: {currentPage}</p>
          <button
            onClick={() => setCurrentPage("home")}
            style={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Go Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
