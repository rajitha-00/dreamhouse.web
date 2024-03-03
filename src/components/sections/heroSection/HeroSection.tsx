"use client";
import Image, { StaticImageData } from "next/image";
import HeroImage from "../../../assets/svg/home/topview.svg";
import HeroImage2 from "../../../assets/svg/home/hanthana.svg";

import { Fade } from "react-awesome-reveal";
import { SwiperSildeHouse } from "@/components/Swiper/SwiperSildeHouse";
import { Slide4 } from "@/components/Swiper/Slide4";
import { Slide2 } from "@/components/Swiper/Slide2";
import { Slide3 } from "@/components/Swiper/Slide3";
import { Paragraph } from "@/components";
type HeroSectionProps = {
  title: string;
  subTitle: string;
};

export const HeroSection = ({
  subTitle,
  title,
}: HeroSectionProps): JSX.Element => {
  return (
    <>
      <div className="h-auto px-5 mx-auto max-w-[1500px] lg:px-0 mt-20 md:min-h-[70vh]">
        <div className="grid  md:grid-cols-12  grid-cols-1 items-center h-[90%]">
          <div className=" md:mt-0 block md:hidden col-span-2">
            <Fade triggerOnce direction="right">
              <div className="col ">
                <div className="grid grid-cols-12 gap-4 justify-center items-center">
                  <div className="md:col-span-5 col-span-6 gap-4">
                    <Fade triggerOnce direction="up">
                      <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                        <SwiperSildeHouse />
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="  mt-2 h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          <Slide3 />
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="md:col-span-7 col-span-6 md:mt-5 md:pt-5">
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="  h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          {" "}
                          <Slide4 />
                        </div>
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className=" mt-2 h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          <Slide2 />
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-span-3 block md:hidden mt-10 md:mt-0">
            <Fade triggerOnce direction="up">
              <Fade triggerOnce direction="up">
                <h1
                  className="heroTitle font-poppins text-start md:text-start font-[600] text-3xl md:text-5xl lg:text-6xl text-primaryColor"
                  style={{ lineHeight: "1.2" }}
                >
                  {title}
                </h1>
              </Fade>
              <Fade triggerOnce direction="up">
                <h2
                  className="heroSubTitle text-xl text-start md:text-start font-[600]  md:text-2xl lg:text-3xl md:pt-6 font-poppins"
                  style={{
                    background:
                      "linear-gradient(90deg, #1B4FA0 -31.38%, #49BFB5 132.45%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {subTitle}
                </h2>
              </Fade>
            </Fade>
          </div>
          <div className="col-span-4 hidden md:block md:mt-0">
            <Fade triggerOnce direction="left">
              <Fade triggerOnce direction="up">
                <h1
                  className="heroTitle font-poppins text-center md:text-start font-[400] text-3xl md:text-5xl lg:text-6xl text-primaryColor"
                  style={{ lineHeight: "1.2" }}
                >
                  {title}
                </h1>
              </Fade>
              <Fade triggerOnce direction="up">
                <div className="mt-5">
                  <Paragraph paragraph={subTitle} key={1} />
                </div>
              </Fade>
            </Fade>
          </div>
          <div className="hidden md:block col-span-8">
            <Fade triggerOnce direction="right">
              <div className="col hidden  md:hidden lg:block">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 justify-center items-center">
                  <div className="col-span-5 gap-4">
                    <Fade triggerOnce direction="up">
                      <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                        <SwiperSildeHouse />
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="  md:mt-2 h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          <Slide3 />
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="col-span-7 mt-5 pt-5">
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className="  h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          {" "}
                          <Slide4 />
                        </div>
                      </div>
                    </Fade>
                    <Fade triggerOnce direction="up">
                      {" "}
                      <div className=" md:mt-2 h-auto ">
                        <div className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 ">
                          <Slide2 />
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
