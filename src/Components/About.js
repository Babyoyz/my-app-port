import React from "react";

const About = () => {
  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">About</p>
      </div>
      <div className="">
        <p className="About-p">
          Age: <span className="About-color-span">26</span>
        </p>
        <p className="About-p">
          Nationality: <span className="About-color-span">Thai</span>
        </p>
        <p className="About-p">
          Status: <span className="About-color-span">Single</span>
        </p>
        <p className="About-p">
          Military status: <span className="About-color-span">Completed </span>
        </p>
      </div>
    </div>
  );
};

export default About;
