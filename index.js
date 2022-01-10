let salary2021 = [1980.0, 2050.0, 3045.5, 1050.0, 4678.9, 2800.0, 2699.5];
salary2021.sort();
let salary2022 = [];
salary2022.sort();
salary2021.forEach((newGehalt) => {
  salary2022 = salary2022 + salary2021;
  console.log("Haben sich die Gehälter von 2021 zu 2022 erhöht:",newGehalt * 1.04,"€");

 
});
