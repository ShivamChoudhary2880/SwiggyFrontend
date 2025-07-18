import React, { useState } from "react";
import login from "../assets/LandingPage/Login/items1.png";
import axios from "axios";

const Signup = ({ onLogin, onOtp }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      if (!formData.mobile || !formData.email || !formData.username) {
        return alert('Please fill all the fields');
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/v1/api/register`,
        formData
      );
      console.log(response.data)
      if (response.data.success) {
        onOtp();
        alert('Signup successful! Please verify OTP');
      } else {
        alert("Signup failed. Please check your details");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error. Please try again later");
    }
  };

  return (
    <div className="h-[650px] w-[500px] p-10 mt-5">
      <div className="flex justify-between">
        <div className="mt-5">
          <h1 className="font-bold text-4xl">Sign up</h1>
          <p className="py-5">
            Already have an account?
            <span
              onClick={onLogin}
              className="text-[#ff5200] cursor-pointer ml-1"
            >
              Login
            </span>
          </p>
          <p>----</p>
        </div>
        <div className="p-5">
          <img src={login} alt="" className="w-[120px] gap-5" />
        </div>
      </div>

      <div className="mt-5">
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Phone number"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>

      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>

      <div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-[420px] pl-5 h-[70px] outline-none border border-black"
        />
      </div>

      <p className="text-[#5D8ED5] font-bold mt-5">Have a referral code?</p>

      <div>
        <button
          onClick={handleSignup}
          style={{ background: "#ff5200" }}
          className="px-12 py-4 text-white cursor-pointer mt-5"
        >
          Sign Up
        </button>
        <p className="text-[12px]">
          By creating an account, I accept the
          <span className="font-medium"> Terms & Conditions & Privacy </span>
          <br /> <span className="font-medium"> Policy </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
