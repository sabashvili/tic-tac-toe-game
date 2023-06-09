import { useState } from "react";
import "./Drawer.css";

const Drawer = (props) => {
  const [drawerInside, setDrawerInside] = useState("");

  const putClickHendler = (e) => {
    // if (props.playerTurn === "player1") {
    //   setDrawerInside(<img className="x" src={X} alt="X logo" />);
    //   props.onChangeTurn();
    // } else {
    //   setDrawerInside(<img className="x" src={O} alt="O logo" />);
    //   props.onChangeTurn();
    // }
  };

  return (
    <div onClick={putClickHendler} className="drawer">
      {props.children}
    </div>
  );
};

export default Drawer;
