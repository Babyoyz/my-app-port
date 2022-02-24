import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faGamepad,
  faComputerMouse,
  faMusic,
  faGlassCheers,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">Hobbies</p>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <p>Travel</p>
          </div>
        </div>
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Computer Games</p>
          </div>
        </div>
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faComputerMouse} />
            <p>learn computer language</p>
          </div>
        </div>
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faMusic} />
            <p>Music</p>
          </div>
        </div>
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faGlassCheers} />
            <p>Party</p>
          </div>
        </div>
        <div className="col-auto">
          <div className="btn-hobbies">
            <FontAwesomeIcon icon={faCampground} />
            <p>Camping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
