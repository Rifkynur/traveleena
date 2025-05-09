"use client";
import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div>
      <Swiper effect="cards" loop grabCursor={true} modules={[EffectCards]} className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]">
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
              <div className="w-[80%] mx-auto mt-16 ">
                <p className="text-xs sm:text-sm md:text-base font-semibold">{data.review}</p>
                <div className="flex items-center mt-4">
                  <FaStar className="md:size-6 size-3 text-yellow-600" />
                  <FaStar className="md:size-6 size-3 text-yellow-600" />
                  <FaStar className="md:size-6 size-3 text-yellow-600" />
                  <FaStar className="md:size-6 size-3 text-yellow-600" />
                  <FaStar className="md:size-6 size-3 text-yellow-600" />
                </div>
                <div className="mt-10">
                  <div className="flex items-center gap-4">
                    <Image src={data.image} alt={data.name} height={60} width={60} className="rounded-full" />
                    <div>
                      <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                      <p className="text-gray-600 text-xs sm:text-base">{data.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
