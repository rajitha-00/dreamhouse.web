"use client";
import { PrimaryButton } from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

type JobCardProps = {
  path1: StaticImageData;
  path2: StaticImageData;
  path3: StaticImageData;
  path4: StaticImageData;

  name: string;
  view: string;
  size: string;
  description: string;
  occupancy: string;
  hasApply?: boolean;
  lightings?: string;
  viewpoint?: string;
  balcony?: string;
  wifi?: string;
  tea?: string;
};

export const JobCard = ({
  path2,
  path3,
  path1,
  path4,
  size,
  name,
  hasApply,
  occupancy,
  description,
  view,
  lightings,
  viewpoint,
  balcony,
  wifi,
  tea,
}: JobCardProps): JSX.Element => {
  return (
    <div className="items-center gap-10   transition ease-in-out delay-150 rounded-[6px] grid grid-cols-12 px-5 py-5   ">
      <div className="lg:col-span-8 col-span-12 ">
        <div className="px-3 bg-white flex  items-center rounded-[6px]">
          <Fade triggerOnce direction="left">
            <div className="col block">
              <div className="grid grid-cols-12 gap-4 justify-center items-baseline">
                <div className="col-span-8 gap-4">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <Image
                      className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                      src={path1}
                      alt={""}
                      width={70}
                      height={50}
                    />
                  </Fade>
                </div>
                <div className="col-span-4 gap-4">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  md:mt-2 h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                        src={path2}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 justify-center items-start mt-2">
                <div className="col-span-4">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tl-[80px] rounded-br-[80px] z-10 "
                        src={path3}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
                <div className="col-span-8">
                  <Fade triggerOnce direction="up">
                    {" "}
                    <div className="  h-auto ">
                      <Image
                        className=" w-auto justify-center relative rounded-tr-[80px] rounded-bl-[80px] z-10 "
                        src={path4}
                        alt={""}
                        width={70}
                        height={50}
                      />{" "}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-12">
        <div className="col ml-1 ">
          <p className="text-primaryColor  font-poppins text-justify font-[600] text-xl">
            {name}
          </p>
          <p className="text-primaryColor  font-poppins text-justify font-[500] text-md mt-10">
            {view}
          </p>
          <p className="text-primaryColor mt-3 font-poppins text-justify font-[500] text-lg">
            {occupancy}
          </p>
          <p className="text-primaryColor mt-3 font-poppins text-justify font-[500] text-lg">
            {size}
          </p>
          <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
            {description}
          </p>
          <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
            {lightings}
          </p>
          {viewpoint && (
            <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
              {viewpoint}
            </p>
          )}
          {balcony && (
            <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
              {balcony}
            </p>
          )}
          <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
            {tea}
          </p>
          <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
            {wifi}
          </p>
        </div>
        {hasApply && (
          <>
            <PrimaryButton name="Book now" hasArrow url="" />
          </>
        )}
      </div>
    </div>
  );
};
