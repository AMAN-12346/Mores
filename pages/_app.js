import Script from "next/script";

import "../styles/globals.css"; // Import your global styles here
import { AuthProvider, useAuth } from "../context/auth.js";

// import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/raleway";
import "../styles/globals.css"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
        async
      />

      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
