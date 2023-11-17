import React from "react";
import "./Navbar.css";
import mainLogo from "../../images/navbar_logo.svg";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./mobileNavbar/MenuItem";
import { MenuToggle } from "./mobileNavbar/MenuToggle";
import { sidebar, variants } from "./mobileNavbar/variants";

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <div className="navbar_logo">
        <img src={mainLogo} alt="LiquidLab Logo" />
      </div>

      <MenuToggle toggle={() => toggleOpen()} />

      <div className="divider"></div>
      <motion.div className="open_nav_background" variants={sidebar} />
      <motion.ul variants={variants}>
        <MenuItem props="O nama" />
        <MenuItem props="Kontakt" />
        <MenuItem props="Paketi" />
        <MenuItem props="PROVJERAGg" />
        <MenuItem props="Paketi" />
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
