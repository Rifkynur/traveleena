import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center bg-[#13357b]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-white">What our customer are saying us?</h1>
          <p className="mt-4 text-gray-200  text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nemo provident doloribus ea, laudantium quo explicabo esse, cupiditate facilis, numquam natus at minima! Ea laborum similique a, consequatur repudiandae
            nostrum.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="mb-2 text-base text-white">Overall Rating</p>
              <div className="flex items-center text-base">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
