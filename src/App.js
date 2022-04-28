import React, { useState } from "react";
import "./App.css";
import ButtonEnter from "./Components/ButtonEnter/ButtonEnter";
import MainCircle from "./Components/SVGs/MainCircle";
import { AnimatePresence } from "framer-motion";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  const [isNotEntered, setIsNotEntered] = useState(true);
  const [enteredApp, setEnteredApp] = useState(false);
  const [page, setPage] = useState(1);

  const enterHandler = () => {
    setIsNotEntered(!isNotEntered);
  };

  function enterAppHandler(a) {
    setEnteredApp(true);
    setPage(a);
  }

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
        {enteredApp && <Navigation setPage={setPage} />}
        {enteredApp && <Main page={page} />}
      </div>
    </div>
  );
}

export default App;
