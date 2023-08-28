"use client";
import Link from "next/link";

import { useState } from "react";
import { Arrow } from "..";

const Links = ({ linkName, isArrow, toggleMenu, linkSections }: LinksProps) => {
  const [isShow, setIsShow] = useState(false);
  const showDropMenuMob = (): void => {
    setIsShow(!isShow);
  };

  return (
    <li
      className="text-mainText relative p-2 group/parent" // p-2 helps hover to still active
    >
      <Link
        onClick={showDropMenuMob}
        // if there is drop down menu the navigates gonna be inside it but the parent link rids you to home
        href={
          toggleMenu
            ? "/"
            : linkName === "home"
            ? "/"
            : "/" + linkName.replaceAll(" ", "-")
        }
      >
        {linkName.toUpperCase()}{" "}
        {isArrow && (
          <Arrow
            customStyles={`border-mainText h-2 w-2 ${
              isShow ? "rotate-[225deg]" : "rotate-[135deg]"
            } group-hover/parent:xl:rotate-[225deg]`}
          />
        )}
      </Link>
      {/* Append drop down menu  */}
      {toggleMenu && (
        <ul
          className={`xl:w-80 px-3 py-6 relative z-10 ${
            isShow ? "block xl:hidden" : "hidden"
          } xl:absolute xl:top-10 bg-black/10 group-hover/parent:xl:block rounded-md animate-downMenu  `}
        >
          {linkSections?.map((e, i) => {
            return (
              <li
                key={i}
                className="capitalize p-2 text-white hover:text-mainText transition "
              >
                <Link
                  href={"/" + e.toLowerCase().trim().replaceAll(" ", "-")}
                  className="flex items-center gap-x-4 group/menuLink"
                >
                  <span className=" hidden w-0 h-0 bg-mainText xl:block group-hover/menuLink:w-4 group-hover/menuLink:h-[2px] transition-all"></span>
                  {e}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

// final links gonna be use in desktop && mobile
const FinalLinks = () => {
  const pageSections: string[] = ["About us ", "Services", "Team", "FAQ"];
  const blogSections: string[] = [
    "Two Column blog",
    "three column blog",
    "left side bar grid 1",
  ];
  return (
    <>
      <Links linkName="home" />
      <Links
        linkName="pages"
        isArrow={true}
        toggleMenu={true}
        linkSections={pageSections}
      />
      <Links linkName="contact us" />
      <Links
        linkName="blog"
        isArrow={true}
        toggleMenu={true}
        linkSections={blogSections}
      />
    </>
  );
};

export default FinalLinks;
