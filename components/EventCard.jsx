import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeynoteSpeakers from './KeynoteSpeakers';

export default function EventCard() {
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <div>
                    <h3 className="text-3xl font-semibold text-blue-800">Conference on Artificial Intelligence</h3>
                    <p className="py-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam perferendis modi dolorem facere laudantium quas officia, atque sed eaque quis, nam nemo! Ipsam voluptatem dolores consequatur eius. Asperiores, nemo!</p>
                </div>
                <div>
                    <ul className="flex flex-col md:w-fit">
                        <li className="px-2 py-2 md:pl-0">
                            <div className="bg-sky-500 py-2 text-white rounded-md px-4">
                                <CalendarMonthIcon></CalendarMonthIcon>
                                19th October, 2022
                            </div>

                        </li>
                        <li className="px-2 py-2 md:pl-0">
                            <div className="bg-gray-300  py-2  rounded-md px-4">
                                <LocationOnIcon></LocationOnIcon>
                                BBA hall, Academic area, NIT Rourkela
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <div className='mx-auto w-fit py-8'>
                <img src="https://images.pexels.com/photos/12303537/pexels-photo-12303537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{height: "400px"}} />
            </div>
        </div>
        <div>
            <KeynoteSpeakers></KeynoteSpeakers>
        </div>
        </>
    )
}