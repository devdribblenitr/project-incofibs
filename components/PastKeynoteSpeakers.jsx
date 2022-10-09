import React from 'react'
import Speaker from './Speaker'
function PastKeynoteSpeakers() {
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold py-4 border-t-2'>Past Keynote Speakers</h1>

            <div className="flex flex-wrap">
                <Speaker></Speaker>
                <Speaker></Speaker>
                <Speaker></Speaker>
            </div>

        </div>
    )
}

export default PastKeynoteSpeakers