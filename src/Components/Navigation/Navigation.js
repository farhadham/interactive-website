import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "HOME", page: 1 },
  { title: "ABOUT", page: 2 },
  { title: "PORTFOLIO", page: 3 },
  { title: "CLIENTS", page: 4 },
  { title: "EDUCATION", page: 5 },
  { title: "CONTACT", page: 6 },
];

const Navigation = (props) => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const [navIsToggled, setNavIsToggled] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setNavIsOpen(false);
      setNavIsToggled(false);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.toggleButt}
        onClick={() => {
          setNavIsOpen(!navIsOpen);
          setNavIsToggled(!navIsToggled);
        }}
      >
        <motion.span
          className={styles.line1}
          animate={
            navIsToggled ? { rotateZ: 45, y: 11.7 } : { rotateZ: 0, y: 0 }
          }
        ></motion.span>
        <motion.span
          className={styles.line2}
          animate={navIsToggled ? { width: 0 } : { width: "40px" }}
        ></motion.span>
        <motion.span
          className={styles.line3}
          animate={
            navIsToggled ? { rotateZ: -45, y: -11.7 } : { rotateZ: 0, y: 0 }
          }
        ></motion.span>
      </div>
      <AnimatePresence>
        {navIsOpen && (
          <motion.div
            className={styles.wallpaper}
            initial={{ scale: 0.01 }}
            animate={{ scale: 88 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            exit={{ scale: 0.01 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className={styles.container}>
        <AnimatePresence>
          {navIsOpen && (
            <motion.ul
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {navLinks.map((item, index) => {
                return (
                  <motion.li
                    onClick={() => {
                      props.setPage(item.page);
                    }}
                    key={index}
                    animate={{ backgroundPosition: "700px" }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ backgroundPosition: "0px" }}
                  >
                    {item.title}
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navigation;
