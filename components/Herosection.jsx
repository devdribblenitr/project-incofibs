import Countdownclock from "./Countdownclock";
import React, { Component } from 'react';
import Herosectioncard from "./Herosectioncard";
import { Carousel } from 'react-responsive-carousel';
import CarouselCards from "./CarouselCards";

const HeroSection = () => {
  return (
    <div className="herosection_new">
      <div className="absolute CarouselCards w-full">
        <CarouselCards />
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
