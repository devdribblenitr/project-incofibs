import EventCard from "../components/EventCard"
import Navbar from "../components/Navbar"
import PastEvents from "../components/PastEvents"
import Head from 'next/head'
import PastKeynoteSpeakers from "../components/PastKeynoteSpeakers"
import Footer from "../components/Footer";
import ToBeUpdated from "../components/ToBeUpdated"
import { useState } from "react"
import Speakers from "../components/Speakers"
// import speakersList from "../components/speakersList"
import speakersList from "../components/speakersNationalList1"
// import speakerInternationalsList from "../components/speakerInternationalsList"
import speakerInternationalsList from "../components/speakerInternationalsList1"


export default function Events() {
    const [show, setShow] = useState(true);
    const pastEvent = [
        {
            image: "https://images.pexels.com/photos/12303537/pexels-photo-12303537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Conference on Genetically Modified Organisms",
            desc: "A conference on GMO, their implications and ways to reduce concerns",
            venue: "Rajendra Mishra Hall",
            date: "12/01/2023"
        },
        {
            image: "https://images.pexels.com/photos/12303537/pexels-photo-12303537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Conference on Genetically Modified Fishes",
            desc: "A conference on GMO, their implications and ways to reduce concerns",
            venue: "Rajendra Mishra Hall",
            date: "12/01/2023"
        },
        {
            image: "https://images.pexels.com/photos/12303537/pexels-photo-12303537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Conference on Genetically Modified Seeds",
            desc: "A conference on GMO, their implications and ways to reduce concerns",
            venue: "Rajendra Mishra Hall",
            date: "12/01/2023"
        },
        
    ]

    const keynoteSpeakers = [
        {
            name: "Isaac Newton",
            designation: "HOD Mechanical Department, NIT Rourkela",
            image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Nicolas Tesla",
            designation: "HOD Electrical department, IIT Roorkee",
            image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Albert Einstein",
            designation: "HOD Mechanical Department, IISER Kolkata",
            image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Charles Babbage",
            designation: "HOD Computer Science department",
            image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <> 
        <Head>
        <title>InCoFIBS | NIT Rourkela | Events</title>

        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        {/* *********** Meta SEO***********  */}
        <meta property="og:title" content="InCoFIBS-2023 will be held from 2nd to 4th February 2023, providing a platform for global experts and researchers to exchange ideas and recent advances in the various fields of Biological Sciences" />
        <meta name="keywords"  content="incofibsnitr,incofibsnitrkl,incofibsnitrourkela, incofibs,incofibs nitr, fest nitr, fest, festnitr, festnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,LS nitrkl, life science, bio,bioscience, science, science nitr" />
        <meta name="description" content="InCoFIBS 2023 International Conference" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://incofibsnitr.com/" />
        <meta property="og:image" content="https://incofibsnitr.com/logoBranding.png" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" /> <meta name="description" content="InCoFIBS 2023" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
            <div className="bg-gray-200">
            <Navbar />
            {show ? <>
                {/* <div className="px-2 lg:px-0 mx-auto w-full lg:w-5/6 md:py-6">
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Keynote Speakers" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Speakers and faculty" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastEvents events={pastEvent}></PastEvents>
                </div>
                </div> */}
                <div className="w-full bg-gray-200 mt-0 px-12 py-12 mx-6 ml-0">
                    <div>
                        <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-4xl text-[#102c3a] font-bold">
                            International Speakers List
                        </h1>
                        <div className="w-32 h-1 bg-[#102c3a]  mx-auto my-3"></div>
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 comm:gap-x-16 gap-y-0 gap-x-4 place-content-center">
                        {speakerInternationalsList.map((data) => {
                        return (
                            <Speakers
                                key={data.id}
                                name={data.name}
                                designation1={data.designation1}
                                designation2={data.designation2}
                            />
                        );
                        })}
                    </div>
                </div>
            </> : <ToBeUpdated />}
            {show ? <>
                {/* <div className="px-2 lg:px-0 mx-auto w-full lg:w-5/6 md:py-6">
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Keynote Speakers" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Speakers and faculty" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastEvents events={pastEvent}></PastEvents>
                </div>
                </div> */}
                <div className="w-full bg-gray-200 mt-0 px-12 pb-12 mx-6 ml-0">
                    <div>
                        <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-4xl text-[#102c3a] font-bold">
                            National Speakers List
                        </h1>
                        <div className="w-32 h-1 bg-[#102c3a]  mx-auto my-3"></div>
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 comm:gap-x-16 gap-y-0 gap-x-4 place-content-center">
                        {speakersList.map((data) => {
                        return (
                            <Speakers
                                key={data.id}
                                name={data.name}
                                designation1={data.designation1}
                                designation2={data.designation2}
                            />
                        );
                        })}
                    </div>
                </div>
            </> : <ToBeUpdated />}
            
            <Footer />
        </div>
        </>
    )
}