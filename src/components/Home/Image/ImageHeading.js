import React from "react";

import "./ImageHeading.scss";

const ImageHeading = () => {
  return (
    <div className="w-100 heading-img">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-6">
            <p className="img-heading">
              Welcome to GreenBord <br /> e-learning ecosystem
            </p>
            <p className="text-white pt-4">
              GreenBord is your e-learning partner which provides you an
              e-learning ecosystem where Institute, Teacher, Student and Parents
              comes together to make learning efficient, easy and smooth with
              the concept of Smart Management and distance learning{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeading;
