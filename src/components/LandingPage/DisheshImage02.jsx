import React from 'react'
import { Link } from 'react-router-dom'

const DisheshImage02 = ({src}) => {
  return (
    <Link to={"/home"}>
      <div className="w-[144px] h-[180px]">
        <img
          src={src}
          alt="Dishesh"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
    </Link>
  );
}

export default DisheshImage02


