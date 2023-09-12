import FeelFreeToContact from "@/components/HomePage/FeelFreeToContact"
import OurNewsBlog from "@/components/HomePage/OurNewsBlog"
import FilterSection from "@/components/SearchResultPage/FilterSection/FilterSection"
import TopBar from "@/components/SearchResultPage/TopBar/TopBar"
import { useRouter } from "next/router"
const SearchResultPage=()=>{
    const router =useRouter()
    const {data}=router.query
    const parsedResults=data?JSON.parse(data):[]
    // console.log(parsedResults)
    return(
        <>      
        <TopBar/>
        <FilterSection data={parsedResults}/>
        <FeelFreeToContact/>
        <OurNewsBlog/>
        

        </>

    )
}
export default SearchResultPage