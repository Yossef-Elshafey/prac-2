"use client";
import Image from "next/image";
import React, { useState } from "react";

function Menu() {
  const [dir, setDir] = useState("");
  const menuBackground = ["/01-1.jpg", "/food.png", "/Dessert.png"];

  function targetIndex(i: number): string {
    return menuBackground[i];
  }

  const handleHover = (e: React.MouseEvent<HTMLLIElement>) => {
    const { count }: any = e.currentTarget.dataset;

    currentLIonShow();
    e.currentTarget.classList.add("menu_ul_li_before");
    setDir(targetIndex(count)); //count is undefined bcs event doesn't began yet, i don't know how to fix !
  };

  function currentLIonShow() {
    const lis = document.querySelectorAll(".menu_ul_li");
    lis.forEach((li) => {
      li.classList.remove("menu_ul_li_before");
    });
  }
  return (
    <section className="py-6 xl:py-0">
      <div className="h-screen relative">
        <Image
          src={dir ? dir : targetIndex(0)}
          alt="dessert"
          fill
          className="-z-10 animate-delayedOpacity"
          key={dir}
          sizes="(max-width: 768px) 50vw, 33vw (max-width: 1200px)  100vw,"
        />
        <div className="container mx-auto">
          <ul className="px-2 sm:px-0 text-white h-screen flex flex-col justify-center gap-y-10 ">
            <li
              data-count={0}
              onMouseEnter={handleHover}
              className="menu_ul_li"
            >
              Bar Menu
            </li>
            <li
              data-count={1}
              onMouseEnter={handleHover}
              className=" menu_ul_li"
            >
              Food Menu
            </li>
            <li
              data-count={2}
              onMouseEnter={handleHover}
              className="menu_ul_li"
            >
              Dessert Menu
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menu;
