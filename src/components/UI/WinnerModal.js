import "./WinnerModal.css";

const WinnerModal = (props) => {
  const closeWinHandler = () => {
    props.closeWinModal();
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">
          <h2>Who is a winner?</h2>
        </header>
        <div className="content">
          <p>{props.winner}</p>
        </div>
        <footer className="actions">
          <button className="button" type="button" onClick={closeWinHandler}>
            Reset Game
          </button>
        </footer>
      </div>
    </div>
  );
};

export default WinnerModal;
// Please enter a valid name and age (non-empty values).
// Please enter a valid age (> 0).
