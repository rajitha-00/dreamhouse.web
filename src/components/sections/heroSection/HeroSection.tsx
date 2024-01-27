"use client";
import Image, { StaticImageData } from "next/image";
import HeroImage from "../../../assets/svg/home/topview.svg";
import HeroImage2 from "../../../assets/svg/home/hanthana.svg";

const Fade = require("react-reveal/Fade");
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
      <div className="heroContainer mx-auto max-w-[1400px] items-center flex min-h-[80vh] md:min-h-[40vh] lg:min-h-[95vh]  lg:px-0">
        <div className="grid  md:grid-cols-5 gap-20 grid-cols-1 items-center h-[100%]">
          <Fade bottom>
            <div className="mt-20 md:mt-0 block md:hidden col-span-2">
              <Image
                src={HeroImage}
                alt=""
                className="w-full scale-125 mt-10 "
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="col-span-3 block md:hidden mt-10 md:mt-0">
              <Fade bottom>
                <h1
                  className="heroTitle font-poppins text-start md:text-start font-[600] text-3xl md:text-5xl lg:text-6xl text-primaryColor"
                  style={{ lineHeight: "1.2" }}
                >
                  {title}
                </h1>
              </Fade>
              <Fade bottom>
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
            </div>
          </Fade>
          <Fade left>
            <div className="col-span-2 hidden md:block md:mt-0">
              <Fade bottom>
                <h1
                  className="heroTitle font-poppins text-center md:text-start font-[600] text-3xl md:text-5xl lg:text-6xl text-primaryColor"
                  style={{ lineHeight: "1.2" }}
                >
                  {title}
                </h1>
              </Fade>
              <Fade bottom>
                <h2
                  className="heroSubTitle text-xl text-center md:text-start font-[600]  md:text-2xl lg:text-3xl md:pt-6 font-poppins"
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
            </div>
          </Fade>
          <Fade right>
            <div className="hidden md:block col-span-3">
              <Image src={HeroImage} alt="" className="w-full z-20 " />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
