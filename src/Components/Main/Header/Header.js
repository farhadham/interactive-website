import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className={styles.wrapper}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <a href="./">
        <img className={styles.img} src="./logo.png" alt="logo" />
      </a>
      <p className={styles.p}>+90 543 455 2160</p>
      <a href="mailto:@farhadham2@gmail.com">
        <p className={styles.p}>farhadham2@gmail.com</p>
      </a>
    </motion.header>
  );
};

export default Header;
