const salary2021 = [1980.00, 2050.00, 3045.50, 1050.00, 4678.90, 2800.00, 2699.50];

const salary2022 = [];


salary2021.forEach (
    (oldsalary) => {
            salary2022.push (4/100*oldsalary +oldsalary);
           
           
    }
);
let results = salary2022.join();

console.log("Salary for 2022 ist", results);