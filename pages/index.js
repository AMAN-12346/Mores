import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import { Inter } from "next/font/google";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Services />  
      <Footer />    
    </div>
  );
};


export default Home
