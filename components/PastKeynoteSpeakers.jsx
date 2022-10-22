import React from 'react'
import Speaker from './Speaker'
function PastKeynoteSpeakers({heading}) {
    return (
        <div className='pb-6'>
            <h1 className='text-4xl text-center font-semibold py-4 lg:py-16 lg:text-6xl border-t-2' style={{color: "rgb(2, 42, 54)"}}>{heading}</h1>

            <div className="flex flex-wrap">
                <Speaker></Speaker>
                <Speaker></Speaker>
                <Speaker></Speaker>
                <Speaker></Speaker>
                
            </div>

        </div>
    )
}

export default PastKeynoteSpeakers