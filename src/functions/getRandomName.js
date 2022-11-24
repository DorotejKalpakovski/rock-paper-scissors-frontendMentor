const names = ["rock", "paper", "scissors"];

const getRandomName = () => {
  const random = Math.floor(Math.random() * 3);

  return names[random];
};

export { getRandomName };
