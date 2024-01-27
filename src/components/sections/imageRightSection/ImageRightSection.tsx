"use client";
import { PageTitle, Paragraph, SubTitle } from "@/components";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
type ImageRightSectionProps = {
  title: string;
  subTitle: string;
  path: StaticImageData;
  description: string;
};

export const ImageRightSection = ({
  path,
  subTitle,
  description,
  title,
}: ImageRightSectionProps): JSX.Element => {
  return (
    <Fade direction="up">
      {" "}
      <div className="grid md:grid-cols-5 gap-10 md:gap-32 items-center justify-between h-full">
        <Fade direction="up">
          {" "}
          <div className="col-span-1 block md:hidden md:col-span-2">
            <Image
              className="h-auto w-[500px] md:w-[600px] rounded-[16px] md:rounded-[60px] mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt=""
            />
          </div>
        </Fade>
        <Fade direction="left">
          <div className="col-span-1 md:col-span-3">
            <Fade direction="up">
              {" "}
              <PageTitle start title={title} />
            </Fade>
            <Fade direction="up">
              {" "}
              <div className="mt-5">
                <SubTitle start subTitle={subTitle} />
              </div>
            </Fade>
            <Fade direction="up">
              {" "}
              <div className="mt-5">
                <Paragraph start paragraph={description} />
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="col-span-1 hidden md:block md:col-span-2">
            <Image
              className="h-auto w-[500px] md:w-[600px] md:rounded-[60px] mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt=""
            />
          </div>
        </Fade>
      </div>
    </Fade>
  );
};
