import React from 'react'
import style from "../styles/Tracks.module.css"

export default function IndividualTrack({ track, arr2 }) {
    let length = track.length;
    let index=0;
    const hiddenC = {
        visibility: "hidden",
    }
    return (
        <div className='px-4 py-4'>
            <div style={{ backgroundColor: "#184353"}} className={`px-6 py-4 ${style["rounded-xl"]} ${style.individualTrack}`}>
                {
                    track.map((item) => {
                        let cn = `text-white py-4 text-xl px-4 hover:scale-105 duration-200 ease-in-out ${style.trackItem}`;
                        let cn2 = `text-white py-4 text-xl px-4 hover:scale-105 duration-200 ease-in-out`;
                        index++;
                        return (
                            <div className={(index===length)?cn2:cn} key={item} style={arr2 && (index == length)?hiddenC:null}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
