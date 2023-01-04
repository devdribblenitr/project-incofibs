import React from 'react'
import DateCard from './DateCard'
export default function ImportantDate() {
  return (
    <div style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(Rectangle99.png)", backgroundSize: "cover", backgroundAttachment: 'fixed' }} className="py-8 md:py-14">
      <div className="heading aboutinco">
        <h1 className='heading_title text-white playfair text-center'>Important Dates</h1>
      </div>
      <div className="mx-auto py-4 md:py-6">
        {/* <div className='w-full p-4'>
          <div className='flex justify-center'>
          <DateCard headline={"Abstract Submission Deadline"} date={"December 31st, 2022"} alignment={"center"}></DateCard>
          </div>
          <div className="flex flex-wrap justify-center">
            <DateCard headline={"Registration Deadline"} date={"December 31st, 2022"} alignment="left"></DateCard>
            <DateCard headline={"Full Paper Submission Deadline"} date={"December 31st, 2022"} alignment="left" ></DateCard>
          </div>
        </div> */}


        <div className='' style={{ fontSize: "28px", color: "white", marginTop: "45px" }}>
          <marquee behavior="scroll" direction="left">Last date of Abstract Submission and Registration
            deadline soon to be announced
            {/* extended till December 31st */}
          </marquee>
        </div>

      </div>
    </div>
  )
}
