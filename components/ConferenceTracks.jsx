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
    <div id='tracks' style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(retangle98.png)", backgroundSize: "cover", backgroundAttachment: 'fixed'}} className="py-16">
        <div className="heading aboutinco pb-12">
            <h1 className='text-4xl text-center playfair pb-3 heading_title text-white'>Conference Tracks</h1>
        </div>
        <div className='flex justify-center flex-wrap'>
            <IndividualTrack track={arr1}></IndividualTrack>
            <IndividualTrack track={arr2}></IndividualTrack>
        </div>
    </div>
  )
}
