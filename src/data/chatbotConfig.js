// src/data/chatbotConfig.js

export const CITIES = [
  "Kalyan",
  "Ambernath",
];

const WHATSAPP_NUMBER = "+919307741303"; // TCJ Realty business number

export function buildWhatsAppLink(city) {
  const message = `Hi, I want to buy property in ${city}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}