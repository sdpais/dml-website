import smcarousel1 from '../assets/banners/Banner 1 - quarter.png'
import smcarousel2 from '../assets/banners/Banner 2 - quarter.png'
import smcarousel3 from '../assets/banners/Banner 3 - quarter.png'
import smcarousel4 from '../assets/banners/Banner 4 - quarter.png'

import CarouselItem from "./CarouselItem";

const Carousel = () => {
  let slides = [smcarousel1,smcarousel2,smcarousel3,smcarousel4];
  return (
    <div className=' m-4'>
      <CarouselItem>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </CarouselItem>
    </div>
  )
}

export default Carousel
