import "./StartPage.css";
import TicTacToe from "../img/Logo.svg";
import XLogo from "../img/Group.svg";
import Ologo from "../img/Group (1).svg";
import OLogoSecond from "../img/Group.png";
import XLogoSecond from "../img/Group (3).svg";

const StartPage = (props) => {
  const startClickHandler = () => {
    props.onStart();
  };

  return (
    <div>
      <img className="x-logo-first" src={XLogo} alt="X logo" />
      <img className="o-logo-first" src={Ologo} alt="O logo" />
      <img className="o-logo-second" src={OLogoSecond} alt="O logo" />
      <img className="X-logo-second" src={XLogoSecond} alt="X logo" />
      <img
        className="tic-tac-toe-main-logo"
        src={TicTacToe}
        alt="tic-tac-toe logo"
        onClick={startClickHandler}
      />
    </div>
  );
};

export default StartPage;
