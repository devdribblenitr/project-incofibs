import React from 'react'

function SinglePastEvent() {
    return (
        <div className='py-2'>
            <div className='md:flex bg-slate-200 justify-between rounded-md p-2 border-b-4 border-slate-300'>
                <div className='flex flex-wrap'>
                    <div className='p-4 w-fit h-fit'>
                        <img src="https://images.pexels.com/photos/12303537/pexels-photo-12303537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-16 rounded-full h-16' />
                    </div>
                    <div className='h-fit my-auto'>
                        <h2 className='font-semibold text-lg text-blue-700'>Conference on IOT</h2>
                        <p>A conference on the applications of IOT11...</p>
                    </div>
                </div>
                <div className='h-fit my-auto px-4 w-fit ml-auto'>
                    <h2 className='text-lg text-sky-500 font-semibold'>BBA Hall</h2>
                    <h2 className='text-sm text-gray-400'>02/10/2022</h2>
                </div>
            </div>
        </div>
    )
}

export default SinglePastEvent