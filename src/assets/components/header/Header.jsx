import React from "react";
import "./header.css";
import { ReactComponent as FactoryBackground } from "./factoryBackground/FactoryBackground";
import { ReactComponent as MainLogo } from "./mainLogo/liquidLabLogoSvg.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ReactComponent as Bubbles } from "./bubbles/Bubbles.jsx";
// import { ReactComponent as CocktailFactory3 } from "../CocktailFactorySvgs/cocktailFactorySvg3.jsx";

const Header = () => {
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__background">
        <FactoryBackground />
      </div>
      <div className="header__main-logo__bubbles-background">
        <Bubbles />
      </div>

      <div className="header__empty-div"></div>
      <div className="header__main-logo">
        <div className="header__main-logo__background"></div>
        <MainLogo />
      </div>
      <h3 className="header__intro-text">
        <div className="header__intro-text-bg"></div>
        <span className="header__intro-text__left">
          {t("premier_bar1")}
          <span className="header__intro-text_dots">
            <FontAwesomeIcon
              icon="fa-duotone fa-ellipsis"
              fade
              style={{ color: "#77579e" }}
            />
          </span>
        </span>
        <span className="header__intro-text__right">
          <span className="header__intro-text_dots">
            <FontAwesomeIcon
              icon="fa-duotone fa-ellipsis"
              fade
              style={{ color: "#77579e" }}
            />
          </span>{" "}
          {t("premier_bar2")}{" "}
          <FontAwesomeIcon
            icon="fa-duotone fa-exclamation"
            style={{
              "--fa-primary-color": "#77579e",
              "--fa-secondary-color": "#77579e",
            }}
          />
        </span>
      </h3>
    </header>
  );
};

export default Header;
