import React from "react";

const Contract = () => {
  return (
    <div className="flex items-center justify-center h-screen shadow">
      <div className="bg-white shadow-lg rounded-lg w-6/12">
        <div className="contract p-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Contract SUDK-2399</h1>
            </div>

            <div>
              <span class="ml-5 font-mono font-thin self-center tracking-wide w-20 whitespace-nowrap text-black text-[32px]">
                Invest
                <span className="font-serif font-medium text-[28px]">Ed</span>
              </span>
            </div>
          </div>

          <p className="mb-4">
            This Contract is Signed Between{" "}
            <span className="font-bold">Sudeep Kulkarni</span> and{" "}
            <span className="font-bold">John Oliver</span>
          </p>
          <p className="mb-4">
            Contract Dated: <span className="font-bold">12/04/2023</span>
          </p>
          <p className="mb-4">
            Contract Amount: <span className="font-bold">Rs 1,00,000</span>{" "}
          </p>
          <p className="mb-4 font-bold">Terms And Conditions</p>
          <p className="mb-4">
            The Return Percentage Has Been Decided as{" "}
            <span className="font-bold"> 12% </span>{" "}
          </p>
          <p className="mb-4">
            The Goal is decided as{" "}
            <span className="font-bold">
              Sudeep will take a placement of 24LPA"
            </span>
            .
          </p>
          <p className="mt-10 font-bold">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline mr-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div>This Contract is Insured By InvestEd</div>
            </div>
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col p-4 ">
            <img
              className="w-16 h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jon_Kirsch%27s_Signature.png/1200px-Jon_Kirsch%27s_Signature.png"
            />
            <div>Sudeep Kulkarni</div>
          </div>

          <div className="flex flex-col p-4 ">
            <img
              className="w-16 h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jon_Kirsch%27s_Signature.png/1200px-Jon_Kirsch%27s_Signature.png"
            />
            <div>Sutej Kulkarni</div>
          </div>

          <div className="flex flex-col p-4 ">
            <img
              className="w-16 h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jon_Kirsch%27s_Signature.png/1200px-Jon_Kirsch%27s_Signature.png"
            />
            <div>InvestED CEO</div>
          </div>
        </div>

        <p className="p-3 font-thin text-sm">
          ** We would like to inform you that the contract you have received is
          for your visual purposes only. We will be sending the original
          contract to your address shortly.
        </p>
      </div>
    </div>
  );
};

export default Contract;
