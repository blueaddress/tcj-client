// TCJChatbot.jsx

import { useState } from "react";
import ChatBot from "react-chatbotify";
import { flow } from "../../data/chatbotFlow";

const themeSettings = {
  primaryColor: "#0A264F",
  secondaryColor: "#C9A84C",
  fontFamily: "Satoshi, sans-serif",
  embedded: true, // renders inline in our container, not as its own floating overlay
};

export default function TCJChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:right-6 right-3.5 sm:bottom-24 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[340px] h-[65dvh] max-h-[440px] sm:w-[380px] sm:h-[550px] sm:max-h-[70vh] rounded-xl overflow-hidden">
          <ChatBot
            settings={{
              general: themeSettings,
              header: {
                title: "TCJ Realty",
                showAvatar: true,
                avatar: "/images/tcj.png",
              },
              chatHistory: { storageKey: "tcj_chat_history" },
              tooltip: { mode: "NEVER" },
              chatButton: { icon: undefined },
            }}
            styles={{
              chatWindowStyle: { width: "100%", height: "100%", border: "none", boxShadow: "none" },
              botBubbleStyle: { maxWidth: "85%" },
              userBubbleStyle: { maxWidth: "85%" },
            }}
            flow={flow}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white"
        aria-label="Open chat"
      >
        <img src="/images/tcj.png" alt="TCJ Realty" className="w-8 h-8" />
      </button>
    </div>
  );
}