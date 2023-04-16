import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const isStudent = localStorage.getItem("student");
  const token = localStorage.getItem("token");
  console.log(isStudent,token)
  return (
    <div>
      <nav class=" bg-black dark:bg-gray-800 dark:border-gray-700 border-b ">
        <div class="w-full flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" class="flex items-center">
            <span class="ml-5 font-mono font-thin self-center tracking-wide w-20 whitespace-nowrap text-white text-[28px]">
              Invest
              <span className=" font-serif font-medium text-[28px]">Ed</span>
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 mr-5">
              <li>
                <a
                  href="/studentHome"
                  class="block py-2 pl-3 pr-4 font-sans font-thin text-white rounded md:bg-transparent md:p-0"
                >
                  Home
                </a>
              </li>
              {(isStudent && token ) ? (
                <>
                  <li>
                    <a
                      href="/student-dashboard"
                      class="block py-2 pl-3 pr-4 font-sans font-thin text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                </>
              ) : (
                <></>
              )}

              {!isStudent && token ? (
                <>
                  <li>
                    <a
                      href="/investor-dashboard"
                      class="block py-2 pl-3 pr-4 font-sans font-thin text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
