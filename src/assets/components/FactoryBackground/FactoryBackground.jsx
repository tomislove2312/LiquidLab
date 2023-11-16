import React from "react";
import { ReactComponent as CocktailFactory1 } from "../CocktailFactorySvgs/cocktailFactorySvg1.jsx";
import { ReactComponent as CocktailFactory2 } from "../CocktailFactorySvgs/cocktailFactorySvg2.jsx";

const FactoryBackground = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      {isDesktop ? (
        <div class="factory_wide">
          <CocktailFactory2 />
        </div>
      ) : (
        <div className="factory_narrow">
          <CocktailFactory1 />
        </div>
      )}
    </>
  );
};

export { FactoryBackground as ReactComponent };
