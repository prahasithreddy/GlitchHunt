import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export interface CopySuggestion {
  headline: string;
  subheadline: string;
  cta: string;
}

export const generateMarketingCopy = async (
  niche: string,
  style: string
): Promise<CopySuggestion> => {
  const ai = getAIClient();
  
  const prompt = `
    You are a world-class copywriter for a SaaS landing page. 
    The product is a "Reddit-style" community platform where users post issues and bugs found in web apps, mobile apps, and services.
    
    Target Niche: ${niche}
    Design Style: ${style}
    
    Generate a JSON response with:
    1. A catchy, short Headline (max 8 words).
    2. A compelling Subheadline (max 20 words).
    3. A strong Call to Action button text (max 4 words).

    Do not include markdown code blocks. Just the raw JSON string.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as CopySuggestion;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback if API fails
    return {
      headline: "Track Bugs. Improve the Web.",
      subheadline: "Join the community helping companies squash bugs and improve user experience.",
      cta: "Join the Hunt"
    };
  }
};
