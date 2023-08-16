import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";
import Services from "@/components/HomePage/Services/Services";
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
