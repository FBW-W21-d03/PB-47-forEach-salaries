const salary2021 = [1980.0, 2050.0, 3045.5, 1050.0, 4678.9, 2800.0, 2699.5];
const salary2022 = [];

salary2021.forEach((gehalt) => {
  let neuesGehalt = gehalt + (gehalt * 4) / 100;
  // das Gleiche wie: gehalt * 1.04
  salary2022.push(neuesGehalt.toFixed(2));
  // toFixed(2) um auf 2 Stellen nach dem Komma zu runden
});

console.log("Gehälter 2021:", salary2021);
console.log("Gehälter 2022:", salary2022);
