"use client";

import { HireCard, PageTitle, Paragraph, SubTitle } from "@/components";
import Image from "next/image";
import Screening from "../../../assets/svg/screening.svg";
import Assigment from "../../../assets/svg/assignment.svg";
import Interview from "../../../assets/svg/interview.svg";
import Offer from "../../../assets/svg/offer.svg";
import FlowArrow from "../../../assets/careers/flowArrow.svg";
import { Fade } from "react-awesome-reveal";
type Section1Props = {};

export const Section1 = ({}: Section1Props): JSX.Element => {
  {
    return (
      <section className="md:min-h-[40vh] mt-20 justify-center items-center ">
        <Fade direction="up">
          {" "}
          <PageTitle title="We are ready to serve you!" />
        </Fade>
        <div className="flex md:flex-row flex-col items-center justify-center lg:max-w-[1400px] mx-auto mt-10 md:mt-20">
          <Fade direction="up">
            <div className="p-2">
              <HireCard name="Explore" path={Screening} alt="screening" />
            </div>
          </Fade>
          <Fade direction="up">
            <div>
              <Image
                className="md:w-[80px] justify-center relative mt-10  rotate-90 md:rotate-0"
                src={FlowArrow}
                alt={"flow-arrow"}
                width={70}
                height={50}
              />
            </div>
          </Fade>
          <Fade direction="up">
            <div className="p-2">
              <HireCard name="Call" path={Assigment} alt="assigment" />
            </div>
          </Fade>
          <Fade direction="up">
            <div>
              <Image
                className="md:w-[80px] justify-center relative mt-10  rotate-90 md:rotate-0"
                src={FlowArrow}
                alt={"flow-arrow"}
                width={70}
                height={50}
              />
            </div>
          </Fade>
          <Fade direction="up">
            <div className="p-2">
              <HireCard name="Visit Us" path={Interview} alt="interview" />
            </div>
          </Fade>
          <Fade direction="up">
            <div>
              <Image
                className="md:w-[80px]  justify-center relative mt-10  rotate-90 md:rotate-0"
                src={FlowArrow}
                alt={"flow-arrow"}
                width={70}
                height={50}
              />
            </div>
          </Fade>
          <Fade direction="up">
            <div className="p-2">
              <HireCard name="Enjoy" path={Offer} alt="offer" />
            </div>
          </Fade>
        </div>
      </section>
    );
  }
};
