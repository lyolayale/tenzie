import React from "react";
import Confetti from "react-confetti";
import Dice from "./components/Dice";

import theDice from "./js/data";
import blue from "../src/resources/images/ElatedBlueLeveret.webp";

export default function App() {
  const [dice, setDice] = React.useState(theDice);
  const [tenzie, setTenzie] = React.useState(false);

  React.useEffect(() => {
    const theNumber = dice[0].number;
    const isHeld = dice.every(die => die.isHeld);
    const sameNumber = dice.every(die => die.number === theNumber);

    if (isHeld && sameNumber) {
      setTenzie(true);
    }
  }, [dice]);

  function handleRoll() {
    setDice(prev =>
      prev.map(die => {
        const theNumber = die.isHeld
          ? die.number
          : (die.number = Math.ceil(Math.random() * 6));
        return { ...die, number: theNumber };
      })
    );
  }

  function handleHoldDice(e) {
    setDice(prev =>
      prev.map(die => {
        if (die.id !== e.target.id) {
          return die;
        } else {
          return { ...die, isHeld: !die.isHeld };
        }
      })
    );
  }

  function handleNewGame() {
    setDice(theDice);
    setTenzie(false);
  }

  return (
    <main
      style={{
        background: tenzie ? `url(${blue}) no-repeat center center/cover` : "",
      }}
    >
      <section
        className="game--container"
        style={{ background: tenzie ? "rgba(255, 182, 193, 0.574)" : "" }}
      >
        <div className="game--board">
          <section className="game--text">
            <h1>Tenzies</h1>
            <p className="instructions">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </section>
          <div className="dice-wrapper">
            <Dice dice={dice} handleHoldDice={handleHoldDice} />
          </div>
          {tenzie ? (
            <button style={{ color: "gold" }} onClick={handleNewGame}>
              New Game
            </button>
          ) : (
            <button onClick={handleRoll}>Roll</button>
          )}
        </div>
        {tenzie && <Confetti />}
      </section>
    </main>
  );
}
