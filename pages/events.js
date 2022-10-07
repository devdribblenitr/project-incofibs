import EventCard from "../components/EventCard"

export default function Events(){
    return(
        <div className="bg-gray-100 px-2">
            <h1 className="text-6xl font-semibold text-center py-6">Events</h1>
            <h2 className="text-4xl font-semibold bg-sky-500 py-4 px-2 rounded-lg text-white">Upcoming events</h2>
            <div className="py-6">
                <EventCard></EventCard>
            </div>
        </div>
    )
}