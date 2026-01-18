import React from "react";
import Container from "../Container/Container";
import Navbar from "../Header/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import QuickTour from "../QuickTour/QuickTour";
import Features from "../Features/Features";
import Achievements from "../Achievements/Achievements";
import Sponsors from "../Sponsors/Sponsors";

const HomePage = () => {
  return (
    <>
      <section className="w-full h-auto bg-bgSecondary">
        <Container>
          <Navbar />
          <HeroSection />
        </Container>
      </section>
      <section>
        <Container>
          <QuickTour />
          <Features />
          <Achievements />
          <Sponsors />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
