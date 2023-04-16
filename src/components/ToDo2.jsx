import React from "react";

const ToDo = () => {
  return (
    <div className="flex flex-col gap-8 mt-5">
      <span className="font-bold text-[20px] ">My Goals</span>

      <div className="flex flex-row gap-3">
        <div className="bg-black rounded-2xl  p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="font-semibold text-md">Become # 1 </div>
      </div>

      <div className="flex flex-row gap-3">
        <div className="bg-black rounded-2xl  p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="font-semibold text-md">Mentor Students!</div>
      </div>

    

      <div className="flex flex-row gap-3">
        <div className="bg-black rounded-2xl  p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="font-semibold text-md">Make Entrepreneurs!</div>
      </div>
    </div>
  );
};

export default ToDo;
