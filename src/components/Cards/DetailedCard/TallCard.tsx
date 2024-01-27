import { StaticImageData } from "next/image";
import Image from "next/image";

type TallCardProps = {
  name?: string;
  description?: string;
  key?: number;
};

export const TallCard = ({
  name,
  description,
  key,
}: TallCardProps): JSX.Element => {
  return (
    <div
      key={key}
      className="relative justify-center h-auto min-h-[200px]  shadow-md shadow-slate-100 items-start rounded-[20px] flex flex-col z-0"
    >
      <div className="relativetop-0 w-full left-0 right-0 h-[100%] md:h-[100%] rounded-[20px] py-5 hover:bg-gradient-to-b from-[#ebedee] to-[#fdfbfb] ">
        <p className="lg:text-primaryColor text-DreamhouseColor px-5  font-poppins text-start  font-[600] text-xl md:text-2xl relative z-20">
          {name}
        </p>
        <p className="text-textColorLight px-5 my-3 font-poppins text-md text-start md:text-md relative z-20">
          {description}
        </p>
        <ul>
          <li>
            <p className="text-textColorLight z-20 px-5 my-2 font-poppins text-md">
              Benifit-1
            </p>
            <p className="text-textColorLight z-20 px-5 my-2 font-poppins text-md">
              Benifit-1
            </p>
            <p className="text-textColorLight z-20 px-5 my-2 font-poppins text-md">
              Benifit-1
            </p>
            <p className="text-textColorLight z-20 px-5 my-2 font-poppins text-md">
              Benifit-1
            </p>
            <p className="text-textColorLight z-20 px-5 my-2 font-poppins text-md">
              Benifit-1
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
