import React, { useState, Fragment } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import Game from "./components/Game/Game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGameHandler = () => {
    setGameStarted(true);
  };

  return (
    <Fragment>
      {!gameStarted ? <StartPage onStart={startGameHandler} /> : <Game />}
    </Fragment>
  );
}

export default App;
