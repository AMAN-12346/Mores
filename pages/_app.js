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
import FavImage from '../public/footer-image.png';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
  // useEffect(() => {
  //   window.scrollTo(0,0);
  // }, [router]);  

  return (
    <AuthProvider>
      <Head>
        {/* <link rel="icon" href='https://cdn-icons-png.flaticon.com/128/11086/11086535.png' sizes="6x6 32x32" /> */}
        <link rel="icon" href='../assets/moreIcon/MoresSvg.svg' sizes="16x16 32x32" />
        <title>Mores</title>
      </Head>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
        async
      />
      <Navbar />
      <Component {...pageProps}/>
      <Footer /> 
    </AuthProvider>
  );
}

export default MyApp;
