// AUFGABE TEIL 1
const salary2021 = [1980.00, 2050.00, 3045.50, 1050.00, 4678.90, 2800.00, 2699.50];

// AUFGABE TEIL 2
let salary2022 = [];

// AUFGABE TEIL 3
let gehalt = 1.04;
salary2021.forEach(
    (gehaltSalary2021) => {
        salary2022.push((gehalt * gehaltSalary2021).toFixed(2));
        
    }
);
//  AUFGABE TEIL 4
 console.log("salary2021:" , `${salary2021}`);
 console.log(" salary2022:", `${salary2022}`);
