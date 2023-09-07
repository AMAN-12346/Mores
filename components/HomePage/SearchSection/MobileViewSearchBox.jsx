import Image from "next/image";
import magnify from '../../../assets/SearchBoxIcon/magnifyglass.svg';

const MobileViewSearchBox = () => {
  return (
    <div className="flex text-xs items-center p-1 bg-white rounded-md">
      <input
        className="w-[240px] rounded-l-md outline-none placeholder-gray-500"
        placeholder="Search by location, Project Name"
      />
      <div className="bg-primary rounded-md px-2 py-1 items-center">
        <button className="rounded-md text-white focus:outline-none items-center">
          <Image src={magnify} width={9} height={9} alt='icon' />
        </button>
      </div>
    </div>
  );
}

export default MobileViewSearchBox;
