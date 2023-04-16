


import React from 'react'

const BlackCard = () => {
  return (
    <div class="w-72 h-36 bg-black rounded-2xl shadow ml-3 ">
  <div class="flex flex-col p-5 pb-10">
    <h5 class="mb-1 text-md font-sans font-normal text-white text-left">
      Google Meeting /
    </h5>
    <div className="flex flex-row items-center gap-2">
    <div className="w-3 h-3 rounded-full bg-green-400"></div>
    <span class="text-sm text-gray-500 dark:text-gray-400">Apr 24 at 6:00pm</span>
    </div>
 
    
    <div class="flex mt-4 space-x-3 md:mt-2 font-thin text-white">
        You have been invited to attend the meeting to get Verified!
    </div>
  </div>
</div>
  )
}

export default BlackCard