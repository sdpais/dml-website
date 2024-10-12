import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="container">
      <div  className="flex flex-col ">
        <Navbar />
      </div>
      <div  className="container w-full justify-center">
        <Home />
      </div>
      <div  className="container w-full justify-center">
        <div className="w-[60%] m-auto pt-11">
          <Carousel />
        </div>
      </div>
      <div  className="container w-full justify-center">
      <WhatWeDo />
      </div>
      <div  className="container justify-center">
        <Contact />
      </div>
    </div>
  );
}

export default App;
