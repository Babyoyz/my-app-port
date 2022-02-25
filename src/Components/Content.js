import React from "react";
import About from "./About";
import Contact from "./Contact";
import Skill from "./Skills";
import Hobbies from "./Hobbies";
import Workhistory from "./Workhistory";
import Education from "./Education";
const Content = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="About mt-3">
                <About />
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="Contact mt-3">
                <Contact />
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="Skill mt-3">
                <Skill />
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="Hobbies mt-3">
                <Hobbies />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 cen-border">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="Workhistory mt-3">
                <Workhistory />
              </div>
            </div>
            <div className="col-xs-12 col-md-12">
              <div className="Contact mt-3">
                <Education />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
