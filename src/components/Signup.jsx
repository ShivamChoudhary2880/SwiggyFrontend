import React from "react";
import login from "../assets/LandingPage/Login/items1.png";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Signup = ({ onLogin, onOtp }) => {

  const handleSignup = () => {
    onOtp();
  }

  return (
    <div className="h-[650px] w-[500px] p-10  mt-5">
    <div className="flex justify-between">
              <div className="mt-5">
                <h1 className="font-bold text-4xl ">Sign up</h1>
                <p className="py-5">
                  <span
                    onClick={onLogin}
                    className="text-[#ff5200] cursor-pointer">
                      create an account
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
          placeholder="Name"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>
      <div className="">
        <input
          type="String"
          placeholder="Email"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>
      <p className="text-[#5D8ED5] font-bold mt-5">Have a referral code?</p>
      <div>
        <button
          onClick={handleSignup}
          style={{ background: "#ff5200" }}
          className="px-46.5 py-4 text-white cursor-pointer mt-5"
        >
          LOGIN
        </button>
        <p className="text-[12px]">
          By creating an account, I accept the
          <span className="font-medium">
            Terms & Conditions & Privacy{" "}
          </span>
          <br /> <span className="font-medium"> Policy </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
