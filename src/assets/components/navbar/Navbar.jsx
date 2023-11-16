import React from "react";
import mainLogo from "../../images/navbar_logo.svg";
import bars from "../../images/bars.svg";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar_logo">
        <img src={mainLogo} alt="LiquidLab Logo" />
      </div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img
          className="proba"
          src={bars}
          alt="Icon for expanding the menu list"
        />
      </motion.button>

      <div class="divider"></div>
    </nav>
  );
};

export default Navbar;
