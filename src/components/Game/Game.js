import "./Game.css";
import Table from "./Table";
import Drawer from "./Drawer";
import { useState } from "react";
import X from "../../img/X.svg";
import O from "../../img/O.svg";

const Game = (props) => {
  const [table, setTable] = useState([
    { drawerNumber: 1, value: "" },
    { drawerNumber: 2, value: "" },
    { drawerNumber: 3, value: "" },
    { drawerNumber: 4, value: "" },
    { drawerNumber: 5, value: "" },
    { drawerNumber: 6, value: "" },
    { drawerNumber: 7, value: "" },
    { drawerNumber: 8, value: "" },
    { drawerNumber: 9, value: "" },
  ]);

  const [winVariations] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]);

  const [turn, setTurn] = useState("player-1");

  const winnerDiscover = (currDrawerNumb) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        if (winVariations[i][j] === currDrawerNumb) {
          winVariations[i][j] = turn === "player-1" ? "X" : "O";
        }
      }
      if (winVariations[i].every((el) => el === "X")) {
        props.onDiscoverWinner("Player-1");
      } else if (winVariations[i].every((el) => el === "O")) {
        props.onDiscoverWinner("Player-2");
      }
    }
  };

  const ChangeTurnHendler = () => {
    if (turn === "player-1") {
      setTurn("player-2");
    } else {
      setTurn("player-1");
    }
  };

  const setDrawerValue = (drawerNumber) => {
    const currTable = table.map((el) => {
      if (el.drawerNumber !== drawerNumber) {
        return el;
      } else {
        return { drawerNumber: el.drawerNumber, value: turn === "player-1" ? X : O };
      }
    });
    setTable(currTable);
  };

  return (
    <>
      <Table>
        <div className="rows">
          {table.map((drawer) => (
            <Drawer
              key={Math.random()}
              currentDrawer={drawer}
              onSetValue={setDrawerValue}
              onTurnChange={ChangeTurnHendler}
              onWinnerDisc={winnerDiscover}
            >
              <img className="x" src={drawer.value} />
            </Drawer>
          ))}
        </div>
      </Table>
    </>
  );
};

export default Game;
