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
import repeatImg from '../../../assets/RepeatingImage.png'
import Image from "next/image";
const SearchSection = () => {
  const windowWidth = useWindowWidth();
  const isMobileView = windowWidth < 768; // Adjust breakpoint as needed

  return (
    <div className={`h-screen flex flex-col md:px-10 justify-center max-lg:h-[500px] ${isMobileView ? "h-full" : ""}`} style={{ background: 'url(https://s3-alpha-sig.figma.com/img/3754/edfd/8536a63136da16ed89a1c3e0133959ae?Expires=1695600000&Signature=DHPhrzOnRbdMWQavcj0LYHjBjvfLFgjL0XRnmpcP2NzWCl3p3HbeeehfcHooDvP9hhgUlhYYawNhwf~qANga2lN71IDq1qyqJmJhkUXjGAerQmLPUfqydL50~CGZ60iJ92TkJpinIIEx-4ek4hfG36KSZAzi3Ugmqr~oOZI0bskadNYLqY-4AQ7LSEQT~6yshADjKnc4hzX46iE9-HbvZKDclIIJlqDmgMGNGHc4jTjqcvg1X36axmob-g-RDfbNW3HRqgA5r5IeeiTag-mgnoOB0m1qSdolaVZ86Tr4Zi9tZe-KaXZnqBUGy9fvpKeiKtotrTyFdp549Yam9rEgAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4) no-repeat', backgroundSize: 'cover' }}>
      <div className="items-center 2xl:ml-[400px]">
        <h1 className={`lg:text-5xl lg:text-white lg:font-custom md:text-custom md:text-white md:font-custom lg:pl-24 ${isMobileView ? 'text-4xl px-16 font-semibold text-center text-white leading-tight' : 'md:text-custom2 ml-6'}`}>Discover Your New Home</h1>
        <div className="lg:w-2/3 lg:pl-24 lg:mt-4 md:ml-5">
          <p className={`lg:text-sm lg:text-white lg:font-custom1 md:text-custom1 md:text-white md:font-custom1 ${isMobileView ? 'text-base px-7 leading-relaxed text-white font-light text-center mt-4' : 'md:text-custom3 ml-2 md:w-[600px]'}`}>You can get your desired awesome properties, homes, condos, etc., here by name, category, or location.</p>
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
                <FilterButtons name={"Find Agent"} icon={findagent} isMobileView={isMobileView} />
                <FilterButtons name={"More Options"} icon={moreoptions} isMobileView={isMobileView} />
              </>
            ) :
              <>
                <FilterButtons name={"Buy"} icon={buy} isMobileView={isMobileView} />
                <FilterButtons name={"Rent"} icon={rent} isMobileView={isMobileView} />
                <FilterButtons name={"New Project"} icon={newProject} isMobileView={isMobileView} />
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
      {/* <div style={{ background: `url(../../../assets/RepeatingImage.png) no-repeat`, backgroundSize: 'cover' }}>

     </div> */}
      {/* <div className="flex flex-col justify-end">
        <div className="flex w-full overflow-hidden  ">
          <Image src={repeatImg} width={150} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
          <Image src={repeatImg} width={100} height={50} alt='buildings' />
        </div>
      </div> */}
    </div>

  );
};

export default SearchSection;
