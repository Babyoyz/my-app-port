import React, { useState, useEffect } from "react";

const Skill = () => {

  const [skillslang, setSkillslang] = useState({});
  useEffect(() => {

    const skillLang = {
      "SkillLang":[
        {
          skill: "JavaScript",
          backgroundColor: "#B08615",
        },
        {
          skill: "PHP",
          backgroundColor: "#9933FF",
        },
        {
          skill: "Go (gin framework)",
          backgroundColor: "#1578B0",
        },
        {
          skill:"MySQL",
          backgroundColor: "#9cc6ef",
        }
      ],
      "Framework":[
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
      
        {
          skill: "Bootstrap",
          backgroundColor: "#CC00CC",
        },
      ],
      "Tools":[
        {
          skill: "Git",
          backgroundColor: "rgb(255, 128, 0)",
        },
        {
          skill: "Git hub",
          backgroundColor: "#1BE0AA",
        },
        {
          skill:"VsCode",
          backgroundColor:"#0066CC",
        },
         {
          skill:"Workbench",
          backgroundColor:"#9cc6ef",
         }
      ]
    };

  setSkillslang(skillLang);
   
  }, []);

  return (
    <div className="div-menu">
      {
        Object.entries(skillslang).length > 0 ? 
        Object.keys(skillslang).map((item,index) =>
         <div className="About-Header" key={index}>
            <p className="text-center textmenu-header">

            {item === 'SkillLang' ?'Programming language and database skills':
            
            item === 'Framework' ? 'Framework and library':item}</p>
            <div className="row d-md-flex justify-content-md-center">
            {
             skillslang[item].map((el,index) =>
            <div className="col-auto mb-3" key={index}>
                  <div className="btn-skill" style={{backgroundColor:el.backgroundColor}}>
                  <span>{el.skill}</span>
                  </div>
            </div>
            )
            }
            </div>
          </div>
        )
        :<div></div>
      }


    </div>
  );
};
export default Skill;
