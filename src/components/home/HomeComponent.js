import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./Hero";
import Intrady from "./Intrady";
import LaptopTrade from "./LaptopTrade";
import MobileTrade from "./MobileTrade";
import Question from "./Question";
import Simulate from "./Simulate";
import SimulateTop from "./SimulateTop";
import Step from "./Step";
import Tradingjournal from "./Tradingjournal";
import Footer from "../footer/Footer";

const HomeComponent = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Step />
      <Tradingjournal />
      <Intrady />
      <Simulate />
      <SimulateTop />
      <MobileTrade />
      <LaptopTrade />
      <Question />
      <Footer />
    </>
  );
};

export default HomeComponent;
