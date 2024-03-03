import { StaticImageData } from "next/image";
import Image from "next/image";

type CardforImageProps = {
  path: StaticImageData;
  alt: string;

  key?: number;
};

export const CardforImage = ({
  path,
  alt,
  key,
}: CardforImageProps): JSX.Element => {
  return (
    <div className="min-h-[200px] flex flex-col ">
      <Image
        className=" w-auto h-auto justify-center relative z-10 "
        src={path}
        alt={alt}
        // width={70}
        // height={50}
      />
    </div>
  );
};
