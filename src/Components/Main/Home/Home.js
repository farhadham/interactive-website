import React, { useState } from "react";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";

const Home = ({ page }) => {
  const [button3Hovered, setButton3Hovered] = useState(false);

  return (
    page === 1 && (
      <motion.div
        className={styles.mainWrapper}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={styles.background}
          animate={{ opacity: 0.28 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        <div
          className={styles.container}
          // animate={{ opacity: 1 }}
          // initial={{ opacity: 0 }}
          // transition={{ duration: 0.4 }}
        >
          <div className={styles.texts}>
            <motion.h2
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Web Developer
            </motion.h2>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <span>HELLO</span>, MY
              <br />
              NAME IS
              <br />
              FARHAD FARAJI
            </motion.h1>
            <motion.h2
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Music Composer, Producer and Audio Engineer
            </motion.h2>
            <a
              href="https://www.linkedin.com/in/farhadfaraji/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                type="button"
                onMouseEnter={() => {
                  setButton3Hovered(true);
                }}
                onMouseLeave={() => {
                  setButton3Hovered(false);
                }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                LINKEDIN
                <motion.div
                  animate={{ width: button3Hovered ? "205px" : "1px" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default Home;
