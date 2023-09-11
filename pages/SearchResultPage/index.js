import FeelFreeToContact from "@/components/HomePage/FeelFreeToContact"
import OurNewsBlog from "@/components/HomePage/OurNewsBlog"
import FilterSection from "@/components/SearchResultPage/FilterSection/FilterSection"
import TopBar from "@/components/SearchResultPage/TopBar/TopBar"
const SearchResultPage=()=>{
    return(
        <>      
        <TopBar/>
        <FilterSection/>
        <FeelFreeToContact/>
        <OurNewsBlog/>
        

        </>

    )
}
export default SearchResultPage