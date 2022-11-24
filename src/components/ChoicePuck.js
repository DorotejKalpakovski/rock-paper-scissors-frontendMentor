import Rock from "../images/icon-rock.svg";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";

const ChoicePuck = ({ name, onClick, hidden, noHover, win }) => {
  const image = name === "rock" ? Rock : name === "paper" ? Paper : Scissors;

  const border =
    name === "rock"
      ? "border-red"
      : name === "paper"
      ? "border-blue"
      : "border-yellow";

  return hidden ? (
    <div className="empty-puck"></div>
  ) : (
    <div
      className={`choice-puck ${border + " " + (noHover && "no-hover")}`}
      onClick={() => {
        if (onClick) {
          onClick(name);
        }
      }}
    >
      <img src={image} alt="" />
    </div>
  );
};

export default ChoicePuck;
