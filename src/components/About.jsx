import React, { useState } from "react";
import Navbar from "./Navbar";

export default function About({ onNavigate }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Hi, I'm Assaf Azran, a passionate Full Stack Developer from Israel. My journey into web development began with a curiosity about how things work on the internet, and it quickly evolved into a deep passion for creating digital experiences that make a difference. Coming from a mechanical engineering background, I bring a unique problem-solving approach to every project. I love turning complex challenges into elegant, user-friendly solutions that not only work flawlessly but also look beautiful and feel intuitive to use.`;
  
  const shortText = `Hi, I'm Assaf Azran, a passionate Full Stack Developer from Israel. My journey into web development began with a curiosity about how things work on the internet`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
      <Navbar onNavigate={onNavigate} />

      {/* About Page */}
      <section className="about-page relative px-4 sm:px-6" style={{ paddingTop: "80px" }}>
        {/* Dynamic Background Elements */}
        <div className="code-element" style={{ top: "10%", left: "8%" }}>
          {`const about = {`}
        </div>
        <div className="code-element" style={{ top: "20%", right: "12%" }}>
          {`name: 'Assaf Azran'`}
        </div>
        <div className="code-element" style={{ bottom: "15%", left: "18%" }}>
          {`passion: 'Full Stack Development'`}
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
          style={{ top: "15%", left: "12%", animationDelay: "0.1s" }}
        >
          <img src="/vitejs-svgrepo-com.svg" alt="Vite" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "32%", right: "18%", animationDelay: "1.1s" }}
        >
          <img
            src="/tailwind-svgrepo-com.svg"
            alt="Tailwind"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "49%", left: "9%", animationDelay: "2.1s" }}
        >
          <img
            src="/node-js-svgrepo-com.svg"
            alt="Node.js"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "66%", right: "22%", animationDelay: "3.1s" }}
        >
          <img
            src="/mongodb-svgrepo-com.svg"
            alt="MongoDB"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "83%", left: "28%", animationDelay: "4.1s" }}
        >
          <img
            src="/logo-ts-svgrepo-com.svg"
            alt="TypeScript"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "20%", left: "45%", animationDelay: "5.1s" }}
        >
          <img
            src="/html-5-svgrepo-com.svg"
            alt="HTML5"
            className="tech-icon"
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "37%", left: "58%", animationDelay: "6.1s" }}
        >
          <img src="/css-3-svgrepo-com.svg" alt="CSS3" className="tech-icon" />
        </div>
        <div
          className="floating-icon"
          style={{ top: "54%", right: "65%", animationDelay: "7.1s" }}
        >
          <img
            src="/javascript-logo-svgrepo-com.svg"
            alt="JavaScript"
            className="tech-icon"
          />
        </div>

        {/* Floating Personal Images */}
        <div
          className="floating-icon"
          style={{ top: "25%", left: "75%", animationDelay: "8.1s" }}
        >
          <img
            src="/a1 (1).png"
            alt="Assaf Personal"
            className="tech-icon rounded-full"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "45%", right: "75%", animationDelay: "9.1s" }}
        >
          <img
            src="/a2.png"
            alt="Assaf Personal"
            className="tech-icon rounded-full"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        </div>
        <div
          className="floating-icon"
          style={{ top: "65%", left: "85%", animationDelay: "10.1s" }}
        >
          <img
            src="/a3.png"
            alt="Assaf Personal"
            className="tech-icon rounded-full"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        </div>

        <div className="container max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="animate-on-scroll">
            {/* Background Image behind title */}
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <img
                src="/a1 (1).png"
                alt="Assaf Azran Background"
                className="about-title-background absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 object-cover opacity-95 rounded-full hidden sm:block"
                style={{
                  zIndex: -1,
                  top: "50%",
                  right: "15%",
                  transform: "translateY(-50%)",
                }}
              />
              <h1 className="about-title text-2xl sm:text-4xl lg:text-6xl font-bold text-center text-white drop-shadow-lg animate-fade-down relative z-10 py-4 sm:py-6 lg:py-8">
                About Me
              </h1>
            </div>

            <div className="about-content space-y-6 sm:space-y-8 lg:space-y-16">
              {/* My Story Section */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <h2 className="about-subtitle text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-cyan-400 animate-fade-up animate-delay-200">
                  My Story
                </h2>
                <div className="space-y-3 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                  <div className="animate-fade-up animate-delay-300">
                    {/* Mobile: Show short text with expand option */}
                    <div className="block sm:hidden">
                      <p className="about-text-mobile">
                        {isExpanded ? fullText : shortText}
                        {!isExpanded && "..."}
                      </p>
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="read-more-btn text-cyan-400 hover:text-cyan-300 mt-2 text-sm font-medium transition-all duration-300 inline-flex items-center space-x-1"
                      >
                        <span>{isExpanded ? "Read Less" : "Read More"}</span>
                        <svg 
                          className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {/* Desktop: Show full text */}
                    <div className="hidden sm:block">
                      <p>
                        Hi, I'm Assaf Azran, a passionate Full Stack Developer from
                        Israel. My journey into web development began with a
                        curiosity about how things work on the internet, and it
                        quickly evolved into a deep passion for creating digital
                        experiences that make a difference.
                      </p>
                    </div>
                  </div>
                  <p className="animate-fade-up animate-delay-400">
                    <span className="hidden sm:inline">
                      Coming from a mechanical engineering background, I bring a
                      unique problem-solving approach to every project. I love
                      turning complex challenges into elegant, user-friendly
                      solutions that not only work flawlessly but also look
                      beautiful and feel intuitive to use.
                    </span>
                    <span className="sm:hidden">
                      Coming from a mechanical engineering background, I bring a unique problem-solving approach to every project.
                    </span>
                  </p>
                  <p className="animate-fade-up animate-delay-500 text-cyan-300">
                    <span className="hidden sm:inline">
                      I'm the kind of person who gets genuinely excited about
                      clean code, who stays up late debugging because I can't let
                      a problem go unsolved, and who believes that every line of
                      code should tell a story. When I'm not coding, you'll find
                      me training MMA, exploring new coffee shops, or diving deep
                      into the latest tech trends.
                    </span>
                    <span className="sm:hidden">
                      I'm passionate about clean code and problem-solving. When I'm not coding, I train MMA and explore tech trends.
                    </span>
                  </p>
                </div>
              </div>

              {/* Personal Details Section */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <h2 className="about-subtitle text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-cyan-400 animate-fade-up animate-delay-600">
                  Personal Details
                </h2>
                <div className="personal-details grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="detail-item bg-white/5 rounded-lg p-3 sm:p-3 lg:p-4 border border-white/10">
                    <span className="detail-label text-cyan-300 font-semibold block mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                      Location:
                    </span>
                    <span className="detail-value text-white text-xs sm:text-sm lg:text-base">
                      Tel Aviv, Israel
                    </span>
                  </div>
                  <div className="detail-item bg-white/5 rounded-lg p-3 sm:p-3 lg:p-4 border border-white/10">
                    <span className="detail-label text-cyan-300 font-semibold block mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                      Languages:
                    </span>
                    <span className="detail-value text-white text-xs sm:text-sm lg:text-base">
                      Hebrew (Native), English (Fluent)
                    </span>
                  </div>
                  <div className="detail-item bg-white/5 rounded-lg p-3 sm:p-3 lg:p-4 border border-white/10">
                    <span className="detail-label text-cyan-300 font-semibold block mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                      Interests:
                    </span>
                    <span className="detail-value text-white text-xs sm:text-sm lg:text-base">
                      Technology, Innovation, Problem Solving, MMA
                    </span>
                  </div>
                  <div className="detail-item bg-white/5 rounded-lg p-3 sm:p-3 lg:p-4 border border-white/10">
                    <span className="detail-label text-cyan-300 font-semibold block mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                      Coffee Preference:
                    </span>
                    <span className="detail-value text-white text-xs sm:text-sm lg:text-base">
                      Strong, black, no sugar - just like my code
                    </span>
                  </div>
                </div>
              </div>

              {/* Hobbies & Interests Section */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <h2 className="about-subtitle text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 text-cyan-400 animate-fade-up animate-delay-700">
                  Hobbies & Interests
                </h2>
                <div className="hobbies-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  <div className="hobby-item bg-white/5 rounded-lg p-3 sm:p-4 lg:p-6 border border-white/10 text-center animate-fade-up animate-delay-800 hover:bg-white/10 transition-all duration-300">
                    <div className="hobby-icon text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">
                      🥋
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-2 lg:mb-3 text-cyan-300">
                      MMA Training
                    </h3>
                    <p className="text-white/80 leading-relaxed text-xs sm:text-sm lg:text-base">
                      I'm passionate about martial arts and train regularly in
                      MMA. It's not just about physical fitness - it's about
                      discipline, mental toughness, and the constant pursuit of
                      improvement. The same principles I apply in training
                      translate directly to my coding: focus, persistence, and
                      never giving up on a challenge.
                    </p>
                  </div>
                  <div className="hobby-item bg-white/5 rounded-lg p-3 sm:p-4 lg:p-6 border border-white/10 text-center animate-fade-up animate-delay-900 hover:bg-white/10 transition-all duration-300">
                    <div className="hobby-icon text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">
                      💻
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-2 lg:mb-3 text-cyan-300">
                      Tech Explorer
                    </h3>
                    <p className="text-white/80 leading-relaxed text-xs sm:text-sm lg:text-base">
                      Always learning new technologies and frameworks. I believe
                      in staying curious and never stopping the learning
                      process. Every new technology is an opportunity to solve
                      problems in better, more efficient ways.
                    </p>
                  </div>
                  <div className="hobby-item bg-white/5 rounded-lg p-3 sm:p-4 lg:p-6 border border-white/10 text-center animate-fade-up animate-delay-1000 hover:bg-white/10 transition-all duration-300">
                    <div className="hobby-icon text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">
                      🚀
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-2 lg:mb-3 text-cyan-300">
                      Innovation Seeker
                    </h3>
                    <p className="text-white/80 leading-relaxed text-xs sm:text-sm lg:text-base">
                      Passionate about cutting-edge solutions and creative
                      approaches. I love pushing boundaries and finding new ways
                      to solve old problems. Innovation isn't just about new
                      technology - it's about new ways of thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
