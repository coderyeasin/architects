import React from "react";
import Container from "../Container/Container";
import Navbar from "../Header/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import QuickTour from "../QuickTour/QuickTour";
import Features from "../Features/Features";
import Achievements from "../Achievements/Achievements";
import Sponsors from "../Sponsors/Sponsors";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <section className="w-full h-auto bg-bgSecondary">
        <Container className="px-4 sm:px-6 lg:px-8">
          <Navbar />
          <HeroSection />
        </Container>
      </section>
      <section>
        <Container className="px-4 sm:px-6 lg:px-8">
          <QuickTour />
          <Features />
          <Achievements />
          <Sponsors />
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default HomePage;
