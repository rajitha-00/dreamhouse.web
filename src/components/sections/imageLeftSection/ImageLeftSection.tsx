"use client";
import { PageTitle, Paragraph } from "@/components";
import { StaticImageData } from "next/image";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

type ImageLeftSectionProps = {
  title: string;
  subTitle?: string;
  path: StaticImageData;
  description: string;
};

export const ImageLeftSection = ({
  path,
  description,
  title,
}: ImageLeftSectionProps): JSX.Element => {
  return (
    <Fade bottom>
      <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-between h-full">
        <Fade left>
          <div className="col-span-2 md:mt-0">
            <Image
              className="h-auto md:w-full mx-auto"
              width={"400"}
              height={"400"}
              src={path}
              alt=""
            />
          </div>
        </Fade>

        <Fade right>
          <div className="col-span-3 mt-10 md:mt-0">
            <Fade bottom>
              <PageTitle start title={title} />
            </Fade>
            <Fade bottom>
              <div className="mt-5">
                <Paragraph start paragraph={description} />
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};
