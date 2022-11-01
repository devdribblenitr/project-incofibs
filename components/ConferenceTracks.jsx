import React from 'react'
import IndividualTrack from './IndividualTrack'
// 1) , 
// 2) , 
// 3) , 
// 4)  
// 5)  
// 6) , 
// 7) , 
// 8) , 
// 9) , 
// 10)  
// 11) 
export default function ConferenceTracks() {
    const arr1=[
        "Development and Neurobiology",
        "Cancer Biology",
        "Structural Biology and Bioinformatics",
        "Genomics and Proteomics",
        "Food and Nutrition Sciences",
        "Plant Molecular Biology"
    ]
    const arr2=[
        "Environmental Sciences and Marine Biology",
        "Disease Biology and Vaccine Approaches",
        "Bioenergy, Biomaterials and Tissue Engineering",
        "Stem Cell and Regenerative medicine",
        "Pharmaceutical Science & Nanotechnology",
        "Plant Molecular Biology"
    ]
  return (
    <div id='tracks' style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(retangle98.png)", backgroundSize: "cover", backgroundAttachment: 'fixed'}} className="py-16">
        <div className="heading aboutinco pb-12">
            <h1 className='text-4xl text-center playfair pb-3 heading_title text-white'>Conference Tracks</h1>
        </div>
        <div className='flex justify-center flex-wrap'>
            <IndividualTrack track={arr1}></IndividualTrack>
            <IndividualTrack track={arr2} arr2={true}></IndividualTrack>
        </div>
    </div>
  )
}
