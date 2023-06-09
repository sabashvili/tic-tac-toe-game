import "./Game.css";
import Table from "./Table";
import Drawer from "./Drawer";
import { useState } from "react";
import X from "../../img/X.svg";
import O from "../../img/O.svg";

const Game = () => {
  const [table, setTable] = useState([
    { drawer: 1, value: X },
    { drawer: 2, value: O },
    { drawer: 3, value: X },
    { drawer: 4, value: X },
    { drawer: 5, value: O },
    { drawer: 6, value: X },
    { drawer: 7, value: X },
    { drawer: 8, value: O },
    { drawer: 9, value: O },
  ]);

  const [turn, setTurn] = useState("player1");

  const ChangeTurnHendler = () => {
    // setTurn((prev) => !prev);
  };

  return (
    <>
      <Table>
        <div className="rows">
          {table.map((drawer) => (
            <Drawer key={Math.random()} />
          ))}
        </div>
      </Table>
    </>
  );
};

export default Game;
