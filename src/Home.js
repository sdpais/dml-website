import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import HomeTopSection from "./components/HomeTopSection";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";

function Home() {

  return (
    <div className="container mx-auto divide-y">
      <div  className="flex flex-col ">
        <Navbar />
      </div>
      <div className="flex flex-col items-center mx-auto">
      <div  className="inline w-full justify-center">
        <HomeTopSection />
      </div>
      <div  className="inline w-full justify-center">
        <div className="w-[60%] m-auto pt-11">
          <Carousel />
        </div>
      </div>
      <div  className="inline w-full justify-center">
        <WhatWeDo />
      </div>
      <div  className="inline w-full justify-center">
        <Contact />
      </div>
      </div>
    </div>
  );
}

export default Home;
