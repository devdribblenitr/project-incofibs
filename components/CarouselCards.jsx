import { Carousel } from 'react-responsive-carousel';

const CarouselCards = () => {
  return (
        <Carousel infiniteLoop={true} interval={3000} autoPlay={true} renderIndicator={false} axis='horizontal' showArrows={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src="https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                </div>
                <div>
                    <img src="https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                   
                </div>
                <div>
                    <img src="https://cdn.wallpapersafari.com/74/34/921CI3.jpg"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                    
                </div>
            </Carousel>
  )
}

export default CarouselCards