import React from "react";
import { Link } from "react-router-dom";

function Page2Image({item}) {
  return (
    <div className="">
      <Link to={'/home/Burger'}>
        <div className="w-[270px] h-[186px] relative">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl h-full w-full object-cover"
          />
          <h1 className="absolute bottom-0 right-0 font-bold text-white text-md rounded-b-xl bg-black/50 w-full py-1">
            {item.offerText}
          </h1>
        </div>
        <h1 className="text-[20px] font-bold">{item.title}</h1>
        <div className="flex item-center gap-2">
          <img
            src="https://up.yimg.com/ib/th/id/OIP.S3qinUY9mFxFcufBsjO1XAHaHa?pid=Api&rs=1&c=1&qlt=95&w=122&h=122"
            alt="star"
            className="w-4 h-4 object-contain mt-1"
          />
          <span>{item.rating}</span>
          <span className="font-medium text-gray-600">{item.time}</span>
        </div>
        <p className="text-gray-700">{item.category}</p>
        <p className="text-gray-700">{item.location}</p>
      </Link>
    </div>
  );
}

export default Page2Image