import React from "react";

const Header = () => {
  return (
    <div className="Header-div ps-1 pe-1">
      <div className="row">
        <div className="col-5">
          <div className="d-flex justify-content-end">
              <div className="div-img">
                <img
                className="img-profile"
                src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/143923156_3850387925019844_2091778074418217763_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHGKRB7_fHueKygMD5CePSLq9vzmrjAUXOr2_OauMBRc7CfOzWmuPjCWH8wDmB9oH3viezywGn_RXuz5789wAOE&_nc_ohc=LknxREMPGzEAX803Sn4&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT8jXz7ssW-QuzAqfk5PuZlFm3NTJDwEnFObrxDt4ygxlQ&oe=623D0BA6"
                />
              </div>
          </div>
        </div>
        <div className="col-7 d-flex dev-text-name">
        <div className="align-self-center">
            <p className="f-18">Thaweeporn Areepun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
