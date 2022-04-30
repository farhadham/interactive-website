import React from "react";
import styles from "./Main.module.scss";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Clients from "./Clients/Clients";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";

const Main = ({ page }) => {
  return (
    <div className={styles.mainWrapper}>
      <Home page={page} />
      <About page={page} />
      <Portfolio page={page} />
      <Clients page={page} />
      <Education page={page} />
      <Contact page={page} />
    </div>
  );
};

export default Main;
