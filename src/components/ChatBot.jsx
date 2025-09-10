import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // נתונים אישיים על אסף
  const personalData = {
    name: "אסף",
    age: "24",
    location: "אשקלון, ישראל",
    education: "קורס פולסטאק מקיף",
    technicalSkills: [
      "JavaScript",
      "React",
      "Node.js",
      "Typescript",
      "HTML/CSS",
      "MongoDB",
      "Express",
      "Git",
    ],
    personalSkills: [
      "מנהיגות",
      "עבודת צוות",
      "פתרון בעיות",
      "יצירתיות",
      "תקשורת",
      "ניהול זמן",
      "למידה מהירה",
    ],
    hobbies: ["תכנות", "ספורט", "מוזיקה", "קריאה", "טיולים", "MMA", "בישול"],
    experience: "ניסיון בפרוייקטים אישיים בפיתוח",
    languages: ["עברית", "אנגלית"],
  };

  // לוגיקת שאלות ותשובות
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // שאלות על מידע אישי
    if (message.includes("גיל") || message.includes("בן כמה")) {
      return `אסף בן ${personalData.age} שנים.`;
    }

    if (
      message.includes("איפה") ||
      message.includes("מקום") ||
      message.includes("גר")
    ) {
      return `אסף גר ב${personalData.location}.`;
    }

    if (message.includes("שם") || message.includes("איך קוראים")) {
      return `קוראים לי ${personalData.name}.`;
    }

    // שאלות על השכלה
    if (
      message.includes("השכלה") ||
      message.includes("תואר") ||
      message.includes("לימודים")
    ) {
      return `אסף עשה ${personalData.education}.`;
    }

    // שאלות על כישורים טכניים
    if (
      message.includes("כישורים") ||
      message.includes("טכנולוגיות") ||
      message.includes("תכנות")
    ) {
      return `הכישורים הטכניים שלי כוללים: ${personalData.technicalSkills.join(
        ", "
      )}.`;
    }

    // שאלות על כישורים אישיים
    if (
      message.includes("אישיות") ||
      message.includes("אישי") ||
      message.includes("תכונות")
    ) {
      return `הכישורים האישיים של אסף כוללים: ${personalData.personalSkills.join(
        ", "
      )}.`;
    }

    // שאלות על תחביבים
    if (
      message.includes("תחביבים") ||
      message.includes("אוהב") ||
      message.includes("עושה")
    ) {
      return `התחביבים של אסף כוללים: ${personalData.hobbies.join(", ")}.`;
    }

    // שאלות על ניסיון
    if (
      message.includes("ניסיון") ||
      message.includes("עובד") ||
      message.includes("עבודה")
    ) {
      return `יש לאסף ${personalData.experience}.`;
    }

    // שאלות על שפות
    if (message.includes("שפות") || message.includes("מדבר")) {
      return `אסף מדבר ${personalData.languages.join(", ")}.`;
    }
    if (
      message.includes("מטרות") ||
      message.includes("חלומות") ||
      message.includes("רצונות")
    ) {
      return `אסף שואף להמשיך ולהתפתח בתחום הפיתוח, ליצור פרויקטים חדשניים ולתרום לקהילת המפתחים.`;
    }
    if (
      message.includes("תעודות") ||
      message.includes("הסמכות") ||
      message.includes("קורסים")
    ) {
      return `לאסף יש תעודות מקצועיות בתחום הפיתוח ותכנות, כולל הסמכות בטכנולוגיות מתקדמות ,בנוסף תעודת הנדסאי מכונות..`;
    }

    // שאלות כלליות
    if (
      message.includes("שלום") ||
      message.includes("היי") ||
      message.includes("הי")
    ) {
      return `שלום! אני הבוט של אסף. איך אני יכול לעזור לך?`;
    }

    if (message.includes("מי אתה") || message.includes("מה אתה")) {
      return `אני הבוט של אסף, מפתח full-stack. אני כאן לענות על שאלות עליו!`;
    }

    if (message.includes("עזרה") || message.includes("מה אפשר")) {
      return `אתה יכול לשאול על: גיל, מקום מגורים, השכלה, כישורים, תחביבים, ניסיון, שפות ועוד!`;
    }

    // תשובה כללית
    return `אני לא בטוח שהבנתי את השאלה. אתה יכול לשאול על: גיל, מקום מגורים, השכלה, כישורים, תחביבים, ניסיון, שפות ועוד!`;
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);

      setIsTyping(true);

      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
        setIsTyping(false);
      }, 1500);

      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <div className="avatar-circle">א</div>
            </div>
            <div className="chatbot-info">
              <h3>אסף בוט</h3>
              <p>מפתח Full-Stack</p>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="welcome-message">
                <p>שלום! אני הבוט של אסף. איך אני יכול לעזור לך?</p>
                <p>
                  אתה יכול לשאול על: גיל, מקום מגורים, השכלה, כישורים, תחביבים
                  ועוד!
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isUser ? "user" : "bot"}`}
              >
                <div className="message-content">{message.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="שאל אותי על אסף..."
              dir="rtl"
            />
            <button onClick={sendMessage} className="send-btn">
              שלח
            </button>
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="chatbot-icon">
          <div className="avatar-circle">א</div>
        </div>
        <div className="status-dot"></div>
      </button>
    </div>
  );
};

export default ChatBot;
