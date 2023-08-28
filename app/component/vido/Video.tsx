"use client";

import Image from "next/image";
import { useState } from "react";

function Video() {
  const [isOverlay, setIsOverlay] = useState<boolean>(false);
  const handleVideoPart = () => {
    setIsOverlay(!isOverlay);
    if (!isOverlay) {
      document.body.style.overflow = "hidden"; // removing scroll bars and prevent user from scrolling
    } else {
      document.body.style.overflow = "visible";
    }
  };
  return (
    <section className="py-12 ">
      <div className=" relative h-[300px] xl:max-h-[800px] xl:min-h-[800px] flex items-center justify-center">
        <Image src="/1-6-1536x610.png" alt="bg-vid" fill className="-z-10" />
        <Image
          src="/index-media-cover-art-play-button-overlay-5.png"
          alt="runner"
          width={80}
          height={80}
          className="bg-transparent cursor-pointer"
          onClick={handleVideoPart}
        />
        <div
          className={`${
            isOverlay ? "navbar-overlay" : "hidden"
          } flex items-center justify-center`}
        >
          <div
            // video is running in the background after this thing looks like X mark clicked
            // so target the video and stop it in the same on click function which it takes ,  or with false value of isOverlay
            onClick={handleVideoPart}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <span className="w-5 h-1 bg-white  rotate-[60deg] block"></span>
            <span className="w-5 h-1 bg-white  rotate-[120deg] block"></span>
          </div>
          <video controls width="800" height="600">
            <source src="/meal.mp4"></source>
            There is an issue with your browser
          </video>
        </div>
      </div>
    </section>
  );
}

export default Video;
