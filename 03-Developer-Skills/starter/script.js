// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("Hello workd");

// function expression
const myFunction = function (name) {
  console.log(`Hello everyone ${name} `);
};

myFunction("Alex");

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsious",
    value: Number(prompt("Degree value")),
  };

  const kelvin = measureKelvin.value + 247;
  return kelvin;
};

//Developer Skills & Editor Setup
//Coding Challenge #1
const printForecast = function (arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    //res.concat(`${arr[i]} oC in ${i} days...`);
    res += `... ${arr[i]}oC in day ${i + 1}`;
    //console.log(`${i}`);
  }
  return res;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));
