import { StaticImageData } from "next/image";
import Image from "next/image";
import CarIcon from "../../../assets/home/kandy/car.svg";
import FootIcon from "../../../assets/home/kandy/foot.svg";

type CardimageProps = {
  path: StaticImageData;
  alt: string;
  name?: string;
  description?: string;
  key?: number;
  byCar?: boolean;
  byFoot?: boolean;
  car?: string;
  foot?: string;
};

export const Cardimage = ({
  path,
  alt,
  name,
  description,
  key,
  byCar,
  byFoot,
  car,
  foot,
}: CardimageProps): JSX.Element => {
  return (
    <div
      key={key}
      className="relative justify-start h-auto min-h-[200px]  items-start rounded-[6px] flex flex-col z-0 bg-[#F0F4FB] dark:bg-darkCards"
    >
      <Image
        className="w-full h-[full]   justify-center relative z-10 rounded-[6px]"
        src={path}
        alt={alt}
        width={70}
        height={50}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[70%] md:h-[60%] dark:bg-gradient-to-t  dark:from-darkCards dark:via-[#616c86] dark:to-transparent bg-gradient-to-t  from-[#F0F4FB] via-[#f2f5fa] to-transparent z-20"></div>
      <p className="lg:text-primaryColor dark:text-darkPrimary text-experneticColor px-5  font-poppins text-start  font-[600] text-xl md:text-xl relative z-20">
        {name}
      </p>
      {byFoot && (
        <div className="flex items-center justify-start ">
          <Image
            className="w-[48px] justify-center relative z-10 "
            src={FootIcon}
            alt=""
            width={70}
            height={50}
          />

          <p className="text-textColorLight dark:text-darkText px-5 my-3 font-poppins text-md text-start md:text-md relative z-20">
            {foot}
          </p>
        </div>
      )}
      {byCar && (
        <div className="flex items-center justify-start ">
          <Image
            className="w-[48px]    justify-center relative z-10 "
            src={CarIcon}
            alt=""
            width={20}
            height={20}
          />

          <p className="text-textColorLight dark:text-darkText px-5 my-3 font-poppins text-md text-start md:text-md relative z-20">
            {car}
          </p>
        </div>
      )}
    </div>
  );
};
