import React from "react";
import "./values.css";
import { useTranslation } from "react-i18next";
import libra from "../../images/libra.svg";
import libra_wide from "../../images/libra_wide.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Values() {
  const { t } = useTranslation();
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <section className="our-values" id="values">
      <div className="our_values_wrapper">
        <div className="libra">
          {!isDesktop ? (
            <img src={libra} alt="cocktails" />
          ) : (
            <img src={libra_wide} alt="cocktails" />
          )}
        </div>
        <div className="our_values">
          <h2>{t("values")}</h2>
        </div>
      </div>

      <div className="values">
        <div className="value">
          <h3>
            {t("innovation")}{" "}
            <FontAwesomeIcon icon="fa-duotone fa-lightbulb-gear" beat />{" "}
          </h3>

          <p>{t("lifeline")}</p>
        </div>
        <div className="value">
          <h3>
            {t("creativity")}{" "}
            <FontAwesomeIcon
              icon="fa-duotone fa-paintbrush-pencil"
              beat
              style={{
                "--fa-primary-color": "#77579e",
                "--fa-secondary-color": "#57659e",
              }}
            />
          </h3>
          <p>{t("spark")}</p>
        </div>
        <div className="value">
          <h3>
            {t("collaboration")}{" "}
            <FontAwesomeIcon
              icon="fa-duotone fa-handshake-simple"
              beat
              style={{
                "--fa-primary-color": "#77579e",
                "--fa-secondary-color": "#57659e",
              }}
            />
          </h3>
          <p>{t("cornerstone")}</p>
        </div>
      </div>
    </section>
  );
}

export default Values;
