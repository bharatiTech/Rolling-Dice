export default class RollingDice {
  constructor(numberOfDice) {
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
    let diceRoot = document.createElement("div");
    diceRoot.classList.add("dice-container");
    diceRoot.setAttribute("id", "innerRoot");

    if (this.numberOfDice < 100 && this.numberOfDice > 0) {
      let arr = new Uint8Array(this.numberOfDice);
      crypto.getRandomValues(arr);
      let randomDieValues = [...arr].map((v) => (v % 6) + 1);

      randomDieValues.forEach((value) => {
        let dice = document.createElement("div");
        dice.classList.add("diceGrid", `dice${value}`);

        for (let i = 0; i < value; i++) {
          let die = document.createElement("div");
          die.classList.add("dotGrid");
          die.style.gridArea = this.areaNumMap[i];
          dice.appendChild(die);
        }

        diceRoot.appendChild(dice);
      });
    }
    return diceRoot;
  }

  rollFlex() {
    let diceRoot = document.createElement("div");
    diceRoot.setAttribute("id", "innerRoot");
    diceRoot.classList.add("diceRoot");

    if (this.numberOfDice < 100 && this.numberOfDice > 0) {
      let arr = new Uint8Array(this.numberOfDice);
      crypto.getRandomValues(arr);
      let randomDieValues = [...arr].map((v) => (v % 6) + 1);
      console.log(randomDieValues);

      randomDieValues.forEach((value) => {
        let dice = document.createElement("div");
        dice.classList.add("dice");
        dice.classList.add(`dice_${value}`);

        if (value > 3) {
          if (value % 2) {
            let newValue = value - 1;
            this.alignDots(newValue, dice);

            let column = document.createElement("div");
            column.classList.add("columnMid");
            this.createDot(column);
            dice.appendChild(column);
            value == 5 && dice.insertBefore(column, dice.children[1]);
          } else {
            this.alignDots(value, dice);
          }
        } else {
          for (let i = 0; i < value; i++) {
            let die = document.createElement("div");
            die.classList.add("dot");
            dice.appendChild(die);
          }
        }

        diceRoot.appendChild(dice);
      });
    }
    return diceRoot;
  }

  alignDots(value, dice) {
    let divided = value / 2;
    for (let i = 0; i < 2; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 0; j < divided; j++) {
        this.createDot(column);
      }
      dice.appendChild(column);
    }
  }

  createDot(column) {
    let die = document.createElement("div");
    die.classList.add("dot");
    column.appendChild(die);
  }
}
