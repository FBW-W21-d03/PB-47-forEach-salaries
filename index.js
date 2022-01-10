"use strict";

const salary2021 = [1980.0, 2050.0, 3045.5, 1050.0, 4678.9, 2800.0, 2699.5];

/*
let gehalt = 4;
const salary2022 = [];
function gehalt(salary2022) {
  salary2022.push(salary2022);
  return salary2022.length;
}

salary2021.forEach((gehalt) => {
  gehalt = gehalt + salary2021;
  console.log("gehalt", gehalt + salary2021);
});
*/

let salary2022 = [];
console.log(salary2022);

salary2021.forEach((salary) => {
  salary2022.push((salary * 1.04).toFixed(2));

  console.log(salary2022);
});
