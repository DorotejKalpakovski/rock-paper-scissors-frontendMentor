const ResultSection = ({ result, onClick, hidden }) => {
  return (
    <div
      className="win-lose"
      style={{
        transition: "width 1s .5s, opacity 1s 1.3s, margin 1s .5s",
        width: hidden ? 0 : 200,
        opacity: hidden ? 0 : 1,
        margin: hidden ? 0 : "20px",
      }}
    >
      <p className="result">{result}</p>
      <button className="button" onClick={onClick}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
