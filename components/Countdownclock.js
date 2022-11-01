import React, { useState, useEffect } from "react";
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';

const Countdownclock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [ providers, setproviders ] = useState();
  const { data: session, status } = useSession();
  useEffect(() => {
    const setTheProviders = async () => {
        const setupProviders = await getProviders();
        setproviders(setupProviders);
    };
    setTheProviders();
  }, []);

  function padWithZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("February 2,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center text-white mb-4">
        <button className="bg-primary-60 rounded-tl-bye rounded-br-bye text-lg py-2 px-4">
          2nd February 2023
        </button>
        <div className="playfair text-2xl lg:text-6xl mt-6 flex justify-center pl-4 sm:pl-0 mb-1">
          InCoFIBS  2<div className="text-[#e84c3d] font-bold">k</div>23
        </div>
        <div className="text-lg w-4/5 flex justify-center mb-1">
         International Conference on Frontier in Biological Sciences
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <div className="text-white bg-transparent text-xl sm:text-3xl lg:text-3xl ml-2 mr-2  md:ml-4  h-1/6 md:h-1/3  lg:p-6  xl:p-7 sm:p-2 sm:pl-3 sm:pr-3 lg:mr-6 sm:border-gray-100 sm:border-2 rounded-tl-br10 rounded-br-br10 lg:rounded-tl-br25 lg:rounded-br-br25">
          <div className="flex flex-col items-center">
            <div className=" text-white flex justify-center text-md lg:text-xl xl:text-3xl font-bold mb-1">
              {padWithZeros(days, 2)}
            </div>
            <div className="border-b-2 w-4 border-primary-60 flex justify-center mb-1"></div>
          </div>
          <div className="text-sm uppercase  flex justify-center">Days</div>
        </div>
        <div className="text-white bg-transparent text-xl sm:text-3xl lg:text-3xl ml-2 mr-2  md:ml-4  h-1/6 md:h-1/3   lg:p-6  xl:p-7  mb-2 sm:p-2 sm:pl-3 sm:pr-3 lg:mr-6 sm:border-gray-100 sm:border-2 rounded-tl-br10 rounded-br-br10 lg:rounded-tl-br25 lg:rounded-br-br25">
          <div className="flex flex-col items-center">
            <div className=" text-white flex justify-center text-md lg:text-xl xl:text-3xl font-bold mb-1">
              {padWithZeros(hours, 2)}
            </div>
            <div className="border-b-2 w-4 border-primary-60 flex justify-center mb-1"></div>
          </div>
          <div className="text-sm uppercase  flex justify-center">hours</div>
        </div>
        <div className="text-white bg-transparent text-xl sm:text-3xl lg:text-3xl ml-2 mr-2  md:ml-4  h-1/6 md:h-1/3  lg:p-6 xl:p-7 sm:p-2 sm:pl-3 sm:pr-3 lg:mr-6 sm:border-gray-100 sm:border-2 rounded-bl-br10 rounded-tr-br10 lg:rounded-bl-br25 lg:rounded-tr-br25">
          <div className="flex flex-col items-center">
            <div className=" text-white flex justify-center text-md lg:text-xl xl:text-3xl font-bold mb-1">
              {padWithZeros(minutes, 2)}
            </div>
            <div className="border-b-2 w-4 border-primary-60 flex justify-center mb-1"></div>
          </div>
          <div className="text-sm uppercase  flex justify-center">minutes</div>
        </div>
        <div className="text-white bg-transparent text-xl sm:text-3xl lg:text-3xl ml-2 mr-2  md:ml-4  h-1/6 md:h-1/3   lg:p-6  xl:p-7 sm:p-2 sm:pl-3 sm:pr-3 lg:mr-6 border-gray-100 sm:border-2 rounded-bl-br10 rounded-tr-br10 lg:rounded-bl-br25 lg:rounded-tr-br25">
          <div className="flex flex-col items-center">
            <div className=" text-white flex justify-center text-md lg:text-xl xl:text-3xl font-bold mb-1">
              {padWithZeros(seconds, 2)}
            </div>
            <div className="border-b-2 w-4 border-primary-60 flex justify-center mb-1"></div>
          </div>
          <div className="text-sm uppercase  flex justify-center">seconds</div>
        </div>
        
      </div>
      <div className="flex justify-center">
        <button style={{color: "#ffff",backgroundColor: 'rgb(232 76 61)', borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "75px", width: "300px"}} className="button_cards2 mt-6"  onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}>Click Here to Register or Upload Your Abstract</button>
      </div>
    </div>
  );
};

export default Countdownclock;
