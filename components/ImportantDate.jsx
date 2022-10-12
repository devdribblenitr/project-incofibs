import React from 'react'
import DateCard from './DateCard'
export default function ImportantDate() {
  return (
    <div>
        <h1 style={{color: "#026A6D", fontSize: "36px"}} className="text-center md:text-left">IMPORTANT DATES</h1>
        <hr style={{width: "117px", height: "3px", backgroundColor: "rgba(0,0,0,0.1)"}}/>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div style={{backgroundColor: "#d1891c"}}/>
          <div className='w-full p-4'>
            <DateCard headline={"Registration Deadline"} date={"October 31, 2022"}></DateCard>
            <DateCard headline={"Abstract submission deadline"} date={"October 30, 2022"}></DateCard>
            <DateCard headline={"Confirmation of Abstract Acceptance"} date={"November 10, 2022"} ></DateCard>
          </div>
        </div>
    </div>
  )
}
