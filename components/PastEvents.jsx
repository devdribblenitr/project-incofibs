import React from 'react'
import SinglePastEvent from './SinglePastEvent'

export default function PastEvents({events}) {
    return (
        <div className="border-t-2 py-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-center py-4" style={{color: "#022a36"}}>Past events</h2>
            <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                {/* <EventCard></EventCard> */}
                <ul>
                    {events.map((item)=>{
                        return(
                            <li key={events.indexOf(item)}>
                                <SinglePastEvent image={item.image} name={item.name} desc={item.desc} date={item.date} venue={item.venue}></SinglePastEvent>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
