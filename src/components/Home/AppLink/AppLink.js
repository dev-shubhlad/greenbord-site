import React from "react";
import handImg from "../../../assets/images/mobile.webp";
import playImg from "../../../assets/images/google.webp";

const AppLink = () => {
  return (
    <div className="container">
      <div className="row bg-success p-4 mb-4">
        <div className="col-7">
          <p
            className="gb-heading font-35 text-black pl-5"
            style={{ paddingLeft: "380px" }}
          >
            in your hand
          </p>
          <p className="gb-heading font-35 text-white">
            Your Coaching Institute is <del>in Other City</del>
          </p>
          <div className="row">
            <div className="col-6 font-20">
              <ul>
                <li>Now no need to migrate in different city</li>
                <li>
                  Enroll in the courses of your favorite coaching and study from
                  home
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between font-20 text-white">
            <div className="col" style={{ margin: "auto", textAlign: "right" }}>
              Download Student App
            </div>
            <div className="col">
              <img src={playImg} />
            </div>
          </div>
        </div>
        <div className="col-5 text-center">
          <img src={handImg} />
        </div>
      </div>
    </div>
  );
};

export default AppLink;
