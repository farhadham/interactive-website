import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ page }) => {
  const [button1Hovered, setButton1Hovered] = useState(false);
  const [button2Hovered, setButton2Hovered] = useState(false);
  const [button3Hovered, setButton3Hovered] = useState(false);

  return (
    page === 6 && (
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
            <div className={styles.left}>
              <motion.h1
                className={styles.h1}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                Contact
              </motion.h1>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                +90 543 455 2160
              </motion.p>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Farhadham2@gmail.com
              </motion.p>
            </div>
            <div className={styles.right}>
              <motion.h2
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                Let's grab a coffee and jump
                <br />
                on conversation <span>chat with me</span>.
              </motion.h2>
              <motion.form
                action="https://formsubmit.co/farhadham2@gmail.com"
                method="POST"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <div className>
                  <motion.input
                    className
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <motion.input
                    className
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <motion.textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  name="text"
                  required
                ></motion.textarea>
                <motion.button
                  className={styles.button}
                  type="submit"
                  onMouseEnter={() => {
                    setButton1Hovered(true);
                  }}
                  onMouseLeave={() => {
                    setButton1Hovered(false);
                  }}
                >
                  Submit
                  <motion.div
                    animate={{ width: button1Hovered ? "205px" : "1px" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </>
    )
  );
};

export default Contact;
