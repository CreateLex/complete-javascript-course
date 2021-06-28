const country = 'United States';
const continent = 'North America';
let population = 328000000;
let isIsland = false;
const language = 'English';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

const halfPopulation = population / 2 / 2;
console.log(halfPopulation);
population++;
console.log(population);
const hasMorePopulationThanFinlans = population > 6000000;
console.log(hasMorePopulationThanFinlans);
const lessThanAverageCountryPopulation = population < 33000000;
const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);


//Coding Challenge #1
const marksMass = 82;
const MarksHeight = 1.95;
const JohnsMass = 78;
const JohnsHeight = 1.68;

const marksBMI = marksMass / (MarksHeight * MarksHeight);
const johnsBMI = JohnsMass / (JohnsHeight * JohnsHeight);

const markHigherBMI = marksMass > johnsBMI;

console.log(marksBMI, johnsBMI);
const averagePopulation = 33000000;
if (population > averagePopulation) {
    console.log(`${country} population is about average`);

} else {
    console.log(`${country} population  is ${averagePopulation - population} below averaeg `);
}


if (marksBMI > johnsBMI) {

    console.log(`Marks BMI(${marksBMI}) is hgher then Johns BMI(${johnsBMI})`);

} else {
    console.log(`Johns BMI(${johnsBMI}) is higher then Marks BMI(${marksBMI})`);
}

console.log('123' < 56);

// let numNeighbours = Number(prompt(`How many neighbours country does your country have ?`));

// if (numNeighbours === 1) {

//     console.log(`Only 1 neigbouring country`);
// } else if (numNeighbours > 1) {
//     console.log(`Greater then  1 neigbouring country`);

// } else {
//     console.log(`No borders`);

// }

//LECTURE: Logical Operators


if (language === 'English' && population <= 50000000 && isIsland == false) {
    console.log(`Your should live in the ${country}`);
} else {
    console.log(`${country} doesnt meet your criteria`);

}


//LECTURE: The switch Statement


switch (language) {
    case `chinese`, `manderine`, `Chinese`:
        console.log(`MOST number of native speakers`);
        break;
    case `spanish`:
        console.log(`2nd most native speakers`);
        break;
    case `english`, `English`:
        console.log(`3rd most native speakers`)
        break;

    default:
        console.log(`also a great language too`);
        break;
}

//LECTURE: The Conditional (Ternary) Operator
console.log(`${country} populations is ${population > 33000000 ? "above" : "below"} average`)
//const populationOver33mil = population > 33000000 ? console.log(`${ country } is above average`) : console.log(`${ country } is below averae`);


//Coding Challenge #3

const dolphinsScore1 = 98;
const dolphinsScore2 = 109;
const dolphinsScore3 = 96;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const MINSCORE = 100;


const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (dolphinsAverageScore >= MINSCORE && dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphines Avergge score(${dolphinsAverageScore}) greater than koalas average score(${koalasAverageScore})`);
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= MINSCORE) {
    console.log(`Koalas Avergge score(${koalasAverageScore}) greater than dalphins average score(${dolphinsAverageScore})`);

} else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= MINSCORE) {
    console.log(`We have a draw`);
}

//Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`${tip}% `);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
