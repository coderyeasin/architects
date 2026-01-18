import React from "react";
import Container from "../Container/Container";
import Navbar from "../Header/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const HomePage = () => {
  return (
    <section className="w-full h-auto bg-bgSecondary">
      <Container>
        <Navbar />
        <HeroSection />
      </Container>
    </section>
  );
};

export default HomePage;
