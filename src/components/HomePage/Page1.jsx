import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Page1Image from "./Page1Image";

import items01 from "../../assets/Home/page1/items01.jpg";
import items02 from "../../assets/Home/page1/items02.jpg";
import items03 from "../../assets/Home/page1/items03.jpg";
import items04 from "../../assets/Home/page1/items04.jpg";
import items05 from "../../assets/Home/page1/items05.png";
import items06 from "../../assets/Home/page1/items06.jpg";
import items07 from "../../assets/Home/page1/items07.jpg";
import items08 from "../../assets/Home/page1/items08.jpg";
import items09 from "../../assets/Home/page1/items09.jpg";
import items10 from "../../assets/Home/page1/items10.jpg";
import items11 from "../../assets/Home/page1/items11.jpg";
import items12 from "../../assets/Home/page1/items12.jpg";
import items13 from "../../assets/Home/page1/items13.jpg";
import items14 from "../../assets/Home/page1/items14.jpg";
import items15 from "../../assets/Home/page1/items15.jpg";
import items16 from "../../assets/Home/page1/items16.jpg";
import items17 from "../../assets/Home/page1/items17.jpg";
import items18 from "../../assets/Home/page1/items18.jpg";
import items19 from "../../assets/Home/page1/items19.jpg";
import items20 from "../../assets/Home/page1/items20.jpg";

const Page1 = () => {
  const scrollRef = useRef(null);

  const items = [
    items01, items02, items03, items04, items05,
    items06, items07, items08, items09, items10,
    items11, items12, items13, items14, items15,
    items16, items17, items18, items19, items20,
  ];

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 500;
  };

  return (
    <div>
      <div className="max-w-[1150px] mx-auto mt-20">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">What's on your mind?</h1>
          <div className="flex">
            <div
              onClick={scrollLeft}
              className="bg-[#e2e2e7] rounded-full p-2 mr-4 flex justify-center items-center cursor-pointer"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={scrollRight}
              className="bg-[#e2e2e7] rounded-full p-2 flex justify-center items-center cursor-pointer"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Scrollable Image Section */}
        <div className="overflow-hidden mt-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >
            {items.map((item, index) => (
              <Page1Image key={index} src={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
