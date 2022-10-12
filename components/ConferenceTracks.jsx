// import React from 'react'

// function ConferenceTracks() {
//   return (
//     <div>ConferenceTracks</div>
//   )
// }

// export default ConferenceTracks

import React from 'react'
import IndividualTrack from './IndividualTrack'
export default function ConferenceTracks() {
    const arr1=[
        "Innate-adaptive immune crosstalk",
        "Allergy and Autoimmunity",
        "Infection and Immunity",
        "Tumour Immunology",
        "Immunotherapy"
    ]
    const arr2=[
        "Gut Microbiome and Immunity",
        "Vaccinology and COVID-19",
        "Transplant Immunology",
        "Immuno-metabolism",
        "Immunotech update"
    ]
  return (
    <div style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(Rectangle99.png)", backgroundSize: "cover"}} className="py-16">
        <h1 className='text-4xl text-center pb-12 text-white'>CONFERENCE TRACKS</h1>
        <div className='flex justify-center flex-wrap'>
            <IndividualTrack track={arr1}></IndividualTrack>
            <IndividualTrack track={arr2}></IndividualTrack>
        </div>
    </div>
  )
}
