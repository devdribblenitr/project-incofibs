import React from "react";
import Herosectioncard from "../components/Herosectioncard";
import Carousel from "react-bootstrap/Carousel";
import Countdownclock from "../components/Countdownclock";

const HeroSection = () => {
  return (
    <div className="">
      <div className="fixed w-full">
        <Carousel controls={false} fade={true} indicators={false}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen "
              src="https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen"
              src="https://cdn.wallpapersafari.com/74/34/921CI3.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 h-screen lg:w-full lg:h-screen"
              src="https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="absolute z-100 lg:flex lg:flex-col lg:h-screen">
        

        <div className="mt-14 mb-4 pb-2 flex items-end lg:mb-20 xl:pb-44 h-3/4">
          <Countdownclock />
          </div>
          <div className="flex justify-center items-end  xl:mt-8 ">
          <Herosectioncard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
