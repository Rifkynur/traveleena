import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
};
const WhyChooseCard = ({ title, image }: Props) => {
  return (
    <div>
      <Image src={image} alt="image" height={70} width={70} className="mx-auto" />
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quo.</p>
    </div>
  );
};

export default WhyChooseCard;
