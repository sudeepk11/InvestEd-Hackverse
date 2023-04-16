import React from 'react'

const BlackCard = () => {
  return (
    <div>
           <div class="w-72 h-52 bg-black rounded-2xl shadow ml-3 ">
            <div class="flex flex-col p-5 pb-10">
              <h5 class="mb-1 text-md font-sans font-normal text-white text-left">
                Profile Status
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Under Review
              </span>
              <div>
                <div class="w-40 bg-gray-200 rounded-full h-2.5 mt-4 dark:bg-gray-700">
                  <div
                    class="bg-white h-2.5 rounded-full dark:bg-gray-300 w-8"
                  
                  ></div>
                </div>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-6">
                <button
                  href="#"
                  class="px-4 py-2 text-sm font-medium text-center text-black bg-white rounded-lg w-full "
                >
                  View Status
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default BlackCard