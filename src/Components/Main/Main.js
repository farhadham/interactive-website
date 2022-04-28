import React from "react";
import styles from "./Main.module.scss";
import Home from "./Home/Home";
import About from "./About/About";

const Main = ({ page }) => {
  return (
    <div className={styles.mainWrapper}>
      <Home page={page} />
      <About page={page} />
    </div>
  );
};

export default Main;