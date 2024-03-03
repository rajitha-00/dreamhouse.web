"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SL1 from "../../assets/home/swiper/1.png";
import SL2 from "../../assets/home/swiper/2.png";
import SL3 from "../../assets/home/swiper/3.png";
import SL4 from "../../assets/home/swiper/4.png";
import SL5 from "../../assets/home/swiper/5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import Image from "next/image";
type Slide3Props = {};

export const Slide3 = ({}: Slide3Props): JSX.Element => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <Image alt="" src={SL3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={SL4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={SL5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={SL1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={SL2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
