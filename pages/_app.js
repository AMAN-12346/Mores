import Script from "next/script";

import { AuthProvider, useAuth } from "../context/auth.js";

import "@fontsource/poppins"; // Defaults to weight 400

import "@fontsource/raleway";
import "../styles/globals.css"; // Import your global styles here
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
        async
      />
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer />  */}
    </AuthProvider>
  );
}

export default MyApp;
