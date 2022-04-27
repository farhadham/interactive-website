import React from "react";
import styles from "./Navigation.module.scss";
import { motion } from "framer-motion";

const navLinks = [
  "HOME",
  "ABOUT",
  "PORTFOLIO",
  "CLIENTS",
  "EDUCATION",
  "CONTACT",
];

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          {navLinks.map((item, index) => {
            return (
              <motion.li
                key={index}
                animate={{ backgroundPosition: "700px" }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundPosition: "0px" }}
              >
                {item}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
