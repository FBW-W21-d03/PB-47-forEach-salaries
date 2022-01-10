console.log("Aufgabe 1 salary 2021 ");
const salary2021 = [1980.0, 2050.0, 3045.5, 1050.0, 4678.9, 2800.0, 2699.5];
console.log(salary2021);



const salary2022 = [];
console.log("Aufgabe 2 : \n", salary2022);
salary2021.forEach((salary) => {
    salary2022.push((salary * 1.04).toFixed(2));
})

console.log("Aufgabe 3 salary 2022 \n", salary2022);


console.log(
  "Aufgabe 4: \n" +
    "salary 2021\n" +
    salary2021 +
    "\n salary 2022\n" +
    salary2022
);