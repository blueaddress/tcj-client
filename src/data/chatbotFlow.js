// src/data/chatbotFlow.js

import { CITIES, buildWhatsAppLink } from "./chatbotConfig.js"

export const flow = {
  start: {
    message: "Hi! Welcome to TCJ Realty. Where do you want to buy?",
    options: CITIES,
    path: "redirect_whatsapp",
  },
  redirect_whatsapp: {
    message: (params) => `Great, connecting you to our team for ${params.userInput}.`,
    chatDisabled: true,
    component: (params) => {
      // fires the redirect once this block renders
      window.open(buildWhatsAppLink(params.userInput), "_blank");
      return null;
    },
  },
};