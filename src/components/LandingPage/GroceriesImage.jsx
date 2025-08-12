import React from 'react'

const GroceriesImage = ({src, name}) => {
    return (
      <div className="w-[144px] h-[240px]">
        <div className="w-[144px] h-[180px]">
          <img src={src} alt="Groceries" className="w-full h-full" />
        </div>
          <p className="text-[20px] text-[#02060CBF] font-bold text-center">{name}</p>
        </div>
    );
}

export default GroceriesImage 
