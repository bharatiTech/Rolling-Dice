import RollingDice from "./rollTheDice.js";

let numberOfDiceInput = document.getElementById("number-of-dice");
let rollDiceButton = document.getElementById("roll");
let diceContainer = document.getElementById("dice-container");

let numberOfDice = 0;

numberOfDiceInput.addEventListener("change", (event) => {
  numberOfDice = event.target.value;
});

rollDiceButton.addEventListener("click", () => {
  let previous = document.getElementById("innerRoot");

  if (previous !== null) {
    previous.remove();
  }

  let object = new RollingDice(numberOfDice);
  let diceDiv = object.roll();
  diceContainer.appendChild(diceDiv);
});
