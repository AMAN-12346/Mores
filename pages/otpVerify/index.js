"use client";
//TODO resenOTP gromming
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the router from Next.js
import axios from "axios"; // Import axios for making API requests
import footer_image from "../register/assets/footer-image.png";
import right_side_image from "../register/assets/right_side_image.png";
import logo_image from "../register/assets/logo_image.png";
import Services from "@/components/HomePage/Services/Services";
import { useAuth } from "../../context/auth";
import styles from "./OtpVerification.module.css";

const VerifyOTP = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [auth, setAuth] = useAuth();
  const [backendError, setError] = useState("");
  const [resendOtpMessage, setResendOtpMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const source = router.query.source;

  const otpInputsRef = useRef([
    { current: null },
    { current: null },
    { current: null },
    { current: null },
    { current: null },
    { current: null },
  ]);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value === "" && index > 0) {
      otpInputsRef.current[index - 1].focus(); // Move focus to the left
    } else if (value === "" && index === 0) {
      // If the first input is empty and left arrow is pressed, do nothing or handle as needed
    } else if (index < 5) {
      otpInputsRef.current[index + 1].focus(); // Move focus to the right
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent the default backspace behavior

      const newOTP = [...otp];
      newOTP[index] = ""; // Remove the digit
      setOTP(newOTP);

      if (index > 0) {
        otpInputsRef.current[index - 1].focus(); // Move focus to the left
      }
    } else if (e.key === "ArrowLeft") {
      if (index > 0) {
        otpInputsRef.current[index - 1].focus(); // Move focus to the left
      }
    } else if (e.key === "ArrowRight") {
      if (index < otp.length - 1) {
        otpInputsRef.current[index + 1].focus(); // Move focus to the right
      }
    }
  };

  const handleVerifyOTP = async () => {
    const userID = localStorage.getItem("userID");
    const enteredOTP = otp.join("");

    // If the userID starts with "+91", it's a mobile number
    const isMobileNumber = userID.startsWith("+91");

    const payload = {
      userID,
      otp: enteredOTP,
    };
    console.log("payload from verify : ", payload);
    try {
      setLoading(true);
      // Send POST request to verify OTP
      const response = await axios.post(
        "http://localhost:1950/api/v1/user/verifyOTP",
        payload
      );
      console.log("testing-------------->>", response);
      if (response.data?.responseCode === 200) {
        const result = response.data.result; // Extract the result field from the response
        console.log(result, "result from verify otp");
        setAuth(result); // Update the context state

        // Store the authentication data in local storage
        localStorage.setItem("auth", JSON.stringify(result));
        console.log(auth, "auth from context");

        // Delete the userID from local storage
        localStorage.removeItem("userID");
        setLoginSuccess(true); // Set the login success state to true
        setLoading(false);
        setTimeout(() => {
          setLoginSuccess(false); // Reset the login success state after a timeout
        }, 1000);
        if (source === "register") {
          router.push("/register/registerAs"); // Redirect to home page if source is login
        } else {
          router.push("/");
        }
      } else {
        setError(response.data?.responseMessage);
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
        throw new Error("Verification failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoading(false);
    }
  };
  const handleResendOTP = async () => {
    const userID = localStorage.getItem("userID");

    // If the userID starts with "+91", it's a mobile number
    const isMobileNumber = userID.startsWith("+91");

    const payload = {
      userID: isMobileNumber ? userID : `+91${userID}`, // Prepend +91 if it's not a mobile number
    };

    try {
      setLoading(true);
      // Send PUT request to resendOTP
      const response = await axios.put(
        "http://localhost:1950/api/v1/user/resendOTP",
        payload
      );

      console.log(response);

      if (response.data?.responseCode === 200) {
        console.log("OTP Resent successfully!");
        // Clear the OTP input fields
        const newOTP = Array.from({ length: 6 }, () => "");
        setOTP(newOTP);

        // Clear the input field references
        otpInputsRef.current.forEach((inputRef) => {
          if (inputRef && inputRef.current) {
            inputRef.current.value = "";
          }
        });
        setResendOtpMessage(response.data?.responseMessage);
        setLoading(false);
        setTimeout(() => {
          setResendOtpMessage("");
        }, 3000);
        router.push("/otpVerify");
      } else {
        setError(response.data?.responseMessage);
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <Image
            className="bg-contain"
            src={logo_image}
            alt="footer-image"
            height={30}
            width={130}
          />
        </div>
        <div className={styles.formContainer}>
          <h1 className="text-2xl font-bold">Verify OTP</h1>
          <p className="mt-3 mb-2">Enter the 6 digit code you received.</p>
          <div className="flex mt-3 w-72 -ml-3">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                inputMode="numeric"
                pattern="[0-9]"
                placeholder="0"
                className="w-1/5 ml-2 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={value}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(input) => (otpInputsRef.current[index] = input)}
              />
            ))}
           </div>

          <p className="mt-3">
            <span className="text-gray-500">Not get code yet?</span>
            <a
              href="#"
              className="text-button underline ml-1"
              onClick={handleResendOTP}
            >
              Resend
            </a>
          </p>
          <div className={styles.buttonContainer}>
            <button
              className="w-9/12 bg-button text-white py-2 rounded-lg mt-6"
              onClick={handleVerifyOTP}
              disabled={loading}
            >
              {loading ? "Verifing..." : "Verify"}
            </button>
          </div>
          {loginSuccess && (
            <p className="text-green-500 mt-2">Login successfully!</p>
          )}
          {resendOtpMessage && (
            <p className="text-red-500 mt-2">{resendOtpMessage}</p>
          )}

          {backendError && <p className="text-red-500 mt-2">{backendError}</p>}
        </div>

        <div className={styles.footerImage}>
          <Image src={footer_image} alt="footer-image" />
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

export default VerifyOTP;
