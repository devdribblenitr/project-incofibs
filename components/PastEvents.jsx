import React from 'react'
import EventCard from './EventCard'
import SinglePastEvent from './SinglePastEvent'

export default function PastEvents() {
    return (
        <div className="border-t-2 py-4">
            <h2 className="text-4xl font-semibold text-center">Past events</h2>
            <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                {/* <EventCard></EventCard> */}
                <ul>
                    <li>
                        <SinglePastEvent></SinglePastEvent>
                    </li>
                    <li>
                        <SinglePastEvent></SinglePastEvent>
                    </li>
                    <li>
                        <SinglePastEvent></SinglePastEvent>
                    </li>
                </ul>
            </div>
        </div>
    )
}
