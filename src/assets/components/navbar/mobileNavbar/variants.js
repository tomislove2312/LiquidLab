const menuCircle = {
  open: {
    clipPath: `circle(400px at 10px 10px)`,
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0px at 10px 10px)",
    transition: {
      // delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const listDelay = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

//list of the items for mobile
const bubbleItems = {
  open: {
    y: 350,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -30 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};
export { menuCircle, listDelay, bubbleItems };
