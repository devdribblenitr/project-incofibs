// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
 import Countdownclock from "../components/Countdownclock";
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Herosectioncard from "../components/Herosectioncard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="">
      <div className="">
        <Carousel infiniteLoop={true} interval={3000} autoPlay={true}renderIndicator={false} axis='horizontal' showArrows={false} showIndicators={false} showStatus={false}>
                <div>
                    <Image src="https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " height="100%" width="100%" alt="image"/>
                </div>
                <div>
                    <Image src="https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " height="100%" width="100%" alt="image" />
                   
                </div>
                <div>
                    <Image src="https://cdn.wallpapersafari.com/74/34/921CI3.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " height="100%" width="100%" alt="image" />
                    
                </div>
            </Carousel>
      </div>

      <div className="">
        

        <div className="">
          <Countdownclock />
          </div>
          {/* <div className="flex justify-center items-end  xl:mt-8 ">
          <Herosectioncard />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
