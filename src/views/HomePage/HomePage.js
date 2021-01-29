import React from "react";
import AppLink from "../../components/Home/AppLink/AppLink";
import Cards from "../../components/Home/Cards/Cards";
import Features from "../../components/Home/Features/Features";
import ImageHeading from "../../components/Home/Image/ImageHeading";
import Parent from "../../components/Home/Parent/Parent";
import Reason from "../../components/Home/Reason/Reason";

const HomePage = () => {
  return (
    <div>
      <ImageHeading />
      <Reason />
      <Cards />
      <Features />
      <AppLink />
      <Parent />
    </div>
  );
};

export default HomePage;
