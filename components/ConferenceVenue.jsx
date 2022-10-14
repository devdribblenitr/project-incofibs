import React from "react";
import community from "../public/comm5.jpg";
import Image from 'next/image';

const Conference = () => {
  return (
    <div className="w-full bg-conferenceColor py-6  px-4">
      <div>
        <h1 className="max-w-[1240px] mx-auto text-center my-1 text-4xl text-gray-300 mt-14 mb-2 font-bold">
          Conference Venue
        </h1>
        <div className="w-40 h-1 bg-gray-300 mx-auto "></div>
      </div>
      <div className="max-w-[1240px] mx-auto text-center my-1 text-2xl text-gray-300 mt-4 mb-2 font-bold">Bhubaneswar Behera Auditorium, National Institute of Technology , Rourkela

      </div>

      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 my-10 ">
        <Image
          className="w-[600px] mx-auto rounded-xl shadow-2xl "
          src={community}
          alt="oops"
        />
        <div className="flex flex-col py-2 my-6 ">
          <p className="text-gray-300 font-bold md:text-xl text-lg mx-8 my-4   ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quidem asperiores pariatur assumenda architecto ullam culpa unde dolor, amet suscipit nulla  
          </p>
          <p className="text-gray-300 font-bold md:text-xl text-lg mx-8 my-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odit dolore natus, officia maiores possimus deleniti unde fugiat maxime facilis 
          </p>
          <p className="text-gray-300 font-bold md:text-xl text-lg my-4 mx-8">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi debitis dolor numquam nesciunt aliquam repellat hic alias ut dignissimos corrupti 
          </p>
          <p className="text-gray-300 font-bold md:text-xl text-lg my-4 mx-8">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi debitis dolor numquam nesciunt aliquam repellat hic alias ut dignissimos corrupti 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference;
