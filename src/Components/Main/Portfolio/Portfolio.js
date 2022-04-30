import React, { useState } from "react";
import styles from "./Portfolio.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = ({ page }) => {
  const [bg, setBg] = useState();
  const [bgOn, setBgOn] = useState(false);

  return (
    page === 3 && (
      <>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.background1}
            animate={{ opacity: 0.28 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          <div className={styles.background2}></div>
          <AnimatePresence>
            {bgOn && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7, scale: 1.07 }}
                transition={{
                  scale: { duration: 4 },
                  default: { duration: 0.4 },
                }}
                className={styles.backgroundDynamic}
                style={{
                  backgroundImage: `url(./images/portfolio/bg${bg}.jpg)`,
                }}
              ></motion.div>
            )}
          </AnimatePresence>

          <motion.div className={styles.contentWrapper}>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <span>Latest</span> Projects
            </motion.h1>
            <motion.div
              className={styles.content}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <a
                href="https://www.facebook.com/nhlstenden/videos/475244907279750"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(1);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>NHL Stenden</h2>
                  <p>Short Film</p>
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/p/CW_P0o0KwTN/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(2);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>Eventopeople</h2>
                  <p>Trailer Music</p>
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/p/CWk5tF6oJZv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(3);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>Rowing Club bern</h2>
                  <p>Short Film</p>
                </motion.div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=GqBwmTAkXlQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(4);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>Caveworld Game</h2>
                  <p>Trailer Music</p>
                </motion.div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=-Fn7go2mnSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(5);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>Airmango Project</h2>
                  <p>Trailer Music</p>
                </motion.div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=_wHuTdgQmcU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className={styles.cont}
                  onMouseEnter={() => {
                    setBg(6);
                    setBgOn(true);
                  }}
                  onMouseLeave={() => {
                    setBg();
                    setBgOn(false);
                  }}
                  whileHover={{
                    backgroundColor: "#00000066",
                    borderColor: "#b5e48c",
                  }}
                >
                  <h2 className={styles.h2}>Idle Farmyard</h2>
                  <p>Videogame Music</p>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </>
    )
  );
};

export default Portfolio;
