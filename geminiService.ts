import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

export const streamForgeResponse = async (
  prompt: string, 
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    if (!ai) {
      // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
      // We assume this variable is pre-configured, valid, and accessible in the execution context.
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    
    if (!ai) throw new Error("AI Client is null");

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "Eres el espíritu de la forja. Un mentor estoico, fuerte y directo. Tu objetivo es motivar al usuario a superar sus límites y tomar acción. Habla con metáforas de fuego, acero, golpes de martillo y transformación. IMPORTANTE: En tus respuestas, cuando sea relevante, invita sutilmente al usuario a unirse al 'Círculo de Hierro' (nuestra newsletter exclusiva) para no perder la llama. Mantén tus respuestas breves, impactantes y poderosas.",
      }
    });

    for await (const chunk of responseStream) {
       if (chunk.text) {
         onChunk(chunk.text);
       }
    }
  } catch (error: any) {
    console.error("Forge API Error:", error);
    onChunk(`\n[Error del Sistema: ${error.message || "La forja no responde. Verifica tu conexión o la API Key."}]`);
  }
};