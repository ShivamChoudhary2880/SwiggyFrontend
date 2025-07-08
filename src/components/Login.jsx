import React from 'react'
import login from "../assets/LandingPage/Login/items1.png"
import { Link } from 'react-router-dom';
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Login = ({ oncreateAccount }) => {
    return (
      <div className="h-[500px] w-[450px] p-10  mt-8">
        <div className="flex justify-between">
          <div className="mt-5">
            <h1 className="font-bold text-4xl ">Login</h1>
            <p className="py-5">
              <span
                onClick={oncreateAccount}
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
            className="w-[380px] pl-5 h-[70px] outline-none border border-black"
          />
        </div>
        <div>
          <button
            style={{ background: "#ff5200" }}
            className="px-42 py-4 text-white cursor-pointer mt-5"
          >
            LOGIN
          </button>
          <p className="text-[12px]">
            By clicking on Login, I accept{" "}
            <span className="font-medium">Terms & Conditions & Privacy </span>{" "}
            <br /> <span className="font-medium"> Policy </span>
          </p>
        </div>
      </div>
    );
}

export default Login
