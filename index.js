
const salary2021 = [1980.00, 2050.00, 3045.50, 1050.00, 4678.90, 2800.00, 2699.50];

const salary2022 = [];

salary2021.forEach(
    (salary)=>{
        salary2022.push((salary* 1.04));
    }

);

console.log(salary2021);
console.log(salary2022);