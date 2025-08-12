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
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);

  return (
    <div>
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
              Order food & groceries. Discover{" "}
              <br className="hidden md:block" /> best restaurants. Swiggy it!
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
            <Link to={"/home"}>
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
            </Link>
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
                  onClose={() => {
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
      <div className="mt-30">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt=""
        />
      </div>
      <div className="max-w-[1050px]  mx-auto mt-20 font-medium">
        <div>
          <h1 className="text-2xl font-bold">Cities with food delivery</h1>
          <div className="flex flex-wrap gap-10 mt-10">
            <h1 className="p-1 border border-gray-400 w-57 flex justify-center items-center rounded-xl">
              Order food online in Banglore
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Gurgaon
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order food online in Hyderabad
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Delhi
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Mumbai
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Pune
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 h-20 rounded-xl flex justify-center items-center">
              Order food online in Kolkata
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Chennai
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order food online in Ahamdabad
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order food online in Chandigarh
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center">
              Order food online in Jaipur
            </h1>
            <div className="flex p-1 border border-gray-400 text-orange-600 font-bold w-57 rounded-xl gap-3 justify-center items-center">
              <h1>Show More</h1>
              <SlArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto mt-20 font-medium">
        <div>
          <h1 className="text-2xl font-bold">Cities with grocery delivery</h1>
          <div className="flex flex-wrap gap-10 mt-10">
            <h1 className="p-1 border border-gray-400 w-57 flex justify-center items-center rounded-xl text-center">
              Order grocery delivery in Banglore
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Gurgaon
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Hyderabad
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Delhi
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Mumbai
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Pune
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 h-20 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Kolkata
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Chennai
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Ahamdabad
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Chandigarh
            </h1>
            <h1 className="p-1 border border-gray-400 w-57 rounded-xl flex justify-center items-center text-center">
              Order grocery delivery in Jaipur
            </h1>
            <div className="flex p-1 border border-gray-400 text-orange-600 font-bold w-57 rounded-xl gap-3 justify-center items-center">
              <h1>Show More</h1>
              <SlArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f0f0f5] h-[550px]">
        <div className="max-w-[1200px]  mx-auto mt-20 pt-15 flex gap-30">
          <div className="">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy Logo"
            />
            <h1 className="mt-2">© 2025 Swiggy Limited</h1>
          </div>
          <div className=" flex gap-20">
            <div className=" w-40">
              <h1 className="font-medium text-xl p-2">Company</h1>
              <p className="p-1 font-medium">About Us</p>
              <p className="p-1 font-medium">Swiggy Corporate</p>
              <p className="p-1 font-medium">Carrers</p>
              <p className="p-1 font-medium">Team</p>
              <p className="p-1 font-medium">Swiggy One</p>
              <p className="p-1 font-medium">Swiggy Instamart</p>
              <p className="p-1 font-medium">Swiggy Dineout</p>
              <p className="p-1 font-medium">Minis</p>
              <p className="p-1 font-medium">Pyng</p>
            </div>
            <div className=" w-40">
              <h1 className="font-medium text-xl p-2">Contact us</h1>
              <p className="p-1 font-medium">Help & Support </p>
              <p className="p-1 font-medium">Partner with Ws</p>
              <p className="p-1 font-medium">Ride With Us</p>
              <h1 className="font-medium text-xl mt-5 p-2">Legal</h1>
              <p className="p-1 font-medium">
                Terms & <br /> Conditions{" "}
              </p>
              <p className="p-1 font-medium">Cookie Policy</p>
              <p className="p-1 font-medium">Privacy Policy</p>
            </div>
            <div className=" w-40">
              <h1 className="font-medium text-xl p-2">Available in:</h1>
              <p className="p-1 font-medium">Banglore</p>
              <p className="p-1 font-medium">Gurgaon</p>
              <p className="p-1 font-medium">Hyderabad</p>
              <p className="p-1 font-medium">Delhi</p>
              <p className="p-1 font-medium">Mumbai</p>
              <p className="p-1 font-medium">Pune</p>
              <p className="flex items-center gap-5 border border-gray-400 w-30 rounded-xl p-1 font-medium ">
                685 cities <SlArrowDown />
              </p>
            </div>
            <div className=" w-40">
              <h1 className="font-medium text-xl p-2">Life at Swiggy</h1>
              <p className="p-1 font-medium">Explore With Swiggy</p>
              <p className="p-1 font-medium">Swiggy News</p>
              <p className="p-1 font-medium">Snackables</p>
              <h1 className="font-medium text-xl p-1 mt-10">Social Links</h1>
              <p className="flex gap-3 ml-3 mt-3">
                <FaLinkedin /> <FaInstagram /> <FaFacebookF />
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="max-w-[1060px] mx-auto flex gap-6 items-center mt-7">
          <h1 className="text-gray-700 font-bold text-2xl">
            For better experience, download the Swiggy app now
          </h1>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt=""
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
