import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const evaluationPrompt = (language, level, question, userAnswer) => `
You are an advanced language evaluator. Your task is to assess the users answer based on their proficiency level and the language they are learning. Follow these guidelines:

1. The user is learning ${language} and their proficiency level is ${level}.
2. You will evaluate the users answer to the following question: "${question}".
3. The users answer is: "${userAnswer}".
4. Evaluate the answer based on accuracy, grammar, and vocabulary appropriate to the ${level} proficiency level.
5. Consider the users proficiency level when scoring. A lower level should allow for minor grammatical errors, while a higher level should require more precision.
6. Provide a score out of 10 (where 10 indicates a correct answer, and 0 indicates no correlation with the question).
7. Convert the users answer into English, but do not correct any errors in the translation.
8. If the users answer is incorrect or partially correct, provide the correct answer in ${language}.
9. Return the evaluation in the following JSON format:

{ "type": "object",
  "score": number,  // Score out of 10
  "correctAnswer": "string",  // Correct answer in the target language
  "userTranslation": "string"  // Users answer translated word-for-word into English
}

Your objective is to provide a fair evaluation that reflects the users current proficiency level while promoting language learning and improvement.
`;



export async function POST(req) {
    try {
        const { language, level, question, userAnswer } = await req.json();

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        let model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "application/json" }
        });

        const prompt = evaluationPrompt(language, level, question, userAnswer); // Make sure this function is correctly defined

        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();

        // If responseText is not valid JSON, it will throw an error
        const jsonData = JSON.parse(responseText);
        return NextResponse.json(jsonData);
    } catch (error) {
        console.error("Failed to parse response as JSON:", error);
        return NextResponse.json({ error: "Failed to parse response" }, { status: 500 });
    }
}
