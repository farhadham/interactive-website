import React, { useState } from "react";
import styles from "./Clients.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Clients = ({ page }) => {
  return (
    page === 4 && (
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
            <motion.h1
              className={styles.h1}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <span>Best</span> Partners
            </motion.h1>
            <motion.div
              className={styles.content}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <img src="./Images/partners/1.png" alt="Overwolf" />
              <img src="./Images/partners/2.png" alt="NHL Stenden" />
              <img src="./Images/partners/3.png" alt="Eventopeople" />
              <img src="./Images/partners/4.png" alt="Rowing club bern" />
              <img src="./Images/partners/5.png" alt="Skyylytes" />
              <img src="./Images/partners/6.png" alt="wakinda" />
              <img src="./Images/partners/7.png" alt="Airmango" />
            </motion.div>
          </motion.div>
        </div>
      </>
    )
  );
};

export default Clients;
