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
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-2">Access back to your account</p>
        <div className="mt-8 w-full">
          <button
            className={`py-2 px-6 rounded-xl w-36 ${
              selectedMethod === "email"
                ? "bg-primary text-white"
                : "bg-secondary text-black"
            }`}
            onClick={() => setSelectedMethod("email")}
          >
            Email
          </button>
          <button
            className={`-ml-3 py-2  px-6 rounded-xl w-36 ${
              selectedMethod === "phone"
                ? "bg-primary text-white"
                : "bg-secondary text-black"
            }`}
            onClick={() => setSelectedMethod("phone")}
          >
            Phone
          </button>
        </div>
        <form className="mt-8">
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12"
              placeholder={
                selectedMethod === "email"
                  ? "Enter your email"
                  : "Enter mobile number"
              }
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {selectedMethod === "email" ? "✉️" : "📱"}
            </span>

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* Add flag icon here */}
            </span>
          </div>
          <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-4">
            Login
          </button>
        </form>
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
