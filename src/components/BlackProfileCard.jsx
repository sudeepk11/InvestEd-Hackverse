import React from "react";

const Card = () => {
  return (
    <div class="h-48 w-52 p-4 bg-black border border-gray-200 rounded-2xl shadow flex flex-col gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 mb-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>

      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
          $143,624
        </h5>
      </a>
      <p class="mb-3 font-light text-white ">Total Investment</p>
    </div>
  );
};

export default Card;
