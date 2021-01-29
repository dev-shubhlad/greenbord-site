import React from "react";

import saveMoney from "../../../assets/images/saveMoney.png";
import createMoney from "../../../assets/images/makeMoney.png";
import education from "../../../assets/images/Education.png";

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-center pl-5 pr-5 pb-4">
          <img src={saveMoney} height="120" />
          <p className="gb-heading font-35">Save Money</p>
          <p className="font-18">
            While building infrastructure ecosystem for e-learning by becoming
            our <strong>Institute Partner</strong>{" "}
          </p>
          <div className="btn btn-success w-100">Become Institute Partner</div>
        </div>
        <div className="col-4 text-center pl-5 pr-5 pb-4">
          <img src={createMoney} height="120" />
          <p className="gb-heading font-35">Make Money</p>
          <p className="font-18">
            When you list out your courses and when your student enroll in any
            course around globe
          </p>
        </div>
        <div className="col-4 text-center pl-5 pr-5 pb-4">
          <img src={education} height="120" />
          <p className="gb-heading font-35">Empower Education</p>
          <p className="font-18">
            Give a chance of learning to the students who can't visit your
            Institute
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
