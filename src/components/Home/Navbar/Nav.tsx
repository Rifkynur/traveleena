"use client";
import React, { useEffect, useState } from "react";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);
  return (
    <div className={` ${navBg ? "bg-blue-950 shadow-md" : ""} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex justify-between h-full items-center mx-auto w-[90%] xl:W-[80%]">
        <div className="flex items-center gap-2">
          <div className="size-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="size-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold">Traveleena</h1>
        </div>
        {/* navlnks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-base text-white font-medium w-fit block after:content-[''] after:absolute after:h-[3px] after:w-full after:bg-rose-500 after:bottom-[-4px] after:right-0 after:origin-center after:scale-x-0 hover:after:scale-x-100 transition after:duration-200">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex item-center gap-4">
          <button className="md:px-12 md:py-2.5 px-2 py-2 text-black text-base bg-white hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer ">Book Now</button>

          <HiBars3BottomRight onClick={openNav} className="size-8 text-white cursor-pointer lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
