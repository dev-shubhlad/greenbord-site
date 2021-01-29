import React from "react";

import marketplace from "../../../assets/images/marketplace.png";
import Management from "../../../assets/images/Management.png";
import SmartStudent from "../../../assets/images/SmartStudent.png";
import centralisedAdministration from "../../../assets/images/centralisedAdministration.png";
import SmartTeacher from "../../../assets/images/SmartTeacher.png";
import communication from "../../../assets/images/communication.png";

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
            <img src={Management} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Smart Management</p>
            <p className="font-20">
              Keep eye on every teacher and student activities from your phone
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={SmartStudent} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Smart Student</p>
            <p className="font-20">
              Add archive lecture feature in courses of your student, so they
              can study in class and revise in Home
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
            <img src={centralisedAdministration} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Centralised Administration</p>
            <p className="font-20">
              create supervisors to handle the administrative works
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={SmartTeacher} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Smart Teacher</p>
            <p className="font-20">
              Make your teacher smart by letting them know the activity record
              of student on One click
            </p>
          </div>
        </div>{" "}
        <div className="row gb-feature-height">
          <div className="col-5 p-0 text-center">
            <img src={communication} width="129" />
          </div>
          <div className="col-7 p-0">
            <p className="feature-heading">Fill Communication Gap</p>
            <p className="font-20">
              Let GreenBord send daily performance update of students to their
              parent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
