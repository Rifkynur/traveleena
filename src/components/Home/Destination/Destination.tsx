import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="py-20">
      <SectionHeading heading="Exploring Popular Destination" />
      <div className="w-[80%] mt-14 mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
