import { GoogleGenAI } from "@google/genai";
import { GeminiResponse } from '../types';

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is not defined in the environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const fetchAreaRecommendations = async (areaName: string): Promise<GeminiResponse> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `I am a tourist visiting ${areaName}, Bali. 
    1. Suggest 3 must-visit tourist attractions.
    2. Suggest 2 highly-rated local restaurants.
    3. Create a detailed 1-day itinerary (Morning, Afternoon, Evening) for exploring ${areaName}.
       - Please format the itinerary with approximate times (e.g., 09:00 AM - Activity).

    For each place, provide a very brief description of why it's special.
    Use Markdown formatting for headers and lists.
    Focus on providing accurate, ground-truth locations using Google Maps data.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text || "No recommendations found.";
    // Safely access grounding chunks if they exist
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GeminiResponse['groundingChunks'] | undefined;

    return {
      text,
      groundingChunks
    };

  } catch (error) {
    console.error("Error fetching Gemini recommendations:", error);
    return {
      text: "Sorry, I encountered an error while fetching recommendations. Please try again later.",
      groundingChunks: []
    };
  }
};