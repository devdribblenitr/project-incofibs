import EventCard from "../components/EventCard"
import PastEvents from "../components/PastEvents"
import PastKeynoteSpeakers from "../components/PastKeynoteSpeakers"

export default function Events() {
    return (
        <div className="bg-gray-200 px-2">
            <div className=" mx-auto w-full lg:w-5/6">
                {/* <h1 className="text-6xl font-semibold text-center py-6">Events</h1>
                <h2 className="text-4xl font-semibold bg-sky-500 py-4 px-2 rounded-lg text-white text-center">Upcoming events
                </h2> */}
                {/* <div className="py-6 mx-auto" style={{ maxWidth: "900px" }}>
                    <EventCard></EventCard>
                </div> */}
                
                <PastKeynoteSpeakers></PastKeynoteSpeakers>
                <PastEvents></PastEvents>
            </div>
        </div>
    )
}