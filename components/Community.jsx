import React from "react";
import teacher from "../public/teacher.jpg";
import Image from 'next/image';

const Community = () => {
  const commStyle={
    borderRadius:'20px',
    boxShadow:'50px',
    width:'200px',
    margin:'20px 0px'
  }
  return (
    <div className="w-full bg-white py-4 px-4">
      <div>
      <h1 className="max-w-[1240px] mx-auto text-center my-2 text-4xl text-communityColor2 font-bold">Our Dignitaries</h1>
      <div className="w-24 h-1 bg-communityColor2 mx-auto my-3"></div>
      </div>

      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 my-10 gap-x-20  ">
        <Image className="w-wid mx-auto  border-4 border-communityColor2 " style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          <p className="mx-3 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit?</p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of Director</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-3 ">DIRECTOR</h1>
        </div>
      </div>


      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 my-10 gap-x-20 ">
      <Image className="w-[500px] mx-auto   border-4 border-communityColor2 " style={commStyle}  src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the HOD</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-3 ">HOD</h1>
       
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 my-10 gap-x-20 ">
      <Image className="w-[500px] mx-auto  border-4 border-communityColor2 "style={commStyle}  src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the Convenor</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-3  ">CONVENOR</h1>
       
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 my-10 gap-x-20 ">
      <Image className="w-[500px] mx-auto  border-4 border-communityColor2 "style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the CO-CONVENOR</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-3  ">CO-CONVENOR</h1>
       
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-2 my-10 gap-x-20 ">
      <Image className="w-[500px] mx-auto   border-4 border-communityColor2 "style={commStyle} src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-communityColor2 font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the TREASURER</h1>
          <h1 className="text-communityColor2 font-bold md-text-2xl sm:xl text-lg mx-3 ">TREASURER</h1>
       
        </div>
      </div>
    </div>
  );
};

export default Community;
