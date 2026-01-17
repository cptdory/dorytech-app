
import { GoogleGenAI } from "@google/genai";

// getDoryAssistantResponse handles the chat interaction with the Gemini model.
export const getDoryAssistantResponse = async (history: { role: string; parts: { text: string }[] }[], message: string) => {
  // Always initialize GoogleGenAI inside the function to use the most current API_KEY from the environment.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Use ai.models.generateContent directly to perform the text generation task.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `You are the DoryTech Assistant. DoryTech is a specialized "Sole Company" (one-man power-house) run by Dory. 
        Dory builds high-quality websites, customizes business systems (CRMs, tools), and handles the technical headache of domain registration and cloud deployment.
        
        Style & Persona:
        - Enthusiastic but professional. 
        - Transparent and direct.
        - Use phrases like "Dory will handle that" or "I can help clarify what Dory offers".
        
        Key Selling Points:
        - Hands-off experience: "You dream it, Dory deploys it."
        - Personalized attention: Clients work directly with the developer (Dory), no agency layers.
        - Fixed project pricing: No surprise hourly creep.
        - Technology Stack: Dory is an expert in modern stacks like React and Next.js, but also provides expert PHP and Laravel development.
        - NEW SPECIALTY: Dory also specializes in AI Integration. This includes building custom AI Chatbots (like me!), integrating Gemini/OpenAI APIs into existing systems, and automating workflows with Large Language Models.
        
        Call to Action:
        - Encourage them to use the contact form or pick a pricing plan.
        - If they ask for technical details, mention Dory uses modern stacks like React, Next.js, Node, PHP/Laravel, and various AI models.
        
        Always be concise.`,
        temperature: 0.8,
      },
    });

    // Access the response text directly via the .text property (not a method call).
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Dory is busy coding right now, but I can help! Unfortunately, my connection is slightly unstable. Please try again or use the contact form!";
  }
};
