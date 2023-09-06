import Image from "next/image";
import Mscore from "../../../assets/moreIcon/m-score.png";
// import Mverified from "../../../assets/moreIcon/m-score.png"
import Mverified from "../../../assets/moreIcon/mVerified.svg";
import Like from "../../../assets/moreIcon/likeHeart.svg";
import Share from "../../../assets/moreIcon/share.svg";
const RightSectionMview = ({ details }) => {
  console.log(details);
  return (
    <div>
      <div className="flex justify-between m-1  ">
        <div className="flex gap-2 text-base ">
          {/* height={20} width={20} */}
          <Image src={Mverified} height={20} width={20} alt="icon" />
          <h5 className="text-searchPageText font-semibold pt-1">
            Resendential
          </h5>
        </div>
        <div className="flex items-center align-middle text-center gap-4 text-searchPageText ">
          <div className="flex gap-2 items-center justify-between align-middle">
            <div className=" flex gap-2 bg-Background text-base rounded-3xl p-1  items-center">
              <Image
                style={{ height: 19, width: 17 }}
                src={Mscore}
                alt="icon"
              />
              <h1 className="font-bold text-red-700 ">100</h1>
            </div>
            <h1 className="text-black">score</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-semibold text-xl justify-between mt-2 pr-16">
        <h1>{details[0].propertyName}</h1>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col font-semibold text-xl justify-between  pr-3">
          <h1> ₹{details[0].price}</h1>
        </div>
        <div className="flex gap-2  text-SearchResultText text-base items-center">
          <div className="me-3">
            <h1>1.5 BHK</h1>
          </div>
          <div className=" bg-slate-100 rounded-full p-1 h-[30px] w-[30px]">
            <Image height={50} width={50} src={Like} alt="heartIcon" />
          </div>
          <div className=" bg-slate-100 rounded-full p-1 h-[30px] w-[30px]">
            <Image height={50} width={50} src={Share} alt="share" />
          </div>
        </div>
      </div>
      <div className="flex mt-1 text-SearchResultText text-sm items-center">
        <div className="flex items-center">
          <svg //location
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M18.0425 7.39375C17.1237 3.35125 13.5975 1.53125 10.5 1.53125C10.5 1.53125 10.5 1.53125 10.4912 1.53125C7.40246 1.53125 3.86746 3.3425 2.94871 7.385C1.92496 11.9 4.68996 15.7237 7.19246 18.13C8.11996 19.0225 9.30996 19.4688 10.5 19.4688C11.69 19.4688 12.88 19.0225 13.7987 18.13C16.3012 15.7237 19.0662 11.9087 18.0425 7.39375ZM10.5 11.7775C8.97746 11.7775 7.74371 10.5438 7.74371 9.02125C7.74371 7.49875 8.97746 6.265 10.5 6.265C12.0225 6.265 13.2562 7.49875 13.2562 9.02125C13.2562 10.5438 12.0225 11.7775 10.5 11.7775Z"
              fill="#78828A"
            />
          </svg>
          <p className="underline"> {details[0].locality}</p>
        </div>
      </div>

      <div className="mt-4">
        <p>
          {details[0].description}
          <span className="underline text-black">Read More</span>
        </p>
      </div>
      <div className="flex flex-col  mt-2 ">
        <div className="flex my-3 gap-2">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1694995200&Signature=C2R9xsmtmBp3lkABrH-d7wMkad1hoa-qiYtA-DEr1ARlzn8zszgDvNsG2OgkjT24~r-PcUcGvZfv7aZ0729OKvTT-mtrxuNm~Vc~Co6tGEQevMjcIp~Di7ZMiEIQH6cNiB6s1L0Eh35q4tbz4i86Cqlw6uaa-RZPsLfRv04DiwgUMsUx4u2x8metqGFW3abBcccka~Vpf0ie84B-6R4v-dGC0Qq-kx7v8-3Kbkw-z9eEvJUtSvQGvYkjfAuoXzzThkEV6UPr5vYT9IngtMXmJKCzASsd1WGlJrFA5YttFd-NAhp3AG140bIZcyauqkmHRo5ISO86b1i8DaFXncq2Ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt="owner Image"
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-base">Ralph Rechards</p>
            <p className="text-sm font-extralight">Owner</p>
          </div>
        </div>
        <div className="flex justify-center  bg-featuredBackground p-2 my-2 px-9 text-white rounded-md">
          <button>
            <div>Contact</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightSectionMview;
