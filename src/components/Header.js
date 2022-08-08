import React from "react";

const Header = ({countDownColor}) => {
  return (
    <div className="flex justify-between py-2 md:mx-[25%]">
      <div className="">
        <h1 className="text-white font-sans font-semibold text-xl ml-2.5">
          <i class="fa-solid fa-circle-check"></i>Pomofocus
        </h1>
      </div>
      <div className="md:flex">
        <button className={`md:w-20 w-8 h-8 border-solid border-1 rounded ${countDownColor} text-white mx-1`}>
          <i class="fa-solid fa-chart-column"></i>
          <span className="hidden md:inline">Report</span>
        </button>
        <button className={`md:w-20 w-8 h-8 border-solid border-1 rounded ${countDownColor} text-white mx-1`} >
          <i class="fa-solid fa-gear"></i>
          <span className="hidden md:inline">Setting</span>
        </button>
        <button className={`md:w-20 w-8 h-8 border-solid border-1 rounded ${countDownColor} text-white mx-1`}>
          <i class="fa-solid fa-circle-user"></i>
          <span className="hidden md:inline">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
