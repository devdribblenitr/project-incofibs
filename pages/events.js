import EventCard from "../components/EventCard"
import Navbar from "../components/Navbar"
import PastEvents from "../components/PastEvents"
import Footer from "../components/Footer.jsx";
import Head from 'next/head'
import PastKeynoteSpeakers from "../components/PastKeynoteSpeakers"
import Footer from "../components/Footer";

export default function Events() {
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
            <div className="px-2 lg:px-0 mx-auto w-full lg:w-5/6 md:py-6">
                {/* <h1 className="text-6xl font-semibold text-center py-6">Events</h1>
                <h2 className="text-4xl font-semibold bg-sky-500 py-4 px-2 rounded-lg text-white text-center">Upcoming events
                </h2> */}
                {/* <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                    <EventCard></EventCard>
                </div> */}
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Keynote Speakers" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastKeynoteSpeakers heading="Speakers and faculty" speakers={keynoteSpeakers}></PastKeynoteSpeakers>
                </div>
                <div className="bg-slate-100">
                <PastEvents events={pastEvent}></PastEvents>
                </div>
            </div>
            <Footer />
        </div>
        <Footer />
        </>
    )
}