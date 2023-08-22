import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";
import Services from "@/components/HomePage/Services/Services";
import WhyChooseUs from "@/components/HomePage/WhyChooseUse";
import SearchSection from "@/components/HomePage/SearchSection";
import { Inter } from "next/font/google";
import FeaturedProperties from "@/components/HomePage/FeaturedPropertiesSection/FeaturedProperties";


const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchSection/>
      <FeaturedProperties/>
      <Services />  
      <WhyChooseUs />
      <Footer />    
    </div>
  );
};


export default Home;
