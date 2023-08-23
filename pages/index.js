import OurNewsBlog from "@/components/HomePage/OurNewsBlog";
import Services from "@/components/HomePage/Services/Services";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import { Inter } from "next/font/google";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const  Home = () => {
  console.log("hello")
  return (
    <div>
      <Services />  
      <WhyChooseUs />
      <OurNewsBlog />
      <Footer />    
    </div>
  );
}

export default Home;
