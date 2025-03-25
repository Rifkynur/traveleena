"use client";
import SearchBox from "@/components/Helper/SearchBox";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video src="/images/hero1.mp4" autoPlay muted loop preload="metadata" className="w-full h-full object-cover" />
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-center items-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-white text-center uppercase text-[25px] mb-4  md:text-[35px] lg:text-[45px] tracking-[0.7rem] font-bold">lets enjoy the nature</h1>
            <p className="md:text-base text-center text-lg  text-white font-normal [word-spacing:5px]">Get the best price on 2,000,000+ properties,worldwide </p>
          </div>
          <SearchBox />
          <Link
            href={"#"}
            className="rounded px-14 -mt-4 md:px-28 py-2.5 overflow-hidden group bg-rose-500 relative hover:bg-linear-90/oklch hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 text-white transition-all duration-200 flex items-center justify-center"
          >
            <span className="text-base text-center">Search</span>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-48 ease"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
