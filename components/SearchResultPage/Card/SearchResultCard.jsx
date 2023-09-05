import LeftSectionCarousel from "../FilterSection/LeftSectionCarousel";
import RightSection from "../FilterSection/RightSection";
const SearchResultCard = ({property}) => {
  return (
    <div className="bg-white flex ml-8 mt-6 rounded-xl py-4 overflow-hidden mr-5">
      <LeftSectionCarousel images={property.images} />
      <RightSection details={property}/>
    </div>
  );
};
export default SearchResultCard;