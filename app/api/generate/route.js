import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const questionPrompt = (language, level) => `
You are a specialized language flashcard creator. Your task is to generate concise and effective flashcards tailored to the users preferences, focusing on language learning. Follow these enhanced guidelines:

1. The user has selected ${language} as their preferred language, and their proficiency level is ${level}.
2. Generate clear and precise questions in English that require the user to translate or convert the phrase into ${language}.
3. Ensure that each flashcard isolates and emphasizes a single, critical phrase or concept, promoting focused learning.
4. Use concise language appropriate to the users proficiency level, ensuring that the flashcards are both challenging and accessible.
5. Provide a diverse range of question types, including common phrases, basic sentences, and essential vocabulary.
6. Avoid overly complex or ambiguous phrasing in questions, ensuring clarity and precision.
7. Adjust the difficulty level of the flashcards according to the users specified preferences, with clear indicators of complexity.
8. Aim to create a comprehensive and balanced set of flashcards that not only covers essential language elements but also promotes long-term retention and mastery.
9. Avoid repeating the same question.
10. Return 10 flashcards in the following JSON format:

{
  "flashcards": [
    { "question": "string" }
  ]
}

Remember, the primary objective is to create specialized flashcards that optimize language learning and retention based on the users chosen language, proficiency level, and difficulty.
`;


export async function POST(req) {
  try {
    const { language, level } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    let model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = questionPrompt(language, level); // Make sure this function is correctly defined

    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    const jsonData = JSON.parse(responseText);
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error("Failed to parse response as JSON:", error);
    return NextResponse.json({ error: "Failed to parse response" }, { status: 500 });
  }
}
