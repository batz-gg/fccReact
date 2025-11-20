import { GoogleGenAI, Type } from "@google/genai";
import { CartItem, AISuggestionResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCartSuggestions = async (cartItems: CartItem[]): Promise<AISuggestionResponse | null> => {
  if (cartItems.length === 0) return null;

  const itemsList = cartItems.map(item => item.name).join(", ");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Миний сагсанд дараах зүйлс байна: ${itemsList}. Эдгээрийг ашиглан хийж болох 3 энгийн жорыг санал болгож, дутуу байж магадгүй орцуудыг жагсаана уу. Хариултыг JSON форматаар өгнө үү.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  recipeName: { type: Type.STRING },
                  description: { type: Type.STRING },
                  missingIngredients: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AISuggestionResponse;
    }
    return null;
  } catch (error) {
    console.error("Failed to generate suggestions:", error);
    return null;
  }
};