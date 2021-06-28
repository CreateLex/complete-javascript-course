'use strict';
let hasDriversLicense = false;
const pastTest = true;

if (pastTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I Can Drive :D`);


//JavaScript Fundamentals – Part 2

function describeCountry(country, population, capitalCity) {

    return `${country} has ${population} million people and its capital city is ${capitalCity} `;
}
const unitedStates = describeCountry("United States", 350, "Washington DC");
console.log(unitedStates);

//LECTURE: Function Declarations vs. Expressions

//function declaration 
function percentageOfWorld1(population) {

    return (population / 7900) * 100;
};

console.log(percentageOfWorld1(1441));



// function expression 
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;

};

console.log(percentageOfWorld2(1441));

// Arrow function 

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(3944));


function describePopulation(population, country) {

    return `${country} has ${population} million people which is ${percentageOfWorld1(population)} of the world`;
}

console.log(describePopulation(1441, "United States"));


// #coding Challenge 1

//dolphins and the Koalas

//

const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}


const dolphinsAverageScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const KoalasAverageScoer = calcAverage(koalasScore1, koalasScore2, koalasScore3);

console.log(dolphinsAverageScore, KoalasAverageScoer);

function checkWinner(teamName1, team1Score, teamName2, team2Score) {
    if (team1Score >= 2 * team2Score) {
        console.log(`${teamName1} wins ${team1Score} vs ${team2Score}`);
    } else if (team2Score >= 2 * team1Score) {
        console.log(`${teamName2} wins ${team2Score} vs ${team1Score}`);

    }
}

checkWinner('Dolphins', dolphinsAverageScore, "Koalas", KoalasAverageScoer);



const populations = [2290, 9000, 3193, 8800];
if (populations.length === 4) {
    console.log(`true`);
} else {
    console.log(`false`);
}
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


const friends = ["Shaun", "Gilbert", "Adam"];
friends.push("John");
const popped = friends.pop();
console.log(popped);
friends.unshift("Johnny");
console.log(friends);

const neighbours = Array('Mexico', 'Canada');
neighbours.push("Utopia");
neighbours.pop(); // removing it from the array

console.log(neighbours);
if (neighbours.includes("Germany")) {

} else {
    console.log(`Not in a centrual European Country :D`);
}

const neighboursLength = neighbours.length;
const indexOfCanada = neighbours.indexOf("Canada");
neighbours[indexOfCanada] = "Wakanda";
console.log(neighbours);

const bills = Array(22, 295, 176, 440, 38, 105, 10, 1100, 86, 52);
const tips = Array();
const total = Array();
function calTip(billAmount) {

    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * .15;
    } else {
        return billAmount * .20;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calTip(bills[i]));
    total.push(tips[i] + bills[i]);

}
//tips.push(calTip(bills[0], calTip(bills[1]), calTip(bills[2])));
//total.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);




console.log(` Tip is ${calTip(436)}`);

//create an aobject 
const myCountry = {
    country: "United States",
    capital: "Washington DC",
    language: "English",
    populations: 321,
    neighbours: 2,
    describe: function () {
        console.log(`${this.country} has ${this.populations} million ${this.language} speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours > 0 ? true : false;
        return this.isIsland;
    }




};

myCountry.describe();

myCountry.populations = myCountry.populations + 2; // increate by 2 million using dot notation 
console.log(`Population is ${myCountry.populations}`);

myCountry["populations"] = myCountry['populations'] - 2;

console.log(`Population is ${myCountry.populations}`);
myCountry.checkIsland();
console.log(myCountry.isIsland);
//console.log(myCountry.describe());

// LECTURE: Dot vs. Bracket Notation


//Coding Challenge #3
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
const markkMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.calcBMI = this.mass / this.height ** 2;

    }

};

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.calcBMI = this.mass / (this.height * this.height);

    }

};


if (markkMiller.calcBMI() > johnSmith.calcBMI()) {
    console.log(`${markkMiller.fullName} BMI(${markkMiller.calcBMI}) is Higher then ${johnSmith.fullName} BMI(${johnSmith.calcBMI})`);
} else {

    console.log(`${johnSmith.fullName} BMI(${johnSmith.calcBMI}) is Higher then ${markkMiller.fullName} BMI(${markkMiller.calcBMI})`);

}


//LECTURE: Iteration: The for Loop 
//'Voter number 1 is currently voting'
for (let x = 1; x <= 10; x++) {
    // console.log(`Voter Number ${x} is curerntly voting`);
}


//LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];
for (let x = 0; x < populations.length; x++) {
    percentages2.push(percentageOfWorld1(populations[x]));

}
for (let b = 0; b < percentages2.length; b++) {
    if (percentages[b] === percentages2[b]) {
        console.log("Match");
    }

}

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let x = 0; x < listOfNeighbours.length; x++) {

    for (let y = 0; y < listOfNeighbours[x].length; y++) {

        console.log(listOfNeighbours[x][y]);

    }
}


const percentages3 = [];
let conter = 0;
while (conter < populations.length) {

    percentages3.push(percentageOfWorld2(populations[conter]));
    console.log(Math.trunc(percentages3[conter]));
    conter++;
}

//Coding Challenge #4

console.log(tips);
console.log(total);

const calcAverage2 = function (arrayA) {

    let result = 0;
    for (let i = 0; i < arrayA.length; i++) {

        result = result + arrayA[i];


    }
    console.log(`total ${result}`);
    return result / arrayA.length;
}
const arrayExample = Array(70, 99, 80, 78);
console.log(calcAverage2(arrayExample));