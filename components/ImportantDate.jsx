import React from 'react'
import DateCard from './DateCard'
export default function ImportantDate() {
  return (
    <div style={{ maxWidth: "900px" }} className="mx-auto">
      <h1 style={{ color: "#026A6D", fontSize: "36px" }} className="pl-2 md:pl-0">IMPORTANT DATES</h1>
      <div className='py-6 pl-2 md:pl-0'>
        <hr style={{ width: "117px", height: "3px", backgroundColor: "rgba(0,0,0,0.1)" }} className="border-0" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-2 md:p-0'>
          <img src="/IMAGE.png"></img>
        </div>
        <div className='w-full p-4'>
          <DateCard headline={"Registration Deadline"} date={"October 31, 2022"}></DateCard>
          <DateCard headline={"Abstract submission deadline"} date={"October 30, 2022"}></DateCard>
          <DateCard headline={"Confirmation of Abstract Acceptance"} date={"November 10, 2022"} ></DateCard>
        </div>
      </div>
    </div>
  )
}
