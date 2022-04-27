import React from "react";
import styles from "./MainCircle.module.scss";
import { motion } from "framer-motion";

const path = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
  },
};

const MainCircle = (props) => {
  return (
    <motion.div
      className={styles.svgWrapper}
      exit={{ opacity: 0 }}
      key="cirlce-svg"
    >
      <motion.div className={styles.svg}>
        <motion.svg
          viewBox="0 0 489 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <motion.path
              d="M399.24 333.75V154.77L244.25 65.29L89.25 154.77V333.75L244.25 423.23L399.24 333.75Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.1 }}
              fill="none"
            />
            <motion.path
              d="M244.25 333.86C293.74 333.86 333.86 293.74 333.86 244.25C333.86 194.76 293.74 154.64 244.25 154.64C194.76 154.64 154.64 194.76 154.64 244.25C154.64 293.74 194.76 333.86 244.25 333.86Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.path
              d="M244.25 292.61C270.958 292.61 292.61 270.959 292.61 244.25C292.61 217.542 270.958 195.89 244.25 195.89C217.542 195.89 195.89 217.542 195.89 244.25C195.89 270.959 217.542 292.61 244.25 292.61Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.4 }}
            />
            <motion.path
              d="M244.25 65.29L89.25 333.75H399.24L244.25 65.29Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.path
              d="M244.25 423.23L399.24 154.77H89.25L244.25 423.23Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.1 }}
            />
            <motion.path
              d="M244.25 485C377.213 485 485 377.213 485 244.25C485 111.287 377.213 3.5 244.25 3.5C111.287 3.5 3.5 111.287 3.5 244.25C3.5 377.213 111.287 485 244.25 485Z"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              d="M244.25 472.65C370.392 472.65 472.65 370.392 472.65 244.25C472.65 118.108 370.392 15.85 244.25 15.85C118.108 15.85 15.85 118.108 15.85 244.25C15.85 370.392 118.108 472.65 244.25 472.65Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.3 }}
            />
            <motion.path
              d="M295.84 154.64L321.86 199.43L399.24 154.75L295.84 154.64Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.4 }}
            />
            <motion.path
              d="M192.7 154.64L166.68 199.43L89.29 154.75L192.7 154.64Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.5 }}
            />
            <motion.path
              d="M295.84 333.87L321.86 289.08L399.24 333.76L295.84 333.87Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.6 }}
            />
            <motion.path
              d="M192.7 333.87L166.68 289.08L89.29 333.76L192.7 333.87Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.7 }}
            />
            <motion.path
              d="M192.7 154.64H244.27V65.29L192.7 154.64Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.8 }}
            />
            <motion.path
              d="M295.84 333.88H244.27V423.24L295.84 333.88Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 1.9 }}
            />

            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M89.25 203.13 C115.959 203.13 137.61 181.478 137.61 154.77C137.61 128.062 115.959 106.41 89.25 106.41C62.5415 106.41 40.89 128.062 40.89 154.77C40.89 181.478 62.5415 203.13 89.25 203.13Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.2 }}
              fill="#76C893"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text1}
              x="89.25"
              y="154.77"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.5 }}
            >
              Contact
            </motion.text>
            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M136.998 341.511C141.277 315.148 123.375 290.307 97.0114 286.027C70.648 281.748 45.8071 299.651 41.5277 326.014C37.2483 352.378 55.151 377.218 81.5144 381.498C107.878 385.777 132.719 367.875 136.998 341.511Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.3 }}
              fill="#52B69A"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text2}
              x="55.998"
              y="341.511"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.4 }}
            >
              Education
            </motion.text>
            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M399.24 203.13C425.948 203.13 447.6 181.478 447.6 154.77C447.6 128.062 425.948 106.41 399.24 106.41C372.531 106.41 350.88 128.062 350.88 154.77C350.88 181.478 372.531 203.13 399.24 203.13Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.4 }}
              fill="#76C893"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text3}
              x="360.24"
              y="170.13"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.1 }}
            >
              About
            </motion.text>
            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M244.25 113.65C270.958 113.65 292.61 91.9985 292.61 65.29C292.61 38.5815 270.958 16.93 244.25 16.93C217.542 16.93 195.89 38.5815 195.89 65.29C195.89 91.9985 217.542 113.65 244.25 113.65Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.5 }}
              fill="#99D98C"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text4}
              x="218.25"
              y="71.65"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              Home
            </motion.text>
            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M291.302 434.312C297.438 408.318 281.339 382.272 255.344 376.137C229.35 370.002 203.304 386.1 197.169 412.095C191.034 438.089 207.133 464.135 233.127 470.27C259.121 476.406 285.167 460.307 291.302 434.312Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.6 }}
              fill="#168AAD"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text5}
              x="220.302"
              y="434.312"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.3 }}
            >
              Clients
            </motion.text>
            <motion.path
              onClick={() => {
                props.onClick();
              }}
              d="M399.24 382.1C425.948 382.1 447.6 360.448 447.6 333.74C447.6 307.031 425.948 285.38 399.24 285.38C372.531 285.38 350.88 307.031 350.88 333.74C350.88 360.448 372.531 382.1 399.24 382.1Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              variants={path}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, delay: 0.7 }}
              fill="#52B69A"
            />
            <motion.text
              onClick={() => {
                props.onClick();
              }}
              className={styles.text6}
              x="374.24"
              y="345.1"
              fontFamily="Verdana"
              fill="black"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 2.2 }}
            >
              Portfolio
            </motion.text>
          </g>
          <defs>
            <clipPath id="clip0_37_42">
              <rect width="488.5" height="488.5" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default MainCircle;
