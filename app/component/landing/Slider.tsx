"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Arrow, CustomButton } from "..";

function Slider({ content }: { content: SliderProps }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateIndex(): void {
    setCurrentIndex(currentIndex + 1);

    if (currentIndex === content.length - 1) {
      setCurrentIndex(0);
    }
  }

  function decreaseIndex() {
    setCurrentIndex(currentIndex - 1);

    if (currentIndex === 0) {
      setCurrentIndex(content.length - 1);
    }
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      updateIndex();
    }, 5000);

    return () => clearTimeout(handler);
  }, [currentIndex]);

  return (
    <>
      <div className="row-1 flex flex-col items-baseline justify-center gap-y-8 ">
        <div>
          <h4 className="font-primary text-3xl text-white font-bold ">
            Chase the New Flavour
          </h4>
          <Image
            src="/spoon.png"
            alt="spoon"
            width={30}
            height={30}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <h2
          key={content[currentIndex].heading} // key is necessary hack to append the animation on each re-render
          className="text-5xl xl:text-9xl font-primary  animate-landing-content text-mainText "
        >
          {content[currentIndex].heading}
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae
          perferendis quaerat, officia repudiandae molestias. Eos qui deserunt
          ex omnis voluptatem ad nesciunt velit necessitatibus fuga nemo.
          Commodi, animi fugit!
        </p>
        <CustomButton
          customName="Explore More"
          customEffect="custom-button-before"
        />
      </div>
      <div className="row-2 relative xl:w-auto xl:h-auto h-[300px] select-none  ">
        <div className="right-arrow-wrapper group " onClick={updateIndex}>
          <Arrow customStyles="rotate-[135deg] w-4 h-4 " />
        </div>
        <div className="left-arrow-wrapper group" onClick={decreaseIndex}>
          <Arrow customStyles="rotate-[315deg] w-4 h-4 " />
        </div>

        <Image
          key={content[currentIndex].img}
          src={content[currentIndex].img}
          alt="landing"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="max-h-fit min-h-fit"
        />
      </div>
    </>
  );
}

export default Slider;
