import Link from 'next/link'
import React from 'react'

function ConferenceProgram() {
  return (
    <div className=' font'>
        <div style={{marginTop:"10%",marginBottom:"50px"}}  className='m-auto items-center flex flex-col md:flex-row  justify-center'>
            <Link href={'/'}>
            <button className='m-3  w-1/2 md:w-auto'>
                <p style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className=' text-white p-3 border-2 rounded-lg border-black/[0.05]'>About Chandigarh</p>
            </button>
            </Link>
            <Link href={'/'}>
            <button className='m-3  w-1/2  md:w-auto'>
                <p className='m-auto  bg-[#184353] p-3 border-2 rounded-lg border-black/[0.05]'>View Chandigarh Tourism Website</p>
            </button></Link>
            <Link href={'/'}>
            <button className='m-3 w-1/2 md:w-auto'>
                <p style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className='text-white p-3 border-2 rounded-lg border-black/[0.05]'>View PGIMER Website</p>
            </button></Link>
        </div>
        <div style={{ backgroundColor: "rgba(16, 44, 58, 1)" }} className='text-white text-center flex flex-col items-center justify-center md:w-5/6 lg:w-4/6 m-auto md:rounded-xl rounded-none
        '>
                <h1 className='text-3xl  mt-6'>CONFERENCE PROGRAM</h1>
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} className=' h-1 w-1/5 my-4'></div>
                <p className='my-2 '>TENTATIVE PROGRAM (AS ON SEPTEMBER 15, 2022)</p>
                <Link href={'/'}>
                <a style={{ backgroundColor: "rgba(24, 67, 83, 1)" }} className="py-2 px-5 rounded-lg mt-8 mb-7">View Program</a>
        </Link>
        </div>
    </div>
  )
}

export default ConferenceProgram