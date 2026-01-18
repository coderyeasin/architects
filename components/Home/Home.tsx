import React from "react";
import Container from "../Container/Container";
import Navbar from "../Header/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import QuickTour from "../QuickTour/QuickTour";
import Features from "../Features/Features";

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
        </Container>
      </section>
    </>
  );
};

export default HomePage;
