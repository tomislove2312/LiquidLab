import React from "react";
import "./header.css";
import { ReactComponent as FactoryBackground } from "../FactoryBackground/FactoryBackground";
import { ReactComponent as MainLogo } from "../../images/liquidLabLogoSvg";
// import { ReactComponent as CocktailFactory3 } from "../CocktailFactorySvgs/cocktailFactorySvg3.jsx";

const Header = () => {
  return (
    <header>
      <div className="background">
        <FactoryBackground />
      </div>

      <div className="empty_div"></div>
      <div className="main_logo">
        <MainLogo />
      </div>
      <h3>
        <span className="left_side_premier">
          Welcome to the premier bar consulting firm
          <span className="dots">...</span>
        </span>
        <span className="right_side_premier">
          <span className="dots">...</span> that helps you take your bar to the
          next level!
        </span>
      </h3>
    </header>
  );
};

export default Header;
