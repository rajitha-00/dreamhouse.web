"use client";
import { SwiperSildeHouse } from "@/components/Swiper/SwiperSildeHouse";

type HeroSectionProps = {
  title: string;
  subTitle: string;
};

export const HeroSection = ({}: HeroSectionProps): JSX.Element => {
  return (
    <>
      <div className="h-auto  mx-auto max-h-[100vh] md:min-h-[100vh]">
        <SwiperSildeHouse />
      </div>
    </>
  );
};
