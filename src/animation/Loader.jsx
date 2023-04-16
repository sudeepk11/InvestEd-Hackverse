import React, {useState} from "react";
const Loader = ({time}) => {

  const [percent, setPercent] = useState(0);
  let timerId;

  const increase = () => {

    if (percent >= 100) {
      clearTimeout(timerId);
      return;
    }
    timerId = setTimeout(() => {
      setPercent(percent + 0.1);
    }, time);
  };

  increase();
  return (
    
    <div class="w-full bg-gray-200  h-1 mb-4 dark:bg-gray-700">

      <div
        class="bg-customBlue h-1 dark:bg-blue-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  
  );
};

export default Loader;
