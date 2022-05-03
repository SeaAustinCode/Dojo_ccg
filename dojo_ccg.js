class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power
            console.log(this.name + " attacked " + target.name + " and lowered their resilience by " + target.res);
            console.log(target.name + "'s resilience is now " + target.res)
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "power") {
                target.power += this.magnitude
            } else if (this.stat === "resilience") {
                target.res += this.magnitude
            }
            console.log(target.name + " played " + this.name + " and " + this.text);
            console.log(target.name + "'s res is now " + target.res + " and their power is " + target.power);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

console.log("turn 1")
const red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4)
const hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3)
hard_algorithm.play(red_belt_ninja);
console.log("turn 2")
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4)
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
unhandled_promise_rejection.play(black_belt_ninja);
console.log("turn 3");
const pair_programming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2)
pair_programming.play(red_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);



