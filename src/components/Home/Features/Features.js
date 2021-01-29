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
        <span className="gb-btn m-auto">Register Now</span>
      </div>
    </div>
  );
};

export default Features;
