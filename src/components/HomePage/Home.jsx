import React from 'react'
import { LuArchive } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaOsi } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Page1 from './Page1';
import { Outlet } from 'react-router-dom';
import Page2 from './Page2';
import Page3 from './Page3';


const Home = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row w-full max-w-[1150px]  mx-auto items-center md:items-start justify-between mt-[20px] px-4">
        <div className="flex w-full md:w-[150px] items-center justify-center md:justify-between mb-4 md:mb-0">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.lil-EJjoMpprM6UkkOQhwgHaHa?pid=Api&P=0&h=220"
            alt="Swiggy logo"
            className="w-[48px] h-[48px] rounded-xl "
          />
          <div className="flex w-[80px] items-center justify-between ml-2">
            <p className="font-medium underline text-sm md:text-base">Other</p>
            <IoIosArrowDown />
          </div>
        </div>

        <div className="grid grid-col-2 sm:grid-cols-3 md:flex md:w-[700px] w-full justify-between items-center font-medium gap-4 text-sm md:text-base">
          <div className="flex items-center">
            <LuArchive />
            <p className="p-2">Swiggy Corporate</p>
          </div>
          <div className="flex items-center">
            <IoSearch />
            <p className="p-2">Search</p>
          </div>
          <div className="flex items-center">
            <BiSolidOffer />
            <p className="p-2">Offers</p>
          </div>
          <div className="flex items-center">
            <IoHelpBuoyOutline />
            <p className="p-2">Help</p>
          </div>
          <div className="flex items-center">
            <FaOsi />
            <p className="p-2">Sign In</p>
          </div>
          <div className="flex items-center">
            <FaCartFlatbedSuitcase />
            <p className="p-2">Cart</p>
          </div>
        </div>
      </nav>
      <Page1 />
      <Page2 />
      <Page3/>
      <Outlet/>
    </div>
  );
}

export default Home
