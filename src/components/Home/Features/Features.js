import React from "react";
import FeatureComponent from "./FeatureComponent";
import Intro from "./Intro";

import "./Feature.scss";

const Features = () => {
  return (
    <div className="pt-5 pb-5">
      <Intro />
      <FeatureComponent />
      <div className="text-center">
        <a
          href="https://greenbord-institute-panel.herokuapp.com/login"
          target="_blank"
        >
          <span className="gb-btn m-auto">Register Now</span>
        </a>
      </div>
    </div>
  );
};

export default Features;
