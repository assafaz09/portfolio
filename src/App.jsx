import "./App.css";
import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Navbar from "./components/Navbar";
import { translations } from "./translations";
// import ChatBot from "./components/ChatBot";
import HeroBg from "./components/HeroBg";
import IconsBg from "./components/IconsBg";
import Skills from "./components/Skills";

// 🚀 PERFORMANCE OPTIMIZATION: Dynamic imports for code splitting
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));

function App() {
  const observerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  // Personal agent (new tab). Override with VITE_MY_AGENT_URL in .env if you prefer.
  const MY_AGENT_URL = (
    import.meta.env.VITE_MY_AGENT_URL ||
    "https://my-agent-v5xn-assafs-projects-dad2b9ad.vercel.app/"
  ).trim();
  const isMyAgentUrlSet = /^https?:\/\//i.test(MY_AGENT_URL);
  const agentRedirectText =
    currentLanguage === "he"
      ? "מעביר לסוכן האישי שלי"
      : "Redirecting to my personal agent";
  const openAgentLabel = currentLanguage === "he" ? "פתח סוכן" : "Open Agent";

  // 🚀 PERFORMANCE OPTIMIZATION: Memoize expensive computations

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
      },
    );

    // 🚀 PERFORMANCE OPTIMIZATION: Batch DOM queries and use requestAnimationFrame
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        // Single query for all animation selectors - more efficient
        const allAnimatedElements = document.querySelectorAll(
          ".animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right, .animate-scale-up",
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
      {/* <ChatBot /> */}
      <Navbar
        onNavigate={scrollToSection}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {currentPage === "home" ? (
        <>
          {/* Hero Section */}
          <section
            id="hero"
            className="hero digital-background relative min-h-screen flex items-center justify-center p-8"
          >
            {/* Dynamic Background Elements */}
            <HeroBg />

            {/* Floating Tech Icons for Hero */}
            <IconsBg />

            <div className="circuit-line"></div>

            <div className="hero-content text-center z-10 relative flex flex-col items-center justify-center min-h-screen ">
              {/* Personal Image - Behind headings with animation */}
              <div
                style={{ marginBottom: "-80px" }}
                className="hero-image absolute top-17 left-1/2 transform -translate-x-1/2 w-80 h-80 opacity-90 z-10"
              >
                <img
                  src="./mainPic.png"
                  alt="Assaf"
                  className="w-full h-full object-cover rounded-full shadow-2xl animate-float magnetic glow-on-hover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.error("Failed to load image:", e.target.src);
                    e.target.src = "./mainPic.png"; // Fallback image
                  }}
                  style={{
                    scale: "0.9",
                    filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))",
                  }}
                />
              </div>

              <div className="text-center flex flex-col items-center relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  Assaf Azran
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium  lg:mb-8 drop-shadow-lg">
                  Fullstack & AI Developer
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
                  Passionate FullStack & AI Developer specializing in bridging
                  the gap between robust web architectures and Agentic AI.
                  Expert in building scalable systems
                </p>

                {/* Personal Agent Redirect (external link) */}
                <div className="mt-8 flex justify-center animate-fade-up animate-delay-200">
                  <div className="agent-cta-card" aria-label="My Agent CTA">
                    <div className="agent-cta-header">
                      <span className="agent-cta-dot" />
                      <span className="agent-cta-badge">MY AGENT</span>
                    </div>

                    <p className="agent-cta-text">{agentRedirectText}</p>

                    <div className="agent-cta-actions">
                      {isMyAgentUrlSet ? (
                        <a
                          className="agent-cta-button"
                          href={MY_AGENT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{openAgentLabel}</span>
                          <span className="agent-cta-button-icon">-&gt;</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="agent-cta-button agent-cta-button--disabled"
                          disabled
                          title={
                            currentLanguage === "he"
                              ? "הוסף כתובת לסוכן ב־VITE_MY_AGENT_URL או ב־App.jsx"
                              : "Set VITE_MY_AGENT_URL or MY_AGENT_URL in App.jsx"
                          }
                        >
                          <span>{openAgentLabel}</span>
                          <span className="agent-cta-button-icon">-&gt;</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
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

          {/* About Me Section */}
          <section
            id="about"
            className="about-me digital-background relative z-10 min-h-screen flex items-center"
          >
            {/* Dynamic Background Elements for About Me */}
            <div
              className="code-element"
              style={{ top: "18%", left: "7%", position: "absolute" }}
            >
              {`const aboutMe = {`}
            </div>
            <div
              className="code-element"
              style={{ top: "27%", right: "12%", position: "absolute" }}
            >
              {`'Fullstack', 'AI', 'Developer'`}
            </div>
            <div
              className="code-element"
              style={{ bottom: "22%", left: "16%", position: "absolute" }}
            >
              {`'Web', 'Agentic AI', 'Leader'`}
            </div>

            <div
              className="glowing-shape"
              style={{
                top: "19%",
                right: "31%",
                width: "70px",
                height: "70px",
                position: "absolute",
              }}
            ></div>
            <div
              className="glowing-shape"
              style={{
                bottom: "13%",
                right: "12%",
                width: "60px",
                height: "60px",
                position: "absolute",
              }}
            ></div>

            {/* Floating Tech Icons for About Me */}
            <IconsBg />

            <div className="w-full flex p-4 justify-center z-10">
              <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto relative p-4 z-10 px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-white animate-fade-left">
                  About Me
                </h2>
                <div className="about-description bg-gray-900/80 rounded-xl lg:rounded-2xl lg:p-10 shadow-2xl border border-gray-700 animate-scale-up font-mono text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed backdrop-blur-2xl p-4 max-w-2xl mx-auto">
                  Hi, I’m{" "}
                  <span className="text-cyan-400 font-semibold">
                    Assaf Azran
                  </span>{" "}
                  — a Fullstack & AI Developer, focused on building reliable,
                  streamlined web apps and enjoying the real-world power of
                  Agentic AI.
                  <br />
                  <br />
                  I take pride in logical thinking and building things that
                  work. I get the most satisfaction from breaking down tricky
                  problems, solving them with clean code, and learning something
                  meaningful with every release. Clear communication, thoughtful
                  quality, and dependability are top priorities in any project I
                  join.
                  <br />
                  <br />
                  When I’m away from the keyboard, you’ll catch me keeping up
                  with tech innovations or searching for ways to make my
                  workflow a notch more effective.
                  <br />
                  <br />
                  <span className="text-cyan-300">
                    // Excited to build impactful products and grow alongside a
                    progressive team.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Full Screen Projects */}
          <section
            id="experience"
            className="experience relative overflow-hidden digital-background min-h-screen"
          >
            {/* Header */}
            <div className="w-full flex flex-col items-center justify-center pt-0 animate-fade-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mt-10 drop-shadow-lg">
                Experience
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-cyan-400 rounded-full mt-3 lg:mt-5 shadow-lg" />
            </div>

            {/* Dynamic Background Elements for Experience */}
            <div className="code-element" style={{ top: "10%", left: "5%" }}>
              {`const experience = [`}
            </div>
            <div className="code-element" style={{ top: "20%", right: "10%" }}>
              {`'Fullstack', 'AI', 'Web App'`}
            </div>
            <div
              className="code-element"
              style={{ bottom: "20%", left: "15%" }}
            >
              {`'React', 'Node.js', 'Leadership'`}
            </div>

            {/* Floating Tech Icons */}
            <IconsBg />

            {/* Experience Templates - Replace content with your real experience */}
            <div className="w-full flex flex-col items-center gap-10 justify-center mt-12 z-10">
              {/* Experience #1 Template */}
              <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-900 border border-gray-700 shadow-2xl rounded-xl lg:rounded-2xl p-6 lg:p-10 animate-fade-up max-w-3xl w-full mx-auto">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-10">
                  <h4 className="text-lg font-bold text-cyan-400 mb-1 text-center">
                    Zynch.ai
                  </h4>
                  <span className="text-xs text-gray-400 font-mono tracking-wider uppercase text-center">
                    FullStack & AI Developer
                  </span>
                  <span className="text-xs text-gray-400 mt-1 text-center">
                    12/2025 – 03/2026
                  </span>
                </div>
                <div className="flex-1 w-full flex items-center justify-center">
                  <ul className="list-disc list-inside text-white/80 text-xs lg:text-base mb-0 text-center">
                    <li>
                      Developed end-to-end system features using Python,
                      Next.js, and LangGraph
                    </li>
                    <li>
                      Built and integrated AI driven workflows using LangGraph
                      and backend Python services
                    </li>
                    <li>
                      Managed version control and collaboration workflows using
                      Git and GitHub
                    </li>
                    <li>
                      Implemented MCP (Model Context Protocol) servers to
                      streamline data orchestration between internal databases
                      and LLMs
                    </li>
                    <li>
                      Identified and resolved critical production bugs using
                      structured debugging and monitoring tools
                    </li>
                  </ul>
                </div>
              </div>
              {/* Experience #2 Template */}
              <div className="mb-8 flex flex-col lg:flex-row items-center justify-center bg-gray-900 border border-gray-700 shadow-2xl rounded-xl lg:rounded-2xl p-6 lg:p-10 animate-fade-up max-w-3xl w-full mx-auto mt-10">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-10">
                  <h4 className="text-lg font-bold text-cyan-400 mb-1 text-center">
                    MindSway
                  </h4>
                  <span className="text-xs text-gray-400 font-mono tracking-wider uppercase text-center">
                    FullStack Dev Intern
                  </span>
                  <span className="text-xs text-gray-400 mt-1 text-center">
                    08/2025 – 11/2025
                  </span>
                </div>
                <div className="flex-1 w-full flex items-center justify-center ">
                  <ul className="list-disc list-inside text-white/80 text-xs lg:text-base mb-0 text-center">
                    <li>
                      Developed and maintained a responsive web application
                      using React, MUI Components & TypeScript.
                    </li>
                    <li>
                      Utilized Git and GitHub for efficient version control and
                      collaborative development.
                    </li>
                    <li>
                      Implemented user interfaces based on Figma designs and
                      managed tasks using Jira.
                    </li>
                    <li>
                      Setting up development and runtime environments using
                      Docker (Dockerfile, DockerCompose)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <Skills currentLanguage={currentLanguage} />

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
            <IconsBg />

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
            <IconsBg />

            <div className="container px-4 flex items-center justify-center min-h-[60vh]">
              <div className="animate-fade-right w-full flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mb-6 lg:mb-12 text-white drop-shadow-lg">
                  Get In Touch
                </h2>

                <div className="contact-grid flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 animate-fade-up">
                  {/* שורה ראשונה - שתי כרטיסיות */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center w-full">
                    <div
                      style={{
                        backgroundColor: "black",
                        border: "1px solid white",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="contact-item bg-black border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect w-full sm:w-[240px] lg:w-[280px] h-[120px] sm:h-[130px] lg:h-[140px]"
                    >
                      <h3 className="contact-label text-white text-base sm:text-lg lg:text-xl font-semibold">
                        Phone
                      </h3>
                      <p className="contact-value text-cyan-400 text-sm sm:text-base lg:text-lg">
                        054-949-8551
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "black",
                        border: "1px solid white",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="contact-item bg-black border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect w-full sm:w-[240px] lg:w-[280px] h-[120px] sm:h-[130px] lg:h-[140px]"
                    >
                      <h3 className="contact-label text-white text-base sm:text-lg lg:text-xl font-semibold">
                        Email
                      </h3>
                      <p className="contact-value text-cyan-400 text-sm sm:text-base lg:text-lg break-all px-2">
                        assafaz09@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* שורה שנייה - שתי כרטיסיות */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center w-full">
                    <div
                      style={{
                        backgroundColor: "black",
                        border: "1px solid white",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="contact-item bg-black border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect w-full sm:w-[240px] lg:w-[280px] h-[120px] sm:h-[130px] lg:h-[140px]"
                    >
                      <h3 className="contact-label text-white text-base sm:text-lg lg:text-xl font-semibold">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/assafaz09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base lg:text-lg break-all px-2"
                      >
                        github.com/assafaz09
                      </a>
                    </div>

                    <div
                      style={{
                        backgroundColor: "black",
                        border: "1px solid white",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="contact-item bg-black border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 magnetic glow-on-hover animate-scale-up ripple-effect w-full sm:w-[240px] lg:w-[280px] h-[120px] sm:h-[130px] lg:h-[140px]"
                    >
                      <h3 className="contact-label text-white text-base sm:text-lg lg:text-xl font-semibold">
                        LinkedIn
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/assafazran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base lg:text-lg break-all px-2"
                      >
                        linkedin.com/in/assafazran
                      </a>
                    </div>
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
