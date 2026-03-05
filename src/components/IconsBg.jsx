import React from "react";
import { memo } from "react";





export default function IconsBg() {
    // 🚀 PERFORMANCE OPTIMIZATION: Memoized Tech Icon Component

const FloatingIcon = memo(
    ({ src, alt, top, left, right, animationDelay, className = "" }) => (
      <div
        className={`floating-icon ${className}`}
        style={{
          top,
          left,
          right,
          animationDelay,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="tech-icon glow-on-hover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
    ),
  );
  
    (
        <div>
        <FloatingIcon
          src="./vitejs-svgrepo-com.svg"
          alt="Vite"
          top="8%"
          left="12%"
          animationDelay="0.1s"
        />
        <FloatingIcon
          src="./tailwind-svgrepo-com.svg"
          alt="Tailwind"
          top="25%"
          right="18%"
          animationDelay="1.1s"
        />
        <FloatingIcon
          src="./node-js-svgrepo-com.svg"
          alt="Node.js"
          top="42%"
          left="9%"
          animationDelay="2.1s"
        />
        <FloatingIcon
          src="./mongodb-svgrepo-com.svg"
          alt="MongoDB"
          top="58%"
          right="7%"
          animationDelay="3.1s"
        />
        <FloatingIcon
          src="./logo-ts-svgrepo-com.svg"
          alt="TypeScript"
          top="75%"
          left="28%"
          animationDelay="4.1s"
        />
        <FloatingIcon
          src="./html-5-svgrepo-com.svg"
          alt="HTML5"
          top="19%"
          right="38%"
          animationDelay="5.1s"
        />
        <FloatingIcon
          src="./css-3-svgrepo-com.svg"
          alt="CSS3"
          top="36%"
          left="47%"
          animationDelay="6.1s"
        />
        <FloatingIcon 
          src="./mongo-svgrepo-com.svg"
          alt="Mongo"
          top="70%"
          left="65%"
          animationDelay="8.1s"
        />
        <FloatingIcon
          src="./next-dot-js-svgrepo-com.svg"
          alt="Next.js"
          top="87%"
          right="55%"
          animationDelay="9.1s"
        />
        <FloatingIcon
          src="./js02-svgrepo-com.svg"
          alt="JavaScript"
          top="32%"
          right="78%"
          animationDelay="11.1s"
        />
        <FloatingIcon
          src="./github-svgrepo-com.svg"
          alt="GitHub"
          top="49%"
          left="88%"
          animationDelay="12.1s"
        />
        <FloatingIcon
          src="./github-svgrepo-com (2).svg"
          alt="GitHub Alt"
          top="66%"
          right="88%"
          animationDelay="13.1s"
        />
      </div>
  );
}
