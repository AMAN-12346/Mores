
"use client";
//TODO country constant, dropdown on mobile number
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the router from Next.js
import axios from "axios"; // Import axios for making API requests
import footer_image from "../register/assets/footer-image.png";
import right_side_image from "../register/assets/right_side_image.png";
import logo_image from "../register/assets/logo_image.png";
import Link from "next/link";
import styles from "./LoginUser.module.css"; // Import the custom styles
import { toast } from 'react-toastify';


const LoginUser = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let payload = {};
    if (selectedMethod === "email") {
      payload.userID = inputValue;
    } else if (selectedMethod === "phone") {
      payload.userID = "+91" + inputValue;
    }

    try {
      setLoading(true);
      console.log("i am in login");
      // Send POST request to the API endpoint
      const response = await axios.post(
        "http://localhost:1950/api/v1/user/Login",
        payload
      );
      console.log(response.data?.responseCode, ">>>>>>>>>>>>>>>>>login");

      if (response.data?.responseCode === 200) {
        localStorage.setItem("userID", inputValue);
        localStorage.setItem("isLogin", true); //!

        setOtpSuccess(true); // Set the login success state to true
        toast.success(response.data?.responseMessage);
        setLoading(false);
        setTimeout(() => {
          setOtpSuccess(false); // Reset the login success state after a timeout
          router.push("/otpVerify");
        }, 3000); // Set the timeout to 3 seconds (adjust as needed)
      } else {
        setError(response.data?.responseMessage);
        toast.error(response.data?.responseMessage);
        setTimeout(() => {
          setError("");
        }, 3000);
        setLoading(false);
      }
    } catch (error) {
      setError(error.response?.data.responseMessage);
      toast.error(error.response?.data.responseMessage)
      setTimeout(() => {
        setError("");
      }, 3000);
      console.error("Error logging in:", error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <Image src={logo_image} alt="logo" height={30} width={130} />
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Login</h1>
          <p className={styles.slogan}>Access back to your account</p>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.buttonSelect
                }py-2 px-6  md:rounded-l-lg  rounded-l-xl lg:w-36 w-60 mt-3 z-40  ${selectedMethod === "email"
                  ? "bg-primary text-white"
                  : "bg-secondary text-black"
                }`}
              onClick={() => setSelectedMethod("email")}
            >
              Email
            </button>
            <button
              className={`${styles.buttonSelect
                } py-2  md:rounded-r-lg rounded-r-lg px-6 lg:w-36 w-60 mt-3 ${selectedMethod === "phone"
                  ? "bg-primary text-white"
                  : "bg-secondary text-black"
                }`}
              onClick={() => setSelectedMethod("phone")}
            >
              Phone
            </button>
          </div>
          <form onSubmit={handleLogin}>
            <div className="relative ">
              <input
                type="text"
                className={styles.inputField}
                placeholder={
                  selectedMethod === "email"
                    ? "Enter your email"
                    : "Enter mobile number"
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {/* <span >
              {selectedMethod === "email" ? "✉️" : "📱"}
            </span> */}

              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {/* Add flag icon here */}
              </span>
            </div>
            <button
              className={`${styles.button} bg-button text-white py-2 rounded-lg mt-4`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <div>
              <p className="mt-3">
                Don not have an account?{" "}
                <Link
                  href="/register"
                  className="text-button underline cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div> </div>
        <div></div>

        <div className={styles.footerImage}>
          <Image src={footer_image} alt="right-side-image" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={right_side_image}
          alt="right-side-image"
          layout="fill"
          objectFit="cover"
        />

      </div>
    </div>

  );
};

export default LoginUser;
