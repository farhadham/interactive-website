import React, { useState } from "react";
import styles from "./Education.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Education = ({ page }) => {
  const [button1Hovered, setButton1Hovered] = useState(false);
  const [button2Hovered, setButton2Hovered] = useState(false);
  const [button3Hovered, setButton3Hovered] = useState(false);

  return (
    page === 5 && (
      <>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.background1}
            animate={{ opacity: 0.28 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          ></motion.div>
          <div className={styles.background2}></div>
          <motion.div className={styles.contentWrapper}>
            <div className={styles.cert1}>
              <motion.h1
                className={styles.h1Cert}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                Certificates
              </motion.h1>
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Harvard University - CS50's understanding technology
              </motion.h2>
              <a href="./CS50T.pdf">
                <motion.button
                  type="button"
                  onMouseEnter={() => {
                    setButton1Hovered(true);
                  }}
                  onMouseLeave={() => {
                    setButton1Hovered(false);
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  VEIW CERTIFICATE
                  <motion.div
                    animate={{ width: button1Hovered ? "205px" : "1px" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>
              </a>
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Google - The Fundamentals of Digital Marketing
              </motion.h2>
              <a href="./Google.pdf">
                <motion.button
                  type="button"
                  onMouseEnter={() => {
                    setButton2Hovered(true);
                  }}
                  onMouseLeave={() => {
                    setButton2Hovered(false);
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  VEIW CERTIFICATE
                  <motion.div
                    animate={{ width: button2Hovered ? "205px" : "1px" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>
              </a>
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Sololearn - JavaScript
              </motion.h2>
              <a href="./sololearn.pdf">
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
                  VEIW CERTIFICATE
                  <motion.div
                    animate={{ width: button3Hovered ? "205px" : "1px" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>
              </a>
              <motion.h1
                className={styles.h1Edu}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                University Education
              </motion.h1>
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Bachelor of Science - Civil Engineering
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </>
    )
  );
};

export default Education;
