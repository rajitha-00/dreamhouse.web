"use client";

import { JobCard, PageTitle } from "@/components";

import { jobs } from "@/constants";
import { Fade } from "react-awesome-reveal";
type Section2Props = {};

export const Section2 = ({}: Section2Props): JSX.Element => {
  {
    return (
      <section className="min-h-[60vh] justify-center mt-20 lg:mt-40 items-center mx-auto max-w-[1500px] lg:px-0  ">
        <div className="grid grid-cols-1 gap-4 mx-auto mt-10 md:mt-20">
          {jobs.map((item) => (
            <div key={item.key} className="featureTile ">
              <Fade triggerOnce direction="up">
                {" "}
                <JobCard
                  description={item.description}
                  occupancy={item.occupancy}
                  size={item.size}
                  view={item.view}
                  path1={item.path1}
                  path2={item.path2}
                  path3={item.path3}
                  path4={item.path4}
                  name={item.name}
                  viewpoint={item.viewpoint}
                  balcony={item.balcony}
                  wifi={item.wifi}
                  tea={item.tea}
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
