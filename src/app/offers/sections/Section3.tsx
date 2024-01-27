"use client";

import {
  CardforImage,
  PageTitle,
  Paragraph,
  SubTitle,
  TallCard,
} from "@/components";

import { Fade } from "react-awesome-reveal";
type Section3Props = {};

export const Section3 = ({}: Section3Props): JSX.Element => {
  {
    return (
      <section className="h-auto min-h-[40vh] lg:mt-40  md:mt-20 mt-10 px-5 mx-auto max-w-[1300px] lg:px-0   ">
        <Fade direction="up">
          {" "}
          <PageTitle title="Dreamhouse offer" />
        </Fade>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 gap-5 mt-10 md:mt-20">
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-center mx-ato">
            <Fade direction="up">
              {" "}
              <div className=" col-span-1">
                <TallCard
                  name="Bed & Breakfast"
                  description="Breakfast Included"
                />
              </div>
            </Fade>
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-center mx-ato">
            <Fade direction="up">
              {" "}
              <div className=" col-span-1">
                <TallCard
                  name="Half Board"
                  description="Breakfast & Dinner Included"
                />
              </div>
            </Fade>
          </div>
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 items-center mx-ato">
            <Fade direction="up">
              {" "}
              <div className="col-span-1">
                <TallCard
                  name="Full Board"
                  description="Breakfast, Lunch & Dinner Included"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
};
