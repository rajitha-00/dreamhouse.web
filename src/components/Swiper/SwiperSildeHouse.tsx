"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SL1 from "../../assets/home/swiper/1.jpg";
import SL2 from "../../assets/home/swiper/2.jpg";
import SL3 from "../../assets/home/swiper/3.jpg";
import SL4 from "../../assets/home/swiper/4.jpg";
import SL5 from "../../assets/home/swiper/5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { SwiperCard } from "..";
type SwiperSildeHouseProps = {};

export const SwiperSildeHouse = ({}: SwiperSildeHouseProps): JSX.Element => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        grabCursor={true}
        slidesPerView={"auto"}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard
            alt=""
            path={SL1}
            description=""
            key={1}
            name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
            byCar
            car="5.5 km by vehicle from Temple of tooth"
            byFoot
            foot="1.4 km by foot from Temple of tooth"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            alt=""
            path={SL2}
            description=""
            key={1}
            name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
            byCar
            car="5.5 km by vehicle from Temple of tooth"
            byFoot
            foot="1.4 km by foot from Temple of tooth"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            alt=""
            path={SL3}
            description=""
            key={1}
            name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
            byCar
            car="5.5 km by vehicle from Temple of tooth"
            byFoot
            foot="1.4 km by foot from Temple of tooth"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            alt=""
            path={SL5}
            description=""
            key={1}
            name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
            byCar
            car="5.5 km by vehicle from Temple of tooth"
            byFoot
            foot="1.4 km by foot from Temple of tooth"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            alt=""
            path={SL4}
            description=""
            key={1}
            name="Sri Dalada Maligawa | The Temple of the Sacred Tooth Relic"
            byCar
            car="5.5 km by vehicle from Temple of tooth"
            byFoot
            foot="1.4 km by foot from Temple of tooth"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
