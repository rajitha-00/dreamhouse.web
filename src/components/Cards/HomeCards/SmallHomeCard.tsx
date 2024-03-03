import { StaticImageData } from "next/image";
import Image from "next/image";
import CarIcon from "../../../assets/home/kandy/car.svg";
import FootIcon from "../../../assets/home/kandy/foot.svg";

type SmallHomeCardProps = {
  name?: string;
  key?: number;
  byCar?: boolean;
  byFoot?: boolean;
  car?: string;
  foot?: string;
};

export const SmallHomeCard = ({
  name,
  key,
  byCar,
  byFoot,
  car,
  foot,
}: SmallHomeCardProps): JSX.Element => {
  return (
    <div
      key={key}
      className="relative justify-start  min-h-[200px] shadow-lg items-start rounded-[6px] flex flex-col z-0 bg-[#F0F4FB] dark:bg-darkCards"
    >
      <p className="lg:text-primaryColor dark:text-darkPrimary text-experneticColor px-5 mt-5 font-poppins text-start  font-[600] text-xl md:text-xl relative z-20">
        {name}
      </p>
      {byFoot && (
        <div className="flex items-center justify-start px-5 h-16 ">
          <Image
            className="w-8 justify-center relative z-20 "
            src={FootIcon}
            alt=""
            width={8}
            height={8}
          />

          <p className="text-textColorLight dark:text-darkText pl-5  font-poppins text-md text-start md:text-md relative z-20">
            {foot}
          </p>
        </div>
      )}
      {byCar && (
        <div className="flex items-center justify-start px-5 h-20 ">
          <Image
            className="w-8    justify-center relative z-20 "
            src={CarIcon}
            alt=""
            width={8}
            height={8}
          />

          <p className="text-textColorLight dark:text-darkText pl-5  font-poppins text-md text-start md:text-md relative z-20">
            {car}
          </p>
        </div>
      )}
    </div>
  );
};
