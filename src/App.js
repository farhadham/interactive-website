import React, { useState } from "react";
import "./App.css";
import ButtonEnter from "./Components/ButtonEnter/ButtonEnter";
import MainCircle from "./Components/SVGs/MainCircle";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  const [isNotEntered, setIsNotEntered] = useState(true);
  const [enteredApp, setEnteredApp] = useState(false);

  const enterHandler = () => {
    setIsNotEntered(!isNotEntered);
  };

  const enterAppHandler = () => {
    setEnteredApp(true);
    console.log(true);
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <AnimatePresence>
          {!isNotEntered && !enteredApp && (
            <MainCircle onClick={enterAppHandler} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isNotEntered && <ButtonEnter onClick={enterHandler} />}
        </AnimatePresence>
        {enteredApp && <Navigation />}
      </div>
    </div>
  );
}

export default App;
