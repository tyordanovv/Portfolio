import React from "react";
import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import GetInTouchPanel from "../components/GetInTouchPanel";
import SkillsSection from "../components/SkillSection";
import TechStackSection from "../components/TechStackSection";

const Home = () => {
  return (
    <div className="home-page">
      <NavBar />
      <HeroImage />
      <SkillsSection />
      <TechStackSection />
      <GetInTouchPanel />
      <Footer />
    </div>
  );
};

export default Home;
