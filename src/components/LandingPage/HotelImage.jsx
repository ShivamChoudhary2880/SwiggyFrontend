import React from 'react'

const HotelImage = ({name,rating,image,dishName,location,price,distance,offerText,}) => {
  return (
    <div className="w-[326px] shadow mt-10 border border-gray-300 rounded-xl">
      <div className="w-[326px] h-[189px] relative rounded-xl overflow-hidden">
        <div className="">
          <img className="w-full h-full" src={image} alt={name} />
        </div>
        <div className="absolute bottom-0 flex bg-black/50 justify-between w-full p-1">
          <h1 className="text-white text-xl font-bold">{name}</h1>
          <div className='flex items-center gap-2'>
            <img
              src="https://up.yimg.com/ib/th/id/OIP.S3qinUY9mFxFcufBsjO1XAHaHa?pid=Api&rs=1&c=1&qlt=95&w=122&h=122"
              alt="Star"
              className='w-5 h-5 '
            />
            <p className="text-white text-xl font-bold">{rating}</p>
          </div>
        </div>
      </div>
      <div className="w-[326px] text-[13px] h-[189px] p-3">
        <div className="flex justify-between">
          <div>
            <p>{dishName}</p>
            <p className="mt-0.5">{location}</p>
            <button>
              <p className="bg-[#f0f0f5] mt-1.5 px-2 rounded-[20px]">
                Table booking
              </p>
            </button>
          </div>
          <div>
            <p>{price}</p>
            <p className="ml-7">{distance}</p>
          </div>
        </div>
        <div>
          <button className="bg-[#1BA672] p-2 mt-3 text-[14px] text-white flex justify-between gap-5 font-medium w-[300px] h-[30px] rounded-[10px] items-center">
            <p>{offerText}</p>
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
