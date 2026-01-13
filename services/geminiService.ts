
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAgriculturalInsights = async (humidity: number, temp: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analise a situação agrícola atual: Umidade do solo de ${humidity}% e temperatura de ${temp}°C. Dê uma recomendação curta (máximo 15 palavras) para o produtor.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 50,
      }
    });
    return response.text || "Dados estáveis. Continue o monitoramento de rotina.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Analise preditiva indisponível. Monitore manualmente.";
  }
};
