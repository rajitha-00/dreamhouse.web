import { StaticImageData } from "next/image";
import Image from "next/image";
import CarIcon from "../../../assets/home/kandy/car.svg";
import FootIcon from "../../../assets/home/kandy/foot.svg";

type LongCardProps = {
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

export const LongCard = ({
  path,
  alt,
  name,
  description,
  key,
  byCar,
  byFoot,
  car,
  foot,
}: LongCardProps): JSX.Element => {
  return (
    <div
      key={key}
      className="relative justify-start h-auto min-h-[500px]  items-start rounded-[10px] flex  z-0 bg-[#F0F4FB] dark:bg-darkCards"
    >
      <Image
        className="w-[70%] h-[70%] relative  top-0  justify-start   z-10 rounded-[10px]"
        src={path}
        alt={alt}
        width={70}
        height={50}
      />
      <div className="absolute top-0  right-0 w-[70%] h-[100%] md:h-[100%] dark:bg-gradient-to-l  dark:from-darkCards dark:via-[#616c86] dark:to-transparent bg-gradient-to-l  from-[#F0F4FB] via-[#f2f5fa] to-transparent z-20"></div>
      <div>
        <p className="lg:text-primaryColor dark:text-darkPrimary text-experneticColor px-5 mt-6 font-poppins text-start  font-[600] text-xl md:text-2xl relative z-20">
          {name}
        </p>
        <div className="flex items-center justify-start ">
          <Image
            className="w-16 h-16   justify-center relative z-10 "
            src={FootIcon}
            alt=""
            width={70}
            height={50}
          />

          <p className="text-textColorLight dark:text-darkText px-5 my-3 font-poppins text-md text-start md:text-md relative z-20">
            {foot}
          </p>
        </div>
        <div className="flex items-center justify-start ">
          <Image
            className="w-16 h-16   justify-center relative z-10 "
            src={CarIcon}
            alt=""
            width={20}
            height={20}
          />

          <p className="text-textColorLight dark:text-darkText px-5 my-3 font-poppins text-md text-start md:text-md relative z-20">
            {car}
          </p>
        </div>
      </div>
    </div>
  );
};
