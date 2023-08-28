"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import footer_image from "../assets/footer-image.png";
import right_side_image from "../assets/right_side_image.png";
import logo_image from "../assets/logo_image.png";
import Link from "next/link";
import GooglePlacesAutocomplete from "react-google-autocomplete";
import { apiGooglePlace } from "@/config";

import { useAuth } from "@/context/auth";

const RegisterUser = () => {
  const [selectedRole, setSelectedRole] = useState("individual"); // Changed state and variable names
  const [inputName, setNameValue] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [auth, setAuth] = useAuth();
  const [mobileNumber, setMobileNumber] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  console.log(auth, "auth from register AS>>>>>>>>>>>>>>>");

  const router = useRouter();
  const [otpSuccess, setOtpSuccess] = useState(false);

  const handleRegister = async (event) => {
    console.log(
      city,
      coordinates,
      email,
      mobileNumber,
      ">>>>>>>>>>>>>>>>>>>>>>>"
    );
    event.preventDefault();

    let payload = {
      name: inputName,
      city: city,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      email: email,
      mobileNumber: mobileNumber,
      userType: selectedRole,
    };
    console.log(payload, "register as>>>>>>>>>>>>>>>>>>>>>");

    try {
      const response = await axios.post(
        "http://localhost:1950/api/v1/user/Register",
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
              value={inputName}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12"
              placeholder={
                auth.userResult?.mobileNumber !== undefined
                  ? auth.userResult?.mobileNumber
                  : "Mobile Number"
              }
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              defaultValue={auth.userResult?.mobileNumber} // Autofill mobile number if available
              disabled={auth.userResult?.mobileNumber !== undefined} // Disable input if mobile number is present
            />

            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* Add flag icon here */}
            </span>

            <input
              type="text"
              className="border rounded-lg pl-12 pr-8 py-2 w-9/12 mb-5 mt-5"
              placeholder={
                auth.userResult?.email !== undefined
                  ? auth.userResult?.email
                  : "Email"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={auth.userResult?.email}
              disabled={auth.userResult?.email !== undefined}
            />

            <GooglePlacesAutocomplete
              apiKey={apiGooglePlace}
              selectProps={{
                inputValue: city,
                onChange: setCity,
                placeholder: "City",
              }}
              onLoadFailed={(error) =>
                console.error("Google API loading failed", error)
              }
              onSelect={(place) => {
                if (place.geometry && place.geometry.location) {
                  setCity(place.formatted_address);
                  const selectedLocation = place.geometry.location;
                  setCoordinates({
                    lat: selectedLocation.lat(),
                    lng: selectedLocation.lng(),
                  });
                } else {
                  console.error("Selected place has no geometry or location.");
                }
              }}
              options={{
                types: ["(cities)"],
                componentRestrictions: { country: "IN" }, // Restrict to India
              }}
            />
          </div>
          <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-4">
            Register
          </button>
          <p className="mt-3">
            Want to Login?{" "}
            <Link
              href="/login"
              className="text-button underline cursor-pointer"
            >
              Login
            </Link>
          </p>
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
