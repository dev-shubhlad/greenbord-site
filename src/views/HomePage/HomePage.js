import React from "react";
import Cards from "../../components/Home/Cards/Cards";
import ImageHeading from "../../components/Home/Image/ImageHeading";
import Reason from "../../components/Home/Reason/Reason";

const HomePage = () => {
  return (
    <div>
      <ImageHeading />
      <Reason />
      <Cards />
    </div>
  );
};

export default HomePage;
