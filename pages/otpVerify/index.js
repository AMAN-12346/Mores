import React, { useState } from "react";
import Image from "next/image";
import footer_image from "../register/assets/footer-image.png";
import right_side_image from "../register/assets/right_side_image.png";
import logo_image from "../register/assets/logo_image.png";

const LoginUser = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");

  return (
    <div className="flex items-center justify-center max-h-fit overflow-x-hidden overflow-y-hidden">
      <div className="w-1/2 p-32 bg-login_background">
        <div className="absolute top-4 left-4">
          <Image
            className="bg-contain"
            src={logo_image}
            alt="footer-image"
            height={30}
            width={130}
          />
        </div>
        <h1 className="text-2xl font-bold">Verify OTP</h1>
        <p className="mt-2">
          Enter the 5 digit code received on your email address.
        </p>
        <div className="flex mt-6 w-9/12">
          <input
            type="text"
            maxLength="1"
            inputmode="numeric"
            pattern="[0-9]"
            placeholder="0"
            className="w-1/5 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            maxLength="1"
            inputmode="numeric"
            pattern="[0-9]"
            placeholder="0"
            className="w-1/5 ml-2 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            maxLength="1"
            inputmode="numeric"
            pattern="[0-9]"
            placeholder="0"
            className="w-1/5 ml-2 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="text"
            maxLength="1"
            inputmode="numeric"
            pattern="[0-9]"
            placeholder="0"
            className="w-1/5 ml-2 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <p className="mt-6">
          <span className="text-gray-500">Not get code yet?</span>
          <a href="#" className="text-blue-500 ml-1 hover:underline">
            Resend
          </a>
        </p>
        <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-6">
          Verify
        </button>

        <div className="mt-0">
          <Image
            src={footer_image}
            alt="footer-image"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="w-1/2 bg-contain">
        <Image
          src={right_side_image}
          alt="footer-image"
          height={0}
          width={0}
          className=""
        />
      </div>
    </div>
  );
};

export default LoginUser;
