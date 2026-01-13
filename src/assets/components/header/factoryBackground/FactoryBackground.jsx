import React from "react";
import { ReactComponent as CocktailFactory1 } from "../cocktailFactorySvgs/cocktailFactorySvg1.jsx";
import { ReactComponent as CocktailFactory2 } from "../cocktailFactorySvgs/cocktailFactorySvg2.jsx";
import { ReactComponent as CocktailFactory1_5 } from "../cocktailFactorySvgs/cocktailFactorySvg1_5.jsx";
import { ReactComponent as CocktailFactory2_5 } from "../cocktailFactorySvgs/cocktailFactorySvg2_5.jsx";
const FactoryBackground = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 550);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 550);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      {isDesktop ? (
        <div className="header__factory-wide">
          <CocktailFactory2 />
          <div className="header__between-wide-factories"></div>
          <CocktailFactory2_5 />
        </div>
      ) : (
        <div className="header__factory-narrow">
          <CocktailFactory1 />
          <div className="header__between-factories"></div>
          <CocktailFactory1_5 />
        </div>
      )}
    </>
  );
};

export { FactoryBackground as ReactComponent };
