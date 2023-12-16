import React from "react";
import "./aboutUs.css";
import together from "../../images/together.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Intro from "../Intro/Intro";
import together2 from "../../images/together.jpg";
const AboutUs = () => {
  return (
    <section>
      <div className="empty_div_aboutus"></div>
      <div className="widescreen_container">
        <h4>About Us</h4>
        {/* <img src={together2} /> */}
        <div className="intro_container">
          <Intro />
        </div>

        <div className="we_specialize">
          <p>
            We specialize in creating unique and unforgettable bar experiences,
            we know that every bar is unique. That's why we take a customized
            approach to every project, tailoring our services to meet your
            specific needs and goals. Whether you're looking to create a
            signature cocktail menu,improve your bar's efficiency or design a
            completely new stunning menu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
