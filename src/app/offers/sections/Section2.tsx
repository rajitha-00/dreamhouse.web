"use client";

import {
  CardforImage,
  JobCard,
  PageTitle,
  Paragraph,
  SubTitle,
  TallCard,
} from "@/components";
import Card1 from "../../../assets/about/culture/C1.svg";
import Card2 from "../../../assets/about/culture/C2.svg";
import Card3 from "../../../assets/about/culture/C3.svg";
import Card4 from "../../../assets/about/culture/C4.svg";
import { jobs } from "@/constants";
import { Fade } from "react-awesome-reveal";
type Section2Props = {};

export const Section2 = ({}: Section2Props): JSX.Element => {
  {
    return (
      <section className="min-h-[60vh] justify-center mt-20 lg:mt-40 items-center mx-auto max-w-[1300px] lg:px-0  ">
        <Fade direction="up">
          {" "}
          <PageTitle title="Dreamhouse packages" />
        </Fade>
        <div className="grid grid-cols-1 gap-4 mx-auto mt-10 md:mt-20">
          {jobs.map((item) => (
            <div key={item.key} className="featureTile ">
              <Fade direction="up">
                {" "}
                <JobCard
                  description={item.description}
                  occupancy={item.occupancy}
                  size={item.size}
                  view={item.view}
                  path={item.path}
                  alt={item.alt}
                  name={item.name}
                  hasApply
                />
              </Fade>
            </div>
          ))}
        </div>
      </section>
    );
  }
};
