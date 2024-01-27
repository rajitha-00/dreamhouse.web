import { PrimaryButton } from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";
import Image from "next/image";

type JobCardProps = {
  path: StaticImageData;
  alt: string;
  name: string;
  view: string;
  size: string;
  description: string;
  occupancy: string;
  hasApply?: boolean;
};

export const JobCard = ({
  path,
  alt,
  size,
  name,
  hasApply,
  occupancy,
  description,
  view,
}: JobCardProps): JSX.Element => {
  return (
    <div className="items-start gap-10  transition ease-in-out delay-150 justify-start shadow-md shadow-[#b4b3b133]  rounded-[6px] grid grid-cols-2 px-5 py-5  bg-[#ffffff2c] ">
      <div className="flex  items-center">
        <div className="px-3 bg-white rounded-[6px]">
          <Image
            className="w-auto relative "
            src={path}
            alt={alt}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="col ml-1 ">
        <div className="col ">
          <p className="text-primaryColor  font-poppins text-justify font-[600] text-xl">
            {name}
          </p>
          <p className="text-primaryColor  font-poppins text-justify font-[500] text-md">
            {view}
          </p>
          <p className="text-primaryColor mt-3 font-poppins text-justify font-[500] text-lg">
            Max occupancy: {occupancy}
          </p>
          <p className="text-primaryColor mt-3 font-poppins text-justify font-[500] text-lg">
            Room size: {size}
          </p>
          <p className="text-primaryColor mt-5  font-poppins text-justify font-[500] text-lg">
            {description}
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
