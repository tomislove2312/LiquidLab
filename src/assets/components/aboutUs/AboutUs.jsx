import React from "react";
import "./aboutUs.css";
import together from "../../images/together.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Intro from "../intro/Intro";
import together2 from "../../images/together.jpg";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us">
      <div className="about-us__empty-div"></div>
      <div className="about-us__widescreen-container">
        <h4 id="aboutUs">{t("about")}</h4>

        <div className="about-us__intro-container">
          <Intro />
        </div>

        <div className="about-us__we-specialize">
          <p id="weSpecialize">{t("we_specialize")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
