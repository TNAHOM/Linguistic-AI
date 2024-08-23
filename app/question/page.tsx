"use client";
import SingleCard from "../components/SingleCard";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

// Define the type for a flashcard
type FlashcardType = {
  question: string;
  // Add other properties here if necessary
};

// Define the type for the result object
type ResultType = {
  score: number;
  correctAnswer: string;
  userTranslation: string;
};

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>([]);
  const [text, setText] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [generated, setGenerated] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("French");
  const [level, setLevel] = useState<string>("Intermediate");
  const [result, setResult] = useState<{ [key: number]: ResultType }>({});
  const [totalResult, setTotalResult] = useState<number>(0);

  const handleSubmit = async () => {
    const requestData = {
      language,
      level,
    };
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFlashcards(data.flashcards);
      setFlipped(new Array(data.flashcards.length).fill(false));
      setResult({});
      setGenerated(true);
    } catch (error) {
      console.error("Error generating flashcards:", error);
    }
  };

  const handleEvaluate = async (index: number) => {
    const currentQuestion = flashcards[index].question;
    const userInput = userAnswers[index];

    const requestData = {
      language,
      level,
      question: currentQuestion,
      userAnswer: userInput,
    };
    console.log(requestData, "evaluate");
    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setTotalResult(data.score + totalResult);
      setResult((prev) => ({
        ...prev,
        [index]: data,
      }));

      setFlipped((prev) => ({
        ...prev,
        [index]: true,
      }));
    } catch (error) {
      console.error("Error evaluating flashcard:", error);
    }
  };

  const handleCardClick = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleUserInputChange = (index: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <div className="bg-[#131B2A] w-full min-h-screen">
      <div className="flex justify-center w-full">
        <div className="w-1/2 min-w-[300px]">
          <div className="space-y-3 mt-3">
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="flex gap-3 w-1/2 max-w-[350px]">
                <div className="w-full">
                  <select
                    name="lang"
                    id="lang"
                    className="p-2 w-full rounded-md"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    name="level"
                    id="level"
                    className="p-2 w-full rounded-md"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
              <button
                className="w-1/2 p-3 text-center bg-[#FACC15] rounded-[5px] text-black"
                onClick={handleSubmit}
              >
                Start Pop Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white w-full flex flex-col justify-center items-center">
        {flashcards.length > 0 && (
          <>
            <div className="text-[20px] mb-4">Questions {totalResult}</div>
            <div className="grid grid-cols-3 gap-4 justify-center w-5/6">
              {flashcards.map((singleCard, index) => (
                <div
                  key={index}
                  className="relative border border-gray-200 shadow-lg rounded-lg p-4 bg-[#0C0A09]"
                >
                  <div
                    className={`relative w-full h-56 cursor-pointer transition-transform duration-500 transform-style-3d ${
                      flipped[index] ? "rotate-y-180" : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                    style={{ perspective: "1000px" }}
                  >
                    <div className="absolute w-full h-full flex justify-center items-center backface-hidden shadow-lg rounded-lg">
                      <SingleCard
                        questions={singleCard?.question}
                        index={index + 1}
                        onInputChange={(value) =>
                          handleUserInputChange(index, value)
                        }
                      />
                    </div>
                    <div className="p-4 absolute w-full h-full flex  backface-hidden shadow-lg rounded-lg transform rotate-y-180">
                      <div className="w-full space-y-3 h-full  overflow-auto">
                        <p className="text-[22px] font-semibold">Result</p>
                        <p className="w-full">
                          <span className="text-[18px] text-[#10823a] font-medium mr-2">
                            Score:
                          </span>{" "}
                          {result[index]?.score} out of 10
                        </p>
                        <p>
                          <span className="text-[18px] text-[#10823a] font-medium mr-2">
                            Correct Answer:
                          </span>
                          {result[index]?.correctAnswer}
                        </p>
                        <p>
                          <span className="text-[18px] text-[#10823a] font-medium mr-2">
                            Your Translated answer:
                          </span>
                          {result[index]?.userTranslation}
                        </p>
                      </div>
                    </div>
                  </div>
                  {!flipped[index] ? (
                    <button
                      className="w-full text-center bg-[#FACC15] rounded-[5px] py-[6px] text-black"
                      onClick={() => handleEvaluate(index)}
                    >
                      Submit
                    </button>
                  ) : (
                    <div className="w-full text-center bg-[#16A34A] rounded-[5px] py-[6px] text-white">
                      Done
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
