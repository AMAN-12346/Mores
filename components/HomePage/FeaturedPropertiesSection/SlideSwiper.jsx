"use client"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"
import { sliderSettings } from "./utils/sliderSettings";
// import Styles from './SliderSwiper.module.css'
import Image from "next/image";
import FeaturedSectionCard from "./FeaturedSectionCard";

const SlideSwiper=({properties})=>{
    return(
        <section id='Properties'>
        <div className="mt-5">
          <Swiper {...sliderSettings}>
            {properties.map((card, i) => (
              <SwiperSlide key={i}>
                <FeaturedSectionCard singlePropertyData={card} key={i}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
}
export default SlideSwiper