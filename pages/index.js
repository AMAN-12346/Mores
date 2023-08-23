import Footer from "@/components/Common/Footer/Footer";
import FeelFreeToContact from "@/components/HomePage/FeelFreeToContact";
import OurLocation from "@/components/HomePage/OurLocations";
import OurNewsBlog from "@/components/HomePage/OurNewsBlog";
import OurServices from "@/components/HomePage/OurServices";
import Services from "@/components/HomePage/Services/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import { Inter } from "next/font/google";


const Home = () => {
  return (
    <div>
      <OurServices />
      <Services />  
      <WhyChooseUs />
      <OurLocation />
      <Testimonials />
      <FeelFreeToContact />
      <OurNewsBlog />
      <Footer />    
    </div>
  );
};


export default Home;
