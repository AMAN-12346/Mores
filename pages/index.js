import Image from "next/image";
import Services from "@/components/HomePage/Services/Services";
import { Inter } from "next/font/google";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const  Home = () => {
  console.log("hello")
  return (
    <div>
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default Home;
