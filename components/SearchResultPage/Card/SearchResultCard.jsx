import LeftSectionCarousel from "../FilterSection/LeftSectionCarousel";
import RightSection from "../FilterSection/RightSection";
const SearchResultCard = ({property}) => {
  return (
    <div className="bg-white flex max-md:flex-col  rounded-xl py-4 overflow-hidden me-3 my-5 ">
      {/* <div className="flex"> */}
      {/* <LeftSectionCarousel images={property.images} />  */}
      
      
      <div className="w-full">
      <RightSection details={property}/>
      </div>
      
    </div>
  );
};
export default SearchResultCard;