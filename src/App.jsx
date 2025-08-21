import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { useEffect, useRef, useState } from "react";

function App() {
  const observerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  const projects = [
    {
      id: 1,
      title: "Student Management System",
      emoji: "🎓",
      link: "https://f-student-system-production.up.railway.app/",
      description:
        "Full-stack web application for managing student records, courses, and academic data with real-time updates and comprehensive admin dashboard.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT Auth",
      ],
      image: "project1.jpg",
      screenshots: [
        "project1.jpg",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
      ],
    },
    {
      id: 2,
      title: "BestMovie Rate",
      emoji: "🎬",
      link: "https://github.com/assafaz09/movieRate",
      description:
        "Interactive movie rating and review platform where users can discover, rate, and review their favorite films with a modern and intuitive interface.",
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
      title: "Event Production Store",
      emoji: "🎪",
      link: "#",
      description:
        "E-commerce platform for event production services including planning, catering, decorations, and entertainment with integrated booking and payment systems.",
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
      title: "Portfolio & Landing Pages",
      emoji: "🌐",
      link: "#",
      description:
        "Collection of professional portfolio websites and landing pages showcasing modern design, responsive layouts, and creative user experiences for various clients and projects.",
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
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectImageClick = (project) => {
    if (project.id === 4) {
      // Portfolio & Landing Pages - לעמוד הפורטפוליו
      setCurrentPage("portfolio");
    } else if (project.link !== "#") {
      // פרוייקטים עם קישור - פתיחה בחלון חדש
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
    // אם זה "Coming Soon" (link === "#") - לא עושים כלום
  };

  const scrollToSection = (sectionId) => {
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
  };

  useEffect(() => {
    // Create intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Observe all animated elements with different animation types
      const animationSelectors = [
        ".animate-on-scroll",
        ".animate-fade-up",
        ".animate-fade-left",
        ".animate-fade-right",
        ".animate-scale-up",
      ];

      animationSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observerRef.current.observe(el));
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
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar onNavigate={scrollToSection} />

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
            <div
              className="floating-icon"
              style={{ top: "8%", left: "12%", animationDelay: "0.1s" }}
            >
              <img
                src="/vitejs-svgrepo-com.svg"
                alt="Vite"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "25%", right: "18%", animationDelay: "1.1s" }}
            >
              <img
                src="/tailwind-svgrepo-com.svg"
                alt="Tailwind"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "42%", left: "9%", animationDelay: "2.1s" }}
            >
              <img
                src="/node-js-svgrepo-com.svg"
                alt="Node.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "58%", right: "7%", animationDelay: "3.1s" }}
            >
              <img
                src="/mongodb-svgrepo-com.svg"
                alt="MongoDB"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "75%", left: "28%", animationDelay: "4.1s" }}
            >
              <img
                src="/logo-ts-svgrepo-com.svg"
                alt="TypeScript"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "19%", right: "38%", animationDelay: "5.1s" }}
            >
              <img
                src="/html-5-svgrepo-com.svg"
                alt="HTML5"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "36%", left: "47%", animationDelay: "6.1s" }}
            >
              <img
                src="/css-3-svgrepo-com.svg"
                alt="CSS3"
                className="tech-icon"
              />
            </div>

            <div
              className="floating-icon"
              style={{ top: "70%", left: "65%", animationDelay: "8.1s" }}
            >
              <img
                src="/mongo-svgrepo-com.svg"
                alt="Mongo"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "87%", right: "55%", animationDelay: "9.1s" }}
            >
              <img
                src="/next-dot-js-svgrepo-com.svg"
                alt="Next.js"
                className="tech-icon"
              />
            </div>

            <div
              className="floating-icon"
              style={{ top: "32%", right: "78%", animationDelay: "11.1s" }}
            >
              <img
                src="/js02-svgrepo-com.svg"
                alt="JavaScript Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "49%", left: "88%", animationDelay: "12.1s" }}
            >
              <img
                src="/github-svgrepo-com.svg"
                alt="GitHub"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "66%", right: "88%", animationDelay: "13.1s" }}
            >
              <img
                src="/github-svgrepo-com (2).svg"
                alt="GitHub Alt"
                className="tech-icon"
              />
            </div>

            <div className="circuit-line"></div>

            <div className="hero-content text-center z-10 relative pt-20">
              {/* Personal Image - Behind headings with animation */}
              <div className="hero-image absolute -top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 opacity-80 z-0">
                <img
                  src="/assafP.png"
                  alt="Assaf"
                  className="w-200 h-150 object-cover rounded-full shadow-2xl animate-float"
                  style={{
                    filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))",
                  }}
                />
              </div>

              <div className="text-center flex flex-col items-center relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  Assaf Azran
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium mb-6 lg:mb-8 drop-shadow-lg">
                  FullStack Developer
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
                  Transforming business challenges into scalable,
                  high-performance web solutions that drive measurable results.
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
                Projects
              </h2>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-cyan-400 rounded-full mt-3 lg:mt-5 shadow-lg" />
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl lg:max-w-2xl text-center mt-3 lg:mt-5 drop-shadow-lg px-4">
                Explore a selection of my recent work, each crafted with
                attention to detail and a focus on user experience.
              </p>
            </div>

            {/* Slider container */}
            <div className="relative min-h-[80vh] lg:min-h-[85vh] overflow-hidden mt-6 lg:mt-10 pb-16">
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
              <div
                className="floating-icon"
                style={{ top: "7%", left: "11%", animationDelay: "0s" }}
              >
                <img
                  src="/vitejs-svgrepo-com.svg"
                  alt="Vite"
                  className="tech-icon"
                />
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
                <img
                  src="/css-3-svgrepo-com.svg"
                  alt="CSS3"
                  className="tech-icon"
                />
              </div>

              <div
                className="floating-icon"
                style={{ top: "67%", right: "62%", animationDelay: "9s" }}
              >
                <img
                  src="/next-dot-js-svgrepo-com.svg"
                  alt="Next.js"
                  className="tech-icon"
                />
              </div>

              <div
                className="floating-icon"
                style={{ top: "11%", right: "75%", animationDelay: "11s" }}
              >
                <img
                  src="/js02-svgrepo-com.svg"
                  alt="JavaScript Alt"
                  className="tech-icon"
                />
              </div>
              <div
                className="floating-icon"
                style={{ top: "28%", left: "82%", animationDelay: "12s" }}
              >
                <img
                  src="/github-svgrepo-com.svg"
                  alt="GitHub"
                  className="tech-icon"
                />
              </div>
              <div
                className="floating-icon"
                style={{ top: "45%", right: "89%", animationDelay: "13s" }}
              >
                <img
                  src="/github-svgrepo-com (2).svg"
                  alt="GitHub Alt"
                  className="tech-icon"
                />
              </div>

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

              {projects.map((project, index) => {
                const offset = (index - currentProject) * 100; // אחוזי תזוזה בין סליידים
                const isActive = index === currentProject;

                return (
                  <div
                    key={project.id}
                    className={[
                      "absolute inset-0 transition-transform duration-700 ease-in-out",
                      isActive
                        ? "z-10 opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                    ].join(" ")}
                    style={{ transform: `translateX(${offset}%)` }}
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
                              Take a Look
                            </button>
                          ) : project.link === "#" ? (
                            <button
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white cursor-not-allowed"
                              style={{ padding: "10px 24px" }}
                              disabled
                            >
                              Coming Soon
                            </button>
                          ) : (
                            <a
                              style={{ padding: "10px 24px" }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                              Take a Look
                            </a>
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
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : project.id === 2 ? (
                            <img
                              src="m11.jpg"
                              alt="Movie Rating Interface"
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : project.id === 3 ? (
                            <img
                              src="P3.jpg"
                              alt="Event Production E-commerce"
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <img
                              src="assafpps.png"
                              alt="Portfolio & Landing Pages"
                              className="w-full h-auto rounded-xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* חצים */}
              <button
                className="project-nav absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-[100] h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center hover:bg-white shadow-lg text-xl sm:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300"
                onClick={prevProject}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="project-nav absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[100] h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center hover:bg-white shadow-lg text-xl sm:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300"
                onClick={nextProject}
                aria-label="Next"
              >
                ›
              </button>

              {/* אינדיקטורים */}
              <div className="absolute bottom-4 lg:bottom-6 inset-x-0 z-[100] flex items-center justify-center gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentProject(i)}
                    className={[
                      "h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full transition",
                      i === currentProject
                        ? "bg-blue-600 w-4 lg:w-6"
                        : "bg-gray-300 hover:bg-gray-400",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
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
            <div
              className="floating-icon"
              style={{ top: "9%", left: "13%", animationDelay: "0.2s" }}
            >
              <img
                src="/vitejs-svgrepo-com.svg"
                alt="Vite"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "26%", right: "16%", animationDelay: "1.2s" }}
            >
              <img
                src="/tailwind-svgrepo-com.svg"
                alt="Tailwind"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "43%", left: "7%", animationDelay: "2.2s" }}
            >
              <img
                src="/node-js-svgrepo-com.svg"
                alt="Node.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "60%", right: "23%", animationDelay: "3.2s" }}
            >
              <img
                src="/mongodb-svgrepo-com.svg"
                alt="MongoDB"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "77%", left: "25%", animationDelay: "4.2s" }}
            >
              <img
                src="/logo-ts-svgrepo-com.svg"
                alt="TypeScript"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "94%", right: "11%", animationDelay: "5.2s" }}
            >
              <img
                src="/html-5-svgrepo-com.svg"
                alt="HTML5"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "17%", left: "39%", animationDelay: "6.2s" }}
            >
              <img
                src="/css-3-svgrepo-com.svg"
                alt="CSS3"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "51%", left: "57%", animationDelay: "8.2s" }}
            >
              <img
                src="/mongo-svgrepo-com.svg"
                alt="Mongo"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "68%", right: "60%", animationDelay: "9.2s" }}
            >
              <img
                src="/next-dot-js-svgrepo-com.svg"
                alt="Next.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "12%", right: "72%", animationDelay: "11.2s" }}
            >
              <img
                src="/js02-svgrepo-com.svg"
                alt="JavaScript Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "29%", left: "79%", animationDelay: "12.2s" }}
            >
              <img
                src="/github-svgrepo-com.svg"
                alt="GitHub"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "46%", right: "86%", animationDelay: "13.2s" }}
            >
              <img
                src="/github-svgrepo-com (2).svg"
                alt="GitHub Alt"
                className="tech-icon"
              />
            </div>

            <div className="max-w-4xl lg:max-w-6xl mx-auto relative z-10 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-white animate-fade-left">
                Skills & Technologies
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
            <div
              className="floating-icon"
              style={{ top: "11%", left: "14%", animationDelay: "0.5s" }}
            >
              <img
                src="/vitejs-svgrepo-com.svg"
                alt="Vite"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "28%", right: "19%", animationDelay: "1.5s" }}
            >
              <img
                src="/tailwind-svgrepo-com.svg"
                alt="Tailwind"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "45%", left: "8%", animationDelay: "2.5s" }}
            >
              <img
                src="/node-js-svgrepo-com.svg"
                alt="Node.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "62%", right: "26%", animationDelay: "3.5s" }}
            >
              <img
                src="/mongodb-svgrepo-com.svg"
                alt="MongoDB"
                className="tech-icon"
              />
            </div>

            <div
              className="floating-icon"
              style={{ top: "96%", right: "32%", animationDelay: "5.5s" }}
            >
              <img
                src="/mongo-svgrepo-com.svg"
                alt="Mongo"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "13%", left: "48%", animationDelay: "6.5s" }}
            >
              <img
                src="/next-dot-js-svgrepo-com.svg"
                alt="Next.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "30%", right: "55%", animationDelay: "7.5s" }}
            >
              <img
                src="/node-js-svgrepo-com (1).svg"
                alt="Node.js Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "47%", left: "62%", animationDelay: "8.5s" }}
            >
              <img
                src="/js02-svgrepo-com.svg"
                alt="JavaScript Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "64%", right: "69%", animationDelay: "9.5s" }}
            >
              <img
                src="/github-svgrepo-com.svg"
                alt="GitHub"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "81%", left: "76%", animationDelay: "10.5s" }}
            >
              <img
                src="/github-svgrepo-com (2).svg"
                alt="GitHub Alt"
                className="tech-icon"
              />
            </div>

            <div className="container px-4">
              <div className="animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 lg:mb-16 text-white drop-shadow-lg">
                  Education & Certifications
                </h2>

                <div className="education-grid max-w-4xl mx-auto space-y-4 md:space-y-6">
                  <div className="education-card bg-black border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="education-title text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                      Full Stack Web Development
                    </h3>
                    <p className="education-institution text-cyan-400 text-sm sm:text-base lg:text-lg mb-2">
                      SV College
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-1">
                      January 2025 - August 2025
                    </p>
                    <p className="education-location text-white/70 text-xs sm:text-sm lg:text-base mb-3">
                      Tel Aviv, Israel
                    </p>
                    <p className="education-description text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                      A practical development course emphasizing project
                      building and working in a real development environment.
                    </p>
                  </div>

                  <div className="education-card bg-black border border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                    <h3 className="education-title text-base sm:text-lg lg:text-xl font-semibold text-white mb-2">
                      Practical Engineer in Mechanical Engineering
                    </h3>
                    <p className="education-institution text-cyan-400 text-sm sm:text-base lg:text-lg mb-2">
                      ORT College
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-1">
                      October 2019 - March 2021
                    </p>
                    <p className="education-location text-white/70 text-xs sm:text-sm lg:text-base mb-1">
                      Ashkelon, Israel
                    </p>
                    <p className="education-date text-white/80 text-xs sm:text-sm lg:text-base mb-3 font-medium">
                      GPA: 86
                    </p>
                    <p className="education-description text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                      Technological studies with an emphasis on problem-solving,
                      systematic thinking, and the application of precise
                      methodologies.
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
            <div
              className="floating-icon"
              style={{ top: "12%", left: "11%", animationDelay: "0.3s" }}
            >
              <img
                src="/logo-ts-svgrepo-com.svg"
                alt="TypeScript"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "29%", right: "17%", animationDelay: "1.3s" }}
            >
              <img
                src="/html-5-svgrepo-com.svg"
                alt="HTML5"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "46%", left: "6%", animationDelay: "2.3s" }}
            >
              <img
                src="/css-3-svgrepo-com.svg"
                alt="CSS3"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "63%", right: "24%", animationDelay: "3.3s" }}
            >
              <img
                src="/vitejs-svgrepo-com.svg"
                alt="Vite"
                className="tech-icon"
              />
            </div>

            <div
              className="floating-icon"
              style={{ top: "97%", right: "38%", animationDelay: "5.3s" }}
            >
              <img
                src="/mongo-svgrepo-com.svg"
                alt="Mongo"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "18%", left: "45%", animationDelay: "6.3s" }}
            >
              <img
                src="/next-dot-js-svgrepo-com.svg"
                alt="Next.js"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "35%", left: "58%", animationDelay: "7.3s" }}
            >
              <img
                src="/node-js-svgrepo-com (1).svg"
                alt="Node.js Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "52%", right: "65%", animationDelay: "8.3s" }}
            >
              <img
                src="/js02-svgrepo-com.svg"
                alt="JavaScript Alt"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "69%", left: "78%", animationDelay: "9.3s" }}
            >
              <img
                src="/github-svgrepo-com.svg"
                alt="GitHub"
                className="tech-icon"
              />
            </div>
            <div
              className="floating-icon"
              style={{ top: "86%", right: "81%", animationDelay: "10.3s" }}
            >
              <img
                src="/github-svgrepo-com (2).svg"
                alt="GitHub Alt"
                className="tech-icon"
              />
            </div>

            <div className="container px-4">
              <div className="animate-fade-right">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6 lg:mb-8 text-white drop-shadow-lg">
                  Get In Touch
                </h2>

                <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-fade-up">
                  <div
                    style={{ backgroundColor: "black" }}
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
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
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
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
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
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
                    className="contact-item bg-black border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
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
                  © 2025Assaf Azran. Built with ❤️ and ☕
                </p>
              </div>
            </div>
          </footer>
        </>
      ) : currentPage === "portfolio" ? (
        <Portfolio onNavigate={scrollToSection} />
      ) : currentPage === "about" ? (
        <About onNavigate={scrollToSection} />
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
