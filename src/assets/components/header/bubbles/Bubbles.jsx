import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const variants = {
  visible: {
    y: 0,
    x: 0,

    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -30 },
    },
  },
  hidden: {
    y: -200,
    x: -150,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};
const variants2 = {
  visible: {
    y: 0,
    x: 0,

    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -30 },
    },
  },
  hidden: {
    y: -200,
    x: 150,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};
const variants3 = {
  visible: {
    y: 0,
    x: 0,

    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -30 },
    },
  },
  hidden: {
    y: -100,
    x: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};
const Bubbles = () => {
  const { scrollY } = useScroll();
  const [hookedYPosition, setHookedYPosition] = React.useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <svg viewBox="0 0 367 589" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 1">
        <motion.g
          initial={"hidden"}
          animate={hookedYPosition > 190 ? "visible" : "hidden"}
          variants={variants3}
          id="Bottom"
        >
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 17"
            cx={122.826}
            cy={581}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 1.2, x: 2, y: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 27"
            cx={158.677}
            cy={484}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 2, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.4, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 37"
            cx={44.7516}
            cy={487}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 1, x: 3, y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1.8, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 38"
            cx={9.75155}
            cy={442}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.3}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 2, y: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 28"
            cx={120.752}
            cy={443}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 2, repeatType: "reverse", repeat: Infinity },
              y: { duration: 2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 29"
            cx={262.354}
            cy={500}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 30"
            cx={354.404}
            cy={559}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 1, y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 5"
            cx={352.466}
            cy={450}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 0.6, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 6"
            cx={103.447}
            cy={515}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 15"
            cx={315.161}
            cy={465.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 1, x: 3, y: 4 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 31"
            cx={323.882}
            cy={537.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 1.1, x: 0, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.4, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 32"
            cx={165.944}
            cy={569.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 33"
            cx={274.466}
            cy={586.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 34"
            cx={77.4224}
            cy={486.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 4 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 2, repeatType: "reverse", repeat: Infinity },
              y: { duration: 2.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 39"
            cx={2.42236}
            cy={377.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 36"
            cx={28.4224}
            cy={537.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 2, y: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1.8, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.8, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 35"
            cx={236.677}
            cy={507.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 4"
            cx={212.938}
            cy={545}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.85}
          />
        </motion.g>
        <motion.g
          initial={"hidden"}
          animate={hookedYPosition > 150 ? "visible" : "hidden"}
          variants={variants3}
          id="Middle"
          opacity={0.5}
        >
          <motion.ellipse
            animate={{ scale: 0.8, x: 3, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 2"
            cx={183.534}
            cy={390}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              x: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 16"
            cx={86.4907}
            cy={314.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 1.1, x: 1, y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 11"
            cx={357.795}
            cy={296.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 13"
            cx={344.23}
            cy={334.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 0.7, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 26"
            cx={294.752}
            cy={412}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 3, y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 7"
            cx={255.571}
            cy={448}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 8"
            cx={74.3789}
            cy={420}
            rx={14.5342}
            ry={15}
            fill="#77579E"
            fillOpacity={0.7}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 19"
            cx={335.994}
            cy={360}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 32_2"
            cx={195.422}
            cy={473.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.9, x: 2, y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 33_2"
            cx={131.422}
            cy={476.5}
            rx={2.42236}
            ry={2.5}
            fill="#77579E"
            fillOpacity={0.55}
          />
          <motion.ellipse
            animate={{ scale: 0.6, x: 1, y: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.9,
              x: { duration: 1, repeatType: "reverse", repeat: Infinity },
              y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
            }}
            id="Ellipse 25"
            cx={68.7516}
            cy={361}
            rx={7.75155}
            ry={8}
            fill="#77579E"
            fillOpacity={0.55}
          />
        </motion.g>
        <g id="Top">
          <motion.g
            initial={"hidden"}
            animate={hookedYPosition > 70 ? "visible" : "hidden"}
            variants={variants2}
            id="Top_left"
          >
            <motion.ellipse
              animate={{ scale: 0.9, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 23"
              cx={60.7516}
              cy={198}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.7, x: 2, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
                x: { duration: 0.8, repeatType: "reverse", repeat: Infinity },
                y: { duration: 0.9, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 20"
              cx={107.323}
              cy={238}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.2}
            />
            <motion.ellipse
              animate={{ scale: 0.7, x: 2, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 9"
              cx={97.1491}
              cy={153.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 3, y: 3 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 38_2"
              cx={12.4224}
              cy={206.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 4, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 2, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 10"
              cx={128.155}
              cy={192.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 1.2, x: 1, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 36_2"
              cx={104.901}
              cy={2.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.7}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 24"
              cx={120.888}
              cy={143}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 1.3, x: 4, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.5, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 37_2"
              cx={22.7516}
              cy={159}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.4, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 3"
              cx={45.5342}
              cy={261}
              rx={14.5342}
              ry={15}
              fill="#77579E"
              fillOpacity={0.6}
            />
          </motion.g>
          <motion.g
            initial={"hidden"}
            animate={hookedYPosition > 70 ? "visible" : "hidden"}
            variants={variants}
            id="Top_right"
          >
            <motion.ellipse
              animate={{ scale: 0.9, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 18"
              cx={320.491}
              cy={182}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.7, x: 2, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
                x: { duration: 0.8, repeatType: "reverse", repeat: Infinity },
                y: { duration: 0.9, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 22"
              cx={347.621}
              cy={211}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.7, x: 2, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 39_2"
              cx={271.752}
              cy={253}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.2}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 3, y: 3 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 14"
              cx={352.95}
              cy={171.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 4, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 2, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 37_3"
              cx={319.037}
              cy={7.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.7}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 12"
              cx={321.944}
              cy={148.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.7, x: 5, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                x: { duration: 1.9, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 38_3"
              cx={281.422}
              cy={171.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.9, x: 3, y: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                x: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 39_3"
              cx={274.422}
              cy={216.5}
              rx={2.42236}
              ry={2.5}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.6, x: 1, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 21"
              cx={286.752}
              cy={135}
              rx={7.75155}
              ry={8}
              fill="#77579E"
              fillOpacity={0.35}
            />
            <motion.ellipse
              animate={{ scale: 0.6, x: 2, y: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.2,
                x: { duration: 1, repeatType: "reverse", repeat: Infinity },
                y: { duration: 1.2, repeatType: "reverse", repeat: Infinity },
              }}
              id="Ellipse 1"
              cx={335.994}
              cy={261}
              rx={14.5342}
              ry={15}
              fill="#77579E"
              fillOpacity={0.65}
            />
          </motion.g>
        </g>
      </g>
    </svg>
  );
};
export { Bubbles as ReactComponent };
