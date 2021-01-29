import React from "react";
import ceo from "../../../assets/persons/ceo.webp";
import cto from "../../../assets/persons/cto.webp";
import cmo from "../../../assets/persons/cmo.webp";

import "./Team.scss";

const Team = () => {
  return (
    <div className="container pb-5">
      <div className="text-center p-4">
        <p className="gb-heading font-35">Why GreenBord</p>
        <p className="font-30 text-success">
          We love to build a better future for present Generation
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <div>
            <img className="person-image" src={ceo} />
            <p className="person-name">Vivek Kumar Giri</p>
            <p className="designation">Co-founder and CEO</p>
          </div>
        </div>
        <div className="col-4 text-center">
          <div>
            <img className="person-image" src={cto} />
            <p className="person-name">Upendra Kumar</p>
            <p className="designation">Co-founder and CTO</p>
          </div>
        </div>{" "}
        <div className="col-4 text-center">
          <div>
            <img className="person-image" src={cmo} />
            <p className="person-name">Samad Faraz</p>
            <p className="designation">Co-founder and CMO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
