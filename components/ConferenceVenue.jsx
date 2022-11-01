import React from "react";
import teacher from "../public/teacher.jpg";
import one from '../public/venue/images01.png';
// import one from '../public/venue/images01.jfif';
import two from '../public/venue/images02.png';
import three from '../public/venue/images03.png';
import four from '../public/venue/images04.jpeg';
import Image from 'next/image';

const Conference = () => {
  const conStyle={
    borderRadius:'15px',
    boxShadow:'50px',
    width: '70%',
  }
  return (
    <div id="conference_venue" className="w-full white px-4 my-16">
      <div>
        <div className="aboutinco">
          <h1 className="capitalize heading_title pb-3 playfair max-w-[1440px] text-[#000000bf] mx-auto text-center my-2 text-4xl  mb-2 font-normal ">
            Conference Venue
          </h1>
        </div>
        {/* <div className='w-28 h-1 bg-red-700 mx-auto mb-8'></div> */}
    </div>
    <div className='max-w-[1440px] mx-auto grid xl:grid-cols-2 '>
      <div className= 'grid gap-10 grid-cols-1 md:grid-cols-2 mx-auto mt-12 '>
        <div className='lg:w-80 sm:w-3/4 mx-auto '>
          <img src={one.src} className='image_position_conference' alt=""  style={conStyle} />
        </div>
        <div className='lg:w-80 sm:w-3/4   mx-auto' >
          <img src={two.src} alt="" style={conStyle} />
        </div>
        <div className='lg:w-80 sm:w-3/4  mx-auto' >
          <img src={three.src} className='image_position_conference' alt="" style={conStyle}/>
        </div>
        <div className='lg:w-80 sm:w-3/4  mx-auto' >
          <img src={four.src} alt="" style={conStyle}/>
        </div>
      </div>
      <div className="flex flex-col py-2 xl:pt-6 mt-2 divide-y px-6">
          <p className="text-[#474747] font-normal md:text-lg text-lg mx-6 my-4   ">
          NIT Rourkela is one of the countrys premier national-level institutions for technical education and is funded by the Government of India.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg mx-6 my-4  ">
          The campus is located at the eastern end of the Steel city of Rourkela amid the lush green hills of Sundergarh, at the confluence of river South Koel and Sankh forming Brahmani.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg my-4 mx-6">
          The Bhubaneswar Behera Auditorium (BBA), at the heart of the campus, boasts 700 seating capacity with centralised air conditioning.
          </p>
          <p className="text-[#474747] font-normal md:text-lg text-lg my-4 mx-6">
          The TIIR Conference Hall, PK Parija Hall and RM Hall too boast various workshops and conferences held in the past. 
          </p>
        </div>
    </div>
    </div>
     
  )
}

export default Conference
