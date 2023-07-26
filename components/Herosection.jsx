import Countdownclock from "./Countdownclock";
import React from 'react';
import CarouselCards from "./CarouselCards";

const HeroSection = () => {
  return (
    <div className="herosection_new">
      <div className="absolute CarouselCards w-full">
        <CarouselCards />
        <div className='herosection_marquee'>
          <marquee behavior="scroll" direction="left">
            {/* Last date of Abstract Submission and Registration
            deadline soon to be announced */}
            {/* extended till December 31st */}
The Conference date has been shifted to 5th - 7th October, 2023. Abstract submission and registration will remain continue till further announcement                   |                   As part of our Conference INCOFIBS 2023 going to be Organized during 05-07 October 2023, we are accepting full-length papers for the special issue of <strong>GEOMICROBIOLOGY JOURNAL- Special Issue on Applications of Microorganisms in Advanced Geomicrobiological and Biotechnological Exploration</strong>. The various thematic areas can be found on the page. The acceptance of papers is through evaluation after a peer review assigned by the journal as per the standard process.<a href="https://think.taylorandfrancis.com/special_issues/geomicrobiology-journal/?utm_source=TFO&utm_medium=cms&utm_campaign=JPG15743" target="_blank" rel="noopener noreferrer">Click here to submit</a>
          </marquee>
        </div>
      </div>

      <div className="absolute z-100 lg:flex lg:flex-col lg:h-screen">
        <div className="countDownCards flex items-end lg:mb-20 xl:pb-44 h-3/4">
          <Countdownclock />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
