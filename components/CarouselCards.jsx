import { Carousel } from 'react-responsive-carousel';

const CarouselCards = () => {
  return (
        <Carousel infiniteLoop={true} interval={3000} autoPlay={true} renderIndicator={false} axis='horizontal' showArrows={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src="./nitr/retangle01.png"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                </div>
                <div>
                    <img src="./nitr/retangle02.png"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                   
                </div>
                <div>
                    <img src="./nitr/retangle03.png"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                    
                </div>
                <div>
                    <img src="./nitr/retangle04.png"
                    className="d-block w-100 h-screen lg:w-full lg:h-screen " />
                    
                </div>
            </Carousel>
  )
}

export default CarouselCards