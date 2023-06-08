import "./Game.css";
import Table from "./Table";
import Drawer from "./Drawer";

const Game = () => {
  return (
    <>
      <Table>
        <div className="rows">
          <Drawer />
          <Drawer />
          <Drawer />
        </div>
        <div className="rows">
          <Drawer />
          <Drawer />
          <Drawer />
        </div>
        <div className="rows">
          <Drawer />
          <Drawer />
          <Drawer />
        </div>
      </Table>
    </>
  );
};

export default Game;
