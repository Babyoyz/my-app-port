import React,{useState,useEffect} from "react";

const About = () => {

    const [dateofbrith, setDateofbrith] = useState(0)

    useEffect(() => {
        let today = new Date();
        let birthDate = new Date('1995/08/04');
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setDateofbrith(age)

    }, [])


  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">About</p>
      </div>
      <div className="">
        <p className="About-p">
          Age: <span className="About-color-span"> {dateofbrith} </span>
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
