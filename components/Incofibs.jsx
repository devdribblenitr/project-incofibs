import React from 'react';
import gig from './gig.css';

const Incofibs = () => {
    return ( 
    <>
    <div className="mt-28 ml-16 sm:ml-0  flex flex-col sm:flex-row justify-center items-center space-default space-y-10 space-x-10">
    {/* <div className="diamond-content"> */}
        <div class="diamond-shape rounded-3xl h-[250px] w-[250px]">
            
            <div class="bg"><img className="h-[250px] w-[250px]" src="https://res.cloudinary.com/dzbax077h/image/upload/v1665689632/WhatsApp_Image_2022-10-14_at_1.03.32_AM_sgmtyi.jpg" class="img-fluid"/></div>
        </div>
    {/* </div> */}
    <div className='bg-blue-900 h-[400px] w-[400px] rounded-3xl -rotate-45 z-10 '>
        <h1 className='text-3xl font-serif text-red-500 text-center rotate-45 mt-8 ml-56'>ABOUT CONFERENCE</h1>
        <p className='text-center text-white text-lg rotate-45 pr-4 mt-3'> elit. Laborum id laboriosam fuga sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet id nam accusantium molestiae quasi. Voluptate animi aliquam odio magnam voluptates et! Eum labore nesciunt facere illo ea. Commodi, eius repellat?</p>
    </div>
    {/* <div className="diamond-content"> */}
    <div class="diamond-shape rounded-3xl h-[250px] w-[250px]">
        <div class="bg"><img className="h-[250px] w-[250px]" src="https://res.cloudinary.com/dzbax077h/image/upload/v1665689632/WhatsApp_Image_2022-10-14_at_1.03.32_AM_sgmtyi.jpg" class="img-fluid"/></div>
    </div>
    {/* </div> */}
    </div>
   
    </>
     );
}
 
export default Incofibs;