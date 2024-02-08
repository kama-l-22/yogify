import React from "react";
import Hero2card from "./hero2card";
import h1 from "./image/h1.png";
import h2 from "./image/h2.png";
import h3 from "./image/h3.png";

function Hero2cards(props) {
  return (
    <div className="hero2cards">
      <Hero2card img={h2} h2={" Offline access"} p={"No wifi, no problem. Your Diet plans are locally downloaded for access anywhere."} />
      <Hero2card img={h3} h2={"Optimize your Diet data "} p={"Never dig through your emails again — access all your diet files and PDFs in one place."} />
      <Hero2card img={h1} h2={"Unlimited attachments "} p={"Perfect for Healthy life and saving $$$ on medicines! Get the best diet attatchment."} />
    </div>
  );
}

export default Hero2cards;
