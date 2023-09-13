import LeftSectionCarousel from "../FilterSection/LeftSectionCarousel";
import RightSection from "../FilterSection/RightSection";
const SearchResultCard = ({property}) => {
  return (
    <div className="bg-white flex h-70 w-70 max-md:flex-col mx-3 rounded-xl py-4 overflow-hidden my-5 ">
      <LeftSectionCarousel images={property.images} />
      <div className="w-full">
      <RightSection details={property}/>
      </div>
      
    </div>
  );
};
export default SearchResultCard;