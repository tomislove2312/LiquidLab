import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fewcoctails from "../../images/fewcoctails.svg";
// import { initialTabs as tabs } from "./ingredients";
import { tabs1 } from "./prices.js";
import { tabs2 } from "./prices.js";
import { motion, AnimatePresence } from "framer-motion";
import "./pricing.css";
import { useTranslation } from "react-i18next";

const Pricing = ({ lng }) => {
  const [selectedTab, setSelectedTab] = useState(tabs1[0]);
  const { t } = useTranslation();
  const [readMoreBronze, setReadMoreBronze] = useState([
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  function showMoreHandler(index) {
    let newArray = readMoreBronze.map((item, i) =>
      i === index ? !item : item
    );
    setReadMoreBronze(newArray);
  }
  useEffect(() => {
    if (lng) {
      setSelectedTab(tabs1[0]);
    } else {
      setSelectedTab(tabs2[0]);
    }
  }, [lng]);
  return (
    <div className="window">
      <div className="fewcoctails_wrapper">
        <div className="fewcoctails">
          <img src={fewcoctails} alt="cocktails" />
        </div>
        <h2 id="packages">{t("our_packages")}</h2>
      </div>

      <nav>
        <ul>
          {lng
            ? tabs1.map((item, index) => (
                <li
                  key={index}
                  className={
                    item === selectedTab
                      ? `${item.label.toLowerCase()} package_titles tier_list`
                      : "tier_list"
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  {` ${item.label}`}
                  {item == selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))
            : tabs2.map((item, index) => (
                <li
                  key={index}
                  className={
                    item === selectedTab
                      ? `${item.label.toLowerCase()} package_titles tier_list`
                      : "tier_list"
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  {` ${item.label}`}
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              //   backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
            }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: 0.2,
              //   backgroundColor: { repeat: Infinity },
            }}
          >
            <ol>
              {selectedTab.title.map((item, i) => (
                <li
                  onClick={() => showMoreHandler(i)}
                  className="list_tier_description"
                  key={i}
                >
                  <h3 className="title_description">
                    {item}
                    {"   "}
                    {readMoreBronze[i] ? (
                      <FontAwesomeIcon
                        className="caret_up"
                        icon="fa-duotone fa-caret-up"
                        style={{
                          "--fa-primary-color": "#57659e",
                          "--fa-secondary-color": "#57659e",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-duotone fa-caret-down"
                        style={{
                          "--fa-primary-color": "#77579e",
                          "--fa-secondary-color": "#77579e",
                          "--fa-secondary-opacity": "0.7",
                        }}
                      />
                    )}
                  </h3>
                  <p className="more_title_description">
                    {readMoreBronze[i] ? selectedTab.description[i] : ""}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Pricing;
