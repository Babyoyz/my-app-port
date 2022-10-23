import React from "react";
import imgprofile from '../asset/img/profile.jpg'
const Header = () => {
  return (
    <div className="Header-div ps-1 pe-1">
      <div className="row">
        <div className="col-5">
          <div className="d-flex justify-content-center">
                <img
                className="img-profile"
                src={imgprofile}
                />
          </div>
        </div>
        <div className="col-7 d-flex dev-text-name justify-content-center">
        <div className="align-self-center">
            <p className="f-18">Thaweeporn Areepun</p>
            <p className="f-18 text-end">Nickname: Oil</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
