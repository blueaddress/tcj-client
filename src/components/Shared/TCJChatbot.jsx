// src/components/TCJChatbot.jsx

import { useState } from "react";
import ChatBot from "react-chatbotify";
import { flow } from "../../data/chatbotFlow";

const themeSettings = {
  primaryColor: "#0A264F", // navy
  secondaryColor: "#C9A84C", // gold
  fontFamily: "Satoshi, sans-serif",
};

export default function TCJChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen && (
        <div className="mb-3 w-[320px] max-w-[90vw] rounded-xl shadow-2xl overflow-hidden">
          <ChatBot
            settings={{
              general: themeSettings,
              header: {
                title: "TCJ Realty",
                showAvatar: true,
                avatar: "/favicons/favicon.ico", // or "/tcj-icon.png"
              },
              chatHistory: { storageKey: "tcj_chat_history" },
            }}
            flow={flow}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open chat"
      >
        <img src="/favicons/favicon.ico" alt="TCJ Realty" className="w-8 h-8" />
      </button>
    </div>
  );
}