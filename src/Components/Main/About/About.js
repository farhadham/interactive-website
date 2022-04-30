import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

const About = ({ page }) => {
  return (
    page === 2 && (
      <>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.background1}
            animate={{ opacity: 0.28 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          <div className={styles.background2}></div>
          <div className={styles.contentWrapper}>
            <div className={styles.top}>
              <div className={styles.left}>
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  My specialization
                </motion.p>
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  I am a music
                  <br />
                  <span>composer</span> and web
                  <br />
                  <span>developer</span> who knows
                  <br />
                  media
                </motion.h1>
              </div>
              <div className={styles.right}>
                <motion.div
                  className={styles.image}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className={styles.line}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                ></motion.div>
                <motion.div
                  className={styles.years}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <span className={styles.number}>4</span>
                  <span>YEARS EXPERIENCE</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={styles.bottom}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <p>MUSIC PRODUCTION</p>
              <p>AUDIO ENGINEERING</p>
              <p>WEBSITE DESIGN</p>
              <p>GRAPHIC DESIGN</p>
              <p>VIDEO EDITING</p>
            </motion.div>
          </div>
        </div>
      </>
    )
  );
};

export default About;
