import React from "react";
import Cards from "../../components/Home/Cards/Cards";
import Features from "../../components/Home/Features/Features";
import ImageHeading from "../../components/Home/Image/ImageHeading";
import Reason from "../../components/Home/Reason/Reason";

const HomePage = () => {
  return (
    <div>
      <ImageHeading />
      <Reason />
      <Cards />
      <Features />
    </div>
  );
};

export default HomePage;
