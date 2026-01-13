import { useEffect, useState } from "react";
import "./navbar.css";
import { motion, useCycle } from "framer-motion";
import mainLogo from "../../images/navbar_logo.svg";
import i18next from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { listDelay, bubbleItems, menuCircle } from "./mobileNavbar/variants";
import { MenuToggle } from "./mobileNavbar/MenuToggle";

const Navbar = ({ setChangeLanguage, changeLanguage }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth > 800);

  const { t } = useTranslation();

  const updateMedia = () => {
    setDesktopWidth(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDesktopWidth(window.innerWidth > 800);
    });
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <motion.nav
      className="navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <div className="navbar__logo" id="home">
        <img src={mainLogo} alt="LiquidLab Logo" />
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
      <div className="divider"></div>
      <motion.div className="navbar__open-nav-bg" variants={menuCircle} />
      {desktopWidth ? (
        <motion.ul className="navbar__desktop-list">
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="navbar__menu-list__menu-items-desktop"
          >
            <a className="navbar__menu-list__menu-items" href="#weSpecialize">
              {t("about")}
            </a>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="navbar__menu-list__menu-items-desktop"
          >
            <a className="navbar__menu-list__menu-items" href="#contact">
              {t("contact")}
            </a>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.95 }}
            className="navbar__menu-list__menu-items-desktop"
          >
            <a href="#packages" className="navbar__menu-list__menu-items">
              {t("packages")}
            </a>
          </motion.li>
          {changeLanguage ? (
            <button
              onClick={() => {
                i18next.changeLanguage("en");
                setChangeLanguage(!changeLanguage);
              }}
              className="navbar__lng-btn-desktop"
            >
              <FontAwesomeIcon
                icon="fa-duotone fa-earth-americas"
                style={{
                  "--fa-primary-color": "#77579e",
                  "--fa-secondary-color": "#77579e",
                }}
                size="2xl"
              />
              HR
            </button>
          ) : (
            <button
              onClick={() => {
                i18next.changeLanguage("hr");
                setChangeLanguage(!changeLanguage);
              }}
              className="navbar__lng-btn-desktop"
            >
              <FontAwesomeIcon
                icon="fa-duotone fa-earth-americas"
                style={{
                  "--fa-primary-color": "#77579e",
                  "--fa-secondary-color": "#77579e",
                }}
                size="2xl"
              />
              EN
            </button>
          )}
        </motion.ul>
      ) : (
        <motion.ul className="navbar__mobile-list" variants={listDelay}>
          <motion.li
            className="navbar__menu-list__menu-items"
            variants={bubbleItems}
            whileTap={{ scale: 0.95 }}
          >
            <a className="navbar__menu-list__menu-items" href="#aboutUs">
              {t("about")}
            </a>
          </motion.li>
          <motion.li
            className="navbar__menu-list__menu-items"
            variants={bubbleItems}
            whileTap={{ scale: 0.95 }}
          >
            <a className="navbar__menu-list__menu-items" href="#contact">
              {t("contact")}
            </a>
          </motion.li>
          <motion.li
            className="navbar__menu-list__menu-items"
            variants={bubbleItems}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#packages" className="navbar__menu-list__menu-items">
              {t("packages")}
            </a>
          </motion.li>
          <motion.li
            className="navbar__menu-list__menu-items"
            variants={bubbleItems}
            whileTap={{ scale: 0.95 }}
          >
            {changeLanguage ? (
              <button
                onClick={() => {
                  i18next.changeLanguage("en");
                  setChangeLanguage(!changeLanguage);
                }}
                className="navbar__lng-btn"
              >
                <FontAwesomeIcon
                  icon="fa-duotone fa-earth-americas"
                  style={{
                    "--fa-primary-color": "#77579e",
                    "--fa-secondary-color": "#77579e",
                  }}
                />
                HR
              </button>
            ) : (
              <button
                onClick={() => {
                  i18next.changeLanguage("hr");
                  setChangeLanguage(!changeLanguage);
                }}
                className="navbar__lng-btn"
              >
                <FontAwesomeIcon
                  icon="fa-duotone fa-earth-americas"
                  style={{
                    "--fa-primary-color": "#77579e",
                    "--fa-secondary-color": "#77579e",
                  }}
                />
                EN
              </button>
            )}
          </motion.li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
