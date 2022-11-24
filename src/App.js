import React, { useState } from "react";
import ChoicePuck from "./components/ChoicePuck";
import ResultSection from "./components/ResultSection";
import { getChoice } from "./functions/getChoice";
import { getRandomName } from "./functions/getRandomName";
import Logo from "./images/logo.svg";
import Triangle from "./images/bg-triangle.svg";
import { useEffect } from "react";

function App() {
  const [userChoice, setuserChoice] = useState({});
  const [hidden, setHidden] = useState(true);
  const [score, setScore] = useState(0);

  const handlePuckClick = (name) => {
    const choice = getChoice(name);
    setuserChoice(choice);
  };

  const finishedChoosing = userChoice.hasOwnProperty("name");
  let houseChoice;
  let diff;

  useEffect(() => {
    let timer;
    if (finishedChoosing && hidden) {
      timer = setTimeout(() => {
        setHidden(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [userChoice, finishedChoosing, hidden]);

  if (finishedChoosing && !hidden) {
    houseChoice = getRandomName();
    diff =
      userChoice[houseChoice] === "win"
        ? 1
        : userChoice[houseChoice] === "draw"
        ? 0
        : -1;
  }

  return (
    <div className="App">
      {!finishedChoosing && (
        <img src={Triangle} alt="triangle" className="bg-triangle" />
      )}
      <div className="score-tracker">
        <img src={Logo} alt="logo" className="logo" />
        <div className="counter-div">
          <p className="counter-div-text">SCORE</p>
          <p className="counter-div-score">
            {score + Number(diff ? diff : 0) >= 0
              ? score + Number(diff ? diff : 0)
              : 0}
          </p>
        </div>
      </div>
      {!finishedChoosing ? (
        <div className="grid">
          <div className="box">
            <ChoicePuck name={"paper"} onClick={handlePuckClick} />
          </div>

          <div className="box">
            <ChoicePuck name={"scissors"} onClick={handlePuckClick} />
          </div>

          <div className="double-box">
            <ChoicePuck name={"rock"} onClick={handlePuckClick} />
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              maxWidth: "1200px",
              margin: "50px auto",
              gap: "50px",
            }}
          >
            {/* UserChoice puck */}
            <div className="who-picked">
              <ChoicePuck name={userChoice.name} noHover={true} />
              <p>YOU PICKED</p>
            </div>
            {window.innerWidth > 700 && (
              <ResultSection
                hidden={hidden}
                result={
                  userChoice[houseChoice] === "win"
                    ? "YOU WIN"
                    : userChoice[houseChoice] === "lose"
                    ? "YOU LOSE"
                    : "DRAW"
                }
                onClick={() => {
                  setuserChoice({});
                  setHidden(true);
                  setScore((prevScore) =>
                    prevScore + diff >= 0 ? prevScore + diff : 0
                  );
                }}
              />
            )}
            <div className="who-picked">
              <ChoicePuck name={houseChoice} hidden={hidden} noHover={true} />
              <p>THE HOUSE PICKED</p>
            </div>
          </div>
          {window.innerWidth < 700 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ResultSection
                hidden={hidden}
                result={
                  userChoice[houseChoice] === "win"
                    ? "YOU WIN"
                    : userChoice[houseChoice] === "lose"
                    ? "YOU LOSE"
                    : "DRAW"
                }
                onClick={() => {
                  setuserChoice({});
                  setHidden(true);
                  setScore((prevScore) =>
                    prevScore + diff >= 0 ? prevScore + diff : 0
                  );
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
