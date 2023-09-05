import FilterButtons from "./FilterButtons";
import buy from '../../../assets/SearchFilterIcons/buy.svg'
import rent from '../../../assets/SearchFilterIcons/rent.svg'
import commercial from '../../../assets/SearchFilterIcons/commercial.svg'
import findAgent from '../../../assets/SearchFilterIcons/findagent.svg'
import newProject from '../../../assets/SearchFilterIcons/newproject.svg'
import moreOptions from '../../../assets/SearchFilterIcons/newProject.svg'
import plotAndLand from '../../../assets/SearchFilterIcons/plotland.svg'
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
const SearchSection = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    // Function to update windowWidth
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isTabletView = windowWidth <= 780;
  return (
    <div className='h-screen flex justify-center items-center lg:w-full md:w-full sm:w-fit xs:w-fit' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://s3-alpha-sig.figma.com/img/ba16/d861/038f66582166c56db4e95aa3280c0054?Expires=1694390400&Signature=ew6bw8Gkegrjhql7nD7uJc3nizJNYYAqdnnFFtV8GzTCQFKhyQSq9JIIFbsQaIHwHnG2hFSsqpBF2wiTSZ2NlB-44dtpq-WSGGla56Vgi~48T3J1umiNwv4VH68cbP-SrR5-iOYv2ZTfpn5d3MRGt4q4vee1mM7l1jNBgz8eWqNyFdTeytzZ70wDvSmmjSqQrLqeGc8GEavA4EA1fXfqMgvyiDn7zsF246SI6RJ--6pj9Jhl53uYClmRAgqk5qndC0B3VK-AWmts7BWz~iAHA~CQkDqGWxOkUtFr7vYf2ngteMShkKlxh0CVJu8cGB0XSkkq0tEkBupNmc6Ux9eJ1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) no-repeat', backgroundSize: 'cover' }}>

      {/* a parent div to everything inside this div with background Image */}
      <div className=''>
        <h1 className='text-custom text-white font-custom'> Discover Your New Home  </h1>
        <div className='w-2/3'>
          <p className='text-custom1 text-white font-custom1'>You can get your desired awesome properties, homes, condos etc. here by name, category or location.</p>
        </div>
        {/* div for all the buttons */}
        <div className='flex gap-2 pt-12'>
          {/* Conditionally render based on screen width */}
          {isTabletView ? <>
            <FilterButtons name={"Buy"} icon={buy} />
            <FilterButtons name={"Rent"} icon={rent} />
            <FilterButtons name={"New Project"} icon={newProject} isTabletView={isTabletView}/>
            <FilterButtons name={"Plot and land"} icon={plotAndLand} isTabletView={isTabletView}/>
            <FilterButtons name={"More Options"} icon={moreOptions} isTabletView={isTabletView} />
          </> : (
            <>
              <FilterButtons name={"Buy"} icon={buy} isTabletView={isTabletView}/>
              <FilterButtons name={"Rent"} icon={rent} isTabletView={isTabletView} />
              <FilterButtons name={"New Project"} icon={newProject} isTabletView={isTabletView} />
              <FilterButtons name={"Plot and land"} icon={plotAndLand} isTabletView={isTabletView} />
              <FilterButtons name={"Commercial"} icon={commercial} isTabletView={isTabletView} />
              <FilterButtons name={"Find Agent"} icon={findAgent} isTabletView={isTabletView}/>
            </>
          )}
 
        </div>
        <div>
          <SearchBox />
        </div>
      </div>

    </div>
  );
};

export default SearchSection;
