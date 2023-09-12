import Image from "next/image";
import shield from "../../../assets/moreIcon/Shield.svg";
import mscore from "../../../assets/moreIcon/mScore.png";
import Like from "../../../assets/moreIcon/likeHeart.svg";
import Share from "../../../assets/moreIcon/share.svg";
import MobileViewProperty from "@/assets/moreIcon/MobileViewProperty";
import useWindowWidth from "@/context/useWindowWidth";
// import { useDevice } from 'react-device-detect';
import { useState, useEffect } from "react";

const RightSection = ({ details }) => {
  const windowWidth = useWindowWidth();

 

  return (
    <div className="px-5">
      <div className="flex justify-between mt-2 ">
        <div className="flex gap-2 p-1 items-center">
          <Image className="h-4 w-4" src={shield} alt="icon" />
          <h1 className="text-searchPageText text-xs font-semibold">Residential</h1>
        </div>
        <div className=" flex justify-between gap-2 align-middle text-center text-button p-1">
          <div className="flex bg-searchPageText2 rounded-2xl px-4 items-center align-middle gap-2">
            <Image className="h-4 w-3" src={mscore} alt="icon" />
            <h1 className="font-semibold text-sm text-searchPageText">100</h1>
          </div>

          <div className=" bg-slate-100 rounded-full max-md:hidden p-1 h-[27px] w-[27px]">
            <Image height={40} width={40} src={Like} alt="heartIcon" />
          </div>
          <div className=" bg-slate-100 rounded-full max-md:hidden p-1 h-[27px] w-[27px]">
            <Image height={50} width={50} src={Share} alt="share" />
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col font-semibold text-md justify-between mt-1 ">
        <h1>{details.propertyName}</h1>
        <div className="flex justify-between">
        <h1 className="max-md:pt-3"> ₹{details.price}</h1>
        {/* {console.log(windowWidth)} */}
        <div className="">
        { windowWidth < 768 && <MobileViewProperty/>}
        </div>
        </div>
      </div>
      <div className="flex gap-14 mt-4 text-SearchResultText  justify-between">
        <div className="flex items-center">
          <svg
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
          <p className="underline text-xs"> {details.locality}</p>
        </div>
        <div>
          <h1 className="text-xs max-md:hidden">1.5 BHK</h1>
        </div>
      </div>
      <div className="flex max-md:hidden justify-start gap-2 mt-6 text-SearchResultText ">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_436_633)">
              <path
                d="M16 8.14062C16 7.41636 15.4107 6.82709 14.6864 6.82709H2.20441V2.55772C2.20441 2.06625 2.60424 1.66642 3.09571 1.66642H3.32906C3.57052 1.66642 3.79834 1.76458 3.96377 1.93211L3.92421 1.97167C3.25989 2.63599 3.25989 3.71688 3.92421 4.38128L4.14958 4.60664C4.24892 4.70599 4.37914 4.75569 4.50943 4.75569C4.63972 4.75569 4.76987 4.70606 4.86928 4.60664L7.09435 2.38158C7.29304 2.18289 7.29304 1.86063 7.09435 1.66194L6.86898 1.43658C6.54722 1.11474 6.11931 0.937544 5.66425 0.937544C5.31637 0.937544 4.98459 1.04137 4.70378 1.2339C4.34834 0.865363 3.85399 0.648682 3.32913 0.648682H3.09578C2.04311 0.648682 1.18667 1.50505 1.18667 2.55779V6.8336C0.521716 6.89766 0 7.45935 0 8.14069C0 8.6979 0.349351 9.17404 0.840123 9.36454V11.0417C0.840123 12.5209 1.89301 13.7589 3.28873 14.0458L2.85215 14.4824C2.65346 14.6811 2.65346 15.0033 2.85215 15.202C2.95149 15.3013 3.08171 15.351 3.212 15.351C3.34229 15.351 3.47244 15.3014 3.57185 15.202L4.66597 14.1084H11.3337L12.4282 15.202C12.5275 15.3013 12.6577 15.351 12.7881 15.351C12.9183 15.351 13.0485 15.3014 13.1479 15.202C13.3466 15.0033 13.3466 14.6811 13.1479 14.4824L12.7113 14.0458C14.1072 13.7589 15.16 12.521 15.16 11.0417V9.36454C15.6506 9.1739 16 8.6979 16 8.14062ZM5.66425 1.95521C5.78229 1.95521 5.8957 1.98476 5.9961 2.04042L4.52847 3.50804C4.3846 3.24725 4.42311 2.91204 4.64399 2.69123L5.17915 2.15607C5.30874 2.02655 5.48103 1.95521 5.66425 1.95521ZM1.3136 7.84489H14.6864C14.8495 7.84489 14.9823 7.97756 14.9823 8.14076C14.9823 8.30381 14.8495 8.43655 14.6864 8.43655H1.3136C1.15048 8.43655 1.01781 8.30381 1.01781 8.14076C1.01781 7.97756 1.15048 7.84489 1.3136 7.84489ZM14.1421 11.0416C14.1421 12.1715 13.2228 13.0907 12.0928 13.0907H3.90713C2.77717 13.0907 1.85786 12.1715 1.85786 11.0416V9.46885H14.1421V11.0416Z"
                fill="#434E58"
              />
            </g>
            <defs>
              <clipPath id="clip0_436_633">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-sm">2 Baths</p>
        </div>
        <div className="flex  gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_527_1361)">
              <path
                d="M15.2189 8.0208V7.71608C15.2189 7.15473 14.9283 6.66026 14.4898 6.37433V3.05033C14.4898 2.17576 13.7783 1.46426 12.9038 1.46426H3.09622C2.22166 1.46426 1.51013 2.17576 1.51013 3.05033V6.3743C1.07169 6.66023 0.781062 7.1547 0.781062 7.71605V8.02076C0.332125 8.13898 0 8.54836 0 9.03392V12.5994C0 13.1604 0.443188 13.6196 0.997781 13.6457V14.0677C0.997781 14.3261 1.20725 14.5355 1.46563 14.5355C1.724 14.5355 1.93347 14.3261 1.93347 14.0677V13.647H14.0665V14.0677C14.0665 14.3261 14.276 14.5355 14.5343 14.5355C14.7927 14.5355 15.0022 14.3261 15.0022 14.0677V13.6457C15.5568 13.6196 16 13.1603 16 12.5994V9.03392C16 8.54833 15.6679 8.13898 15.2189 8.0208ZM2.44584 3.05033C2.44584 2.6917 2.73759 2.39995 3.09622 2.39995H12.9038C13.2624 2.39995 13.5542 2.6917 13.5542 3.05033V6.11492H12.9303V5.2903C12.9303 4.71311 12.4608 4.24351 11.8836 4.24351H9.36613C8.78894 4.24351 8.31934 4.71311 8.31934 5.2903V6.11492H7.68066V5.2903C7.68066 4.71311 7.21106 4.24351 6.63387 4.24351H4.11644C3.53922 4.24351 3.06966 4.71311 3.06966 5.2903V6.11492H2.44584V3.05033ZM11.9946 5.29026V6.00383C11.9946 6.06508 11.9448 6.11489 11.8836 6.11489H9.36613C9.30488 6.11489 9.25506 6.06505 9.25506 6.00383V5.29026C9.25506 5.22901 9.30491 5.1792 9.36613 5.1792H11.8836C11.9448 5.1792 11.9946 5.22901 11.9946 5.29026ZM6.74494 5.29026V6.00383C6.74494 6.06508 6.69509 6.11489 6.63387 6.11489H4.11644C4.05519 6.11489 4.00537 6.06505 4.00537 6.00383V5.29026C4.00537 5.22901 4.05522 5.1792 4.11644 5.1792H6.63387C6.69509 5.1792 6.74494 5.22901 6.74494 5.29026ZM1.71678 7.71605C1.71678 7.34911 2.01531 7.05061 2.38225 7.05061H13.6178C13.9847 7.05061 14.2832 7.34914 14.2832 7.71605V7.9863H1.71678V7.71605ZM15.0643 12.5994C15.0643 12.6611 15.0141 12.7113 14.9524 12.7113H1.04759C0.985906 12.7113 0.935687 12.6611 0.935687 12.5994V9.03392C0.935687 8.97223 0.985875 8.92205 1.04759 8.92205H14.9524C15.0141 8.92205 15.0643 8.97223 15.0643 9.03392V12.5994H15.0643Z"
                fill="#434E58"
              />
            </g>
            <defs>
              <clipPath id="clip0_527_1361">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-sm">6 beds</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_527_1365)">
              <path
                d="M1.86351 7.25134C1.93098 7.26097 1.99832 7.26572 2.06529 7.26572C2.22501 7.26572 2.38204 7.23831 2.53101 7.18547V12.3438C2.53101 12.6026 2.74089 12.8125 2.99976 12.8125H12.9998C13.2586 12.8125 13.4685 12.6026 13.4685 12.3438V7.18544C13.6174 7.23813 13.7749 7.2655 13.9365 7.2655C14.3773 7.2655 14.7982 7.05519 15.0622 6.703C15.2876 6.40253 15.3825 6.03225 15.3294 5.66034C15.2763 5.28844 15.0814 4.9595 14.7809 4.73416L13.4685 3.74978V0.46875C13.4685 0.209875 13.2586 0 12.9998 0H11.1248C10.8659 0 10.656 0.209875 10.656 0.46875V1.64038L8.84323 0.280813C8.34657 -0.0911875 7.65289 -0.0911875 7.15607 0.280969L1.2186 4.73409C0.918073 4.95947 0.723261 5.28841 0.670167 5.66031C0.617042 6.03222 0.711917 6.4025 0.93723 6.70284C1.16257 7.00344 1.49154 7.19825 1.86351 7.25134ZM3.46851 11.875V6.56244L7.99976 3.16394L12.531 6.56244V11.875H3.46851ZM11.5935 0.9375H12.531V3.04666L11.5935 2.34353V0.9375ZM1.59826 5.79287C1.61595 5.66887 1.68092 5.55922 1.7811 5.48409L7.71836 1.03116C7.8012 0.969063 7.90054 0.938062 7.99982 0.938062C8.09907 0.938062 8.19826 0.969063 8.28095 1.031L14.2185 5.48413C14.3186 5.55925 14.3836 5.66891 14.4013 5.79287C14.419 5.91684 14.3874 6.04025 14.3122 6.1405C14.2229 6.25966 14.0859 6.328 13.9365 6.328C13.8348 6.328 13.7378 6.29556 13.6561 6.23438L8.28101 2.20297C8.11432 2.07797 7.8852 2.07797 7.71851 2.20297L2.34351 6.23431C2.24339 6.30937 2.11985 6.34088 1.99601 6.32328C1.87204 6.30559 1.76242 6.24066 1.68726 6.14038C1.61217 6.04025 1.58054 5.91684 1.59826 5.79287Z"
                fill="#434E58"
              />
              <path
                d="M15.8627 13.9498L14.6127 12.6998C14.4297 12.5168 14.1329 12.5168 13.9498 12.6998C13.7667 12.8829 13.7667 13.1797 13.9498 13.3627L14.3996 13.8125H1.60039L2.0502 13.3627C2.23327 13.1796 2.23327 12.8829 2.0502 12.6998C1.86717 12.5167 1.57036 12.5167 1.3873 12.6998L0.137297 13.9498C-0.0457656 14.1329 -0.0457656 14.4296 0.137297 14.6127L1.3873 15.8627C1.47883 15.9543 1.59877 16 1.71873 16C1.8387 16 1.95867 15.9543 2.05017 15.8627C2.23323 15.6796 2.23323 15.3829 2.05017 15.1998L1.60039 14.75H14.3996L13.9498 15.1998C13.7667 15.3829 13.7667 15.6797 13.9498 15.8627C14.0413 15.9543 14.1613 16 14.2812 16C14.4012 16 14.5212 15.9543 14.6127 15.8627L15.8627 14.6127C16.0458 14.4297 16.0458 14.1329 15.8627 13.9498Z"
                fill="#434E58"
              />
              <path
                d="M10.8125 6.5625H5.1875C4.92862 6.5625 4.71875 6.77237 4.71875 7.03125V9.84375C4.71875 10.1026 4.92862 10.3125 5.1875 10.3125H10.8125C11.0714 10.3125 11.2812 10.1026 11.2812 9.84375V7.03125C11.2812 6.77237 11.0714 6.5625 10.8125 6.5625ZM5.65625 7.5H7.53125V9.375H5.65625V7.5ZM10.3437 9.375H8.46875V7.5H10.3437V9.375Z"
                fill="#434E58"
              />
            </g>
            <defs>
              <clipPath id="clip0_527_1365">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-sm">1650 SqFt</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 16V19M4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V9"
              stroke="#434E58"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 16V19M20 9C19.4696 9 18.9609 9.21071 18.5858 9.58579C18.2107 9.96086 18 10.4696 18 11V13H6V11C6 10.4696 5.78929 9.96086 5.41421 9.58579C5.03914 9.21071 4.53043 9 4 9C3.46957 9 2.96086 9.21071 2.58579 9.58579C2.21071 9.96086 2 10.4696 2 11V17H22V11C22 10.4696 21.7893 9.96086 21.4142 9.58579C21.0391 9.21071 20.5304 9 20 9Z"
              stroke="#434E58"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm">{details.furniture}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs">
          {details.description}
          <span className="underline text-black">Read More</span>
        </p>
      </div>
      <div className="flex max-md:flex-col max-md:gap-4 justify-between mt-4 ">
        <div className="flex gap-2">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/9ef8/cb32/9b949267cc8214b6727067c4a13af4b4?Expires=1694995200&Signature=C2R9xsmtmBp3lkABrH-d7wMkad1hoa-qiYtA-DEr1ARlzn8zszgDvNsG2OgkjT24~r-PcUcGvZfv7aZ0729OKvTT-mtrxuNm~Vc~Co6tGEQevMjcIp~Di7ZMiEIQH6cNiB6s1L0Eh35q4tbz4i86Cqlw6uaa-RZPsLfRv04DiwgUMsUx4u2x8metqGFW3abBcccka~Vpf0ie84B-6R4v-dGC0Qq-kx7v8-3Kbkw-z9eEvJUtSvQGvYkjfAuoXzzThkEV6UPr5vYT9IngtMXmJKCzASsd1WGlJrFA5YttFd-NAhp3AG140bIZcyauqkmHRo5ISO86b1i8DaFXncq2Ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt="owner Image"
            height={40}
            width={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-xs">Ralph Rechards</p>
            <p className="text-xs font-extralight">Owner</p>
          </div>
        </div>
        <div className="flex justify-center bg-featuredBackground text-sm p-1 px-6 text-white max-md:p-2 max-md:my-2 max-md:px-9 rounded-md">
          <button>
            <div>Contact</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightSection;
