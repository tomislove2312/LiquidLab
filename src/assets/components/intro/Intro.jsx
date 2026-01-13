import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LLIntro from "../../images/LLIntro.mp4";
import together from "../../images/together.jpg";
import "./intro.css";
import { motion } from "framer-motion";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const videoRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="app__video__wrapper">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: [1, 0.8, 0.6, 0.4, 0],
            height: `${!isDesktop ? "200px" : "810px"}`,
          },
          visible: {
            opacity: 1,
            scale: [0, 0.4, 0.6, 0.8, 1],
            height: `${!isDesktop ? "50vh" : "750px"}`,
          },
        }}
        transition={{
          duration: 0.3,
        }}
        initial="hidden"
        animate={playVideo ? "visible" : "hidden"}
        className="app__video"
      >
        <div className="intro__video">
          <video
            src={LLIntro}
            ref={videoRef}
            type="video/mp4"
            loop
            controls={false}
            muted
          />
          {isDesktop ? (
            <button onClick={handleVideo} className="intro__stop">
              <FontAwesomeIcon
                size="2xl"
                style={{
                  "--fa-primary-color": "#76539c",
                  "--fa-secondary-color": "#76539c",
                  "--fa-secondary-opacity": "0.5",
                  "--fa-primary-opacity": "1",
                }}
                icon="fa-duotone fa-circle-stop"
              />
            </button>
          ) : (
            ""
          )}
        </div>
      </motion.div>
      <motion.div
        variants={{
          visible: {
            scale: [1, 0.8, 0.6, 0.4, 0],
          },
          hidden: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.2,
        }}
        initial="hidden"
        animate={playVideo ? "visible" : "hidden"}
        className="thumbnail"
      >
        <div className="app__video-overlay ">
          <div className="app__video-overlay_circle " onClick={handleVideo}>
            <FontAwesomeIcon
              icon="fa-duotone fa-circle-play "
              beat
              size="2xl"
              style={{
                "--fa-primary-color": "#76539c",
                "--fa-secondary-color": "#fff",
                "--fa-secondary-opacity": "0.5",
                "--fa-primary-opacity": "1",
              }}
            />
          </div>
        </div>
        <div className="together">
          <img src={together} />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
