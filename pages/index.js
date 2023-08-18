import Footer from "@/components/Common/Footer/Footer";
import OurNewsBlog from "@/components/HomePage/OurNewsBlog";
import Services from "@/components/HomePage/Services/Services";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import { Inter } from "next/font/google";


const Home = () => {
  return (
    <div>
      <Services />  
      <WhyChooseUs />
      <OurNewsBlog />
      <Footer />    
    </div>
  );
};


export default Home;
