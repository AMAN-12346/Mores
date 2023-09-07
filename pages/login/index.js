// "use client";
// //TODO country constant, dropdown on mobile number
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router"; // Import the router from Next.js
// import axios from "axios"; // Import axios for making API requests
// import footer_image from "../register/assets/footer-image.png";
// import right_side_image from "../register/assets/right_side_image.png";
// import logo_image from "../register/assets/logo_image.png";
// import Link from "next/link";

// const LoginUser = () => {
//   const [selectedMethod, setSelectedMethod] = useState("email");
//   const [inputValue, setInputValue] = useState("");
//   const router = useRouter(); // Get the router instance
//   const [otpSuccess, setOtpSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const[loading,setLoading] = useState(false)

//   const handleLogin = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     let payload = {};
//     if (selectedMethod === "email") {
//       payload.userID = inputValue;
//     } else if (selectedMethod === "phone") {
//       payload.userID = "+91" + inputValue;
//     }

//     try {
//       setLoading(true)
//       console.log("i am in login");
//       // Send POST request to the API endpoint
//       const response = await axios.post(
//         "http://localhost:1950/api/v1/user/Login",
//         payload
//       );
//       console.log(response.data?.responseCode, ">>>>>>>>>>>>>>>>>login");

//       if (response.data?.responseCode === 200) {
//         localStorage.setItem("userID", inputValue);
//         localStorage.setItem("isLogin", true);//!

//         setOtpSuccess(true); // Set the login success state to true
//         setLoading(false)
//         setTimeout(() => {
//           setOtpSuccess(false); // Reset the login success state after a timeout
//           router.push("/otpVerify");
//         }, 3000); // Set the timeout to 3 seconds (adjust as needed)
//       } else {
//         setError(response.data?.responseMessage);
//         setTimeout(() => {
//           setError("");
//         }, 3000);
//         setLoading(false)

//       }
//     } catch (error) {
//       setError(error.response.data.responseMessage);
//       setTimeout(() => {
//         setError("");
//       }, 3000);
//       console.error("Error logging in:", error);
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="flex justify-between">
//       <div className="p-24 bg-login_background">
//         <div className="absolute top-4 left-4">
//           <Image
//             className="bg-contain"
//             src={logo_image}
//             alt="footer-image"
//             height={30}
//             width={130}
//           />
//         </div>
//         <h1 className="text-2xl font-bold">Login</h1>
//         <p className="mt-2">Access back to your account</p>
//         <div className="mt-8 w-full">
//           <button
//             className={`py-2 px-6 rounded-xl w-36 ${
//               selectedMethod === "email"
//                 ? "bg-primary text-white"
//                 : "bg-secondary text-black"
//             }`}
//             onClick={() => setSelectedMethod("email")}
//           >
//             Email
//           </button>
//           <button
//             className={`-ml-3 py-2  px-6 rounded-xl w-36 ${
//               selectedMethod === "phone"
//                 ? "bg-primary text-white"
//                 : "bg-secondary text-black"
//             }`}
//             onClick={() => setSelectedMethod("phone")}
//           >
//             Phone
//           </button>
//         </div>
//         <form className="mt-8 " onSubmit={handleLogin}>
//           <div className="relative ">
//             <input
//               type="text"
//               className="border rounded-lg pl-12 pr-8 py-2 w-9/12"
//               placeholder={
//                 selectedMethod === "email"
//                   ? "Enter your email"
//                   : "Enter mobile number"
//               }
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
//               {selectedMethod === "email" ? "✉️" : "📱"}
//             </span>

//             <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
//               {/* Add flag icon here */}
//             </span>
//           </div>
//           <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-4" disabled={loading}>
//             {loading ? "Loading..." : "Login"}
//           </button>
//           <p className="mt-3">
//             Don't have an account?{" "}
//             <Link
//               href="/register"
//               className="text-button underline cursor-pointer"
//             >
//               Register
//             </Link>
//           </p>
//         </form>
//         <div>
//         {otpSuccess && (
//           <p className="text-green-500 mt-2">Otp sent successfully!</p>
//         )}
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         </div>

