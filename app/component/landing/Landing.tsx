import Image from "next/image";
import { Slider } from "..";

function Landing() {
  const shuffle = [
    { heading: " food that surprize you ", img: "/welcome.png" },
    { heading: "the key to fine dinning", img: "/04.png" },
    { heading: "reserve your table today", img: "/02.png" },
  ];

  return (
    <header className="relative xl:h-[calc(100vh-80px)]  py-8 px-2 xl:px-0">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 xl:min-h-full xl:max-h-full ">
        <Slider content={shuffle} />
      </div>
    </header>
  );
}

export default Landing;
