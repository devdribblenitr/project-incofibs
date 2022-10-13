import React from "react";
import teacher from "../public/teacher.jpg";
import Image from 'next/image';

const Community = () => {
  return (
    <div className="w-full bg-white py-4 px-4">
      <div>
      <h1 className="max-w-[1240px] mx-auto text-center my-1 text-4xl text-[#c59d5f] font-bold">Our Dignitaries</h1>
      <div className="w-40 h-1 bg-[#c59d5f] mx-auto my-4"></div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <Image className="w-[500px] mx-auto my-4 border-4 border-[#c59d5f] rounded-xl shadow-2xl " src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          <p className="mx-3 transition-0.4s my-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit?</p>
          <h1 className="text-[#c59d5f] font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of Director</h1>
          <h1 className="text-[#102a42] font-bold md-text-3xl sm:2xl text-1xl mx-3 ">DIRECTOR</h1>
        </div>
      </div>


      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <Image className="w-[500px] mx-auto my-4  border-4 border-[#c59d5f] rounded-xl shadow-2xl" src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-[#c59d5f] font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the HOD</h1>
          <h1 className="text-[#102a42] font-bold md-text-3xl sm:2xl text-1xl mx-3 ">HOD</h1>
       
        </div>

      </div>
      
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <Image className="w-[500px] mx-auto my-4  border-4 border-[#c59d5f] rounded-xl shadow-2xl" src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-[#c59d5f] font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the Convenor</h1>
          <h1 className="text-[#102a42] font-bold md-text-3xl sm:2xl text-1xl mx-3 ">CONVENOR</h1>
       
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <Image className="w-[500px] mx-auto my-4  border-4 border-[#c59d5f] rounded-xl shadow-2xl" src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-[#c59d5f] font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the CO-CONVENOR</h1>
          <h1 className="text-[#102a42] font-bold md-text-3xl sm:2xl text-1xl mx-3 ">CO-CONVENOR</h1>
       
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <Image className="w-[500px] mx-auto my-4  border-4 border-[#c59d5f] rounded-xl shadow-2xl" src={teacher} alt='oops'/>
        <div className="flex flex-col justify-center">
          
          <p className="mx-3 transition:0.4s my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ratione voluptates nesciunt dignissimos sit, neque, eius modi iusto natus nobis quo enim ab omnis sunt optio tempora consectetur nulla labore, dolore fugiat. Officia mollitia sed, dolore eum distinctio repudiandae ratione fugiat deserunt aliquid consequatur numquam, neque dolores suscipit reprehenderit? </p>
          <h1 className="text-[#c59d5f] font-bold md-text-4xl sm:3xl text-2xl  mx-3">Name of the TREASURER</h1>
          <h1 className="text-[#102a42] font-bold md-text-3xl sm:2xl text-1xl mx-3 ">TREASURER</h1>
       
        </div>
      </div>
    </div>
  );
};

export default Community;
