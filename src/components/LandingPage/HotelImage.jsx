import React from 'react'
import items01 from "../../assets/LandingPage/Hotel/items01.jpg"

const HotelImage = () => {
  return (
    <div className="mx-auto max-w-[1150px]">
      <div className="w-[326px] h-[189px] border border-black">
        <img className="w-full h-full" src={items01} alt="" />
      </div>
      <div className="w-[326px] text-[13px] h-[189px] border border-black p-3">
        <div className="flex justify-between">
          <div>
            <p>Pizza . Fast Food</p>
            <p className="mt-0.5">Area Colony, Bhopal</p>
            <button>
              <img src="" alt="" />
              <p className="bg-[#f0f0f5] mt-1.5 px-2 rounded-[20px]">Table booking</p>
            </button>
          </div>
          <div>
            <p>
              <img src="" alt="" /> $500for two
            </p>
            <p>6.8 km</p>
          </div>
        </div>
        <div>
          <button className="bg-[#1BA672] mt-3 text-[14px] text-white flex justify-between gap-5 font-medium w-[300px] h-[30px] rounded-[10px] items-center">
            <p>Flat 40% off on pre-booking</p>
            <p>+4 more</p>
          </button>
          <button className="bg-[#C8F9E5] mt-3 text-[16px] text-[#1BA672] font-normal rounded-[10px] w-[300px]">
            <p>Up to 10% off with bank offers</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelImage
