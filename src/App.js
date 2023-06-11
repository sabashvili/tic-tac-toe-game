import React, { useState, Fragment } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import Game from "./components/Game/Game";
import WinnerModal from "./components/UI/WinnerModal";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [winnerName, setWinnerName] = useState("");

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const winnerDiscoverHandler = (winner) => {
    setWinnerName(winner);
  };

  const resetGameHandler = () => {
    setGameStarted(false);
    setWinnerName("");
  };

  return (
    <Fragment>
      {!gameStarted ? <StartPage onStart={startGameHandler} /> : <Game onDiscoverWinner={winnerDiscoverHandler} />}
      {winnerName && gameStarted ? <WinnerModal closeWinModal={resetGameHandler} winner={`${winnerName} is a WINNER`} /> : ""}
    </Fragment>
  );
}

export default App;
