import Footer from "@/components/Common/Footer/Footer";
import FeelFreeToContact from "@/components/HomePage/FeelFreeToContact";
import OurLocation from "@/components/HomePage/OurLocations";
import OurNewsBlog from "@/components/HomePage/OurNewsBlog";
import OurServices from "@/components/HomePage/OurServices";
import Services from "@/components/HomePage/Services/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import SearchSection from "@/components/HomePage/SearchSection";
import { Inter } from "next/font/google";
import FeaturedProperties from "@/components/HomePage/FeaturedPropertiesSection/FeaturedProperties";


const Home = () => {
  return (
    <div>
      <SearchSection />
      <OurServices />
      <FeaturedProperties />
      <Services />  
      <WhyChooseUs />
      <OurLocation />
      <Testimonials />
      <FeelFreeToContact />
      <OurNewsBlog /> 
    </div>
  );
};


export default Home;