//         <div >
//           <Image
//             src={footer_image}
//             alt="footer-image"
//             height={500}
//             width={500}
//           />
//         </div>
//       </div>
//       <div className='h-[700px] w-[600px] object-cover' style={{
//         backgroundImage:`url(https://s3-alpha-sig.figma.com/img/1f81/ac45/4fd5c5795c71952b459a053c984a29de?Expires=1694390400&Signature=DGFPo2tnfrR8tWUUl9SizkPV3St~QGIh~RMioewTjHL3UVQG4Zs3yNuF9fCdjXeZLNSr9TvMoo1YuhdUbYMjN74rNt2QROO5IBP6GNUv-EQUs2hk8IocJmNRZeEiohbiahy721QFnh4NhO7gSLo-qqXFr-C7J-kT-iW4uMt~RzBBSU7oRNk~SjlQRA6qu3O~r4-Os7~rzE1KGlHk~dNGM1CRtw8UD81ussN~8lJ2HtrrqPT1jChmrZ-OyYq-apUGZK4YuX~bQuK0BYppc446K0ZpKk3tbphp2XGo3Kocu5s0khWPiYGr-C-Zs0gUaGPUBWrgXqz1wnN907434vBi8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`
//       }}>
//       </div>
//     </div>
//   );
// };

// export default LoginUser;

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
<<<<<<< HEAD
import { Button } from "@material-tailwind/react";
// import  "./loginStyles.css"
import loginStyles from "./loginStyles.module.css";
=======
import styles from "./LoginUser.module.css"; // Import the custom styles
>>>>>>> 4d0d82390ea302ce88464c3697cb8e2f19408b66

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
        setLoading(false);
        setTimeout(() => {
          setOtpSuccess(false); // Reset the login success state after a timeout
          router.push("/otpVerify");
        }, 3000); // Set the timeout to 3 seconds (adjust as needed)
      } else {
        setError(response.data?.responseMessage);
        setTimeout(() => {
          setError("");
        }, 3000);
        setLoading(false);
      }
    } catch (error) {
      setError(error.response?.data.responseMessage);
      setTimeout(() => {
        setError("");
      }, 3000);
      console.error("Error logging in:", error);
      setLoading(false);
    }
  };
<<<<<<< HEAD
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 p-32 bg-login_background  bg-slate-600">
        {/* ${"loginStyles.tView"} */}

        <div className="absolute top-4 left-4">
          <Image
            className="bg-contain"
            src={logo_image}
            alt="footer-image"
            height={30}
            width={130}
          />
        </div>
        <h1 className="text-2xl  font-bold">Login</h1>
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
        <form className="mt-8" onSubmit={handleLogin}>
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
          <button className="w-9/12 bg-button text-white py-2 rounded-lg mt-4" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>

          {/* <Button variant="contained">
            Contained
          </Button> */}
          <p className="mt-3">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-button underline cursor-pointer"
=======

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
              className={`${
                styles.buttonSelect
              }py-2 px-6  md:rounded-l-lg  rounded-l-xl lg:w-36 w-60 mt-3 ${
                selectedMethod === "email"
                  ? "bg-primary text-white"
                  : "bg-secondary text-black"
              }`}
              onClick={() => setSelectedMethod("email")}
>>>>>>> 4d0d82390ea302ce88464c3697cb8e2f19408b66
            >
              Email
            </button>
            <button
              className={`${
                styles.buttonSelect
              }-ml-3 py-2  md:rounded-r-lg rounded-r-lg px-6 lg:w-36 w-60 mt-3 ${
                selectedMethod === "phone"
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
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-button underline cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </div>
            {otpSuccess && (
              <p className="text-green-500 mt-2">Otp sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>

        <div> </div>
        <div className={styles.footerImage}>
          <Image src={footer_image} alt="right-side-image" />
        </div>
      </div>
<<<<<<< HEAD
      <div className="w-1/2 bg-slate-950">
        {/* ${loginStyles.tabletImage} */}
        {/* <div className="" style={{display:'flex', }}>
        <Image
          src={right_side_image}
          alt="footer-image"
          height={800}
          width={710}
=======
      <div className={styles.rightContainer}>
        <Image
          src={right_side_image}
          alt="right-side-image"
          layout="fill"
          objectFit="cover"
>>>>>>> 4d0d82390ea302ce88464c3697cb8e2f19408b66
        />
        
        </div> */}
      </div>
    </div>
  );
};

export default LoginUser;
