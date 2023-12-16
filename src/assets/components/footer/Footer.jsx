import React from "react";
import "./footer.css";
import { ReactComponent as Waves } from "../../images/waves/Waves.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="footer_container">
      <Waves />
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <FontAwesomeIcon
              icon="fa-duotone fa-instagram"
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>

        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <FontAwesomeIcon
              icon="fa-duotone fa-whatsapp"
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link vertical_line" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link vertical_line" href="#">
            Packages
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link vertical_line_wide" href="#">
            Values
          </a>
        </li>

        <li class="menu__item">
          <a class="menu__link vertical_line" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p className="copyright">&copy;2023 LiquidLab | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
