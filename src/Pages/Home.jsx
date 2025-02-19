import React from "react";
import HeroSection from "../Components/Hero";
import Mission from "../Components/Missions";
import PopularResturant from "../Components/popularrest"
import Section2 from "../Components/Section2";
import Review from "../Components/review";
import Subscription from "../Components/Subscriptions"
import Section3 from "../Components/Section3";
import Chooseus from "../Components/Whychooseus"


const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <Mission /> */}
      <PopularResturant/>
      <Section3 />
      <Section2 />
       <Review />
      <Subscription />
      {/* <Chooseus/> */}
    </div>
  );
};

export default Home;
