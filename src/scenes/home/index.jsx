import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import About from "../about";
import Card from "../../components/Card";
import MenuCard from "../../components/MenuCard";
import TestimonialsSlider from "../testimonals";
import Footer from "../footer";
import Offers from "../../components/Offers";
// import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Heading>ABOUT US</Heading>
      <About />
      <Heading>OUR TEAM</Heading>
      <Card />
      <Heading>OUR MENU</Heading>
      <MenuCard />
      <Heading>OUR OFFERS</Heading>
      <Offers />
      <Heading>TESTIMONALS</Heading>
      <TestimonialsSlider />
      <Footer />
    </div>
  );
};

export default Home;
