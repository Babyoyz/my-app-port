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
                src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/83844238_2861786250546688_6020598753675706368_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHDo0GPTrD-v6hIU4Dhu4w-V8kovgWSWzJXySi-BZJbMqa1Q5dx7UPiw-kRf6HOOZmEl2mMcmaJsGRZwZzxArzs&_nc_ohc=1d-eCxRP3qAAX_P6WL9&_nc_oc=AQn2It_SiBJtNQxjaNtIhPSmFPkgrgSlfdpvtZ8q9vN4oW8A2RlgwdWPuBRMVqoAH04&tn=mXDipP05ZQmPN48e&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT8dq0QdiL4lLbZmkw-dIrtJFHcq_SyCES5jt4xB544QQg&oe=6263CD21"
                />
              </div>
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
