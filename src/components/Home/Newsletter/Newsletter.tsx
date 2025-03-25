import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-black py-16 flex items-center justify-center w-full flex-col text-white">
      <BsEnvelopePaper className="text-white size-16 mt-20" />
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">Your Travel Journey Start Here</h1>
      <p className="met-3 text-xs sm:text-sm">Sign up and we we&apos;ll send the best deals to you </p>
      <div className="w-full flex items-center justify-center flex-col">
        <input type="text" className="px-6 py-3 bg-white mt-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto rounded-lg outline-none placeholder:text-black/50 text-base " placeholder="Email" />
        <button className="px-6 py-3 bg-blue-950 mt-3 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto rounded-lg outline-none text-white text-base hover:bg-blue-900 transition-all duration-200 font-bold">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
