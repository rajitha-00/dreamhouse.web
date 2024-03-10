import { StaticImageData } from "next/image";
import Image from "next/image";

type SwiperCardProps = {
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

export const SwiperCard = ({
  path,
  alt,
  name,
  description,
  key,
  byCar,
  byFoot,
  car,
  foot,
}: SwiperCardProps): JSX.Element => {
  return (
    <Image
      className=" h-auto max-h-[100vh] max-w-[100vw] w-full relative  z-10 "
      src={path}
      alt={alt}
      width={0}
      height={0}
    />
  );
};
