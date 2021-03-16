import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
//Styles
import "../scss/Model.scss";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="single"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bio-container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="details"
            >
              <div className="location">
                <span>SCROLL DOWN</span>
                <span>FOR MORE</span>
              </div>
              <div className="mua">Email: joecounterzero@hotmail.com</div>
            </motion.div>
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>m</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <motion.div className="image-container-single">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 600 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <motion.div
                  className="frame-single"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    src={require("../images/myphoto.jpg").default}
                    alt="an image"
                    style={{ scale: scale }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -50 : -40,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="bio-container">
          <div className="row">
            <h2 className="title">
              A brief introduction to myself & <br /> my life.
            </h2>
            <h3>
              I am a fresh graduate from{" "}
              <a href="https://www.nextacademy.com/">NEXT Academy</a>'s Full
              Stack Bootcamp. Before this, I had completed my master of
              mechanical engineering with First Class Honours from University of
              Nottingham. I am a passionate engineer who always has high hopes
              on tech world especially aerospace field.
              <br />
              I have a wish which is to merge programming with aerospace to
              enhance the effectiveness of autopilot in the future. This is the
              reason I learn to code.
              <br />I have learned a few programming languages, frameworks,
              libraries throughout the 10 weeks of this intensive bootcamp.
              Currently I am looking for a position of{" "}
              <b>Full Stack Developer.</b>
              <br />
              <div className="button1">
                <Link to="/Resume_LimEanHan.pdf" target="_blank" download>
                  Download my resume here.
                </Link>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
