import FilterButtons from "./FilterButtons";
import buy from '../../../assets/SearchFilterIcons/buy.svg';
import rent from '../../../assets/SearchFilterIcons/rent.svg';
import newProject from '../../../assets/SearchFilterIcons/newproject.svg';
import plotandland from '../../../assets/SearchFilterIcons/plotland.svg'
import commercial from '../../../assets/SearchFilterIcons/commercial.svg'
import findagent from '../../../assets/SearchFilterIcons/findagent.svg'
import moreoptions from '../../../assets/SearchFilterIcons/moreoptions.svg'
import SearchBox from "./SearchBox";
import useWindowWidth from "@/context/useWindowWidth";
const SearchSection = () => {
  const windowWidth = useWindowWidth();
  const isMobileView = windowWidth < 768; // Adjust breakpoint as needed

  return (
    <div className={`h-screen flex flex-col md:p-10 justify-center max-lg:h-[500px] ${isMobileView ? "h-full" : ""}`} style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://img1.wallspic.com/crops/8/8/8/0/7/170888/170888-anime-house-window-plant-building-3840x2160.jpg) no-repeat', backgroundSize: 'cover' }}>
      <div className="items-center">
      <h1 className={`lg:text-5xl lg:text-white lg:font-custom md:text-custom md:text-white md:font-custom lg:pl-24  ${isMobileView ?'text-4xl px-16 font-semibold text-center text-white leading-tight' : 'md:text-custom2 ml-6'}`}>Discover Your New Home</h1>
      <div className="lg:w-2/3 lg:pl-24 lg:mt-4 md:ml-5">
        <p className={`lg:text-xl lg:text-white lg:font-custom1 md:text-custom1 md:text-white md:font-custom1 ${isMobileView ?'text-base px-7 leading-relaxed text-white font-light text-center mt-4' : 'md:text-custom3 ml-2 md:w-[600px]'}`}>You can get your desired awesome properties, homes, condos, etc., here by name, category, or location.</p>
      </div>
      </div>

      <div className={`flex lg:justify-center lg:ml-24 lg:pr-20 md:justify-center pt-12 sm:justify-center  max-lg:ml-5 ${isMobileView ? 'flex-wrap justify-center mx-3' : ''}`}>
        {isMobileView ? (
          <div className="flex items-center">
            <FilterButtons name={"Buy"} icon={buy} isMobileView={isMobileView} />
            <FilterButtons name={"Rent"} icon={rent} isMobileView={isMobileView} />
            <FilterButtons name={"New Project"} icon={newProject} isMobileView={isMobileView} />
          </div>
        ) : (
          <div className="flex gap-1">
            {windowWidth >= 1024 ? (
              <>
                <FilterButtons name={"Buy"} icon={buy} isMobileView={isMobileView} />
                <FilterButtons name={"Rent"} icon={rent} isMobileView={isMobileView} />
                <FilterButtons name={"New Project"} icon={newProject} isMobileView={isMobileView} />
                <FilterButtons name={"Plot and Land"} icon={plotandland} isMobileView={isMobileView} />
                <FilterButtons name={"Commercial"} icon={commercial} isMobileView={isMobileView} />
                <FilterButtons name={"Find Agent"} icon={findagent} isMobileView={isMobileView}/>
                <FilterButtons name={"More Options"} icon={moreoptions} isMobileView={isMobileView} />
              </>
            ) :
              <>
                <FilterButtons name={"Buy"} icon={buy} isMobileView={isMobileView} />
                <FilterButtons name={"Rent"} icon={rent} isMobileView={isMobileView} />
                <FilterButtons name={"New Project"} icon={newProject} isMobileView={isMobileView}/>
                <FilterButtons name={"Plot and Land"} icon={plotandland} isMobileView={isMobileView} />
                <FilterButtons name={"More Options"} icon={moreoptions} isMobileView={isMobileView} />
              </>
            }

          </div>
        )}
      </div>

      <div className={`flex lg:w-full lg:justify-center lg:mb-20 ${isMobileView ? 'justify-center mt-4' : ''}`}>
        <SearchBox isMobileView={isMobileView} />
      </div>
    </div>
  );
};

export default SearchSection;
