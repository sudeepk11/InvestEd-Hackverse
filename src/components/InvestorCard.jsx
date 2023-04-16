import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({name,domain ,headline, verified}) => {
  return (
    <div>
      <div class="w-76 bg-cover border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-xl"
            src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>

          <div className="flex flex-col gap-2">
            <div>
              <span className="font font-semibold">Headline: </span>
              <span className="text-sm">{headline}</span>
            </div>

            <div>
              <span className="font font-semibold">Domain: </span>
              <span className="text-sm">{domain}</span>
            </div>

            {verified && <>
              <div className="flex gap-0.5 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
              <h1 className="text-blue-600">Verified Investor</h1>
            </div></>}

            <Link
              to={"/investorProfile"}
              className=" text-black border border-black rounded-lg w-full px-1.5 py-2 mt-2 text-center"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
