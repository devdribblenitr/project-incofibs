import React from 'react'
import style from "../styles/Tracks.module.css"

export default function IndividualTrack({ track }) {
    return (
        <div className='px-4 py-4'>
            <div style={{ backgroundColor: "#184353"}} className={`px-6 py-4 rounded-xl ${style.individualTrack}`}>
                {
                    track.map((item) => {
                        return (
                            <div className={`text-white py-4 text-xl border-b px-4 hover:scale-105 duration-200 ease-in-out ${style.trackItem}`} key={item}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
