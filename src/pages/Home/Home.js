import React from "react";
import About from "./Aobut/About";
import HomeAppoinment from "./Homeappoinment/HomeAppoinment";
import Homelogin from "./Homelogin/Homelogin";
import Infocards from "./Infocards/Infocards";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
const { default: Banner } = require("./Banner/banner");

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="max-w-[1440px] mx-auto">
        <Infocards></Infocards>
        <Services></Services>
        <About></About>
        <HomeAppoinment></HomeAppoinment>
      <Testimonial></Testimonial>
      <Homelogin></Homelogin>
      </section>
    </div>
  );
};

export default Home;
