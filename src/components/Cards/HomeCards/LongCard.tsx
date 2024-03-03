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
      className="relative justify-start h-auto min-h-[500px] shadow-lg items-start rounded-[10px] flex md:flex-row flex-col z-0 bg-[#F0F4FB] dark:bg-darkCards"
    >
      <Image
        className=" w-[190%] max-h-[500px] relative  top-0  justify-start   z-10 rounded-[10px]"
        src={path}
        alt={alt}
        width={70}
        height={50}
      />
      <div className="absolute md:top-0 bottom-0 right-0 hidden md:block w-[100%] md:w-[70%] h-[70%] md:h-[100%] dark:bg-gradient-to-l  dark:from-darkCards dark:via-[#616c86] dark:to-transparent bg-gradient-to-l  from-[#F0F4FB] via-[#f2f5fa] to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[70%] md:hidden block md:h-[60%] dark:bg-gradient-to-t  dark:from-darkCards dark:via-[#616c86] dark:to-transparent bg-gradient-to-t  from-[#F0F4FB] via-[#f2f5fa] to-transparent z-20"></div>

      <div className="px-5">
        <p className="lg:text-primaryColor  text-experneticColor  mt-6 font-poppins text-start  font-[600] text-xl md:text-2xl relative z-20">
          {name}
        </p>
        <div className="flex items-center h-16 justify-start mt-5 px-2 w-full md:mt-10">
          <Image
            className="w-8 h-8   justify-center relative z-20 "
            src={FootIcon}
            alt=""
            width={70}
            height={50}
          />

          <p className="text-textColorLight pl-5 my-3 font-poppins text-sm text-start md:text-md relative z-20">
            {foot}
          </p>
        </div>
        <div className="flex items-center px-2 h-20 justify-start ">
          <Image
            className="w-8 h-8   justify-center relative z-20 "
            src={CarIcon}
            alt=""
            width={20}
            height={20}
          />

          <p className="text-textColorLight  pl-5 my-3 font-poppins text-sm text-start md:text-md relative z-20">
            {car}
          </p>
        </div>
      </div>
    </div>
  );
};
