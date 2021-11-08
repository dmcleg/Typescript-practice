var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div = document.createElement('div');
        this.div.className = "dice";
        this.div.textContent = this.value;
        allDice.push(this);
        diceContainer.appendChild(this.div);
        this.div.addEventListener('click', function () {
            _this.roll();
        });
        this.div.addEventListener("dblclick", function () {
            diceContainer.removeChild(_this.div);
            var index = allDice.indexOf(_this);
            allDice.splice(index, 1);
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value;
    };
    return Die;
}());
var allDice = [];
var diceContainer = document.getElementById("diceContainer");
var moreDice = document.getElementById("button1");
var rollDice = document.getElementById("button2");
var sumDice = document.getElementById("button3");
moreDice.addEventListener("click", function () { return new Die(); });
rollDice.addEventListener("click", function () {
    allDice.forEach(function (toRoll) {
        toRoll.roll();
    });
});
sumDice.addEventListener("click", function () {
    var sum = 0;
    allDice.forEach(function (toSum) {
        sum += toSum.value;
    });
    alert(sum);
});
