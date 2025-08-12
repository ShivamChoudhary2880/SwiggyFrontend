import React,{useRef} from 'react'
import HotelImage from './HotelImage'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

import items01 from "../../assets/LandingPage/Hotel/items01.jpg";
import items02 from "../../assets/LandingPage/Hotel/items02.jpeg";
import items03 from "../../assets/LandingPage/Hotel/items03.jpg";
import items04 from "../../assets/LandingPage/Hotel/items04.jpeg";
import items05 from "../../assets/LandingPage/Hotel/items05.jpeg";
import items06 from "../../assets/LandingPage/Hotel/items06.jpeg";
import items07 from "../../assets/LandingPage/Hotel/items07.jpeg";
import items08 from "../../assets/LandingPage/Hotel/items08.jpeg"
import items09 from "../../assets/LandingPage/Hotel/items09.jpeg";
import items10 from "../../assets/LandingPage/Hotel/items10.jpg";
import items11 from "../../assets/LandingPage/Hotel/items11.jpg";
import items12 from "../../assets/LandingPage/Hotel/items12.jpg";
import items13 from "../../assets/LandingPage/Hotel/items13.jpeg";
import items14 from "../../assets/LandingPage/Hotel/items14.jpeg";
import items15 from "../../assets/LandingPage/Hotel/items15.jpeg";
import items16 from "../../assets/LandingPage/Hotel/items16.jpeg";
import items17 from "../../assets/LandingPage/Hotel/items17.jpg";
import items18 from "../../assets/LandingPage/Hotel/items18.jpeg";
import items19 from "../../assets/LandingPage/Hotel/items19.jpeg";
import items20 from "../../assets/LandingPage/Hotel/items20.jpeg";

const Hotel = () => {
  
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 600;
    } else {
      current.scrollLeft += 600;
    }
  };

  const items = [
    {
      id: 1,
      name: "The Pizza Slice",
      rating: "4.2",
      image: items01,
      dishName: "Pizza . Fast Food",
      location: "Area Colony Bhopal",
      price: "₹1400 for two",
      distance: "6.8 Km",
      offerText: "Flat 40% off on pre booking",
    },

    {
      id: 2,
      name: "House of Delici",
      rating: "4.1",
      image: items02,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 3,
      name: "House of Delici",
      rating: "4.1",
      image: items03,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 4,
      name: "House of Delici",
      rating: "4.1",
      image: items04,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 5,
      name: "House of Delici",
      rating: "4.1",
      image: items05,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 6,
      name: "House of Delici",
      rating: "4.1",
      image: items06,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 7,
      name: "House of Delici",
      rating: "4.1",
      image: items07,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 8,
      name: "House of Delici",
      rating: "4.1",
      image: items08,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 9,
      name: "House of Delici",
      rating: "4.1",
      image: items09,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 10,
      name: "House of Delici",
      rating: "4.1",
      image: items10,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 11,
      name: "House of Delici",
      rating: "4.1",
      image: items11,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 12,
      name: "House of Delici",
      rating: "4.1",
      image: items12,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 13,
      name: "House of Delici",
      rating: "4.1",
      image: items13,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 14,
      name: "House of Delici",
      rating: "4.1",
      image: items14,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 15,
      name: "House of Delici",
      rating: "4.1",
      image: items15,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 16,
      name: "House of Delici",
      rating: "4.1",
      image: items16,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 17,
      name: "House of Delici",
      rating: "4.1",
      image: items17,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 18,
      name: "House of Delici",
      rating: "4.1",
      image: items18,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 19,
      name: "House of Delici",
      rating: "4.1",
      image: items19,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
    {
      id: 20,
      name: "House of Delici",
      rating: "4.1",
      image: items20,
      dishName: "Chinese . North Indian",
      location: "Alark Complex, Lalghati, Bhopal",
      price: "₹1000 for two",
      distance: "5 Km",
      offerText: "Flat 50% off on pre booking",
    },
  ];
  return (
    <div className="max-w-[1150px] mx-auto mt-30">
      <div className=' flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>Dishcover best restaurants on Dineout</h1>
        <div className='flex gap-3'>
          <p className='bg-gray-300 p-2 rounded-[50%]' onClick={()=>{handleScroll("left")}}>
            <FaArrowLeft />
          </p>
          <p className='bg-gray-300 p-2 rounded-[50%]' onClick={()=>{handleScroll("right")}}>
            <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto scroll-smooth" ref={scrollRef}>
        {items.map((item) => (
          <HotelImage
            key={item.id}
            name={item.name}
            rating={item.rating}
            image={item.image}
            dishName={item.dishName}
            location={item.location}
            price={item.price}
            distance={item.distance}
            offerText={item.offerText}
            bankOffer={item.bankOffer}
          />
        ))}
      </div>
    </div>
  );
}

export default Hotel
