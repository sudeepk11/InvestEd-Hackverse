import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     window.location.href = "/";
  //   }
  // }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [domain, setDomain] = useState("");
  const [signature, setSignature] = useState("");
  const [headline, setHeadline] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await fetch(
        "http://localhost:4050/api/v1/invester/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            address: address,
            panNumber: panNumber,
            accountNumber: accountNumber,
            domain: domain,
            signature: signature,
            headline: headline,
          }),
        }
      );

      const sessionCookie = data.headers.get("set-cookie").split(";")[0];
      const tokenRegex = /token=([^;]+)/;
      const match = sessionCookie.match(tokenRegex);

      if (match) {
        const token = match[1];
        console.log(token);
      }
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
    <div className="">
      <div class="bg-cover flex flex-col items-center justify-center px-16 py-8 mx-auto sm:flex sm:justify-center h-screen">
        <div class="w-full rounded-2xl md:mt-0 xl:p-4 bg-card shadow-lg">
          <div class=" p-10 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex justify-start items-center">
              <a
                href="/"
                class="flex text-left items-center justify-center mt-3 mb-6 text-2xl font-semibold text-gray-900"
              >
                <span class="font-serif font-thin self-center  w-20 whitespace-nowrap text-black text-[36px]">
                  Invest
                  <span className="font-serif font-semibold text-[36px]">
                    Ed
                  </span>
                  <hr className="text-white w-full h-0.5 bg-black" />
                </span>
              </a>
            </div>
            <h1 class="text-[24px] font-inter font-bold leading-tight tracking-tight text-gray-900  ">
              Register as an Investor
            </h1>

            <div className="grid grid-cols-3 gap-5">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  name="name"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="Sudeep Kulkarni"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                  class="font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="sudeep@gmail.com"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="*******"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pan Number
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="D3G7253"
                  required=""
                  onChange={(e) => setPanNumber(e.target.value)}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Account Number
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="12373603925738"
                  required=""
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Domains
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="Tech , Web 3.0 , Medical"
                  required=""
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="I am a ..."
                  required=""
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </div>

              <div className="col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  name="email"
                  id="email"
                  class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                  placeholder="Plot No 232 , Sayhadri Nagar .. "
                  required=""
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="w-[32%]">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Signature
              </label>
              <input
                name="email"
                id="email"
                class="  font-inter text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-cover"
                placeholder="URL "
                required=""
                onChange={(e) => setSignature(e.target.value)}
              />
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                onKeyDown={handleKeyDown}
                class="w-[24%] text-white text-lg bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-4 py-2"
              >
                Register
              </button>
            </div>
            <p class="text-sm font-light text-black  flex items-center text-center justify-center">
              Don't have an account?
              <a
                href="/login"
                class="text-[#006CCF] font-medium hover:underline "
              >
                &nbsp;Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
