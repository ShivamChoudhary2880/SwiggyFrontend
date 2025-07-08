import React,{useRef} from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import GroceriesImage from "./GroceriesImage";

import items01 from "../../assets/LandingPage/groceries/items01.png";
import items02 from "../../assets/LandingPage/groceries/items02.png";
import items03 from "../../assets/LandingPage/groceries/items03.png";
import items04 from "../../assets/LandingPage/groceries/items04.png";
import items05 from "../../assets/LandingPage/groceries/items05.png";
import items06 from "../../assets/LandingPage/groceries/items06.png";
import items07 from "../../assets/LandingPage/groceries/items07.png";
import items08 from "../../assets/LandingPage/groceries/items08.png";
import items09 from "../../assets/LandingPage/groceries/items09.png";
import items10 from "../../assets/LandingPage/groceries/items10.png";
import items11 from "../../assets/LandingPage/groceries/items11.png";
import items12 from "../../assets/LandingPage/groceries/items12.png";
import items13 from "../../assets/LandingPage/groceries/items13.png";
import items14 from "../../assets/LandingPage/groceries/items14.png";
import items15 from "../../assets/LandingPage/groceries/items15.png";
import items16 from "../../assets/LandingPage/groceries/items16.png";
import items17 from "../../assets/LandingPage/groceries/items17.png";
import items18 from "../../assets/LandingPage/groceries/items18.png";
import items19 from "../../assets/LandingPage/groceries/items19.png";
import items20 from "../../assets/LandingPage/groceries/items20.png";
import items21 from "../../assets/LandingPage/groceries/items21.png";
import items22 from "../../assets/LandingPage/groceries/items22.png";
import items23 from "../../assets/LandingPage/groceries/items23.png";
import items24 from "../../assets/LandingPage/groceries/items24.png";

const Groceries = () => {
    const scrollRef = useRef(null);

  const items = [
    { src: items01, name: "Fresh Vegetables" },
    { src: items02, name: "Fresh Fruits" },
    { src: items03, name: "Dairy,Bread and Eggs" },
    { src: items04, name: "Rice,Atta and Dals" },
    { src: items05, name: "Masalas and Dry Fruits" },
    { src: items06, name: "Oils and Ghee" },
    { src: items07, name: "Munchies" },
    { src: items08, name: "Sweet Tooth" },
    { src: items09, name: "Cold Drinks and Juices" },
    { src: items10, name: "Biscuits and Cakes" },
    { src: items11, name: "Instant and Frozen Food" },
    { src: items12, name: "Meat and Seafood" },
    { src: items13, name: "Cereals and Breakfast" },
    { src: items14, name: "Sauces and Spreads" },
    { src: items15, name: "Tea, Coffee and More" },
    { src: items16, name: "Cleaning Essentials" },
    { src: items17, name: "Pharma and Hygiene" },
    { src: items18, name: "Bath, Body and Hair" },
    { src: items19, name: "Paan Corner" },
    { src: items20, name: "Home and Kitchen" },
    { src: items21, name: "Office and Electricals" },
    { src: items22, name: "Baby Care" },
    { src: items23, name: "Pet Supplies" },
    { src: items24, name: "Beauty and Grooming" },
    ];
    
    const scrollRight = () => {
        scrollRef.current.scrollLeft += 500;
    }

    const scrollLeft = () => {
        scrollRef.current.scrollLeft -= 500;
    }
  return (
    <div>
      <div className="max-w-[1150px] mx-auto mt-50">
        <div className="flex justify-between">
          <div className="font-bold text-2xl">
            <h1>Shop groceries on Instamart</h1>
          </div>
          <div className="flex justify-end ">
                      <div
                          onClick={scrollLeft}
                          className="bg-[#e2e2e7] rounded-full gap-5 p-2 mr-5 flex justify-center items-center cursor-pointer">
              <FaArrowLeft />
            </div>
                      <div
                          onClick={scrollRight}
                          className="bg-[#e2e2e7] rounded-full gap-5 p-2 flex justify-center items-center cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
              </div>
              <div
                  ref={scrollRef}
                  className="mt-[40px] flex overflow-x-auto gap-6 scroll-smooth">
                  {items.map((item, index) => (
                      <GroceriesImage key={index} src={ item.src} name={item.name} />
                  ))}
              </div>
      </div>
    </div>
  );
};

export default Groceries;
