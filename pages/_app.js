<<<<<<< HEAD
import Script from 'next/script'
import '../styles/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo&libraries=places"
          async
        />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
=======
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
>>>>>>> 2093560 (Initial commit from Create Next App)
