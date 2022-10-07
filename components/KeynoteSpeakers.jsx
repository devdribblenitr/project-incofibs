import Speaker from "./Speaker"

export default function KeynoteSpeakers(){
    return(
        <div className="border-t-2 ">
            <h1 className="text-2xl font-semibold text-center py-4">Keynote speakers</h1>
            <div className="flex flex-wrap">
                <Speaker></Speaker>
                <Speaker></Speaker>
                <Speaker></Speaker>
            </div>
        </div>
    )
}