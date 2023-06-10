import "./Drawer.css";

const Drawer = (props) => {
  const putClickHendler = (e) => {
    if (!props.currentDrawer.value) {
      props.onSetValue(props.currentDrawer.drawerNumber);
      props.onTurnChange();
      props.onWinnerDisc(props.currentDrawer.drawerNumber);
    }
  };

  return (
    <div onClick={putClickHendler} className="drawer">
      {props.children}
    </div>
  );
};

export default Drawer;
