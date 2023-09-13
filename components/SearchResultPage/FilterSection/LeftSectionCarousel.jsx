import { useState } from "react";
const LeftSectionCarousel=({images})=>{
    const [index,setIndex]=useState(0)
    images=[
      {
        url:'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        url:'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        url:'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        url:'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
      function prevSlide() {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? images.length - 1 : index - 1;
        setIndex(newIndex);
      }
      function nextSlide() {
        const isLastSlide = index === images.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
      }
      function goToSlide(slideIndex) {
        setIndex(slideIndex);
      }
    return(
        <div className="min-h-[150px] min-w-[300px] lg:h-[260px] max-md:h-[200px] max-sm:h-[160px] px-4 relative group">
        <div
          style={{
            // backgroundImage: `url(${images[index]})`,
            backgroundImage:`url(${images[index].url})`,
            backgroundSize: "fill",
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 aspect-square"
        ></div>
        <div
          onClick={prevSlide}
          className="group block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-white/70 text-white cursor-pointer"
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
          className="group block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-white/70 text-white cursor-pointer"
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
    )
}
export default LeftSectionCarousel