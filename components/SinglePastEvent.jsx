import React from 'react'

function SinglePastEvent({name, desc, image, venue, date}) {
    return (
        <div className='py-2'>
            <div className='md:flex justify-between rounded-md p-2' style={{backgroundColor: "#184353"}}>
                <div className='flex flex-wrap'>
                    <div className='p-4 w-fit h-fit'>
                        <img src={image} alt="" className='w-32 border-2 border-white rounded-full h-32' />
                    </div>
                    <div className='h-fit my-auto px-3 py-4'>
                        <h2 className='font-semibold text-lg' style={{color: "rgb(232, 76, 61)"}}>{name}</h2>
                        <p className='text-gray-200'>{desc}</p>
                    </div>
                </div>
                <div className='h-fit my-auto px-4 py-4 w-fit ml-auto'>
                    <h2 className='text-lg font-semibold' style={{color: "rgb(232,76,61)"}}>{venue}</h2>
                    <h2 className='text-sm text-gray-400'>{date}</h2>
                </div>
            </div>
        </div>
    )
}

export default SinglePastEvent