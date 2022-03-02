import React, { useState, useEffect } from "react";

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skill = [
      {
        skill: "Bootstrap",
        backgroundColor: "#CC00CC",
      },
      {
        skill: "JavaScript",
        backgroundColor: "#FDF73F",
      },
      {
        skill: "PHP",
        backgroundColor: "#9933FF",
      },
      {
        skill: "Vuejs",
        backgroundColor: "#00FF80",
      },
      {
        skill: "React",
        backgroundColor: "#3399FF",
      },
      {
        skill: "JQuery",
        backgroundColor: "#0066CC",
      },
    //   {
    //     skill: "Golang",
    //     backgroundColor: "#00CCCC",
    //   },
      {
        skill: "MySQL",
        backgroundColor: "#99FFFF",
      },
      {
        skill: "Git",
        backgroundColor: "#FF8000",
      },
    ];

   setSkills(skill);
  }, []);

  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">Skills</p>
      </div>
      <div className="row">
      {skills.map((el,index) =>
         <div className="col-auto mb-3" key={index}>
             <div className="btn-skill" style={{backgroundColor:el.backgroundColor}}>
             <span>{el.skill}</span>
             </div>
       </div>
      )}
      </div>
    </div>
  );
};
export default Skill;
