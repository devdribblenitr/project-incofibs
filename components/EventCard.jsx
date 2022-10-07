import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventCard(){
    return(
        <div>
            <div>
            <h3 className="text-3xl font-semibold text-sky-600">Conference on Artificial Intelligence</h3>
            <p className="py-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam perferendis modi dolorem facere laudantium quas officia, atque sed eaque quis, nam nemo! Ipsam voluptatem dolores consequatur eius. Asperiores, nemo!</p>
            </div>
            <div>
                <ul className="">
                    <li className="px-2 py-2">
                        <div className="bg-sky-500 py-2 text-white rounded-md px-2">
                            <CalendarMonthIcon></CalendarMonthIcon>
                        19th October, 2022
                        </div>
                        
                    </li>
                    <li className="px-2 py-2">
                        <div className="bg-gray-300  py-2  rounded-md px-2">
                            <LocationOnIcon></LocationOnIcon>
                        BBA hall, Academic area, NIT Rourkela
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}