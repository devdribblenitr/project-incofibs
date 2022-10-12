import React from 'react'

export default function DateCard({ headline, date }) {
    return (
        <div className='py-4'>
            <div className='flex bg-white p-2 rounded-lg' style={{ boxShadow: "0px 14px 28px rgb(0,0,0,0.25" }} >
                <div style={{ width: "69px", height: "69px" }}>
                    <img src="/Frame.svg" />
                </div>
                <div className='w-full pl-2'>
                    <h2 style={{ fontSize: "25px" }}>{headline}</h2>
                    <h3 style={{ fontSize: "19px", color: "#474747" }}>{date}</h3>
                </div>
            </div>
        </div>
    )
}
