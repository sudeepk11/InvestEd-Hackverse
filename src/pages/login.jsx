import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const { loading, error, dispatch } = useContext(AuthContext);
  const onPassChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:4050/api/v1/student/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      localStorage.setItem("token", data.token);

      localStorage.setItem("student", true);

      navigate("/student-dashboard");
      
    } catch (e) {
      console.log(e);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div class="bg-cover flex flex-col items-center justify-center px-6 py-16 mx-auto h-screen  sm:flex sm:justify-center">
      <div class="w-full  rounded-2xl  md:mt-0 sm:max-w-md xl:p-4 bg-card shadow-lg">
        <div class=" p-10 space-y-4 md:space-y-6 sm:p-8">
          <div class="flex justify-start items-center">
            <a
              href="/"
              class="flex text-left items-center justify-center mt-3 mb-6 text-2xl font-semibold text-gray-900"
            >
              <span class=" font-serif font-thin self-center  w-20 whitespace-nowrap text-black text-[28px]">
                Invest
                <span className=" font-serif font-semibold text-[28px]">
                  Ed
                </span>
                <hr className="text-white w-full h-0.5 bg-black" />
              </span>
            </a>
          </div>

          <h1 class="text-[24px] font-inter font-bold leading-tight tracking-tight text-gray-900  ">
            Student Log In
          </h1>

          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              E-mail
            </label>
            <input
              name="email"
              id="email"
              class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
              placeholder="name@email.com"
              required=""
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium font-inter text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="text-2xl border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 bg-cover"
              required=""
              onKeyDown={handleKeyDown}
              onChange={onPassChange}
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/"
              class="text-sm font-medium text-[#006CCF] hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            onKeyDown={handleKeyDown}
            class="w-full text-white text-lg bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-4 py-2"
          >
            Log In
          </button>
          <p class="text-sm font-light text-black  flex items-center text-center justify-center">
            Don't have an account?
            <a
              href="/signup"
              class="text-[#006CCF] font-medium hover:underline "
            >
              &nbsp;Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
