import React, { useEffect, useState } from "react";
import Login from "../Login";
import Signup from "../Signup";
import Dishesh from "./Dishesh";
import Groceries from "./Groceries";
import Hotel from "./Hotel";
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import items2 from "../../assets/LandingPage/Home/items2.png";
import items3 from "../../assets/LandingPage/Home/items3.png"; 
import VerifyOtp from "../VerifyOtp";


const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);

  return (
    <div>
      <div
        style={{ backgroundColor: "#ff5200" }}
        className="min-h-screen w-full pt-[32px]"
      >
        <div className="w-full max-w-[1250px] h-auto flex flex-col md:flex-row justify-between mx-auto items-center px-8 py-2">
          <div className="w-[120px] mb-2 md:mb-0">
            <img
              src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
              alt="swiggy logo"
              className="w-full"
            />
          </div>
          <div className="w-full md:w-[615px] flex mt-2 md:mt-0 justify-between items-center font-extrabold">
            <div className=" text-[16px] text-white px-[16px] py-[12px] ">
              Swiggy corporate
            </div>
            <div className=" text-[16px] text-white py-[12px] px-[16px]">
              Partner with us
            </div>
            <div className=" text-[16px] border border-white text-white py-[12px] px-[16px] rounded-[10px] flex items-center gap-1">
              <p>Get the App</p>
              <img src="" alt="" />
            </div>
            <button
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
                setShowVerifyOtp(false);
              }}
              className="cursor-pointer text-[16px] text-white py-[12px] px-[30px] font-extrabold bg-black rounded-[10px]"
            >
              Sign in
            </button>
          </div>
        </div>
        <div className=" w-full max-w-[743px] text-white text-[30px] md:text-[45px] font-bold mx-auto mt-[80px] px-4">
          <h1 className="text-center">
            Order food & groceries. Discover <br className="hidden md:block" />{" "}
            best restaurants. Swiggy it!
          </h1>
        </div>
        <div className="w-full max-w-[800px] h-auto flex flex-col md:flex-row justify-between items-center gap-3 mx-auto mt-[30px] px-4">
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full md:w-[320px] h-[60px] rounded-[10px] flex items-center"
          >
            <img
              className="w-[30px] h-[30px] ml-[10px]"
              src="https://tse1.mm.bing.net/th/id/OIP.XlW3dDPHpKMbv74ERqAIfgHaHa?pid=Api&P=0&h=220"
              alt=""
            />
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="h-[30px] w-[200px] font-medium border-none ml-[10px] outline-none text-sm"
            />
            <img src="" alt="" />
          </div>
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full md:w-[390px] h-[60px] rounded-[10px] flex items-center justify-between"
          >
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="h-[30px] w-[260px] md:w-[360px] font-medium outline-none ml-[20px] text-[16px]"
            />
            <img
              className="w-[20px] h-[20px]  mr-[20px]"
              src="https://tse4.mm.bing.net/th/id/OIP.rsZB5iKwX6totSXcV94swQHaHN?pid=Api&P=0&h=220"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            src={items2}
            alt=""
            className="absolute top-30 md:w-[250px] w-[100px]"
          />
        </div>

        <div className=" w-full max-w-[1150px] mt-[30px] flex flex-col md:flex-row justify-between items-center gap-6 mx-auto px-1">
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full md:w-[550px] h-auto rounded-4xl flex flex-col md:flex-row items-center"
          >
            <div className="p-8">
              <h1 className="font-bold text-3xl md:text-4xl text-[#464646]">
                FOOD DELIVERY
              </h1>
              <h3 className="text-[#909090] text-xl md:text-2xl font-medium py-1.5">
                FROM RESTAURANTS
              </h3>
              <button
                style={{ background: "#ffeee6" }}
                className="text-[#ff5200]
            text-[16px] font-bold p-2 rounded-2xl mt-2"
              >
                UPTO 60% OFF
              </button>{" "}
              <br />
              <button
                style={{ background: "#ff5100" }}
                className="text-white
            rounded-[30px] px-4 py-1 text-[18px] mt-6"
              >
                Explore
              </button>
            </div>
            <div>
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.tU4o0V1AMZelrHo5w1qK_gHaE8?pid=Api&P=0&h=220"
                alt="food image"
                className="w-[200px] md:w-[250px] md:mt-[100px] mr-12"
              />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full md:w-[550px] h-auto rounded-4xl flex flex-col md:flex-row items-center"
          >
            <div className="p-13">
              <h1 className="font-bold text-3xl md:text-4xl text-[#464646]">
                DINEOUT
              </h1>
              <h3 className="text-[#909090] text-xl md:text-2xl font-medium py-1.5">
                EAT OUT & SAVE MORE
              </h3>
              <button
                style={{ background: "#ffeee6" }}
                className="text-[#ff5200]
            text-[16px] font-bold p-2 rounded-2xl mt-2"
              >
                UPTO 60% OFF
              </button>
              <br />
              <button
                style={{ background: "#ff5100" }}
                className="text-white
            rounded-[30px] px-4 py-1 text-[18px] mt-6"
              >
                Explore
              </button>
            </div>
            <div>
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.tU4o0V1AMZelrHo5w1qK_gHaE8?pid=Api&P=0&h=220"
                alt="food image"
                className="w-[200px] md:w-[250px] md:mt-[100px] mr-12"
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={items3}
            alt=""
            className="absolute top-30 right-0 md:w-[250px] w-[100px] "
          />
        </div>
      </div>

      {/* login side bar  */}

      {(showLogin || showSignup || showVerifyOtp) && (
        <div className="fixed inset-0 bg-transparent  backdrop-blur-sm flex justify-end z-50">
          <div className="bg-white w-full md:w-[600px] h-full p-5 relative">
            <button
              onClick={() => {
                setShowLogin(false);
                setShowSignup(false);
                setShowVerifyOtp(false);
              }}
              className="absolute m-10 text-2xl cursor-pointer"
            >
              <AiOutlineClose />
            </button>
            {showSignup && (
              <Signup
                onLogin={() => {
                  setShowLogin(true);
                  setShowSignup(false);
                }}
                onOtp={() => {
                  setShowSignup(false);
                  setShowVerifyOtp(true);
                }}
              />
            )}
            {showLogin && (
              <Login
                oncreateAccount={() => {
                  setShowSignup(true);
                  setShowLogin(false);
                }}
              />
            )}

            {showVerifyOtp && (
              <VerifyOtp
                onClose={()=>{
                  setShowVerifyOtp(false);
                }}
              />
            )}
          </div>
        </div>
      )}

      <Dishesh />
      <Groceries />
      <Hotel />
    </div>
  );
};

export default Header;
