import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import DisheshImage02 from "./DisheshImage02";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Dishesh = () => {

  const scrollRef = useRef(null);
  const [dishes, setdishes] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3000/v1/api/dish/getAll")
      .then((response) => {
        console.log(response.data.data)
        setdishes(response.data.data)
      })
      .catch((err) => {
      console.log(err)
    })
  },[])

  // useEffect(() => {
  //   const fetchDishes= async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/v1/api/dish/getAll"
  //       );
  //       console.log(response.data.data)
  //       setdishes(response.data.data)
  //     } catch (error) {
  //       console.error("Error fetching dishes", error);
  //     }
  //   };
  //   fetchDishes()
  // },[])

  
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
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-3 flex justify-center items-center cursor-pointer"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-3 flex justify-center items-center cursor-pointer"
          >
            <FaArrowRight />
          </div>
        </div>

        <div ref={scrollRef} className="overflow-x-auto scroll-smooth">
          <div className="flex w-max gap-6 ">
            {dishes.slice(0, 10).map((img, index) => (
              <DisheshImage02 key={index} src={img.image} />
            ))}
          </div>
          <div className="flex w-max gap-6 ">
            {dishes.slice(10, 20).map((img, index) => (
              <DisheshImage02 key={index + 10} src={img.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dishesh;


