"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisble, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 right-3 animate-pulse">
      {isVisble && (
        <button onClick={scrollToTop} className="bg-rose-600 rounded-full text-white size-12 flex items-center justify-center cursor-pointer">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
