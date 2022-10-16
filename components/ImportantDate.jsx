import React from 'react'
import DateCard from './DateCard'
export default function ImportantDate() {
  return (
    <div style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(Rectangle99.png)", backgroundSize: "cover", backgroundAttachment: 'fixed'}} className="py-8 md:py-24">
      <div className="mx-auto">
        <div className='w-full p-4'>
          <div className='flex justify-center'>
          <DateCard headline={"Registration Deadline"} date={"October 31, 2022"} alignment={"center"}></DateCard>
          </div>
          <div className="flex flex-wrap justify-center">
            <DateCard headline={"Abstract submission deadline"} date={"October 30, 2022"} alignment="left"></DateCard>
            <DateCard headline={"Confirmation of Abstract Acceptance"} date={"November 10, 2022"} alignment="left" ></DateCard>
          </div>
        </div>
      </div>
    </div>
  )
}
