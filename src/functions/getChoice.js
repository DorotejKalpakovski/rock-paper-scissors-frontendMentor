const Rock = {
  name: "rock",
  rock: "draw",
  paper: "lose",
  scissors: "win",
};

const Paper = {
  name: "paper",
  rock: "win",
  paper: "draw",
  scissors: "lose",
};

const Scissors = {
  name: "scissors",
  rock: "lose",
  paper: "win",
  scissors: "draw",
};

const getRock = () => {
  return Rock;
};

const getPaper = () => {
  return Paper;
};

const getScissors = () => {
  return Scissors;
};

const getChoice = (name) => {
  return name === "rock"
    ? getRock()
    : name === "paper"
    ? getPaper()
    : getScissors();
};

export { getChoice };
