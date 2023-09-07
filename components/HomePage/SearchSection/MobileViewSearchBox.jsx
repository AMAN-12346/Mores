import Image from "next/image";
import magnify from '../../../assets/SearchBoxIcon/magnifyglass.svg';

const MobileViewSearchBox = () => {
  return (
    <div className="flex text-xs items-center p-3 bg-white rounded-md">
      <input
        className="w-[240px] rounded-l-md outline-none placeholder-gray-500"
        placeholder="Search by location, Project Name"
      />
      <div className="bg-primary rounded-md p-2">
        <button className="px-2  rounded-md text-white focus:outline-none items-center">
          <Image src={magnify} alt='icon' />
        </button>
      </div>
    </div>
  );
}

export default MobileViewSearchBox;
