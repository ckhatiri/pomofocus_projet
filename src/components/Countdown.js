import React, { useState, useEffect } from "react";
import useSound from 'use-sound'
import mySound from '../sound/mySound.mp3'
const Countdown = ({ bgColor, countDownColor, setBgColor, setCountDownColor}) => {

  const [start, setStart] = useState(false);
  const [countSec, setCountSec] = useState(2);
  const [countMin, setCountMin] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [playSound] = useSound(mySound, { volume: 0.7 }) 
  let interval = null;
  //USEEFFECT
  useEffect(() => {
    interval = setInterval(decr, 1000);
    if (countMin === 0 && countSec === 0 && bgColor === "bg-[#D95550]") 
    {
      setModalState(true);
      playSound()
    }
    if ( countMin === 0 && countSec === 0 && (bgColor === "bg-teal-800" || bgColor === "bg-cyan-800")) 
    {
      
      setModalState(false);
      setStart(false);
      setCountMin(0);
      setCountSec(2);
      setBgColor("bg-[#D95550]");
      setCountDownColor("bg-[#DD6662]");
      playSound()
    }
    return () => clearInterval(interval);
  }, [start, countSec]);
  //countDown
  const changeHandler = (type) => {
    clearInterval(interval);
    setStart(false);
    if (type === "pomodoro") {
      setModalState(false);
      setCountMin(0);
      setCountSec(2);
      setBgColor("bg-[#D95550]");
      setCountDownColor("bg-[#DD6662]");
    } else if (type === "short break") {
      setModalState(false);
      setStart(true);
      setCountMin(0);
      setCountSec(5);
      setBgColor("bg-teal-800");
      setCountDownColor("bg-teal-700");
      
    } else if (type === "long break") {
      setCountMin(0);
      setCountSec(6);
      setBgColor("bg-cyan-800");
      setCountDownColor("bg-cyan-700");
      setModalState(false);
      setStart(true);
    }
  };
  //function choosing short break or long break
  const choose = (a) => {
    changeHandler(a);
  };
  //function decrement timer 
  const decr = () => {
    if (start) {
      if (countSec === 0) {
        if (countMin !== 0) {
          setCountSec(59);
          setCountMin((countMin) => countMin - 1);
        }
      } else {
        setCountSec(countSec - 1);
      }
    }
  };
  //btn start
  const startHandler = () => {
    if (!start) {
      clearInterval(interval);
    } else {
      interval = setInterval(decr, 1000);
    }
    setStart((prev) => !prev);
  };
  //min & sec
  const min = countMin > 9 ? countMin : "0" + countMin;
  const sec = countSec > 9 ? countSec : "0" + countSec;

  return (
    <div
      className={`${countDownColor} flex flex-col items-center border-solid border-1 rounded  py-5 m-4 md:mx-auto md:w-3/6 md:h-72`}
    >
      <div className="md:flex md:flex-colomn">
        <button
          onClick={() => changeHandler("pomodoro")}
          className="mx-3 text-white"
        >
          Pomodoro
        </button>
        <button
          onClick={() => changeHandler("short break")}
          className="mx-3 text-white"
        >
          Short Break
        </button>
        <button
          onClick={() => changeHandler("long break")}
          className="mx-3 text-white"
        >
          Long Break
        </button>
      </div>
      <div className="text-white w-96 h-28 font-serif font-extrabold text-8xl text-center">
        {min}:{sec}
      </div>
      <div>
        <button
          onClick={startHandler}
          className={` border-solid border-b-8 bg-white border-1 rounded w-52 h-14 text-red-400 font-bold `}
        >
          {start ? "STOP" : "START"}
        </button>
      </div>
      {modalState && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
              <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <!-- Heroicon name: outline/exclamation --> */}
                      <svg
                        class="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you want to finish the round early?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => choose("short break")}
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    short break
                  </button>
                  <button
                    onClick={() => choose("long break")}
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    long break
                  </button>
                  {/* <button
                    onClick={() => choose("pomodoro")}
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Pomodoro
                   </button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
