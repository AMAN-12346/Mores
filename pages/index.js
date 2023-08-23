import Image from "next/image";
import FeelFreeToContact from "@/components/HomePage/FeelFreeToContact";
import OurLocation from "@/components/HomePage/OurLocations";
import OurNewsBlog from "@/components/HomePage/OurNewsBlog";
import OurServices from "@/components/HomePage/OurServices";
import Services from "@/components/HomePage/Services/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import SearchSection from "@/components/HomePage/SearchSection";
import { Inter } from "next/font/google";
// import Footer from "@/components/Common/Footer/Footer";
import FeaturedProperties from "@/components/HomePage/FeaturedPropertiesSection/FeaturedProperties";

const inter = Inter({ subsets: ["latin"] });

export const  Home = () => {
  console.log("hello")
  return (
    <div>
      <SearchSection />
      <OurServices />
      <FeaturedProperties />
      <Services/>
      <WhyChooseUs />
      <OurLocation />
      <Testimonials />
      <FeelFreeToContact />
      <OurNewsBlog /> 
    </div>
  );
}

export default Home;
