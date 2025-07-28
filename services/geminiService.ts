
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API features will not be available.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getFunFact = async (): Promise<string> => {
    if (!process.env.API_KEY) {
        return "Gemini API key is not configured. Please set the API_KEY environment variable.";
    }
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Tell me a fun, short, and interesting fact about full-stack web development. Keep it to one or two sentences.",
            config: {
                temperature: 0.8,
                topP: 0.9,
                thinkingConfig: { thinkingBudget: 0 } // For faster response
            }
        });

        const text = response.text;
        if (!text) {
          return "Could not generate a fact. The model returned an empty response.";
        }
        return text;
    } catch (error) {
        console.error("Error fetching fun fact from Gemini API:", error);
        return "Failed to fetch a fun fact. Please check the console for more details.";
    }
};
