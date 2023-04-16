import React from "react";
import Banner from "../components/Banner";
import AuthHoc from '../authHoc';
const home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl pt-48 h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Invest In the Future 
              <span class="sm:block">One Student At A Time. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Empowering students with financial support and expert guidance for entrepreneurial success
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/registerStudent"
                class="block w-full rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600   px-12 py-3 text-sm font-medium text-black hover:bg-transparent cursor-pointer focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
         
              >
                Register as a Student
              </a>

              <a
              href="/registerInvestor"
                class="block w-full border border-blue-500 cursor-pointer rounded px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring  sm:w-auto"
              >
                Register as an Investor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthHoc(home);
