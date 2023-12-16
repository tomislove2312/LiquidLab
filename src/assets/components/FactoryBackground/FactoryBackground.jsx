import React from "react";
import { ReactComponent as CocktailFactory1 } from "../../images/cocktailFactorySvgs/cocktailFactorySvg1.jsx";
import { ReactComponent as CocktailFactory2 } from "../../images/cocktailFactorySvgs/cocktailFactorySvg2.jsx";
import { ReactComponent as CocktailFactory1_5 } from "../../images/cocktailFactorySvgs/cocktailFactorySvg1_5.jsx";
import { ReactComponent as CocktailFactory2_5 } from "../../images/cocktailFactorySvgs/cocktailFactorySvg2_5.jsx";
const FactoryBackground = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 900);

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
        <div className="factory_wide">
          <CocktailFactory2 />
          <div className="between_wide_factories"></div>
          <CocktailFactory2_5 />
        </div>
      ) : (
        <div className="factory_narrow">
          <CocktailFactory1 />
          <div className="between_factories"></div>
          <CocktailFactory1_5 />
        </div>
      )}
    </>
  );
};

export { FactoryBackground as ReactComponent };
