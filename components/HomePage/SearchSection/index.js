import searchSectionImage from '../../../assets/searchSectionImage.png'
import Image from 'next/image';
const SearchSection = () => {
    return (
      <div
        className="h-screen relative bg-cover bg-center bg-black bg-opacity-50 backdrop-blur-[14px]"
      >
      <Image
        src={searchSectionImage}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white -m-6">
          <h1 className="text-center text-white text-[63px] font-bold leading-[75.60px]">Discover Your New Home</h1>
          <p className="text-sm text-gray-50 ">
            You can get desired awesome property, home, condo, etc. here by name, category, or location.
          </p>
        </div>
  
        {/* Search Inputs Section */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Location:</label>
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Budget:</label>
                <select className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                  <option value="">Any Budget</option>
                  <option value="1">Less than $1000</option>
                  <option value="2">$1000 - $5000</option>
                  {/* Add more budget options */}
                </select>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Property Type:</label>
                <select className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                  <option value="">Any Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  {/* Add more property type options */}
                </select>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 mt-6 rounded-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchSection;
  