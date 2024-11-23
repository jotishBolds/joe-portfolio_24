import React from "react";
import Intro from "./intro";
import FindMeOn from "./findmeon";
import MySite from "./mysite";
import Resume from "./resume";

import Projects from "./projects";
import DesignPortfolio from "./designs";
import SubForm from "./sub-form";
import Testimonial from "./testimonials";
import Quotes from "./quotes";

const Grid = () => {
  return (
    <>
      {" "}
      <section>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
            <Intro />
            <FindMeOn />
            <MySite />
            <Resume />
            <DesignPortfolio />
            <Projects />
            <SubForm />
            <Testimonial />
            <Quotes />
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
