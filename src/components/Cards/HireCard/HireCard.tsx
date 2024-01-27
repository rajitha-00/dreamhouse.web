import { StaticImageData } from "next/image";
import Image from "next/image";

type HireCardProps = {
  path: StaticImageData;
  alt: string;
  name: string;
};

export const HireCard = ({ path, alt, name }: HireCardProps): JSX.Element => {
  return (
    <div className="items-center justify-center transition mt-10 w-40 h-40 ease-in-out delay-150 flex flex-col hover:border-[2px] border-[2px] border-DreamhouseColor rounded-[50%] p-10  hover:bg-[#F0F4FB] ">
      <div className="mt-2">
        <Image
          className="w-[40px] h-[40px]  justify-center mx-auto relative"
          src={path}
          alt={alt}
          width={70}
          height={50}
        />
      </div>
      <p className="text-DreamhouseColor mt-2 font-poppins text-center font-[600] text-md md:text-lg">
        {name}
      </p>
    </div>
  );
};
//
