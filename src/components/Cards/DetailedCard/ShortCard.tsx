import { StaticImageData } from "next/image";
import Image from "next/image";

type ShortCardProps = {
  path?: StaticImageData;
  alt?: string;
  name: string;
  description?: string;
};

export const ShortCard = ({
  name,
  description,
  path,
  alt,
}: ShortCardProps): JSX.Element => {
  return (
    <div className="justify-center min-h-[200px] items-start rounded-[6px] flex flex-col bg-[#F0F4FB] z-0">
      <p className="lg:text-primaryColor text-DreamhouseColor px-5 lg:mt-6  font-poppins text-start  font-[600] text-xl md:text-2xl relative z-10">
        {name}
      </p>
      <p className="text-textColorLight px-5 my-3 font-poppins text-md text-start md:text-md relative z-10">
        {description}
      </p>
    </div>
  );
};
