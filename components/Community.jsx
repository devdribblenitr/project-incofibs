import React from "react";
import teacher from "../public/teacher.jpg";
import Image from 'next/image';

const Community = () => {
  const commStyle={
    borderRadius:'20px',
    boxShadow:'50px',
    width:'200px',
    margin:'4px 0px',
    
  }
  return (
    <div className="w-full bg-white py-4 px-4">
      <div>
      <h1 className="max-w-[1440px] mx-auto text-center my-2 text-4xl text-communityColor2 font-bold">Our Dignitaries</h1>
      <div className="w-24 h-1 bg-communityColor2 mx-auto my-3"></div>
      </div>
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">

      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:mr-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12  gap-x-3 ">
        <Image className="w-[200px] h-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">DIRECTOR</h1>
        </div>
      </div>


      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:ml-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12 gap-x-3 ">
        <Image className="w-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of HOD</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">HOD</h1>
        </div>
      </div>
      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:mr-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12 gap-x-3 ">
        <Image className="w-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">DIRECTOR</h1>
        </div>
      </div>
      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:ml-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12 gap-x-3 ">
        <Image className="w-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">DIRECTOR</h1>
        </div>
      </div>
      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:mr-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12 gap-x-3 ">
        <Image className="w-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">DIRECTOR</h1>
        </div>
      </div>
      <div className="max-w-[802px] md:h-[200px] sm:h-[400px] mx-auto grid lg:ml-6 md:grid-cols-2 xl:my-8 md:my-4 lg:my-12 gap-x-3 ">
        <Image className="w-[200px] mx-auto border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center mx-auto">
          <p className="mx-1 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-1">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-1 ">DIRECTOR</h1>
        </div>
      </div>
      </div>
    </div>
    
      

  
  );
};

export default Community;
