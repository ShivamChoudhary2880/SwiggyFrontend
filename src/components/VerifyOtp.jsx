import React from "react";
import login from "../assets/LandingPage/Login/items1.png";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const VerifyOtp = ({ onLogin }) => {
  return (
    <div className="h-[650px] w-[500px] p-10  mt-5">
      <div className="flex justify-between">
        <div className="mt-5">
          <h1 className="font-bold text-4xl ">Sign up</h1>
          <p className="py-5">
            <span onClick={onLogin} className="text-[#ff5200] cursor-pointer">
              or login to your account
            </span>
          </p>
          <p> ----</p>
        </div>
        <div className="p-5">
          <img src={login} alt="" className="w-[120px] gap-5" />
        </div>
      </div>
      <div className="mt-5">
        <input
          type="number"
          placeholder="Phone number"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>
      <div className="">
        <input
          type="String"
          placeholder="One time password"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>
      <div>
        <button
          style={{ background: "#ff5200" }}
          className="px-42 font-bold py-4 text-white cursor-pointer mt-5"
        >
          <p>Verify OTP</p>
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
