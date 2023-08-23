import Script from 'next/script'

import '../styles/globals.css'; // Import your global styles here


import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/raleway";
import '../styles/globals.css'; // Import your global styles here
import Navbar from "@/components/Common/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
          async
        />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;