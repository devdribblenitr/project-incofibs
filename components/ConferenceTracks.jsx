import React from 'react'
import IndividualTrack from './IndividualTrack';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const arr1 = [
        "Biochemistry and Cancer Biology",
        "Medical, Environmental and Molecular Microbiology",
        "Bioenergy, Biomaterials and Tissue Engineering",
        "Structural Biology and Bioinformatics",
        "Genomics and Proteomics",
        "Environmental Sciences and Marine Biology"
    ]
    const arr2 = [
        "Developmental Biology and Neurobiology",
        "Immunology,Disease Biology and Vaccine Approaches",
        "Stem Cell and Regenerative medicine",
        "Pharmaceutical Science and Nanotechnology",
        "Plant Molecular Biology and Genetics",
        "Food and Nutrition Sciences"
    ]
    return (
        <div id='tracks' style={{ backgroundImage: "linear-gradient(0deg, rgba(18,55,73,0.75), rgba(18,55,73,0.75)), url(retangle98.png)", backgroundSize: "cover", backgroundAttachment: 'fixed' }} className="py-16">
            <div className="heading aboutinco pb-12">
                <h1 className='text-4xl text-center playfair pb-3 heading_title text-white'>Conference Tracks</h1>
            </div>
            <div className='flex justify-center flex-wrap'>
                <IndividualTrack track={arr1}></IndividualTrack>
                <IndividualTrack track={arr2} arr2={false}></IndividualTrack>
            </div>
            <h1 className='text-4xl text-center playfair pb-3  text-white' style={{ marginTop: "30px" }}>Institute announcement</h1>
            <div className="flex justify-center">
                <button style={{ color: "#ffff", backgroundColor: 'rgb(232 76 61)', borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "75px", width: "300px" }} className="button_cards2 mt-6"
                    onClick={() => {
                        router.push('https://website.nitrkl.ac.in/Home/Events/EventDetails.aspx?hfjghfj=NTA0NTk=-Jmfz7LWrU/g=&fgkyu4y=Q0VQ-MPz1h3M047U=');
                    }}
                >Click here</button>
            </div>
        </div>
    )
}
