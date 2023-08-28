"use client";
//TODO error handling
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the router from Next.js
import axios from "axios"; // Import axios for making API requests
import footer_image from "../register/assets/footer-image.png";
import right_side_image from "../register/assets/right_side_image.png";
import logo_image from "../register/assets/logo_image.png";
import Link from "next/link";
import { formHelperTextClasses } from "@mui/material";

const RegisterUser = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter(); // Get the router instance
  const [error, setError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let payload = {};
    if (selectedMethod === "email") {
      payload.userID = inputValue;
    } else if (selectedMethod === "phone") {
      payload.userID = "+91" + inputValue;
    }

    try {
      console.log(">>>>>>>>>>>from register");
      setLoading(true);

      // Send POST request to the API endpoint
      const response = await axios.post(
        "http://localhost:1950/api/v1/user/Register",
        payload
      );

      if (response.data?.responseCode === 200) {
        localStorage.setItem("userID", inputValue);
        // If the response is successful, navigate to the "otpVerify" path
        setOtpSuccess(true); // Set the login success state to true
        setTimeout(() => {
          setOtpSuccess(false); // Reset the login success state after a timeout
        }, 3000);
        router.push(`/otpVerify?source=register`);
      } else {
        console.log("i am in register else part");
        setError(response.data?.responseMessage);
        setTimeout(() => {
          setError("");
        }, 3000);
        setLoading(false);
      }
    } catch (error) {
      setError(error.response.data.responseMessage);
      setTimeout(() => {
        setError("");
      }, 3000);
      console.error("Error logging in:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
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
        <form className="mt-8" onSubmit={handleRegister}>
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12"
              placeholder={
                selectedMethod === "email"
                  ? "Enter your email"
                  : "Enter mobile number"
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {selectedMethod === "email" ? "✉️" : "📱"}
            </span>

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* Add flag icon here */}
            </span>
          </div>
          <button
            className="w-9/12 bg-button text-white py-2 rounded-lg mt-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-button underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
        {otpSuccess && (
          <p className="text-green-500 mt-2">Otp sent successfully!</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-0">
          <Image
            src={footer_image}
            alt="footer-image"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={right_side_image}
          alt="footer-image"
          height={1042}
          width={710}
        />
      </div>
    </div>
  );
};

export default RegisterUser;
