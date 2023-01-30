export default class RollingDice {
  constructor(diceContainer, numberOfDice) {
    this.diceContainer = diceContainer;
    this.numberOfDice = numberOfDice;
    this.areaNumMap = {
      0: "a",
      1: "b",
      2: "c",
      3: "d",
      4: "e",
      5: "f",
      6: "g",
      7: "h",
      8: "i",
    };
  }
  roll() {
    if (this.numberOfDice < 100 && this.numberOfDice > 0) {
      let arr = new Uint8Array(this.numberOfDice);
      crypto.getRandomValues(arr);
      let randomDieValues = [...arr].map((v) => (v % 6) + 1);

      randomDieValues.forEach((value) => {
        let dice = document.createElement("div");
        dice.classList.add("dice", `dice${value}`);

        for (let i = 0; i < value; i++) {
          let die = document.createElement("div");
          die.classList.add("dot");
          die.style.gridArea = this.areaNumMap[i];
          dice.appendChild(die);
        }
        this.diceContainer.appendChild(dice);
      });
    }
    this.numberOfDice = 0;
  }
}
