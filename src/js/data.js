import { nanoid } from "nanoid";

export default function allDice() {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push({
      number: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    });
  }
  return newDice;
}
