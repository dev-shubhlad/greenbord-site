import React from "react";

import marketplace from "../../../assets/images/marketplace.png";
import appImg from "../../../assets/images/appImg.png";
const FeatureComponent = () => {
  return (
    <div className="row p-5 m-0 h-100">
      <div className="col-4">
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col-4 text-center">
        <img src={appImg} />
      </div>
      <div className="col-4">
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={marketplace} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Open Marketplace</p>
            <p className="font-20">
              sell your courses globally to educate more students and make more
              money{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
