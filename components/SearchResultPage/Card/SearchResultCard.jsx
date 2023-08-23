import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
const SearchResultCard = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      url: "https://s3-alpha-sig.figma.com/img/8eb3/1af4/3be1843f786155fd94ce06ccf586022d?Expires=1693785600&Signature=lm2x6SqidfAGRtjlPSwPHuoAiTxdQ3XXIe3vzVR~czZjUd7dkDBy17awRsh7ahr0mFu1eUP0uUWJE8uzE9R0sPaN-yWHQfAMUmjijDZSTk588ZeOCWhuJr6mWSQbClEFH5BpvXR87LNJXCVqUeDEdOeU1p7cL3iJHUlbR-PVY~chHcjTzXcLxuXDMX77qw-OOstDekTEnm8PjBCD2IsN~xFuXhPXPigrh9-hlZEfu2z0T7nbnCwP~GMzqCMSx3Z0W7g4jhr1g6c5mdMzG8xkEmKVUCid-8Pqri3ju~IahO1zsI0BqmgTWuQN-xpojJW-kFBWue83MEW70rKCf5EtsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/b478/d442/87ed279cae633b23cfb7fed0afebfa06?Expires=1693785600&Signature=dJnkhEoUtfeqLQrO7dvShFgu~D1DY-NsbhcrZulWkrFhfMhR6oyy7xSIyoR2rAICbXGqg2ta6X4WJDh4bU-a2Ydm4p4AxLErrFDu9qdwSCjiN2nfgekvn0LCPYei3OhiirCVAHbftwqE5rbqQzBuBlZSKiI5Iw37L2UgtzXmNl4IJu3FxoQtqiBOGPGhlMKyLaW9fJc4l3ve3OHeK-L94J6uyXuWWRUEhUOjrnEztiLcsbFlRRhTPdi-iLWqP8W9lIzannRY19eQLiavxxGvis6kqTf04taA3t0Kg1gqayb8--R6AD7JheNXhQHrT~R5bxbJKVVeL8mDUnbI2K6qHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/fcc6/db19/34b479a9c5a60bac7df933a6c2cef74a?Expires=1693785600&Signature=mKREY7h9SjE1aktDCNipisGyvTAa0QLX5~bPsI7WZ7HQ9vVmPOV~9vHHLKbb0Ent9LIcGbv~9jhhqbrkviTPIIRyHiieov78Ar1Ckf1s5nOb9ZLFQWK~UWEvgAxkcBi-gpZy88u0nAM4aT0Wfmqu-UkNkoyMERhIfFOydAY4E0BAwWZWxp01pQxM9vfi9cBGxu4txmjZFxsFVRslSr6bukVFxiHWcWmhJGlZmg9pEwu6rB0-kyZtVz3ffixJwpU96EEQMO-1Vv7Voz-01M0u-IemKuUaWH8FaiwlGyGyouCORYZviF-2hM5XORyPdEN-z2c06yOyruPie~rAp15RUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/1177/7191/b028f14eb1c27bb5a32fe97e01331759?Expires=1693785600&Signature=fHeCijq08-uS1rNHzGRv9PATEMG5wGfqOPqDfr7V2pOl1OCa0ox9Z8A0SI4-Jmg6Du0nQwn4FTp~RSbjN5rzW8XlnmV6OTqK4bDpLwUx93ARL-blMjRV06vtV30BS~cJoi3d4gVE~pihA0ltdiKF-aXq-lGUd4ydACSaMSZJBb111V6S~oKi~bHgErCDi4CwDl0-K-Z1UQypahuRTpEyOyR0rDQ0-30ElMC468ZuJAB2zOk9nXK1s6JpipQbsy9tp9GsjRxKWOTq8Mu~duo8LW2NSo9PDACcJjSK8yDOGvFM3KxXtkSE98YIgaJgULHX1tseBaUvELpLDvf8kCr39w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];
  function prevSlide() {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? images.length - 1 : index - 1;
    setIndex(newIndex);
    console.log(index);
  }
  function nextSlide() {
    const isLastSlide = index === images.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  }
  function goToSlide(slideIndex) {
    setIndex(slideIndex);
  }
  return (
    <div className="bg-white flex flex-row align-middle ml-8 mt-6 rounded-xl relative ">
      <div className="h-[300px] w-[300px] mt-4 py-4 px-4 relative group">
        <div
          style={{
            backgroundImage: `url(${images[index].url})`,
            backgroundSize: "fill",
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M16.1506 6.70001L9.85059 13L16.1506 19.3"
              stroke="#232339"
              stroke-width="2"
            />
          </svg>
        </div>
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M9.84942 19.3L16.1494 13L9.84942 6.69999"
              stroke="#232339"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex top-4 justify-center py-2">
          {images.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-xl cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-8">
      <div className="col-span-1 flex flex-row justify-between h-full">
        <h1 className="mb-2 mr-2">Residential</h1>
        <span>
          <h1>MScore</h1>
        </span>
      </div>
      <div className="absolute top-0 right-0  flex flex-col items-end space-y-2">
       
        <div className="flex space-x-2 mt-8">
          <h1>icon wishlist</h1>
          <h1>icon share</h1>
        </div>
      </div>
      </div>
    </div>
  );
};
export default SearchResultCard;
