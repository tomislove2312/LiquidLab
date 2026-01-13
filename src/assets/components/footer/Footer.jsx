import React from "react";
import "./footer.css";
import { ReactComponent as Waves } from "./waves/Waves.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer_container">
      <Waves />
      <ul className="social-icon">
        <li className="social-icon__item">
          <a
            className="social-icon__link"
            href="https://www.instagram.com/liquidlab_cocktails/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon="fa-duotone fa-instagram"
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>

        <li className="social-icon__item">
          <a
            className="social-icon__link"
            href="https://wa.me/385913681482"
            target="_blank"
          >
            <FontAwesomeIcon
              icon="fa-duotone fa-whatsapp"
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#home">
            {t("home")}
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link vertical_line" href="#weSpecialize">
            {t("about")}
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link vertical_line" href="#packages">
            {t("packages")}
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link vertical_line_wide" href="#values">
            {t("3values")}
          </a>
        </li>

        <li className="menu__item">
          <a className="menu__link vertical_line" href="#contact">
            {t("contact")}
          </a>
        </li>
      </ul>
      <p className="copyright">&copy;2023 LiquidLab | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
