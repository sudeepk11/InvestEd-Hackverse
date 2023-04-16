import React from "react";

const Card2 = () => {
  return (
    // THESE CARDS ARE BEING USE OR THE SECOND ROW CARDS
    <div className="flex flex-col">
      <div class="h-32 w-56 p-4 bg-cover border border-gray-200 rounded-2xl shadow flex flex-col mb-4">
        <p class="mb-3 font-bold ">Views</p>
        <div className="flex flex-row gap-3 items-center">
          <h5 class="mb-2 text-[32px] font-bold tracking-tight text-black">
          4
          </h5>
          <span class="text-green-600 bg-green-200 h-8 mb-3 rounded-xl p-2 flex items-center">
            +50%
          </span>
        </div>
      </div>
      <div class="h-32 w-56 p-4 bg-cover border border-gray-200 rounded-2xl shadow flex flex-col gap-2">
        <p class="mb-3 font-bold ">Contracts Pending</p>
        <div className="flex flex-row gap-3 items-center">
          <h5 class="mb-2 text-[32px] font-bold tracking-tight text-black">
            0
          </h5>
          <span class="text-red-600 bg-red-200 h-8 mb-3 rounded-xl p-2 flex items-center">
            -0%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
