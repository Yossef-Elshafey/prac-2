"use client";
import Image from "next/image";
import React from "react";
import { CustomButton } from "..";

type AboutSectionProps = {
  headingContent: string;
  paragraphContent: string;
};

const AboutSections = ({
  headingContent,
  paragraphContent,
}: AboutSectionProps) => {
  return (
    <div className="flex flex-col items-baseline gap-y-8">
      <h3 className="text-mainText text-5xl ">{headingContent}</h3>
      <Image
        src="/spoon.png"
        alt="spoon"
        width={30}
        height={30}
        style={{ width: "auto", height: "auto" }}
      />
      <p className="text-gray-500">{paragraphContent}</p>
      <CustomButton
        customName="Know More"
        customEffect="custom-button-bg-effect"
      />
    </div>
  );
};

function About() {
  return (
    <section className="xl:h-screen relative flex items-center justify-center px-2 xl:px-0 ">
      <Image src="/bg.png" alt="bg" fill priority={true} className="-z-10 " />
      <Image
        src="/G.png"
        alt="g"
        width={200}
        height={200}
        className="absolute inset-x-1/2 -translate-x-1/2 -z-10"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="container mx-auto relative    grid grid-cols-1 xl:grid-cols-3 place-items-center ">
        <AboutSections
          headingContent="About us"
          paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
          eu proin mauris et."
        />
        <Image
          src="/knife.png"
          alt="knife"
          width={50}
          height={50}
          sizes="(max-width: 768px) 50vh, "
          style={{
            width: "auto",
            height: "auto",
            maxHeight: "600px",
          }}
        />
        <AboutSections
          headingContent="Our History"
          paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
          eu proin mauris et."
        />
      </div>
    </section>
  );
}

export default About;
