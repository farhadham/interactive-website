import React from "react";
import styles from "./ButtonEnter.module.scss";
import { motion } from "framer-motion";

const ButtonEnter = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      className={styles.butEnter}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -10,
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 16px 32px -8px`,
      }}
      whileTap={{ scale: 0.99, y: 0 }}
      key="enter-button"
      exit={{ opacity: 0, scale: 0 }}
    >
      ENTER
    </motion.button>
  );
};

export default ButtonEnter;
