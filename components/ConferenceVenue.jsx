import React from "react";
import teacher from "../public/teacher.jpg";
import Image from 'next/image';

const Conference = () => {
  const conStyle={
    borderRadius:'15px',
    boxShadow:'50px',
  }
  return (
    <div className="w-full white px-4 my-16">
      <div>
        <h1 className="max-w-[1440px] mx-auto text-center my-2 text-4xl text-[#E84C3D]  mb-2 font-normal ">
          CONFERENCE VENUE
        </h1>
        <div className='w-28 h-1 bg-red-700 mx-auto mb-8'></div>
    </div>
    <div className='max-w-[1440px] mx-auto grid xl:grid-cols-2 '>
      <div className= 'grid lg:gap-x-4 lg:gap-y-4  gap-x-6 gap-y-8 xl:gap-x-4 xl:gap-y-0 grid-cols-2 mx-auto mt-12 '>
        <div className='lg:w-80 sm:w-3/4   mx-auto '>
          <Image src={teacher} alt=""  style={conStyle} />
        </div>
        <div className='lg:w-80 sm:w-3/4   mx-auto' >
          <Image src={teacher} alt="" style={conStyle} />
        </div>
        <div className='lg:w-80 sm:w-3/4  mx-auto' >
          <Image src={teacher} alt="" style={conStyle}/>
        </div>
        <div className='lg:w-80 sm:w-3/4  mx-auto' >
          <Image src={teacher} alt="" style={conStyle}/>
        </div>
      </div>
      <div className="flex flex-col py-2 xl:pt-6 mt-2 divide-y px-6">
          <p className="text-[#474747] font-normal md:text-lg text-lg mx-6 my-4   ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quidem asperiores pariatur assumenda architecto ullam culpa unde dolor, amet suscipit nulla  Lorem ipsum dolor sit amet.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg mx-6 my-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odit dolore natus, officia maiores possimus deleniti unde fugiat maxime facilis Lorem ipsum dolor sit amet.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg my-4 mx-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi debitis dolor numquam nesciunt aliquam repellat hic alias ut dignissimos corrupti 
           Lorem ipsum dolor sit amet.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg my-4 mx-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi debitis dolor numquam nesciunt aliquam repellat hic alias ut dignissimos corrupti 
           Lorem ipsum dolor sit amet.
          </p>
        </div>
    </div>
    </div>
     
  )
}

export default Conference
