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
        "Biochemistry and Cancer Biology",
        "Medical, Environmental and Molecular Microbiology",
        "Bioenergy, Biomaterials and Tissue Engineering",
        "Structural Biology and Bioinformatics",
        "Genomics and Proteomics",
        "Environmental Sciences and Marine Biology"
    ]
    const arr2=[
        "Developmental Biology and Nerurobiology",
        "Immunology,Disease Biology and Vaccine Approaches",
        "Stem Cell and Regenerative medicine",
        "Pharmaceutical Science and Nanotechnology",
        "Plant Molecular Biology and Genetics",
        "Food and Nutrition Sciences"
    ]
  return (
    <div id='tracks' style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(retangle98.png)", backgroundSize: "cover", backgroundAttachment: 'fixed'}} className="py-16">
        <div className="heading aboutinco pb-12">
            <h1 className='text-4xl text-center playfair pb-3 heading_title text-white'>Conference Tracks</h1>
        </div>
        <div className='flex justify-center flex-wrap'>
            <IndividualTrack track={arr1}></IndividualTrack>
            <IndividualTrack track={arr2} arr2={false}></IndividualTrack>
        </div>
    </div>
  )
}
