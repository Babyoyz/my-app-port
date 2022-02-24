import React from "react";
import About from "./About";
import Contact from "./Contact";
const Content = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="About mt-3">
            <About />
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="Contact mt-3">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
