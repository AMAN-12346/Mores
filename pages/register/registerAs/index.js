import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import footer_image from "../assets/footer-image.png";
import right_side_image from "../assets/right_side_image.png";
import logo_image from "../assets/logo_image.png";

const RegisterUser = () => {
  const [selectedRole, setSelectedRole] = useState("individual"); // Changed state and variable names
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const [otpSuccess, setOtpSuccess] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    let payload = {};
    if (selectedRole === "individual") { // Updated condition
      payload.userID = inputValue;
      // Additional individual-related payload data can be added here
    } else if (selectedRole === "agent") { // Updated condition
      payload.userID = inputValue;
      // Additional agent-related payload data can be added here
    }

    try {
      const response = await axios.post("http://localhost:1950/api/v1/user/Register", // Updated endpoint
        payload
      );

      if (response.status === 200) {
        localStorage.setItem("userID", inputValue);
        setOtpSuccess(true);
        setTimeout(() => {
          setOtpSuccess(false);
          router.push("/otpVerify");
        }, 3000);
      }
    } catch (error) {
      console.error("Error registering user:", error);
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
        <p className="mt-2">I am a:</p>
        <div className="mt-5 w-full">
        <button
          className={`py-2 px-6 rounded-xl w-36 ${
            selectedRole === "individual"
              ? "bg-primary text-white"
              : "bg-secondary text-black"
          }`}
          onClick={() => setSelectedRole("individual")}
        >
          Individual
        </button>
        <button
          className={`-ml-3 py-2 px-6 rounded-xl w-36 ${
            selectedRole === "agent"
              ? "bg-primary text-white"
              : "bg-secondary text-black"
          }`}
          onClick={() => setSelectedRole("agent")}
        >
          Agent
        </button>
      </div>
        <form className="mt-8" onSubmit={handleRegister}>
          <div className="relative">
            <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12 mb-5"
              placeholder="Full Name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
             <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12"
              placeholder="Mobile Number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* Add flag icon here */}
            </span>
          </div>
          <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-4">
            Register
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
