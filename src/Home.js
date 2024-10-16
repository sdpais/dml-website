import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import HomeTopSection from "./components/HomeTopSection";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";

function Home() {

  return (
    <div className="container">
      <div  className="flex flex-col ">
        <Navbar />
      </div>
      <div  className="container w-full justify-center">
        <HomeTopSection />
      </div>
      <div  className="container w-full justify-center">
        <div className="w-[60%] m-auto pt-11">
          <Carousel />
        </div>
      </div>
      <div  className="container w-full justify-center">
      <WhatWeDo />
      </div>
      <div className="h-96 w-full">&nbsp;spacer</div>
      <div  className="container justify-center">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
