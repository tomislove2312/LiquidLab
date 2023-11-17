import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 30,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 150,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ props }) => {
  return (
    <motion.li variants={variants} whileTap={{ scale: 0.95 }}>
      {props}
    </motion.li>
  );
};
