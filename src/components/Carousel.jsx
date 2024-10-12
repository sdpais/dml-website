import { useState } from "react";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import smcarousel1 from '../assets/banners/Banner 1 - quarter.png'
import smcarousel2 from '../assets/banners/Banner 2 - quarter.png'
import smcarousel3 from '../assets/banners/Banner 3 - quarter.png'
import smcarousel4 from '../assets/banners/Banner 4 - quarter.png'

const Carousel = () => {
//export default function Carousel({ slides }) {
  let slides = [
    smcarousel1,
    smcarousel2,
    smcarousel3,
    smcarousel4,
  ];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200">
      {/* className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl"> */}
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
      </div>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200">
        {/* className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl"> */}
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default Carousel