import React, { useState } from "react";
import Hero from "../components/Hero";
import Homecomp from "../components/home/Homecomp";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
import GlobalStyle from "../globalStyles";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Hero slides={SliderData} />
      <Homecomp />
      <InfoSection {...InfoData} />
    </>
  );
};

export default Home;
