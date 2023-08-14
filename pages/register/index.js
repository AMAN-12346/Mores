import React, { useState } from "react";
import Image from "next/image";
import { footer_image } from "../../public/footer-image.png";

const RegisterUser = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-1/2 p-32 bg-login_background">
        <div className="absolute top-4 left-4">
          <img
            src="/register/assets/logo.png"
            alt="Company Logo"
            className="w-10 h-10"
          />
        </div>
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="mt-2">Create a new account</p>
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
            Register
          </button>
        </form>
        <div className="mt-16">
          <Image src={footer_image} alt="footer-image" />
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/register/assets/right-image.png"
          alt="Right Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RegisterUser;
