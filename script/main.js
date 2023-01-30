import RollingDice from "./rollTheDice.js";

let numberOfDiceInput = document.getElementById("number-of-dice");
let rollDiceButton = document.getElementById("roll");
let diceContainer = document.getElementById("dice-container");
let diceContainer2 = document.getElementById("dice-container2");
diceContainer2.classList.add("dice-container-2");

let numberOfDice = 0;

const roll = () => {
  let previous = document.getElementById("innerRoot");

  if (previous !== null) {
    previous.remove();
  }

  let object = new RollingDice(numberOfDice);

  // let diceDiv1 = object.roll();
  // diceContainer.appendChild(diceDiv1);

  let diceDiv2 = object.rollFlex();
  diceContainer2.appendChild(diceDiv2);
};

numberOfDiceInput.addEventListener("keydown", (event) => {
  numberOfDice = event.target.value;
  console.log("key", event.key);
  if (event.key == "Enter") {
    roll();
  }
});

rollDiceButton.addEventListener("click", roll);
