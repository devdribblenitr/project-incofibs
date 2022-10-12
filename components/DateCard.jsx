import React from 'react'
import style from "../styles/Date.module.css"
export default function DateCard({ headline, date, alignment }) {
    const center = "text-center";
    return (
        <div className={style.dateCard}>
            <div className='rounded-lg w-fit py-4 px-10' style={{ backgroundColor: "rgba(42,84,98,0.56)" }}>
                <div className={`${(alignment==="center")?style.textCustomcenter: ""} text-white`}>
                    <h2 style={{ fontSize: "25px" }} className="">{headline}</h2>
                    <h3 style={{ fontSize: "19px" }}>{date}</h3>
                </div>
            </div>
        </div>
    )
}
