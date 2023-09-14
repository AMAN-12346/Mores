import Script from "next/script";
import React, { useEffect } from 'react';
import { AuthProvider} from "../context/auth.js";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/raleway";
import "@fontsource/inter";
import "../styles/globals.css"; // Import your global styles here
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import { useRouter } from 'next/router';
import Head from "next/head";
import 'animate.css/animate.css';
import FavImage from '../public/footer-image.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from "@/context/data.js";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [router]);  

  return (
    <AuthProvider>
      <DataProvider>
        <Head>
          <link rel="shortcut icon" href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEVHcEz7/P3g4OD4+Pj9/f35+fn8/Pz+/P34+PjW1tbx8fHz8/P///8BPnHlAAB9kqsANGznDSzmABnEztn0qa8ALGjnACLtaHUAHmHrR1j84eTkAAA/YYnb4ujzoqjoGjajssOruMhyiaUAAFnucHzubnpzngrFAAAADHRSTlMA8BtM5sWg/o4OSkdBDglgAAABLElEQVQ4jY3T6ZKDIAwAYGzBoA1ovep61O71/q+4RgUBd8fNTPvDfEKIgbE9UikigEjIlP0SSQxoA+IkzEsMQvqv8zCPyJ1FLsc0xcW+j9l4TD8BzRocs7YM810/72Lry/L2FYBJm0oTJKDazMs/GgLLJvEKVD04+UrfFxDPADag8mFvVVWsABi7ogEqz8cQ4HVtIYGhVsoexgLJxAbq8b2dBR2mc4Bg3IASS1ojw+7NAXypcQMYqXzeZHqsANYqXYA4ZPhd+CDyAHWgcUG0F7mB4u4BYY9pQOMDaRv1B0htqwlAFwLYPxYB6oAP4v1zE5gOILEDQ+CrCIE0I/fRtp9l1esZaK1n8Ox1D2bkaBMAoB+g928H/2zszy/O+dX7x+WluEnBAbiQN+fhD6/yK9pNVVWiAAAAAElFTkSuQmCC'/>
          <title>MORES - Real Estate</title>
        </Head>
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
          async
        />
        <Navbar />
        <Component {...pageProps}/>
        <Footer /> 
      </DataProvider>
      <ToastContainer theme="dark"/>
    </AuthProvider>
  );
}

export default MyApp;
