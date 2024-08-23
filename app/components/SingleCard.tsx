"use client";
import React from "react";

const SingleCard = ({
  questions,
  index,
  onInputChange,
}: {
  questions: string;
  index: number;
  onInputChange: (value: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1 w-[90%]">
        <h2 className="text-[24px]">Question: #{index}</h2>
        <p>{questions}</p>
      </div>
      <div className="">
        <label htmlFor="ans">Your Answer: </label>
        <input
          type="text"
          name="ans"
          id="ans"
          placeholder="Type your answer here ..."
          className="w-full bg-[#131B2A] placeholder:text-[13px] border-[1px] rounded-[6px] p-2 border-gray-300"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SingleCard;
