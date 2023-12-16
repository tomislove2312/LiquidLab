import React from "react";
import "./Navbar.css";
import mainLogo from "../../images/navbar_logo.svg";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./mobileNavbar/MenuItem";
import { MenuToggle } from "./mobileNavbar/MenuToggle";
import { sidebar, variants } from "./mobileNavbar/variants";

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <div className="navbar_logo">
        <img src={mainLogo} alt="LiquidLab Logo" />
      </div>

      <MenuToggle toggle={() => toggleOpen()} />
      <div className="divider"></div>
      <motion.div className="open_nav_background" variants={sidebar} />
      {isDesktop ? (
        <ul className="desktop_list">
          <li>O nama</li>
          <li>Kontakt</li>
          <li>Paketi</li>
        </ul>
      ) : (
        <motion.ul className="mobile_list" variants={variants}>
          <MenuItem props="O nama" />
          <MenuItem props="Kontakt" />
          <MenuItem props="Paketi" />
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
