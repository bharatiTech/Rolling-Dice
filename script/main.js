import RollingDice from "./rollTheDice.js";

let numberOfDiceInput = document.getElementById("number-of-dice");
let rollDiceButton = document.getElementById("roll");
let diceContainer = document.getElementById("dice-container");

let numberOfDice = 0;

numberOfDiceInput.addEventListener("change", (event) => {
  numberOfDice = event.target.value;
});

rollDiceButton.addEventListener("click", () => {
  numberOfDiceInput.value = 0;
  let object = new RollingDice(diceContainer, numberOfDice);
  object.roll();
  numberOfDice = 0;
});
