class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div = document.createElement('div');
        this.div.className = "dice";
        this.div.textContent = this.value;
        allDice.push(this);
        diceContainer.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.roll();
        })
        this.div.addEventListener("dblclick", () => {
            diceContainer.removeChild(this.div);
            let index = allDice.indexOf(this);
            allDice.splice(index, 1);
        })
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value;
    }
}

let allDice = []

const diceContainer = document.getElementById("diceContainer");
const moreDice = document.getElementById("button1");
const rollDice = document.getElementById("button2");
const sumDice = document.getElementById("button3");

moreDice.addEventListener("click",() => new Die());

rollDice.addEventListener("click", () => {
    allDice.forEach(toRoll => {
        toRoll.roll();
    })
})

sumDice.addEventListener("click", () => {
    let sum = 0;
    allDice.forEach(toSum => {
        sum += toSum.value;
    })
    alert(sum)
})