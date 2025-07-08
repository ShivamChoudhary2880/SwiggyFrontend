import React, { useEffect, useState, useRef } from "react";
import DisheshImage02 from "./DisheshImage02";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import items01 from "../../assets/LandingPage/Dishesh/items01.png";
import items02 from "../../assets/LandingPage/Dishesh/items02.png";
import items03 from "../../assets/LandingPage/Dishesh/items03.png";
import items04 from "../../assets/LandingPage/Dishesh/items04.png";
import items05 from "../../assets/LandingPage/Dishesh/items05.png";
import items06 from "../../assets/LandingPage/Dishesh/items06.png";
import items07 from "../../assets/LandingPage/Dishesh/items07.png";
import items08 from "../../assets/LandingPage/Dishesh/items08.png";
import items09 from "../../assets/LandingPage/Dishesh/items09.png";
import items10 from "../../assets/LandingPage/Dishesh/items10.png";
import items11 from "../../assets/LandingPage/Dishesh/items11.png";
import items12 from "../../assets/LandingPage/Dishesh/items12.png";
import items13 from "../../assets/LandingPage/Dishesh/items13.png";
import items14 from "../../assets/LandingPage/Dishesh/items14.png";
import items15 from "../../assets/LandingPage/Dishesh/items15.png";
import items16 from "../../assets/LandingPage/Dishesh/items16.png";
import items17 from "../../assets/LandingPage/Dishesh/items17.png";
import items18 from "../../assets/LandingPage/Dishesh/items18.png";
import items19 from "../../assets/LandingPage/Dishesh/items19.png";
import items20 from "../../assets/LandingPage/Dishesh/items20.png";

const Dishesh = () => {
  const scrollRef = useRef(null);

    const images = [
      items01,
      items02,
      items03,
      items04,
      items05,
      items06,
      items07,
      items08,
      items09,
      items10,
      items11,
      items12,
      items13,
      items14,
      items15,
      items16,
      items17,
      items18,
      items19,
      items20,
  ];
  
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  }
  return (
    <div>
      <div className="max-w-[1150px] mx-auto mt-[100px]">
        <div className="flex justify-end mb-4">
          <div
            onClick={scrollLeft}
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-3 flex justify-center items-center cursor-pointer">
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-3 flex justify-center items-center cursor-pointer">
            <FaArrowRight />
          </div>
        </div>

        <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
          <div className="flex w-max gap-6 ">
            {images.slice(0, 10).map((img, index) => (
              <DisheshImage02 key={index} src={img} />
            ))}
          </div>
          <div className="flex w-max gap-6 ">
            {images.slice(10, 20).map((img, index) => (
              <DisheshImage02 key={index + 10} src={img}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishesh;


