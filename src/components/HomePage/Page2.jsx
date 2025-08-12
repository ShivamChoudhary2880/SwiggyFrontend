import React,{useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Page2Image from './Page2Image';

import items01 from '../../assets/Home/page2/items01.jpg';
import items02 from '../../assets/Home/page2/items02.jpg';
import items03 from "../../assets/Home/page2/items03.jpg";
import items04 from "../../assets/Home/page2/items04.jpg";
import items05 from "../../assets/Home/page2/items05.jpg";
import items06 from "../../assets/Home/page2/items06.jpg";
import items07 from "../../assets/Home/page2/items07.jpg";
import items08 from "../../assets/Home/page2/items08.jpg";
import items09 from "../../assets/Home/page2/items09.jpg";
import items10 from "../../assets/Home/page2/items10.jpg";
import items11 from "../../assets/Home/page2/items11.jpg";
import items12 from "../../assets/Home/page2/items12.jpg";
import items13 from "../../assets/Home/page2/items13.jpg";
import items14 from "../../assets/Home/page2/items14.jpg";
import items15 from "../../assets/Home/page2/items15.jpg";
import items16 from "../../assets/Home/page2/items16.jpg";
import items17 from "../../assets/Home/page2/items17.jpg";
import items18 from "../../assets/Home/page2/items18.jpg";
import items19 from "../../assets/Home/page2/items19.jpg";
import items20 from "../../assets/Home/page2/items20.jpg";


function Page2() {

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 870;
    } else {
      current.scrollLeft += 870;
    }
  };
  const itemsData = [
    {
      id: 1,
      image: items01,
      title: "Domino's Pizza",
      rating: "4.4",
      time: "20-25 mins",
      category: "Pizzas, Italian, Pastas, Dessert",
      location: "Malviya Nagar",
      offerText: "ITEMS AT ₹79",
    },
    {
      id: 2,
      image: items02,
      title: "Pizza Hut",
      rating: "4.2",
      time: "25-30 mins",
      category: "Pizzas",
      location: "Bairagarh",
      offerText: "50% OFF UPTO ₹100",
    },
    {
      id: 3,
      image: items03,
      title: "McDonald's",
      rating: "4.3",
      time: "35-40 mins",
      category: "Pizza and more",
      location: "Vijay Nagar",
      offerText: "20% OFF UPTO ₹200",
    },
    {
      id: 4,
      image: items04,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 5,
      image: items05,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 6,
      image: items06,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 7,
      image: items07,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 8,
      image: items08,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 9,
      image: items09,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 10,
      image: items10,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 11,
      image: items11,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 12,
      image: items12,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 13,
      image: items13,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 14,
      image: items14,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 15,
      image: items15,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 16,
      image: items16,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 17,
      image: items17,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 18,
      image: items18,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 19,
      image: items19,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
    {
      id: 20,
      image: items20,
      title: "La Pinoz pizza",
      rating: "4.3",
      time: "40-45 mins",
      category: "Pizza and buffe",
      location: "rasoma",
      offerText: "Items at ₹155",
    },
  ];
    return (
      <div>
        <div className=" max-w-[1150px] mx-auto mt-15">
          <div className='flex items-center justify-between'>
            <div>
              <h1 className="text-xl font-bold">
                Top restaurant chains in Indore
              </h1>
            </div>
            <div className='flex'>
              <p className='bg-gray-300 p-2 rounded-[50%] cursor-pointer mx-5' onClick={()=>{handleScroll("left")}}>
                <FaArrowLeft />
              </p>
              <p className='bg-gray-300 p-2 rounded-[50%] cursor-pointer' onClick={()=>{handleScroll("right")}}>
                <FaArrowRight/>
              </p>
            </div>
          </div>
          <div className='flex overflow-x-auto gap-5 mt-5 scroll-smooth' ref={scrollRef}>
            {itemsData.map((item) => (
              <Page2Image key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Page2