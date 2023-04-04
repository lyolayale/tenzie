import React from "react";

export default function Dice(props) {
  return (
    <section className="dice-container">
      {props.dice.map(dice => (
        <p
          key={dice.id}
          style={{
            backgroundColor: dice.isHeld && "#59e391",
            color: dice.isHeld ? "#000" : "whitesmoke",
            textShadow: dice.isHeld && "0 5px 5px #000",
            WebkitTextStroke: dice.isHeld || "1px lightpink",
          }}
          className="dice"
          onClick={props.handleHoldDice}
          id={dice.id}
        >
          {dice.number}
        </p>
      ))}
    </section>
  );
}
