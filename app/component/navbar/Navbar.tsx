"use client";
import Image from "next/image";
import React from "react";
import { FinalLinks } from "..";
import { useState } from "react";

function Navbar() {
  const [showMobNavbar, setShowMobNavbar] = useState(false);

  const clickHandle = (): void => {
    setShowMobNavbar(!showMobNavbar);
    if (!showMobNavbar) {
      document.body.style.overflow = "hidden"; // removing scroll bars and prevent user from scrolling
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav className="text-white px-3 xl:px-16 py-3 flex justify-between items-center  ">
      <Image
        src="/gericht.png"
        alt="logo"
        width="150"
        height="100"
        priority={true}
        style={{ width: "auto", height: "auto", maxWidth: "200px" }}
      />
      <div className="flex flex-col xl:hidden" onClick={clickHandle}>
        <span className="bar-row"></span>
        <span className="bar-row ml-2"></span>
        <span className="bar-row "></span>
      </div>
      {/* mobile */}
      {showMobNavbar && (
        <div className={`navbar-overlay navbar-overlay-layout `}>
          <div onClick={clickHandle} className="absolute top-8 right-8">
            <span className="w-5 h-1 bg-white  rotate-[60deg] block"></span>
            <span className="w-5 h-1 bg-white  rotate-[120deg] block"></span>
          </div>
          <FinalLinks />
        </div>
      )}
      {/* Not mob for sure idiot */}
      <ul className="gap-x-5 relative hidden xl:flex">
        <FinalLinks />
      </ul>

      <div className="relative hidden xl:block">
        <input
          type="text"
          placeholder="Search website"
          className="bg-transparent border-b py-4 px-2 outline-none"
        />
      </div>
    </nav>
  );
}

export default Navbar;
