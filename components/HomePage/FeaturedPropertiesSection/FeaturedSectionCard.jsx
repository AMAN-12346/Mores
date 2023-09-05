'use client'
import Image from "next/image"
import bathtub from "../../../assets/FeaturedPropertiesIcons/bathtub.png"; 
import doubleBed from "../../../assets/FeaturedPropertiesIcons/double-bed.png"
import house from "../../../assets/FeaturedPropertiesIcons/measured.png"
import Styles from "./FeaturedProperties.module.css";
const FeaturedSectionCard=({singlePropertyData,key})=>{
    return(
        <div key={key} className={`${Styles.divCardSize}`}>
        <div className={`${Styles.cardBorder}`}>
          <Image
            className={`object-cover aspect-square ${Styles.cardBorder}`}
            src={singlePropertyData.src}
            width={400}
            height={400}
            alt="property"
          />
   
        </div >
        <div className="bg-white py-4 rounded-b-md">
          <div className="flex justify-around ">
            <h2 className="font-bold text-xl">{singlePropertyData.name}</h2>
            <h3 className="text-featuredTorquoise bg-featuredBackground bg-opacity-10 p-2 text-sm rounded-sm font-bold">
              {singlePropertyData.price}
            </h3>
          </div>
          <div className="flex px-4 mt-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/bold/location">
                <path
                  id="Vector"
                  d="M13.7467 5.63335C13.0467 2.55335 10.36 1.16669 8 1.16669C8 1.16669 8 1.16669 7.99334 1.16669C5.64 1.16669 2.94667 2.54669 2.24667 5.62669C1.46667 9.06669 3.57334 11.98 5.48 13.8134C6.18667 14.4934 7.09334 14.8334 8 14.8334C8.90667 14.8334 9.81334 14.4934 10.5133 13.8134C12.42 11.98 14.5267 9.07335 13.7467 5.63335ZM8 8.97335C6.84 8.97335 5.9 8.03335 5.9 6.87335C5.9 5.71335 6.84 4.77335 8 4.77335C9.16 4.77335 10.1 5.71335 10.1 6.87335C10.1 8.03335 9.16 8.97335 8 8.97335Z"
                  fill="#78828A"
                />
              </g>
            </svg>
            <span className="text-xs w-40 font-extralight text-gray-400">{singlePropertyData.address}</span>
          </div>
          <div className="flex mt-4 px-5 gap-6">
              
            <div className="flex gap-1">
              <div>
                <Image src={bathtub} alt="bath tub" />
              </div>
              <div>
                <p className="text-xs">{singlePropertyData.amenities[0].name} </p>
              </div>
            </div>
            <div className="flex gap-1">
              <div>
                <Image src={doubleBed} alt="bed icon" />
              </div>
              <div>
                <p className="text-xs">{singlePropertyData.amenities[1].name}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div>
                <Image src={house} alt="house icon" />
              </div>
              <div>
                <p className="text-xs">{singlePropertyData.amenities[2].name}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-72 mt-4 p-2 bg-featuredBackground text-sm text-white rounded-md m-auto">
            <button>Check It Out</button>
          </div>
        </div>
      </div>
    )
}
export default FeaturedSectionCard