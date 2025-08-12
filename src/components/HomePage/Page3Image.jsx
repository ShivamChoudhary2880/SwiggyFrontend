import React from "react";

function Page3Image({ data }) {
    return (
      <div className="mt-10">
        <div className="w-[270px] h-[310px]">
          <div className="relative w-full h-[200px]">
            <img
              src={data.image}
              alt={data.name}
              className="object-cover rounded-xl h-full w-full"
            />
            <h1 className="absolute bottom-0 text-white rounded-b-xl font-medium bg-black/50 w-full pl-2">
              {data.offer}
            </h1>
          </div>
                <h1 className="font-bold text-xl mt-1">{data.name}</h1>
          <div className="flex gap-2 mt-1">
            <img
              src="https://up.yimg.com/ib/th/id/OIP.S3qinUY9mFxFcufBsjO1XAHaHa?pid=Api&rs=1&c=1&qlt=95&w=122&h=122"
              alt="Star"
              className="w-4 h-4 mt-1"
            />
            <p>{data.rating}</p>
                    <p>{data.time}</p>
          </div>
                <p className="text-gray-700">{data.category}</p>
          <p className="text-gray-700">{data.location}</p>
        </div>
      </div>
    );
}

export default Page3Image