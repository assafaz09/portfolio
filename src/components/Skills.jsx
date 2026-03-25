import React from "react";
import IconsBg from "./IconsBg";
import { translations } from "../translations";

export default function Skills({ currentLanguage = "en" }) {
  const t = translations[currentLanguage] ?? translations.en;

  return (
    <div>
      <section
        id="skills"
        className="skills digital-background relative z-10"
      >
        {/* Dynamic Background Elements for Skills */}
        <div className="code-element" style={{ top: "15%", left: "5%" }}>
          const skills ={" "}
        </div>
        <div className="code-element" style={{ top: "25%", right: "10%" }}>
          Python, JavaScript, TypeScript, HTML5, CSS3,
        </div>
        <div className="code-element" style={{ bottom: "25%", left: "15%" }}>
          React, Next.js, Node.js, AWS, LLM Integration
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
        <IconsBg />

        <div className="max-w-4xl lg:max-w-6xl mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white animate-fade-left">
              {t.skillsTitle}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-cyan-400 rounded-full mt-3 shadow-lg" />
            <p className="mt-4 text-white/80 text-sm sm:text-base lg:text-lg font-light max-w-2xl animate-fade-up">
              {t.skillsSubtitle}
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-10">
            <div className="code-editor-container bg-gray-900 rounded-xl lg:rounded-2xl p-4 lg:p-8 shadow-2xl border border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl animate-scale-up">
              <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full" />
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 ml-2 lg:ml-4 font-mono text-xs lg:text-sm">
                  technologies.js
                </span>
              </div>

              <div className="code-block bg-gray-800 rounded-lg p-3 lg:p-6 border border-gray-700 font-mono text-xs lg:text-base max-w-full lg:max-w-2xl mx-auto shadow-lg overflow-x-auto">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-400">technologies</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">&#123;</span>
                <br />
                {/* Programming Languages */}
                <span className="ml-4 lg:ml-8">
                  <span className="text-green-400">programmingLanguages</span>
                  <span className="text-white">: [</span>
                  <span className="text-orange-400">'Python'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'JavaScript'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'TypeScript'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'HTML5'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'CSS3'</span>
                  <span className="text-white">],</span>
                </span>
                <br />
                {/* Frontend Development */}
                <span className="ml-4 lg:ml-8">
                  <span className="text-green-400">frontendDevelopment</span>
                  <span className="text-white">: [</span>
                  <span className="text-orange-400">'React'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Next.js'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'MUI Components'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Tailwind CSS'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Shadcn/U'</span>
                  <span className="text-white">],</span>
                </span>
                <br />
                {/* Backend & DB */}
                <span className="ml-4 lg:ml-8">
                  <span className="text-green-400">backendAndDatabases</span>
                  <span className="text-white">: [</span>
                  <span className="text-orange-400">'Node.js'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Express.js'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'REST APIs'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'MongoDB'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'LangGraph'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'WebSocket'</span>
                  <span className="text-white">],</span>
                </span>
                <br />
                {/* DevOps & Cloud */}
                <span className="ml-4 lg:ml-8">
                  <span className="text-green-400">devOpsAndCloud</span>
                  <span className="text-white">: [</span>
                  <span className="text-orange-400">'AWS'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Docker'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Nginx'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'Git'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'GitHub'</span>
                  <span className="text-white">],</span>
                </span>
                <br />
                {/* AI & LLM */}
                <span className="ml-4 lg:ml-8">
                  <span className="text-green-400">aiAndLLM</span>
                  <span className="text-white">: [</span>
                  <span className="text-orange-400">'LLM Integration'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">
                    'Prompt Engineering (Cursor, Github Copilot)'
                  </span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'LangGraph'</span>
                  <span className="text-white">, </span>
                  <span className="text-orange-400">'MCP'</span>
                  <span className="text-white">]</span>
                </span>
                <br />
                <span className="text-white">&#125;;</span>
              </div>
            </div>

            {/* Second Code Editor for Other Skills */}
            <div className="code-editor-container bg-gray-900 rounded-xl lg:rounded-2xl p-4 lg:p-8 shadow-2xl border border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl animate-scale-up animate-delay-200">
              <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full" />
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 ml-2 lg:ml-4 font-mono text-xs lg:text-sm">
                  soft-skills.js
                </span>
              </div>

              <div className="code-block bg-gray-800 rounded-lg p-3 lg:p-6 border border-gray-700 font-mono text-xs lg:text-base max-w-full lg:max-w-2xl mx-auto shadow-lg overflow-x-auto">
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
        </div>
      </section>
    </div>
  );
}
