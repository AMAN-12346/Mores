import Navbar from "@/components/Common/Navbar/Navbar"
import FilterSection from "@/components/SearchResultPage/FilterSection/FilterSection"
import TopBar from "@/components/SearchResultPage/TopBar/TopBar"
const SearchResultPage=()=>{
    return(
        <>      
        <Navbar/>  
        <TopBar/>
        <FilterSection/>
        <h1>I am search result page</h1>
        </>

    )
}
export default SearchResultPage