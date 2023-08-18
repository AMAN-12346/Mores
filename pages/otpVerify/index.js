
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the router from Next.js
import axios from "axios"; // Import axios for making API requests
import footer_image from "../register/assets/footer-image.png";
import right_side_image from "../register/assets/right_side_image.png";
import logo_image from "../register/assets/logo_image.png";
import Services from "@/components/HomePage/Services/Services";

const VerifyOTP = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const router = useRouter(); // Get the router instance
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };
  const handleVerifyOTP = async () => {
    const userID = localStorage.getItem("userID");
    const enteredOTP = otp.join("");

    // If the userID starts with "+91", it's a mobile number
    const isMobileNumber = userID.startsWith("+91");

    const payload = {
      userID: isMobileNumber ? userID : `+91${userID}`, // Prepend +91 if it's not a mobile number
      otp: enteredOTP,
    };
    console.log("payload from verify : ", payload)
    try {
      // Send POST request to verify OTP
      const response = await axios.post(
        "http://localhost:1950/api/v1/user/verifyOTP",
        payload
      );

      if (response.status === 200) {
        // Delete the userID from local storage
        localStorage.removeItem("userID");
        setLoginSuccess(true); // Set the login success state to true
        setTimeout(() => {
          setLoginSuccess(false); // Reset the login success state after a timeout
          router.push("/");
          // router.push("/otpVerify");
        }, 3000); // Set the timeout to 3 seconds (adjust as needed)

        // Redirect the user to a success page or any other desired location
        // router.push("/login");
      }
    } catch (error) {
      // Handle error here (show error message or handle it in another way)
      console.error("Error verifying OTP:", error);
    }
  };



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
        <p className="mt-2">Enter the 5 digit code received on your email address.</p>

        <div className="flex mt-6 w-9/12">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              inputmode="numeric"
              pattern="[0-9]"
              placeholder="0"
              className="w-1/5 ml-2 px-2 py-1 text-center border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={value}
              onChange={(e) => handleOTPChange(index, e.target.value)}
            />
          ))}
        </div>
        <p className="mt-6">
          <span className="text-gray-500">Not get code yet?</span>
          <a href="#" className="text-blue-500 ml-1 hover:underline">Resend</a>
        </p>
        <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-6" onClick={handleVerifyOTP}>Verify</button>

        {loginSuccess && (
          <p className="text-green-500 mt-2">Login successfully!</p>
        )}

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

export default VerifyOTP
