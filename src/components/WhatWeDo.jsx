import React from 'react'
import {data} from '../data/data.js'

const WhatWeDo = () => {
  const whatwedo = data;
  
  {/* container for the content */}
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {/* Grid Item */}
    {whatwedo.map((item, index) => (
      <div 
        key={index} 
        style={{backgroundImage: `url(${item.image})`}}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex bg-blue-300 bg-contain bg-no-repeat h-[400px] bg-center justify-center text-center items-center mx-auto content-div "
        >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-50 group-hover:bg-gray-200 ">
                <span className="text-2xl font bold text-gray-800 tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                bg-white text-gray-700 font-bold text-lg"
                    >
                      Find out more
                    </button>
                  </a>

                </div>
              </div>
      </div>
    ))}
  </div>
}
export default WhatWeDo