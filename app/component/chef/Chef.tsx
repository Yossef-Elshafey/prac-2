"use client";

import Image from "next/image";

function Chef() {
  return (
    <section className="">
      <div className="xl:h-[120vh] relative flex items-center  ">
        <Image
          src="/bg.png"
          alt="bg"
          fill
          priority
          className="-z-10 w-auto h-auto"
        />
        <div className="container mx-auto px-2 lg:px-0 ">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 items-center gap-x-8">
            <div>
              <Image
                src="/chef.png"
                alt="chef"
                width={600}
                height={600}
                className="xl:w-auto xl:h-auto"
              />
            </div>
            <div className="flex flex-col gap-y-8 items-baseline text-white ">
              <div>
                <h5 className="font-primary text-2xl">Chef's Word</h5>
                <Image
                  src="/spoon.png"
                  alt="spoon"
                  width={30}
                  height={30}
                  style={{ width: "auto", height: "auto" }}
                />
                <h3 className="capitalize font-primary text-5xl text-mainText">
                  What we believe in
                </h3>
              </div>
              <p className="w-full lg:w-2/3  text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi laborum, modi minus sit id consequuntur numquam
                similique quod, et natus tenetur iure, veritatis commodi
                aspernatur error saepe consectetur est ab.
              </p>
              <div>
                <h5 className="text-mainText text-2xl">Kevin Luo</h5>
                <p>Chef & Founder</p>
              </div>
              <Image
                src="/sign.png"
                alt="sign"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chef;
